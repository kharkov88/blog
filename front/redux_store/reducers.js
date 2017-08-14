import {LOG_IN_OUT,AUTO_ZATION,GET_PPL,
        NEW_MASSAGE,SELECT_PERSON,UPDATE_CHAT} from'./actions'
let init = {
        user:{},
        state_user:false,
        peopls:[],
        frend_for_chatting:{name:'',id:''},
        history:[],
        chat:[]
    }
export function reducer(state=init,action){

    switch(action.type){
        case LOG_IN_OUT:
            return Object.assign({},state,{
                user:{
                name:action.name,
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
            return Object.assign({},state,{      
                peopls:state.peopls.map(item=>{
                    if(item.id===action.id){
                        for(let key in item){
                            if(key==='selected')item[key]=true
                        }
                        return item
                    }
                    else{
                        for(let key in item){
                            if(key==='selected')item[key]=false
                        }
                        return item
                    }
                    
                }),
                frend_for_chatting : {
                    id:state.peopls.filter(item=>item.selected==true)[0].id,
                    name:state.peopls.filter(item=>item.selected==true)[0].name
                }
            })
            case UPDATE_CHAT:
                console.log("store:",state)
                return Object.assign({},state,{history:action.history})
            case NEW_MASSAGE:
                return Object.assign({},state,{
                    chat:[...state.chat,
                        {
                        author:action.obj.author,
                        msg:action.obj.msg,
                        frendy:action.obj.frendy,
                        date:action.obj.date
                        }
                    ]})
        default:return state
    }
}
