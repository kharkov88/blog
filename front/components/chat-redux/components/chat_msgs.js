import React from 'react'
import {connect}from'react-redux'
import {Message}from'./message'


class  Messages extends React.Component{
    render(){
        return (
            <div className="app-chat-msgs">
                <ul>
                    {                   
                        this.props.message.map((item,index)=>{
                            return <Message key={index} {...item}/>
                        })}
                    }
                </ul>
            </div>
        )
    }
}
const convertStateToProps = function (state){  
    return  {
        message:state.message
    }
}
export const Book = connect(convertStateToProps)(Messages)
