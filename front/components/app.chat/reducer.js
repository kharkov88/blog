import {getRequest, setUser,historyChat,setLogin} from'./subredusers'
const random = Math.floor(Math.random()*1000)
const initState = {
    user:{name:`guest_${random}`,id:`id_g${random}`},
    fetching: false ,
    login:false,
    guest:{name:`guest_${random}`,id:`id_g${random}`}
}
export function reducer(state=initState,action){
    return {
        user:setUser(state.user,action),
        fetching:getRequest(state.fetching,action),
        message:historyChat(state.message,action),
        login:setLogin(state.login,action),
        guest:initState.guest
    }
}