import React from'react'
import './app.chat.css'
import {Li} from'./person'
import {WindowChat}from'./chat.history'
import {selectPerson,updateChat}from'../../redux_store/actions'
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
    let {dispatch,state_user,user,peopls,frend,history} = this.props;
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
                         chat_history.map((item,index)=>{
                            return <div style={{color:'grey'}}key={index}>
                                        {`From: ${item.from}: ${item.message}   ${item.data}`}
                                    </div>})
                        }
                    {/* <WindowChat chat_history={chat_history}/>  */}
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
                        let arrayHistory=this.sendMsg(data_for_send)
                        
                        dispatch(updateChat(JSON.parse(arrayHistory)))
                        message.value='';
                        }}>send</button>
                </div>
             </div>
        </form>  
    </div>)
    }
}
