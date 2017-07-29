import React from'react'
import './chat.css'

export const Chat = ()=>
    <div className="chat" >
        <p>chat</p>
        <form>
        <div className="form-group">
            
            <p><iframe className="output" name="output" ></iframe></p>
            <label htmlFor="inputsm">Message:</label>
            <input className="form-control input-sm" id="inputsm" type="text"/>
        </div>
        </form>  
    </div>
