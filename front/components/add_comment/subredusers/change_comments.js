import {ADD_COMMENT,CHECK,DELETE_COMMENT,FILTERING} from'../actions'
let id=0;

export default function changeComments(state=[],action){
    switch(action.type){
        case ADD_COMMENT:
        return [
            ...state,
            {
                author:action.author,
                comment:action.text,
                date:action.date,
                id:id++,
                check:false,
                passedFiltering:action.passedFiltering
            }]
        case DELETE_COMMENT:
        return state.filter((item)=>{return item.check==false})

        case CHECK:
        return state.map((item,index)=>{
                     if(item.id===action.index){
                        return  Object.assign({},item,{check:!item.check})
                        }
                        return item
                    })
        case FILTERING:
        return state.map(item=>{
            return Object.assign({},item,{passedFiltering:
                (item.author.indexOf(action.filter)===-1)?false:true})
        })

        default:return state
    }
}
