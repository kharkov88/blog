import {connect}from'react-redux'
import {Content} from'../components'
const mapStateToProps = function (state){  
    return  {
        message:state.message
    }
}
export const ConnectContent = connect(mapStateToProps)(Content)