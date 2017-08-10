export const LOG_IN_OUT = 'LOGIN_IN_OUT'
export function changeLogin(obj){
    return{
        type:LOG_IN_OUT,
        name:obj.name,
        css_map:obj.css_map,
        id:obj.id
    }
}

export const AUTO_ZATION = "AUTO_ZATION"
export function autorization(status){
    return{
        type:AUTO_ZATION,
        status
    }
}
export const GET_PPL = "GET_PPL"
export function getListPpl(data){
    return{
        type:GET_PPL,
        data
    }
}

export const SELECT_PERSON = 'SELECT_PERSON'
export function selectPerson(id){
    return{
        type:SELECT_PERSON,
        id
    }
}

export const UPDATE_CHAT = 'UPDATE_CHAT'
export function updateChat(history){
    return {
        type:UPDATE_CHAT,
        history
    }
}
export const NEW_MASSAGE = 'NEW_MASSAGE'
export function addMessage(obj){
    return {
        type:NEW_MASSAGE,
        obj
    }
}