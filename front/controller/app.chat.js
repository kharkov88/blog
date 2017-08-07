var app_chat = (function(){
    'use strict'
    let
     configMap={
        stateChat:false,
        extendHeight:'100%',
        retractHeight:23
    },
    toggleChat,versionToggle,initModule,$chat;

    toggleChat = function (e){
        let $height = configMap.stateChat?configMap.retractHeight:configMap.extendHeight;
        $chat.animate({height:$height},500)
        configMap.stateChat=!configMap.stateChat;
    };

    initModule = function ($container){
        $chat=$container;
        $('.app-chat').css({display:'none'})
        $('.app-chat-header').click(toggleChat);
        $('#inputsm').click((e)=>false)

    }
    return {
         initModule:initModule
         }   
}())

export default app_chat;