import React from'react'
import './app.chat.css'
import {Li} from'./person'
import {selectPerson}from'../../redux_store/actions'

export class Chat extends React.Component {
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(id){
        $('.app-chat-window').show();
        this.props.dispatch(selectPerson(id))
    }
    render(){
    let {dispatch,state_user,user,peopls,friend} = this.props;
    let visible = state_user?'block':'none'
    let frend =[{name:''}]
    frend= peopls.filter((item)=>{return item.selected==true})
    if(frend.length>0)console.log(frend[0].name)
    return(
    <div className="app-chat" style={{display:visible}}>
        <div className="app-chat-header">
            <p>Hi {user}!</p>
        </div>
        <div className="app-chat-people">
            <ul>
                {
                    peopls.map((item,index,ppl)=>{              
                        if(index==0||index==5)return
                        return <Li  dispatch={dispatch} selected={item.selected}person={item} key={index} id={item.id} />
                    })
                }
            </ul>
        </div>
        <form>
            <div className="app-chat-window">
                {/* history of chat  */}
                <div className="app-chat-window-msgs"></div> 
                 <label htmlFor="inputsm">Message for {frend[0]&&frend[0].name}:</label> 
                <div className="app-chat-window-box">
                    <input className="app-chat-input form-control" id="inputsm" type="text"/>
                    <button className="btn btn-primary">send</button>
                </div>
             </div>
        </form>  
    </div>)
    }
}
