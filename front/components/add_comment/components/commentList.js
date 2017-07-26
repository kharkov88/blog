import React from 'react'
import Comment from './comment'
import {connect} from'react-redux'
import {deleteComment,filterName,filtering}from'../actions'

const CommnetList= ({dispatch,comment})=>{
    //console.log("props commnent:",comment)
    let text,button,filter;
    if(comment.length==0){
        text=''; button=''
    }else{
        text='comments:'
        button=<div className="footer"><input ref={input=>filter=input}type="text" 
        placeholder="filter of name" className="form-control input-sm" 
        onChange={()=>{
            //dispatch(filterName(filter.value))
            dispatch(filtering(filter.value))
            }}/>
        <button onClick={()=>dispatch(deleteComment())}
         className="btn-delete btn btn-warning btn-xs">delete</button></div>
    }
    return(
        <ul>
            <span><b>{text}</b></span>
            {   
                comment.map((item,index)=>{
                    if(item.passedFiltering)
                    return <Comment key={index} {...item}/>
                })
            }
            {button}
        </ul>
    )
}
export default CommnetList