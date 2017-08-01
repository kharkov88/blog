import sendMsg from'./send'

export function reduser(state={},action){
    return {
        message:sendMsg(state.message,action)
    }
}