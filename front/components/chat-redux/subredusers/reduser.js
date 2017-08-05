import sendMsg from'./send'
import updateUser from'./user'

export function reduser(state={user:{}},action){
    return {
        user:updateUser(state.user,action),
        message:sendMsg(state.message,action)
    }
}