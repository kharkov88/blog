import {LOGIN,AUTO_ZATION} from'./actions'

export function reducer(state={user:{},state_user:false},action){
    switch(action.type){
        case LOGIN:
            return Object.assign({},state,{
                user:{
                name:action.name,
                css_map:action.css_map,
                id:action.id
                }
            })
        case AUTO_ZATION:
            return Object.assign({},state,{
                state_user:!state.state_user
            })
        default:return state
    }
}