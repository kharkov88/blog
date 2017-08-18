import {connect}from'react-redux'
import {bindActionCreators} from'redux'
import * as actions from '../actions'
import {Header} from'../components'

const mapStateToProps = function (state){  
    return  {
        _state:{
            user:state.user,
            fetching:state.fetching,
            login:state.login,
            guest:state.guest
        }
    }
}
const mapDispatchToProps = function (dispatch){  
    return  {
        actions:bindActionCreators(actions,dispatch)
    }
}
export const ConnectHeader = connect(mapStateToProps,mapDispatchToProps)(Header)