import { createViewStyles, createTextStyles } from '../lib/styles';

export default Object.assign(createViewStyles({
  support:{
    backgroundColor: '#192E45',
    height: '100%',
  },
  support__container:{
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  support__header:{
    flex: 0,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 24,
    paddingRight: 24,
    overflow: 'visible',
    position: 'relative' /* anchor for close button */
  },
  support__close:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 12,
  },
  support__close_icon:{
    width: 24,
    height: 24,
    flex: 0,
    opacity: 0.6,
    marginRight: 8,
  },
  support__content:{
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 24,
  },
  support__form:{
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  support__form_row:{
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 24,
    paddingRight: 24,
  },
  support__form_row_message:{
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: 8,
  },
  support__form_message_scroll_wrap:{
    flex: 1,
    display: 'flex',
    borderRadius: 4,
    overflow: 'hidden',
  },
  support__footer:{
    paddingTop: 1,
    paddingRight: 24,
    paddingLeft: 24,
    paddingBottom: 24,
    marginTop: 12,
    display: 'flex',
    flexDirection: 'column',
    flex: 0,
  },
  support__form_view_logs:{
    backgroundColor: 'rgba(41,71,115,1)',
    color: 'rgba(255,255,255,0.8)',
    paddingTop: 7,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 9,
    borderRadius: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  support__form_edit_logs:{
    backgroundColor: 'rgba(41,71,115,1)',
    color: 'rgba(255,255,255,0.8)',
    paddingTop: 7,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 9,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  support__form_send:{
    backgroundColor: 'rgba(63,173,77,1)',
    color: 'rgba(255,255,255,0.8)',
    paddingTop: 7,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 9,
    borderRadius: 4,
    marginTop: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  support__status_icon:{
    textAlign: 'center',
    marginBottom: 32,
  },
  support__open_icon:{
    color: 'rgba(255,255,255,0.8)',
    marginLeft: 8,
    width: 16,
    height: 16,
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto',
    alignItems: 'flex-end',
  },
}), createTextStyles({
  support__close_title:{
    fontFamily: 'Open Sans',
    fontSize: 13,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.6)',
  },
  support__title:{
    fontFamily: 'DINPro',
    fontSize: 32,
    fontWeight: '900',
    lineHeight: 40,
    color: '#FFFFFF',
    marginBottom: 16,
  },
  support__subtitle:{
    fontFamily: 'Open Sans',
    fontSize: 13,
    fontWeight: '600',
    overflow: 'visible',
    color: 'rgba(255,255,255,0.8)',
    lineHeight: 20,
    letterSpacing: -0.2,
  },
  support__form_email:{
    width: '100%',
    borderRadius: 4,
    overflow: 'hidden',
    paddingTop: 10,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 12,
    fontFamily: 'Open Sans',
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 26,
    color: '#294D73',
    backgroundColor: '#fff',
  },
  support__form_message:{
    paddingTop: 10,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 10,
    fontFamily: 'Open Sans',
    fontSize: 13,
    fontWeight: '600',
    color: '#294D73',
    backgroundColor: '#fff',
    flex: 1,
  },
  support__sent_email:{
    fontWeight: '900',
    color: 'white',
  },
  support__status_security__secure:{
    fontFamily: 'Open Sans',
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 22,
    marginBottom: 4,
    color: '#44AD4D',
  },
  support__send_status:{
    fontFamily: 'DINPro',
    fontSize: 38,
    fontWeight: '900',
    maxHeight: 'calc(1.16em * 2)',
    overflow: 'visible',
    letterSpacing: -0.9,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  support__button_label:{
    fontFamily: 'DINPro',
    fontSize: 20,
    fontWeight: '900',
    lineHeight: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  support__no_email_warning: {
    fontFamily: 'Open Sans',
    fontSize: 13,
    lineHeight: 16,

    color: 'rgba(255,255,255,0.8)',
  },
}));
