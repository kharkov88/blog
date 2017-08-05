export const LOGIN = 'LOGIN'
export function tryLogin(obj){
    return{
        type:LOGIN,
        name:obj.name,
        css_map:obj.css_map,
        id:obj.id
    }
}

export const AUTO_ZATION = "AUTO_ZATION"
export function autorization(){
    return{
        type:AUTO_ZATION
    }

}