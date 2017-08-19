import React from 'react'

export let Message = ({author,msg,date})=>
    <div >
        <li>
            <div>
            <span style={{color:'#0ff404'}}><b>{`${author}: `}</b></span>
            <span>{msg}</span>
            </div>
            <span>{date}</span>
        </li>
    </div>
