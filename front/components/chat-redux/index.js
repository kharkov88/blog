import React from 'react'
import ReactDOM from 'react-dom'
import {sendMsg}from'./actions'
import { Provider } from 'react-redux'
import {createLogger}from'redux-logger'
import { createStore,applyMiddleware } from 'redux'
import {reduser} from'./subredusers/reduser'
import {App} from './components/app_chat'

const loggerMiddleware = createLogger()
const store = createStore(reduser,applyMiddleware(loggerMiddleware))


// store.dispatch(sendMsg('Kein','Hi'))
// store.dispatch(sendMsg('Angi',':)'))
// store.dispatch(sendMsg('Harry','(---)'))

export let AppChat = ()=>
    <Provider store={store}>
        <App/>
    </Provider>
