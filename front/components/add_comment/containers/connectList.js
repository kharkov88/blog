import {connect}from'react-redux'
import {bindActionCreators}from'redux'
import * as actions from '../actions'
import CommentList from'../components/commentList'

const convertStateToProps = function (state){
//return simple object    
    return {
        comment:state.comments,
        visible:state.visible,
        fetching:state.fetching
    }
}
const mapDispatchToProps = function (dispatch){  
    return {
        actions: bindActionCreators(actions,dispatch)
    }
}
const Comments= connect(
    convertStateToProps,
    mapDispatchToProps
)(CommentList)

export default Comments