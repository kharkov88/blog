import * as React from'react'
import {Link}from'react-router-dom'
import {connect} from'react-redux'
import {tryLogin,autorization} from'../../redux_store/actions'
import app_model from'../../model/app.model'
import app_autorization from'../../controller/app.autorz'

import './login.css'
let name;
export let Login = ({dispatch})=>
    <div className="content-login">
        <div className="content-login-box">
            <input ref={input=>name=input} type="text" className="node"  placeholder="Your name:"/>
            <button className="btn btn-info btn-sm" onClick={
                ()=>{
                    if(name.value.length>3){
                        app_model.people.login(name.value)
                        app_autorization.setState()
                        let user = app_model.people.get_user()
                        dispatch(tryLogin(user))
                        dispatch(autorization())
                        $('body').removeClass('autif')               
                        $('.content-login').hide(100)         
                    }
                }
            }>login</button>
        </div>
    </div>
Login=connect()(Login)