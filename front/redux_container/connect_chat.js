import {connect}from'react-redux'
import {Chat} from'../components'
const convertStateToProps = function (state){
//return simple object    
    return {
        state_user:state.state_user,
        user:state.user,
        peopls:state.peopls,
        frend:state.frend_for_chatting,
        history:state.history,
        chat:state.chat,
        dispatch:state.dispatch
    }
}
export const ConnectChat = connect(convertStateToProps)(Chat)

export const Chatee = ()=> <ConnectChat/>