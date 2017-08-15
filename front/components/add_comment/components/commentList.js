import React from 'react'
import Comment from './commentElement'
import {Footer}from'./footer'

const CommnetList= ({actions,visible,comment,fetching})=>{
    let text,button,filter,count=comment.length;
    function toggleClick (){
        actions.toggleVisible()
    }
    visible?comment:comment=[]
    return(
        <div>
            <div className="list-header">
                <div>{fetching?`loading...`:`${count} comments`}</div>
                <div><button className="btn btn-info btn-sm" onClick={toggleClick}>
                        {visible?'HIDE':'SHOW'}
                    </button>
                </div>
            </div>
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