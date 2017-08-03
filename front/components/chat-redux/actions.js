export  const   SEND_MSG = "SEND_MSG",
                UPDATE_HISTORY = "UPDATE_HISTORY"

export function sendMsg(author,msg){
    return{
        type: "SEND_MSG",
        author,
        msg,
        date:new Date().toTimeString().substring(0,8)
    }
}

export function updateHistory(messages){
    return{
        type: "UPDATE_HISTORY",
        messages
    }
}