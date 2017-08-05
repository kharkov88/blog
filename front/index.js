import React from'react'
import ReactDOM from 'react-dom'
import  {App} from './app'
import {createStore}from'redux'
import { Provider } from 'react-redux'
import {reducer} from'./redux_store/reducers'
import {tryLogin}from'./redux_store/actions'
import  app_shell from'./controller/app.shell'
//import app.model ours logic
import app_model from'./model/app.model'
//import styles 

const store = createStore(reducer);
console.log("State of store:",store.getState())
let listen=store.subscribe(()=>{
   console.log("State of store:",store.getState())
})

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
)

$(document).ready(()=>{
    app_model.initModule();
    app_shell.initModule();  

    // let currentUser = app_model.people.get_user();
    // store.dispatch(tryLogin(currentUser))
    // app_model.people.login('Jerry')
    // currentUser = app_model.people.get_user();
    // store.dispatch(tryLogin(currentUser))
    // let ppldb = app_model.people.get_db();
    // ppldb().each((person,idx)=>console.log(person.name))
    // app_model.people.login('Alfred');
    // console.log('user:',app_model.people.get_user())
    // ppldb().each((person,idx)=>console.log(person.name))
    // app_model.people.logout();
    // ppldb().each((person,idx)=>console.log(person.name))
})