import React from 'react'

export let Footer = ({user,actions})=>{
let message='';
function clickSend(user,msg,actions){
    if(msg.trim()==0)return
    actions.sendMsg(user.name,msg)
    message.value=''
}
return(
    <div>
        <label htmlFor="inputsm">Message:</label>
        <form className="app-chat-box">
            <input ref={input=>message=input} className="app-chat-input form-control input-sm"
             id="inputsm" type="text" placeholder="Пиши и жми enter"/>
             <input type="submit" style={{display:'none'}} onClick={(e)=>{
                 e.preventDefault();
                 clickSend(user,message.value,actions)
                 }}/>        
        </form>
    </div>
)}


