import app_header from './app.header'
import app_chat from'./app.chat'
import app_aurtorization from './app.autorz'
import app_model from'../model/app.model'

let app_shell = (function(){
    let initModule,
        domElements={}
    
    initModule = function(){
        domElements.$chat=$('.app-chat');
        app_header.initModule();
        app_chat.initModule(domElements.$chat);
        app_aurtorization.initModule();
        window.onresize = ()=>app_header.initModule();
    }
    return {
        initModule
    }
}())
export default app_shell