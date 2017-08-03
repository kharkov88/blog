import React from 'react'
import {connect} from'react-redux'
import {sendMsg,updateHistory} from '../actions'

export let Footer = ({dispatch})=>{
let messageValue='';
return(
    <div>
        <label htmlFor="inputsm">Message:</label>
        <div className="app-chat-box">
            <input ref={input=>messageValue=input} className="app-chat-input form-control" id="inputsm" type="text"/>
            <button className="btn btn-primary" 

            onClick={e=>{
                sendRequest('/register',messageValue.value).then(result=>
                    dispatch(updateHistory(JSON.parse(result)))                  
                )}}> send
            </button>
        </div>
    </div>
)}
Footer=connect()(Footer)

function sendRequest(url,message){
        return new Promise((resolve,reject)=>{
            let xhr=new XMLHttpRequest();
            xhr.open('post',url)
            xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            xhr.responseType='json'
            xhr.addEventListener('load',()=>{
                resolve(xhr.response)
            })
            xhr.addEventListener('error',()=>{
                reject();
            })
            xhr.send(JSON.stringify({userName:'anonim:',userMsg:message}));
        })        
    }
