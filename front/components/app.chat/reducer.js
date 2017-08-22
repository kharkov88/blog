import {getRequest, setUser,historyChat,setLogin} from'./subredusers'
const random = Math.floor(Math.random()*1000)
const initState = {
    user:{name:`guest_${random}`,id:`id_g${random}`},
    fetching: false ,
    login:false,
    guest:{name:`guest_${random}`,id:`id_g${random}`},
    app_mobile:false
}
let setVersion = (state,action)=>{
   return state = window.innerWidth<1200?true:false
}
export function reducer(state=initState,action){
    return {
        user:setUser(state.user,action),
        fetching:getRequest(state.fetching,action),
        message:historyChat(state.message,action),
        login:setLogin(state.login,action),
        guest:initState.guest,
        app_mobile:setVersion(state.app_mobile,action)
    }
}