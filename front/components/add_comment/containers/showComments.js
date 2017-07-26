import {connect}from'react-redux'
import CommentList from'../components/commentList'

const convertStateToProps = function (state){
//return simple object    
    return {
        comment:state.comments
    }
}
const ShowComments= connect(
    convertStateToProps
)(CommentList)

export default ShowComments