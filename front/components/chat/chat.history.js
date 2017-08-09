import React from'react'

export let WindowChat = ({chat_history})=>{
    return(
        <div>
            {chat_history.map((item,index)=>{
                        return <div style={{color:'grey'}}key={index}>{`From: ${item.from}: ${item.message}   ${item.data}`}</div>
                    })}
        </div>
    )
}