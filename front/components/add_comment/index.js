import React from 'react'
import ReactDOM from 'react-dom'
import {addComment,deleteComment,filterName}from'./actions'
import { Provider } from 'react-redux'
import {createLogger}from'redux-logger'
import thunk from'redux-thunk'
import { createStore,applyMiddleware } from 'redux'
import {reducer} from'./reducer'
import App from './components/app'


const loggerMiddleware = createLogger()
export const store=createStore(
    reducer,
    applyMiddleware(thunk,loggerMiddleware)
)

export  let AppComment = ()=> 
        <Provider store={store}>
            <App/>
        </Provider>
// ReactDOM.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>,
//     document.getElementById("root")
// )

