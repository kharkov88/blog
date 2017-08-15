export const ADD_COMMENT="ADD_COMMENT"
export function addComment(name,text,date){
    return {
        type:ADD_COMMENT,
        author:name,
        text:text,
        date:date,
        passedFiltering:true
    }
}

export const CHECK="CHECK"
export function changeCheck(index){
    return{
        type:CHECK,
        index
    }
}

export const DELETE_COMMENT="DELETE_COMMENT"
export function deleteComment(){
    return{
        type:DELETE_COMMENT
    }
}

export const FILTER_NAME="FILTER_NAME"
export function filterName(filter){
    return{
        type:FILTER_NAME,
        filter
    }
}
export const FILTERING="FILTERING"
export function filtering(filter){
    return{
        type:FILTERING,
        filter
    }
}
export const CLEAR = 'CLEAR'
export function clearComments(){
    return{
        type:CLEAR
    }
}
export const VISIBLE = 'VISIBLE'
export function toggleVisible(){
    return{
        type:VISIBLE
    }
}
export const GET_REQUEST = 'GET_REQUEST'
export function getRequst(){
    return {
        type:GET_REQUEST
    }
}
export const GET_COMMENTS = 'GET_COMMENTS'
export function getComments(author,comment){
    return dispatch => {
        dispatch({
            type:GET_REQUEST
        })
        fetch('/newcomment',{
            method:'post',
            headers:{"Content-type": 'application/json; charset=utf-8'},
            body:JSON.stringify({author,comment})
        })
        .then(response=>{
            response.json().then(data=>{
                let answer = JSON.parse(data)
                setTimeout(()=>{
                dispatch(clearComments())
                answer.map(item=>dispatch(addComment(item.author,item.comment,item.date)))
                dispatch(getRequst())
                },3500)
                
            })          
        }) 
    }
}