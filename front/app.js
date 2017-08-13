import * as React from'react'
import {Router,Route,Link}from'react-router'
import createBrowserHistory from"history/createBrowserHistory"
import {Header,Content,Main,AppComment,Chat,AppChat,Login,Footer}from'./components'
import {HeaderMenu,ConnectChat,ConnectLogin} from'./redux_container'

import './app.css'

const history=createBrowserHistory();
export class  App extends React.Component{
    render(){
        return(
            <Router history={history}>
                <div className="App">
                    <HeaderMenu/> 
                    <Content /> 
                    <Footer/> 
                    <ConnectChat/>  
                </div>          
            </Router>
    )}
}

