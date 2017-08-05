import {connect}from'react-redux'
import {Header} from'../components'

const convertStateToProps = function (state){
//return simple object    
    return {
        state_user:state.state_user
    }
}
export const HeaderMenu = connect(convertStateToProps)(Header)
