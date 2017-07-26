import React from 'react'
import Comment from './comment'
import {connect} from'react-redux'
import {deleteComment,filterName,filtering}from'../actions'
import {Footer}from'./footer'

const CommnetList= ({dispatch,comment})=>{
    //console.log("props commnent:",comment)
    let text,button,filter;
    return(
        <div>
        <ul>
            <span><b>{text}</b></span>
            {   
                comment.map((item,index)=>{
                    if(item.passedFiltering)
                    return <Comment key={index} {...item}/>
                })
            }
        </ul>
        {comment.length!=0&&comment!=undefined?<Footer/>:null}
        </div>
    )
}
export default CommnetList