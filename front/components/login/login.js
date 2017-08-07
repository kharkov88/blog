import * as React from'react'
import {Link}from'react-router-dom'
import {connect} from'react-redux'
import {changeLogin,autorization,getListPpl} from'../../redux_store/actions'
import app_model from'../../model/app.model'
import app_autorization from'../../controller/app.autorz'

import './login.css'
let name;
export class Login extends React.Component{
    constructor(props,dispatch){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        
        let{dispatch}=this.props
        if(name.value.length>3){
            app_model.people.login(name.value)
            $('body').addClass('waiting')
            setTimeout(()=>{
            let user = app_model.people.get_user(),
                ppls = app_model.people.get_db(),  
                array=[];  
                dispatch(changeLogin(user))
                dispatch(autorization(user.get_is_user()))
                ppls().each(person=>array.push(person))
                dispatch(getListPpl(array))
                $('body').removeClass('waiting')
            },4000)
 
            $('.content-login').hide()       
        }
    }
    render(){
    return<div className="content-login">
            <div className="content-login-box">
                <input ref={input=>name=input} type="text" className="node"  placeholder="Your name:"/>
                <button className="btn btn-info btn-sm" onClick={this.handleClick}>login</button>
            </div>
        </div>
    }
};


