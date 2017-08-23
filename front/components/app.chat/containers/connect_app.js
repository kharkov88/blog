import {connect}from'react-redux'
import {bindActionCreators} from'redux'
import * as actions from '../actions'
import {App} from'../app_chat'

const mapStateToProps = function (state){  
    return  {
        _state:{
            user:state.user
        }
    }
}
const mapDispatchToProps = function (dispatch){  
    return  {
        actions:bindActionCreators(actions,dispatch)
    }
}
export const ConnectApp = connect(mapStateToProps,mapDispatchToProps)(App)