import React from'react'
import ReactDOM from 'react-dom'
import  {App} from './app'
import {createStore,applyMiddleware}from'redux'
import { Provider } from 'react-redux'
import {createLogger} from 'redux-logger'
import {reducer} from'./redux_store/reducers'
import {changeLogin,autorization,getListPpl,addMessage}from'./redux_store/actions'
import  app_shell from'./controller/app.shell'
//import app.model ours logic
import app_model from'./model/app.model'
//import styles 
const logger = createLogger()
const store = createStore(reducer,applyMiddleware(logger));

io.connect().on('message',(msg)=>{
    let objData = JSON.parse(msg)
    switch(objData.action){
        case 'add_msg':
            store.dispatch(addMessage({
                author:objData.author,
                msg:objData.msg,
                date:objData.data
            }))
            break;
        case 'update_ppl':
    
            function ear(){
                let user = app_model.people.get_user()
                    if(user.id==undefined)setTimeout(()=>ear(),1000) 
                    else{
                        if(user.id!=objData._id&&user.id!='a0'){
                            app_model.get_pplList(objData.people)
                            let array=[],
                                ppls = app_model.people.get_db() 
                            ppls().each(person=>array.push(person))
                            store.dispatch(getListPpl(array))  
                        }
                    }
            }ear()
                break;
    }
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
    //test
    let user = app_model.people.get_user(),
    //     ppls = app_model.people.get_db(),  
         array=[];  
         store.dispatch(changeLogin(user))
         store.dispatch(autorization(!user.get_is_anonim()))
    //     ppls().each(person=>array.push(person))
    //     store.dispatch(getListPpl(array))
        //test
})