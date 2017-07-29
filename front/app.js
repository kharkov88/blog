import * as React from'react'
import {BrowserRouter,Route,Link}from'react-router-dom'
import createBrowserHistory from"history/createBrowserHistory"
import {Header,Content,Main,AppComment,Chat}from'./components'
import headerModule from './components/header/module'
import './app.css'
import shell_chat from'./components/chat/shell_chat'
 

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
                     <Chat/>
                </div>          
            </BrowserRouter>
    )}
}

$(document).ready(()=>{
    let div=$('.chat')
    console.log('hi',div)
    shell_chat.initModule(div);
    headerModule.initModule();
    let ww=window.innerWidth;
    if(ww<1200){
        $('.menu').addClass('tablet-mobile');
    }
})