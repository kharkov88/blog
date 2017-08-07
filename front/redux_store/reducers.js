import {LOG_IN_OUT,AUTO_ZATION,GET_PPL,SELECT_PERSON} from'./actions'
let init = {
        user:{},
        state_user:false,
        peopls:[],
        friend_for_chatting:{name:''}
    }
export function reducer(state=init,action){

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
            let arr_ppl=[];
            let obj=Object.assign({},state,{peopls:state.peopls.map(item=>item)})
            arr_ppl=obj.peopls
            
            // for(let i=0;i<arr_ppl.length;i++){
            //     if(arr_ppl[i].id===action.id){arr_ppl[i].selected=true}
            //     else arr_ppl[i].selected=false
            // }
            // console.log('arr:',arr_ppl)
            //  console.log('stete_ppl:',state.peopls)
             //return state
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
                    
                })
            })
        default:return state
    }
}
