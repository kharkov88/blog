import React from 'react'
import {connect}from'react-redux'
import {addComment}from'../actions'

let InputForm = ({dispatch})=>{
    let author,text;
    return (
        <div className="form-group">
            <label >Name:</label>
            <input ref={node=>author=node}type="text" className="form-control" id="usr"/>
            <label >Comment:</label>
            <textarea ref={node=>text=node}className="form-control" rows="5" id="comment"></textarea>
            <button onClick={()=>{
                if(!author.value.trim()||!text.value.trim()){return}
                dispatch(addComment(author.value,text.value))
                author.value='';
                text.value='';
                }} 
                type="button" className="btn btn-info btn-block btn-xs">Add comment</button>
        </div>
    )
}
InputForm = connect()(InputForm)
export default InputForm