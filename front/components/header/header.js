import * as React from'react'
import  {Li} from'./header_menu_items'
import {Link}from'react-router-dom'
import './header.css'
import {autorization,changeLogin,getListPpl} from'../../redux_store/actions'
import app_model from'../../model/app.model'

let menu=['mvc','flux','spa']
export let Header = ({_state,dispatch})=>{
    let state_person = _state.state_user?'logout':'login';

    function handleClickLogout(){
        if(_state.state_user){
            let user,ppls,array=[];
            app_model.people.logout(_state.user.id)
            user = app_model.people.get_user() 
            dispatch(changeLogin(user))
            dispatch(getListPpl([]))
            dispatch(autorization(!user.get_is_anonim()))
            }      
    }
    return(
    <header className="header container-flux">
        <div className="header-title">Talking about architecture</div>
        <div className="foto">
            <Link to='/'>
                 <img src="contents/tree-hands.png" className="img-circle"  width="150" height="150"/> 
            </Link>
        </div>
        <div className="menu">
            <span></span>
            <div className="burger">                
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className='topMenu'>
                {
                    menu.map((item,index)=>{
                        return <Li key={index} index={index} item={item}/>
                    })
                }
                <li><a id="link-contact-us" href="#contact-us">Contact-us</a></li>
                <li className="chat-mobile-button"><img src="contents/chat.png"/></li>
            </ul>
        </div>  
    </header>
    ) 
}