export const SET_USER = 'SET_USER'
export function setUser(obj){
    return{
        type:SET_USER,
        name:obj.name,
        id:obj.id
    }
}
export const SET_LOGIN = 'SET_LOGIN'
export function setLogin(){
    return {
        type:SET_LOGIN
    }
}
export const GET_REQUEST = 'GET_REQUEST'
export function getRequst(){
    return {
        type:GET_REQUEST
    }
}
export function userTyping(user){
    return (dispatch) =>{
        fetch('/typing',{    
            method:'post',
            headers:{"Content-type": 'application/json; charset=utf-8'},
            body:JSON.stringify({user:user})
        })
    }
}
export function logining(name){
    return (dispatch) => {
        dispatch(getRequst());   // 1
        fetch('/autorization',{    // 2
            method:'post',
            headers:{"Content-type": 'application/json; charset=utf-8'},
            body:JSON.stringify({name})
        })
        .then(response=>{
            response.json().then(data=>{
                let answer = JSON.parse(data)
                setTimeout(()=>{
                //dispatch(clearComments())  // 3
                //answer.map(item=>dispatch(addComment(item.author,item.comment,item.date))) // -4
                dispatch(getRequst())      // 5
                dispatch(setUser({name:answer.user.name,id:answer.user._id}))
                dispatch(setLogin())
                },500)          
            })          
        }) 
    }
}
export function logouting(name){
    return (dispatch) => {
        dispatch(setLogin());  
        // fetch('/autorization',{    // 2
        //     method:'post',
        //     headers:{"Content-type": 'application/json; charset=utf-8'},
        //     body:JSON.stringify({name})
        // })
        // .then(response=>{
        //     response.json().then(data=>{
        //         let answer = JSON.parse(data)
        //         setTimeout(()=>{
        //         //dispatch(clearComments())  // 3
        //         //answer.map(item=>dispatch(addComment(item.author,item.comment,item.date))) // -4
        //         dispatch(getRequst())      // 5
        //         dispatch(setUser({name}))
        //         dispatch(setLogin())
        //         },3500)          
        //     })          
        // }) 
    }
}

export  const   SEND_MSG = "SEND_MSG"
export function sendMsg(author,msg){
    return (dispatch)=>{
        fetch('/new-message',{    
            method:'post',
            headers:{"Content-type": 'application/json; charset=utf-8'},
            body:JSON.stringify({userName:author,frendName:'',userMsg:msg})
        })
        .then(response=>{
                    response.json().then(obj=>{
                        //dispatch(updateHistory(JSON.parse(obj)))
                    })
                })
    }
}

export const UPDATE_HISTORY = "UPDATE_HISTORY"
export function updateHistory(obj){
    return{
        type: "UPDATE_HISTORY",
        author:obj.author,
        msg:obj.msg,
        date:obj.data
    }
}