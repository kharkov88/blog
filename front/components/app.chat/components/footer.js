import React from 'react'

export let Footer = ({user,actions,socket})=>{
let message='';
function clickSend(user,msg,actions,socket){
    if(msg.trim()==0)return
    socket.json.send({
        "event":"new_msg",
        "user":user.name,
        "msg":message.value
    })
    //actions.sendMsg(user.name,msg)
    message.value=''
}
function imTyping(user){
    actions.userTyping(user)
}
return(
    <div>
        <label htmlFor="inputsm">Message:</label>
        <form className="app-chat-box">
            <input ref={input=>message=input} className="app-chat-input form-control input-sm"
             id="inputsm" type="text" placeholder="Пиши и жми enter" 
             onChange={()=>socket.json.send({
                     "event":"typing",
                     "user":user.name                     
                 })}/>
             <input type="submit" style={{display:'none'}} onClick={(e)=>{
                 e.preventDefault();
                 clickSend(user,message.value,actions,socket)
                 }}/>        
        </form>
    </div>
)}


