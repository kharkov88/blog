import * as React from'react'
import {connect} from'react-redux'
import {deleteComment,filterName,filtering}from'../actions'

export let Footer = ({dispatch})=>{
    let filter;
    return(
    <div>
        <div className="footer">
            <input ref={input=>filter=input} type="text"placeholder="filter of name" className="form-control input-sm"
            onChange={()=>dispatch(filtering(filter.value))}/>
            <button onClick={()=>{dispatch(deleteComment())}} className="btn-delete btn btn-warning btn-xs">delete</button></div>
    </div>
    )
}
Footer=connect()(Footer)