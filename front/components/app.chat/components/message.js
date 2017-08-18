import React from 'react'

export let Message = ({author,msg,date})=>
    <div >
        <li>
            <span>{author}</span>
            <span>{msg}</span>
            <span>{date}</span>
        </li>
    </div>
