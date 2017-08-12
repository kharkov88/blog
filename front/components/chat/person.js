import React from'react'
import {selectPerson}from'../../redux_store/actions'
import app_chat from'../../controller/app.chat'

export let Li = ({person,id,dispatch})=>{
    let color = person.selected?'app-chat-person-select':''
    return <div>
    
        <li  onClick={()=>{handleClicking(id,dispatch)}}>
            <span className={`app-chat-avatar ${color}`}>{person.name.substr(0,1).toUpperCase()}</span>
            {person.name}
            </li>
    </div>
}

function handleClicking(id,dispatch) {
    //$('.app-chat-window').show(500);
    dispatch(selectPerson(id))
}
