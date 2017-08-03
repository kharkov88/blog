import React from 'react'
import ReactDOM from 'react-dom'
import {sendMsg}from'./actions'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {reduser} from'./subredusers/reduser'
import {App} from './components/app_chat'

let store = createStore(reduser)
let listen = store.subscribe(()=>{
    console.log("redux chat:",store.getState())
})

// store.dispatch(sendMsg('Kein','Hi'))
// store.dispatch(sendMsg('Angi',':)'))
// store.dispatch(sendMsg('Harry','(---)'))

export let AppChat = ()=>
    <Provider store={store}>
        <App/>
    </Provider>
