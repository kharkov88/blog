import React from'react'
import './app.chat.css'

export const Chat = ({state_user,user})=>{
    console.log(state_user)
    let visible = state_user?'block':'none'
    return(
    <div className="app-chat" style={{display:visible}}>
        <div className="app-chat-header">
            <p>Hi {user}!</p>
        </div>
        <form>
        <div className="form-group">      
            <div className="app-chat-msgs"></div>
            <label htmlFor="inputsm">Message:</label>
            <div className="app-chat-box">
                <input className="app-chat-input form-control" id="inputsm" type="text"/>
                <button className="btn btn-primary">send</button>
            </div>
        </div>
        </form>  
    </div>)
}
