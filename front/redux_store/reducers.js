import {LOG_IN_OUT,AUTO_ZATION,GET_PPL,SELECT_PERSON} from'./actions'

export function reducer(state={user:{},state_user:false,peopls:[],friend_for_chatting:{nama:''}},action){
    switch(action.type){
        case LOG_IN_OUT:
            return Object.assign({},state,{
                user:{
                name:action.name,
                css_map:action.css_map,
                id:action.id
                }
            })
        case AUTO_ZATION:
            return Object.assign({},state,{
                state_user:action.status
            })
        case GET_PPL:
            return Object.assign({},state,{
                peopls:action.data
            })
        case SELECT_PERSON:
            let ppls = state.peopls
            for(let i=0;i<ppls.length;i++){
                if(ppls[i].id===action.id){ppls[i].selected=true}
                else ppls[i].selected=false
            }        
            return Object.assign({},state,{
                peopls:state.peopls.map(item=>{
                    if(item.id===action.id)return{
                        name:item.name,
                        id:item.id,
                        selected:true
                    }
                    return item
                })
            })
        default:return state
    }
}