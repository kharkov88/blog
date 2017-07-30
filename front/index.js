import React from'react'
import ReactDOM from 'react-dom'
import  {App} from './app'
import shell_header from './components/header/shell_header'
import shell_chat from'./components/chat/shell_chat'

ReactDOM.render(
    <App/>,
    document.getElementById("root")
)

$(document).ready(()=>{
    shell_chat.initModule($('.chat'));
    shell_header.initModule();
    window.onresize = ()=>{
        shell_header.initModule();
    }
})