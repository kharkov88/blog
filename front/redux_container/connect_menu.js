import {connect}from'react-redux'
import {Header} from'../components'

const convertStateToProps = function (state){
//return simple object    
    return {
        _state:state
    }
}
export const HeaderMenu = connect(convertStateToProps)(Header)
