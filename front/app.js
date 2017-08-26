import * as React from'react'
import {Router,Route,Link}from'react-router'
import createBrowserHistory from"history/createBrowserHistory"
import {Header,Content,Main,AppComment,Chat,AppChat,Login,Footer,App_Chat}from'./components'
import {HeaderMenu,ConnectLogin} from'./redux_container'

import './app.css'
import './contact_us.css'

const history=createBrowserHistory();
export class  App extends React.Component{
    constructor(){
        super();
        this.clickSendForm = this.clickSendForm.bind();
    }
    clickSendForm(){
        $('.contact-us-spinner').show().delay(2500).fadeOut(0,()=>{$('.contact-us-form').html('Success!').show()})
    }
    render(){
        return(
            <Router history={history}>
                <div className="App">
                    <HeaderMenu/> 
                    <Content /> 
                    <section className="container-flux contact-us" id="contact-us">
                        <div className="col-md-12 col-sm-12 col-sx-12 contact-us-title">Get-in-touch</div>
                        <div className="row">     
                                <div className="col-md-6 col-sm-12 col-sx-12">
                                    <div className="contact-us-map">
                                        <div ><i className="fa fa-phone " aria-hidden="true"></i>&nbsp;+38 093 0315105</div>
                                        <div><i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;emperor343@gmail.com</div>
                                        <div><img src="contents/world.png" alt=""/></div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 col-sx-12">
                                    <div >
                                        <form className="contact-us-form" action="">
                                            <div className="contact-us-input">
                                            <input type="text" placeholder="Name"/>
                                            <input type="text" placeholder="Email"/>
                                            </div>
                                            <textarea name="" placeholder="Message" ></textarea>
                                            <button type="submit" onClick={(e)=>{
                                                e.preventDefault()
                                                this.clickSendForm()
                                                }}>send</button>
                                        </form>
                                    </div>
                                    <div className="contact-us-spinner">
                                        <img src="gifs/source.gif"/>
                                    </div>
                                </div>            
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
                    <div className="btn-chat">
                        <img src="contents/chat2.png" alt=""/>
                    </div>
                </div>          
            </Router>
    )}
}

