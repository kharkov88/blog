import {connect}from'react-redux'
import {bindActionCreators} from'redux'
import {CommentForm} from'../components/commentForm'
import * as actions from '../actions'

const mapDispatchToProps = function (dispatch){  
    return {
        actions: bindActionCreators(actions,dispatch)
    }
}

const Form = connect(
    null,
    mapDispatchToProps
)(CommentForm)
export default Form