import {connect}from'react-redux'
import {Chat} from'../components'
const convertStateToProps = function (state){
//return simple object    
    return {
        state_user:state.state_user,
        user:state.user.name,
        peopls:state.peopls,
        friend:state.friend_for_chatting,
        dispatch:state.dispatch
    }
}
export const ConnectChat = connect(convertStateToProps)(Chat)