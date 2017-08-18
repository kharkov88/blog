import {connect}from'react-redux'
import {bindActionCreators} from'redux'
import * as actions from '../actions'
import {Footer} from'../components'

const mapStateToProps = function (state){  
    return{
        user:state.user
    }
}
const mapDispatchToProps = function (dispatch){  
    return  {
        actions:bindActionCreators(actions,dispatch)
    }
}
export const ConnectFooter = connect(mapStateToProps,mapDispatchToProps)(Footer)