package net.mullvad.mullvadvpn.service

import android.content.Intent
import android.graphics.drawable.Icon
import android.os.Build
import android.service.quicksettings.Tile
import android.service.quicksettings.TileService
import kotlin.properties.Delegates.observable
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.cancel
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.flow.debounce
import kotlinx.coroutines.launch
import net.mullvad.mullvadvpn.R
import net.mullvad.mullvadvpn.ipc.ServiceConnection
import net.mullvad.mullvadvpn.model.ServiceResult
import net.mullvad.mullvadvpn.model.TunnelState
import net.mullvad.talpid.tunnel.ActionAfterDisconnect

class MullvadTileService : TileService() {
    private var secured by observable(false) { _, _, _ ->
        updateTileState()
    }

    private lateinit var scope: CoroutineScope

    private lateinit var securedIcon: Icon
    private lateinit var unsecuredIcon: Icon

    override fun onCreate() {
        super.onCreate()

        securedIcon = Icon.createWithResource(this, R.drawable.small_logo_white)
        unsecuredIcon = Icon.createWithResource(this, R.drawable.small_logo_black)
    }

    override fun onStartListening() {
        super.onStartListening()

        scope = MainScope()

        scope.launch { listenToTunnelState() }
    }

    override fun onClick() {
        super.onClick()

        val intent = Intent(this, MullvadVpnService::class.java)

        if (secured) {
            intent.action = MullvadVpnService.KEY_DISCONNECT_ACTION
            startService(intent)
        } else {
            intent.action = MullvadVpnService.KEY_CONNECT_ACTION
            startForegroundService(intent)
        }
    }

    override fun onStopListening() {
        scope.cancel()
        super.onStopListening()
    }

    @OptIn(FlowPreview::class)
    private suspend fun listenToTunnelState() {
        ServiceConnection(this@MullvadTileService, scope)
            .tunnelState
            .debounce(300L)
            .collect { updateTunnelState(it.first, it.second) }
    }

    private fun updateTunnelState(
        tunnelState: TunnelState,
        connectionState: ServiceResult.ConnectionState
    ) {
        secured = if (connectionState == ServiceResult.ConnectionState.CONNECTED) {
            when (tunnelState) {
                is TunnelState.Disconnected -> false
                is TunnelState.Connecting -> true
                is TunnelState.Connected -> true
                is TunnelState.Disconnecting -> {
                    tunnelState.actionAfterDisconnect == ActionAfterDisconnect.Reconnect
                }
                is TunnelState.Error -> tunnelState.errorState.isBlocking
            }
        } else {
            false
        }
    }

    private fun updateTileState() {
        qsTile?.apply {
            if (secured) {
                state = Tile.STATE_ACTIVE
                icon = securedIcon

                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                    subtitle = resources.getText(R.string.secured)
                }
            } else {
                state = Tile.STATE_INACTIVE
                icon = unsecuredIcon

                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                    subtitle = resources.getText(R.string.unsecured)
                }
            }

            updateTile()
        }
    }
}
