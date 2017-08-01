import * as React from'react'
import {BrowserRouter,Route,Link}from'react-router-dom'
import createBrowserHistory from"history/createBrowserHistory"
import {Header,Content,Main,AppComment,Chat,AppChat}from'./components'
import  app_shell from'./app.shell'
import './app.css'

 

const history=createBrowserHistory();

const componentsOfMenu=[Main,AppComment,()=>'contact too...',AppComment]
console.log('arrayCom:',componentsOfMenu)

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
            <BrowserRouter history={history}>
                <div className="App">
                     <Header/> 
                     <Content /> 
                     {/* <Footer/> */}
                     <AppChat/>
                </div>          
            </BrowserRouter>
    )}
}

$(document).ready(()=>{
    console.log($('.app-chat'))
    app_shell.initModule($('.app-chat'));  
})