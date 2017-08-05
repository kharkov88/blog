import React from 'react'
import {Book} from './chat_msgs'
import {Footer} from './footer'
//import './app_chat.css'

export const App = ()=>
     <div className="app-chat" >
        <div className="app-chat-header">
            <p>chat</p>
        </div>
        
            <div className="form-group">      
                <Book/>
                <Footer/>
            </div>
       
    </div>
