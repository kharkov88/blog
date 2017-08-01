import app_header from './components/header/app.header'
import app_chat from'./components/chat/app.chat'

let app_shell = (function(){
    let initModule,
        domElements={
            $chat:$('.app-chat')
        }
    
    initModule = function($container){
        domElements.$chat=$container;
        app_header.initModule();
        app_chat.initModule($container);
        window.onresize = ()=>app_header.initModule();
    }
    return {
        initModule
    }
}())
export default app_shell