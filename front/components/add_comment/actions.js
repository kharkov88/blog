export const ADD_COMMENT="ADD_COMMENT"
export const CHECK="CHECK"
export const DELETE_COMMENT="DELETE_COMMENT"
export const FILTER_NAME="FILTER_NAME"
export const FILTERING="FILTERING"

export function addComment(name,text){
    return {
        type:ADD_COMMENT,
        author:name,
        text:text,
        date:new Date().toTimeString().substring(0,8),
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