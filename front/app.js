//import react components
import * as React from'react'
import {Router,Route,Link}from'react-router'
import createBrowserHistory from"history/createBrowserHistory"
//import ours components
import {Header,Content,Main,AppComment,Chat,AppChat,Login}from'./components'
import {HeaderMenu,ConnectChat} from'./redux_container'
//import the initialization module app.shell

import './app.css'

const history=createBrowserHistory();
export class  App extends React.Component{

    render(){
        return(
            <Router history={history}>
                <div className="App">
                     <HeaderMenu/> 
                     <Content /> 
                     {/* <Footer/> */}
                     {/* <Chat/> */}
                     <ConnectChat/>
                     <Route exact path="/login" component={Login}/>
                </div>          
            </Router>
    )}
}

