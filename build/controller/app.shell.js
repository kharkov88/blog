import app_header from './app.header'
import app_chat from'./app.chat'

var app_shell = (function(){
    let initModule,
        domElements={
            $chat:''
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