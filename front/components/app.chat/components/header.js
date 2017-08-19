import React from 'react'
let name;
let spiner = ()=><img src="img/spinner.svg" style={{
    position: 'absolute',
    right: '10px',
    top: '-4px'}}/>
export class Header extends React.Component{

    render(){
        let {_state,actions}=this.props
        return (
        <div className="app-chat-header">
            <div onClick={this.props.toggleClick}>{`x Hi ${_state.user.name}`}</div>
            <div></div>
            <div className="header-autoriz">         
                {!_state.login
                ?<Login _state={_state} actions={actions}/>
                :<Logout _state={_state} actions={actions}/>}
            </div>
        </div>
        )
    }
}

let Login = ({_state,actions})=>{
    function clickLogin(action){
        if(name.value.trim()==0||name.value.length<2)alert("Bad name!")
        else action.logining(name.value)
        name.value=''
    }
    return (
    <div>
        <div className="header-input-name "><input ref={input=>name=input}  type="text"/></div>
        <div className="header-button">
        <a onClick={()=>clickLogin(actions)}>
            {_state.fetching?spiner():'Log-in'}
        </a>
        </div>
    </div>
    )
}

let Logout= ({_state,actions})=>{
    function clickLogout(_state,action){
        action.logouting()
        action.setUser(_state.guest)
    }
    return (
    <div >
        <div className="header-button">
        <a onClick={()=>clickLogout(_state,actions)}>
            {'Log-out'}
        </a>
        </div>
    </div>  
    )
}
