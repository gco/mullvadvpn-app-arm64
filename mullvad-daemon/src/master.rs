use chrono::DateTime;
use chrono::offset::Utc;
use jsonrpc_client_http::{Error as HttpError, HttpHandle, HttpTransport};

use mullvad_types::account::AccountToken;

static MASTER_API_URI: &str = "https://api.mullvad.net/rpc/";

pub fn create_account_proxy() -> Result<AccountsProxy<HttpHandle>, HttpError> {
    let transport = HttpTransport::new()?.handle(MASTER_API_URI)?;
    Ok(AccountsProxy::new(transport))
}

jsonrpc_client!(pub struct AccountsProxy {
    pub fn get_expiry(&mut self, account_token: AccountToken) -> RpcRequest<DateTime<Utc>>;
});
