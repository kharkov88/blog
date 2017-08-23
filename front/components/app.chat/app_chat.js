import React from 'react'
import {ConnectContent,ConnectFooter,ConnectHeader} from './containers'
import './app_chat.css'

let socket = io.connect('/');        //new socket connect
export class App extends React.Component{
    constructor(){
        super();
        this.state = {
            toggleHeight:false
        }
        this.toggleClick=this.toggleClick.bind(this)
    }
    componentDidMount(){
        let {_state,actions}=this.props;  
        socket.on('connect',()=>{
            socket.json.send({"action":"newUser","user":_state.user.name})
            socket.on('message',(msg)=>{
                let objData = JSON.parse(msg)
                switch(objData.action){
                    case 'connected':
                        actions.updateHistory({
                            author:'',
                            msg:'Соединение успешно...',
                            data:objData.data
                        })
                        break;
                    case 'leave':
                        // actions.updateHistory({
                        //     author:'',
                        //     msg:`${objData.user} вышел...`,
                        //     data:objData.data
                        // })
                        break;
                    case 'user_joined':
                        // actions.updateHistory({
                        //     author:'',
                        //     msg:`К нам присоединился ${objData.user}`,
                        //     data:''
                        // })
                        break;
                    case 'typing':
                        document.getElementsByClassName('app-chat-typing')[0].innerHTML=`${objData.user} typing...`
                        $('.app-chat-typing').show();
                        setTimeout(()=>{
                             $('.app-chat-typing').hide();
                        },5000)
                        document.querySelector('.app-chat-msgs').scrollTop = document.querySelector('.app-chat-msgs').scrollHeight;
                        break;
                    case 'add_msg':
                        actions.updateHistory({
                            author:`${objData.author}:`,
                            msg:objData.msg,
                            data:objData.data,
                            frendy:objData.frendy
                        })
                        document.querySelector('.app-chat-msgs').scrollTop = document.querySelector('.app-chat-msgs').scrollHeight;
                        break;
                }
            })
        })
    }
    toggleClick(){
        this.setState({
            toggleHeight:!this.state.toggleHeight
        })
    }
    render(){
        return(
        <div className="app-chat" style={{height:this.state.toggleHeight?'300px':'30px'}}> 
            <div className="form-group">
                <ConnectHeader toggleHeight={this.state.toggleHeight} toggleClick={this.toggleClick}/>
                <ConnectContent/>
                <ConnectFooter socket={socket}/>
            </div>
        </div>
        )
    }
}

