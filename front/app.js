import * as React from'react'
import {Router,Route,Link}from'react-router'
import createBrowserHistory from"history/createBrowserHistory"
import {Header,Content,Main,AppComment,Chat,AppChat,Login,Footer,App_Chat}from'./components'
import {HeaderMenu,ConnectLogin} from'./redux_container'

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
                    <App_Chat/>
                    <div className="right-wing"></div>
                </div>          
            </Router>
    )}
}

