import * as React from'react'
import  {Li} from'./header_menu_items'
import {Link}from'react-router-dom'
import './header.css'
import {autorization} from'../../redux_store/actions'
import app_model from'../../model/app.model'

let menu=['main','about','contact','comment']
export let Header = ({state_user,dispatch})=>{

    let state_person = state_user?'logout':'login'
    return(
    <header className="header container">
        <div className="foto">
            <img src="contents/foto.jpg" className="img-circle" alt="Cinque Terre" width="150" height="150"/>
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
            <li >
                <Link to={state_user?'/':'/login'} className={state_person} 
                onClick={()=>{
                    if(state_user){
                        app_model.people.logout()
                        dispatch(autorization())}}}> {state_person}
                </Link>
            </li>
            <li className="chat-mobile-button"><img src="contents/chat.png"/></li>

            </ul>

        </div>  

    </header>
    ) 
}