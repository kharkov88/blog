import {SEND_MSG}from'../actions'

export default function sendMsg(state=[],action){
    if(action.type=='SEND_MSG'){
        return [
            ...state,
            {
                author:action.author,
                msg:action.msg,
                date:action.date
            }
        ]
    }
    return state
}