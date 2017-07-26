import * as React from'react'

import {Header,Content,Main,AppComment}from'./components'
import './app.css'

const componentsOfMenu=[Main,AppComment,()=>'contact too...',AppComment]
export class  App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            content:componentsOfMenu[0]
        }
        this.changeContent=this.changeContent.bind(this);
    }
    changeContent(index){
        this.setState({
            content:componentsOfMenu[index]
        })
    }
    render(){
        return(
            <div>
                <Header changeContent={this.changeContent}/>
                <Content content={this.state.content}/>
            </div>
    )}
}