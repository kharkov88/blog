import React from'react'
import './app.chat.css'
import {Li} from'./person'
import {WindowChat}from'./chat.history'
import {selectPerson,updateChat,addMessage}from'../../redux_store/actions'
import app_model from '../../model/app.model'
export class Chat extends React.Component {
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
        this.sendMsg=this.sendMsg.bind(this)
    }
    handleClick(id){
        $('.app-chat-window').show();
        this.props.dispatch(selectPerson(id))
    }
    sendMsg(data_for_send){
        return app_model.chat.send_msg(data_for_send)  
    }
    render(){
    let {dispatch,state_user,user,peopls,frend,history,chat} = this.props;
    let visible = ''//state_user?'block':'none'
    let frend_name =[{name:''}]
    let data_for_send = Object.create(null);
    let message='hi'
    let chat_history=[]
    
    history.forEach(element => {if(element.id===frend.id){chat_history=element.history}})
    
    return(
    <div className="app-chat" style={{display:visible}}>
        <div className="app-chat-header">
            <p>Hi {user.name}!</p>
        </div>
        <div className="app-chat-people">
            <ul>
                {
                    peopls.map((item,index,ppl)=>{              
                        if(index==0||item.id==user.id)return
                        return <Li  dispatch={dispatch} state_user={state_user} person={item} key={index} id={item.id} />
                    })
                }
            </ul>
        </div>
        <form>
            <div className="app-chat-window">
                {/* history of chat  */}
                <div className="app-chat-window-header" onClick={()=>$('.app-chat-window34').hide()}></div>
                    <div className="app-chat-window-msgs">
                        {
                            chat.map((item,index)=>{
                            return( 
                                <div className="new-message" key={index}>
                                    <div><span>{item.author}:</span> <span>{item.msg}</span></div><span> {item.date}</span>
                                </div>)
                            })
                        }
                    </div>   
                 
                <label htmlFor="inputsm">Message for {frend&&frend.name}:</label> 
                <div className="app-chat-window-box">
                    <input ref={input=>message=input}className="app-chat-input form-control" id="inputsm" type="text"/>
                    <button className="btn btn-primary" onClick={(e)=>{
                        e.preventDefault();
                        data_for_send = {
                            message:message.value,
                            user:Object.assign({},user),
                            frend:Object.assign({},frend)
                            }
                        {/* let arrayHistory=this.sendMsg(data_for_send)  
                        dispatch(updateChat(JSON.parse(arrayHistory))) */}
                        if(message.value.length>0)
                        sendRequest('newchat',user,message)
                            .then(rezult=>{
                                console.log('response:',rezult)
                            },
                                error=>{
                                    console.log('bad ',error)
                                })
                        message.value='';
                        }}>send</button>
                </div>
            </div>
        </form>  
    </div>)
    }
}

function sendRequest(url,user,message){
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
            xhr.send(JSON.stringify({userName:user.name,userMsg:message.value}));
        })        
    }

    //
