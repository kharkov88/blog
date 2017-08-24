import React from'react'
import ReactDOM from 'react-dom'
import {createStore,applyMiddleware}from'redux'
import { Provider } from 'react-redux'
import {createLogger} from 'redux-logger'
import {reducer} from'./redux_store/reducers'
import {changeLogin,autorization,getListPpl,addMessage}from'./redux_store/actions'
import  {App} from './app'
import  app_shell from'./controller/app.shell'
import app_model from'./model/app.model'

const logger = createLogger()
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
)

$(document).ready(()=>{
    app_model.initModule();
    app_shell.initModule();  
    let user = app_model.people.get_user(),
         array=[];  
         store.dispatch(changeLogin(user))
         store.dispatch(autorization(!user.get_is_anonim()))
})