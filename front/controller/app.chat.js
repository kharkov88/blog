var app_chat = (function(){
    'use strict'
    let
     configMap={
        stateChat:false,
        extendHeight:415,
        retractHeight:15
    },
    toggleChat,versionToggle,initModule,$chat;

    toggleChat = function (e){
        let $height = configMap.stateChat?configMap.retractHeight:configMap.extendHeight;
        $chat.animate({height:$height},1000)
        configMap.stateChat=!configMap.stateChat;
    };

    initModule = function ($container){
        $chat=$container;
        $('.app-chat-header').click(toggleChat);
        $('#inputsm').click((e)=>false)

    }
    return {
         initModule:initModule
         }   
}())

export default app_chat;