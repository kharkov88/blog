export const  SEND_MSG = "SEND_MSG";

export function sendMsg(author,msg){
    return{
        type: "SEND_MSG",
        author,
        msg,
        date:new Date().toTimeString().substring(0,8)
    }
}