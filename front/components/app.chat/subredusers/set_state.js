import {GET_REQUEST,SET_LOGIN}from'../actions'

export  function getRequest(state,action){
    switch(action.type){
        case GET_REQUEST:
        return !state
        default: return state
    }
}
export  function setLogin(state,action){
    switch(action.type){
        case SET_LOGIN:
        return !state
        default: return state
    }
}