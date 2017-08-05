import {connect}from'react-redux'
import {Chat} from'../components'
const convertStateToProps = function (state){
//return simple object    
    return {
        state_user:state.state_user,
        user:state.user.name
    }
}
export const ConnectChat = connect(convertStateToProps)(Chat)