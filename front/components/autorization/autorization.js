import * as React from'react'
import {Link}from'react-router-dom'
import {connect} from'react-redux'
import {changeLogin,autorization,getListPpl} from'../../redux_store/actions'
import app_model from'../../model/app.model'
import app_autorization from'../../controller/app.autorz'
import app_chat from'../../controller/app.chat'
import './autorization.css'

let name;
export class Login extends React.Component{
    constructor(props,dispatch){
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
                
                app_autorization.watingLogin()
            })
            
            // fetch('autorization',{method:'post',headers: {  
            //      "Content-type": 'application/json; charset=utf-8'},
            //     body: JSON.stringify({name:name.value})})
            // .then(response=>{
            //    response.json().then(data=>{
            //     console.log(data)   
            //     dispatch(changeLogin(JSON.parse(data)))
            // })
            //     dispatch(autorization(true))
            //     app_autorization.watingLogin()
            //     })
            // .catch(error=>console.log('failde...'+error))
            // setTimeout(()=>{
            //     app_model.get_pplList()
            //     user = app_model.people.get_user()
            //     ppls = app_model.people.get_db()   
            //     dispatch(changeLogin(user))
            //     dispatch(autorization(user.get_is_user()))
            //     ppls().each(person=>array.push(person))
            //     dispatch(getListPpl(array))
            //     app_chat.visibleChat()
            //     app_autorization.watingLogin()           
            // },1000)
             
        }
    }
    render(){
    return<div className="content-login login-visible">
            <div className="content-login-box">
                <input  ref={input=>name=input} type="text" className="node"  placeholder="Your name:"/>
                <button className="btn btn-info btn-sm" onClick={this.handleClick}>login</button>
            </div>
        </div>
    }
};


