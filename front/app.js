import * as React from'react'
import {BrowserRouter,Route,Link}from'react-router-dom'
import createBrowserHistory from"history/createBrowserHistory"
import {Header,Content,Main,AppComment,Chat}from'./components'

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
                     <Chat/>
                </div>          
            </BrowserRouter>
    )}
}

