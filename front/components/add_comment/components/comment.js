import React from 'react'
import {connect} from'react-redux'
import {changeCheck}from'../actions'

let check

let Comment= ({check,id,dispatch,author,comment,date})=>{
    return (
        <div >
        <li className="commentDiv">
            <div style={{color:"green",width:"100px"}}><b>{author}:</b></div>
            <div style={{color:"red",marginRight:"10px",textAlign:"left"}}>{comment}</div>
            <div>
            <span style={{marginRight:"15px"}}>{date}</span>
            <input ref={input=>check=input} type="checkbox" checked={check} onChange={()=>{
                dispatch(changeCheck(id))
            }}/>
            </div>
        </li>
        </div>
    )
}

Comment = connect()(Comment)
export default Comment