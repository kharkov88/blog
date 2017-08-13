export const ADD_COMMENT="ADD_COMMENT"
export const CHECK="CHECK"
export const DELETE_COMMENT="DELETE_COMMENT"
export const FILTER_NAME="FILTER_NAME"
export const FILTERING="FILTERING"

export function addComment(name,text,date){
    return {
        type:ADD_COMMENT,
        author:name,
        text:text,
        date:date,
        passedFiltering:true
    }
}
export function changeCheck(index){
    return{
        type:CHECK,
        index
    }
}
export function deleteComment(){
    return{
        type:DELETE_COMMENT
    }
}
export function filterName(filter){
    return{
        type:FILTER_NAME,
        filter
    }
}
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