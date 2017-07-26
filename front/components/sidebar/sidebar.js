import * as React from'react'
import "./sidebar.css"

export const Sidebar = ()=>{
    return(
        <div>
            <h3>About me:</h3>
            <ul>
                <li >Имя: Артем</li>
                <li >Возраст: 29</li>
                <li >Город: Харьков</li><br/>
                <li >
                <span style={{width:"100px"}}><b>HTML,CSS,JS,JQuery,<br/>React.js,Redux</b></span>
                </li>
                <li ></li>
            </ul>
        </div>
    )
}