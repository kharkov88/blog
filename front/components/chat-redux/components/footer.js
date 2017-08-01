import React from 'react'
import {connect} from'react-redux'
import {sendMsg} from '../actions'

export let Footer = ({dispatch})=>{
let inputValue='';
return(
    <div>
        <label htmlFor="inputsm">Message:</label>
        <div className="app-chat-box">
            <input ref={input=>inputValue=input} className="app-chat-input form-control" id="inputsm" type="text"/>
            <button className="btn btn-primary" 
            onClick={(e)=>{
                dispatch(sendMsg('Anonim',inputValue.value))
                inputValue.value='';
                e.stopPropagation();
                }}> send
            </button>
        </div>
    </div>
)}
Footer=connect()(Footer)