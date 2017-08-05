import * as React from'react'
import {Link}from'react-router-dom'
import {connect} from'react-redux'
import {tryLogin,autorization,getListPpl} from'../../redux_store/actions'
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
                        let user = app_model.people.get_user()
                        let ppls = app_model.people.get_db()  
                        let array=[]                   
                        dispatch(tryLogin(user))
                        dispatch(autorization())
                        ppls().each(person=>array.push(person))
                        dispatch(getListPpl(array))
                        app_autorization.setState()  
                        $('.content-login').hide()       
                    }
                }
            }>login</button>
        </div>
    </div>
Login=connect()(Login)