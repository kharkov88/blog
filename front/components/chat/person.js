import React from'react'
import {selectPerson}from'../../redux_store/actions'

export let Li = ({person,selected,name,id,dispatch,handleClick})=>{
    console.log("per_sel",person.selected)
    let color = person.selected?'app-chat-person-select':''
    return <li className={color} onClick={()=>{handleClicking(id,dispatch)}}>{person.name}</li>
}

function handleClicking(id,dispatch) {
    $('.app-chat-window').show(200);
    dispatch(selectPerson(id))
}
