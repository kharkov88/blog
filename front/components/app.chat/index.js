import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {createLogger}from'redux-logger'
import thunk from'redux-thunk'
import { createStore,applyMiddleware } from 'redux'
import {reducer} from'./reducer'
import {ConnectApp} from './containers'
import {getSocketMsg} from './socket'
import {setUser}from'./actions'
import {App}from'./app_chat'
const loggerMiddleware = createLogger()
const store = createStore(
    reducer,
    applyMiddleware(thunk,loggerMiddleware)
)

export let App_Chat = ()=>
    <Provider store={store}>
        <ConnectApp/>
    </Provider>
// ReactDOM.render(
//     <Provider store={store}>
//         <ConnectApp/>
//     </Provider>,
//     document.getElementById('root')
// )