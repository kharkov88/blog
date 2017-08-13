import * as React from'react'
import {Link}from'react-router-dom'
import {Route}from'react-router-dom'
import {connect} from'react-redux'
import {changeLogin,autorization,getListPpl} from'../../redux_store/actions'
import app_model from'../../model/app.model'
import app_autorization from'../../controller/app.autorz'
import './autorization.css'

let name;
export class Login extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        let user,ppls,array=[]; 
        let{dispatch}=this.props
        if(name.value.length>3){
            app_autorization.visibleLogin() 
            app_autorization.watingLogin()
            app_model.people.login(name.value)
            .then((answer)=>{
                user = app_model.people.get_user()
                dispatch(changeLogin(user))
                dispatch(autorization(user.get_is_user()))

                app_model.get_pplList(answer)
                ppls = app_model.people.get_db()
                ppls().each(person=>array.push(person))
                dispatch(getListPpl(array))  
                
                app_autorization.watingLogin();
                name.value=''
            })  
        }
    }
    render(){
    return<div className="content-login ">
            <div className="content-login-box">
                <input  ref={input=>name=input} type="text" className="node"  placeholder="Your name:"/>
                <button className="btn btn-info btn-sm" onClick={this.handleClick}>login</button>
            </div>
        </div>
    }
};


