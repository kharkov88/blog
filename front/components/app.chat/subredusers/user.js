import {SET_USER}from'../actions'

export  function setUser(state={},action){
    switch(action.type){
        case SET_USER:    
        return {
                name:action.name,
                id:action.id
        }
        default:return state
    }
}