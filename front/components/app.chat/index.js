import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {createLogger}from'redux-logger'
import thunk from'redux-thunk'
import { createStore,applyMiddleware } from 'redux'
import {reducer} from'./reducer'
import {App} from './app_chat'
import {getSocketMsg} from './socket'
import {setUser}from'./actions'

const loggerMiddleware = createLogger()
const store = createStore(
    reducer,
    applyMiddleware(thunk,loggerMiddleware)
)

getSocketMsg(store.dispatch)


export let App_Chat = ()=>
    <Provider store={store}>
        <App/>
    </Provider>
// ReactDOM.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>,
//     document.getElementById('root')
// )