import {LOGIN,AUTO_ZATION,GET_PPL} from'./actions'

export function reducer(state={user:{},state_user:false,peopls:[]},action){
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
        case GET_PPL:
            return Object.assign({},state,{
                peopls:action.data
            })
        default:return state
    }
}