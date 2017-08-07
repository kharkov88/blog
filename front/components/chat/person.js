import React from'react'
import {selectPerson}from'../../redux_store/actions'

export let Li = ({person,id,dispatch})=>{
    console.log("per_sel",person.selected)
    let color = person.selected?'app-chat-person-select':''
    return <div>
    
        <li  onClick={()=>{handleClicking(id,dispatch)}}>
            <span className={`app-chat-avatar ${color}`}>A</span>
            {person.name}
            </li>
    </div>
}

function handleClicking(id,dispatch) {
    $('.app-chat-window').show(200);
    dispatch(selectPerson(id))
}
