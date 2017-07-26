import * as React from'react'

import {Header,Content,Main}from'./components'
import './app.css'

const componentsOfMenu=[Main,()=>{},()=>{}]
export class  App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            content:()=>{}
        }
        this.changeContent=this.changeContent.bind(this);
    }
    changeContent(index){
        this.setState({
            content:componentsOfMenu[index]
        })
    }
    render(){
        console.log("Main:",this.state.content)
        return(
            <div>
                <Header changeContent={this.changeContent}/>
                <Content content={this.state.content}/>
            </div>
    )}
}