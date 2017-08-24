import * as React from'react'
import {Router,Route,Link}from'react-router'
import createBrowserHistory from"history/createBrowserHistory"
import {Header,Content,Main,AppComment,Chat,AppChat,Login,Footer,App_Chat}from'./components'
import {HeaderMenu,ConnectLogin} from'./redux_container'

import './app.css'
import './contact_us.css'

const history=createBrowserHistory();
export class  App extends React.Component{
    render(){
        return(
            <Router history={history}>
                <div className="App">
                    <HeaderMenu/> 
                    <Content /> 
                    <section className="container-flux contact-us" id="contact-us">
                        <div className="row">
                            <div className="col-md-2 col-sm-12 col-sx-12"></div>
                            <div className="col-md-8 col-sm-12 col-sx-12">
                                <div >
                                    <form className="contact-us-form" action="">
                                        <div className="contact-us-input">
                                        <input type="text" placeholder="Name"/>
                                        <input type="text" placeholder="Email"/>
                                        </div>
                                        <textarea name="" placeholder="Message" cols="40" rows="5"></textarea>
                                        <button type="submit" >send</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-12 col-sx-12"></div>
                        </div>
                    </section>
                    <Footer/> 
                    <App_Chat/>
                    <div className="left-wing">
                        <img src="contents/tree-hands.png" className="img-circle"  width="150" height="150"/> 
                    </div>
                    <div className="right-wing"></div>
                    <div className="main-spinner">
                        <div>
                            <img src="img/spinner1.svg"/>
                        </div>
                    </div>
                </div>          
            </Router>
    )}
}

