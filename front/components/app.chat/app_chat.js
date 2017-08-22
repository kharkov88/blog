import React from 'react'
import {ConnectContent,ConnectFooter,ConnectHeader} from './containers'
import './app_chat.css'

export class App extends React.Component{

    constructor(){
        super();
        this.state = {
            toggleHeight:false,
            app_mobile:false
        }
        this.toggleClick=this.toggleClick.bind(this)
    }
    componentDidMount(){
        this.setState({
            app_mobile:window.innerWidth<1200?true:false
        })
    }
    toggleClick(){
        this.setState({
            toggleHeight:!this.state.toggleHeight
        })
    }
    render(){
        return(
        <div className="app-chat" style={{height:!this.state.app_mobile?(this.state.toggleHeight?'300px':'30px'):''}}> 
            <div className="form-group">
                <ConnectHeader toggleClick={this.toggleClick}/>
                <ConnectContent/>
                <ConnectFooter/>
            </div>
        </div>
        )
    }
}

