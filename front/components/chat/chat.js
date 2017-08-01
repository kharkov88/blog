import React from'react'
import './app.chat.css'

export const Chat = ()=>
    <div className="app-chat" >
        <div className="app-chat-header">
            <p>chat</p>
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
    </div>
