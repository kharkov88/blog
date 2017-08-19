import React from 'react'

export let Point = ({img,callback,children})=>{
    return (
        <div onClick={()=>callback(img)}>
            {children}
        </div>
    )
}