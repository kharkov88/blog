import {USER}from'../actions'

export default function updateUser(state={},action){
    switch(action.type){
        case USER:    
        return {
            user:{
                name:action.name,
                css_map:action.css_map,
                id:action.id
                } 
        }
        default:return state
    }
}