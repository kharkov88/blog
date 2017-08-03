import {SEND_MSG,UPDATE_HISTORY}from'../actions'

export default function sendMsg(state=[],action){
    switch(action.type){
        case SEND_MSG:
            return [
                ...state,
                {
                    author:action.author,
                    msg:action.msg,
                    date:action.date
                }]
            case UPDATE_HISTORY:
            return action.messages
            
        default: return state
    }
    
}