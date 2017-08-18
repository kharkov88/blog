import React from 'react'
import {ConnectContent,ConnectFooter,ConnectHeader} from './containers'
import './app_chat.css'

export class App extends React.Component{
    constructor(){
        super();
        this.state = {
            toggleHeight:false
        }
        this.toggleClick=this.toggleClick.bind(this)
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
                <ConnectHeader toggleClick={this.toggleClick}/>
                <ConnectContent/>
                <ConnectFooter/>
            </div>
        </div>
        )
    }
}

