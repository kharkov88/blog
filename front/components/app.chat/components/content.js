import React from 'react'
import {Message}from'./message'


export class  Content extends React.Component{
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

