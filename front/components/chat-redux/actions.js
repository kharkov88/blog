export const USER = 'USER'
export function updateUser(obj){
    return{
        type:LOGIN,
        name:obj.name,
        css_map:obj.css_map,
        id:obj.id
    }
}

export  const   SEND_MSG = "SEND_MSG"
export function sendMsg(author,msg){
    return{
        type: "SEND_MSG",
        author,
        msg,
        date:new Date().toTimeString().substring(0,8)
    }
}

export const UPDATE_HISTORY = "UPDATE_HISTORY"
export function updateHistory(messages){
    return{
        type: "UPDATE_HISTORY",
        messages
    }
}