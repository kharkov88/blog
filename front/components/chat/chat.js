import React from'react'
import {Route}from'react-router'
import {Li} from'./person'
import {WindowChat}from'./chat.history'
import {ConnectLogin} from'../../redux_container/connect_login'
import {selectPerson,updateChat,addMessage,changeLogin,getListPpl,autorization}from'../../redux_store/actions'
import app_model from '../../model/app.model'
//import './app.chat.css'
export class Chat extends React.Component {
    constructor(props){
        super(props)
        this.clickLogin=this.clickLogin.bind(this)
    }
    componentDidMount(){
        fetch('/chathistory',{
            method:'post',
            headers:{"Content-type": 'application/json; charset=utf-8'}
        })
        .then(response=>{
            response.json().then(data=>{
                let answer = JSON.parse(data)
                    answer.map(item=>this.props.dispatch(addMessage({
                    author:item.author,
                    frendy:item.frendy,
                    msg:item.msg,
                    date:item.data
                })))
            })          
        })
    }
    clickLogin(){
        let {user,state_user,dispatch}=this.props
        !state_user&&$('.content-login').toggleClass('login-visible')
        if(state_user){
            let user_now,ppls,array=[];
            app_model.people.logout(user.id)
            user_now = app_model.people.get_user() 
            dispatch(changeLogin(user_now))
            dispatch(getListPpl([]))
            dispatch(autorization(!user_now.get_is_anonim()))
            }      
    }
    render(){
    let {dispatch,state_user,user,peopls,frend,history,chat} = this.props;
    let visible = ''//state_user?'block':'none'
    let frend_name =[{name:''}]
    let message='hi'
    let chat_history=[]
    
    return(
    <div className="app-chat" style={{display:visible}}>
        <div className="app-chat-header">
            <p>Hi {user.name}! </p>
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
                            let textColor = item.frendy!=""?'#742ae6':"grey"
                            return( 
                                <div className="new-message"  key={index}>
                                    <div><span style={{color:textColor}}>{item.author}</span><span style={{color:textColor}}>{item.frendy!=""&&` told ${item.frendy} `}:</span> <span style={{color:'black',fontWeight:'700'}}>{` ${item.msg}`}</span></div><span> {item.date}</span>
                                </div>)
                            })
                        }
                    </div>   
                 
                {/* <label htmlFor="inputsm">Message for {frend&&frend.name}:</label>  */}
                 <label htmlFor="inputsm">Message:</label> 
                <div className="app-chat-window-box">
                    <input ref={input=>message=input}className="app-chat-input form-control" id="inputsm" type="text"/>
                    <button className="btn btn-primary" onClick={(e)=>{
                        e.preventDefault();
                        if(message.value.length>0)
                        sendRequest('newchat',user,frend,message)
                            .then(rezult=>{
                                console.log('response:',rezult)
                            },
                                error=>{
                                    console.log('bad ',error)
                                })
                        message.value='';
                        }}>send</button>
                </div>
                <div className="app-chat-login">
                    <a  onClick={(e)=>{
                        e.preventDefault();
                        this.clickLogin()
                        }}>{state_user?'Logout':'Login'}</a>
                </div>

            </div>
        </form>  
        <ConnectLogin/>
    </div>)
    }
}

function sendRequest(url,user,frend,message){
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

            xhr.send(JSON.stringify({userName:user.name,frendName:frend.name,userMsg:message.value}));
        })        
    }

