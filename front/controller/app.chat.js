var app_chat = (function(){
    'use strict'
    let
     configMap={
        stateChat:false,
        extendHeight:415,
        retractHeight:23
    },
    toggleChat,visibleChat,visiblePeople,versionToggle,initModule,$chat;

    toggleChat = (e)=>{
        let $height = configMap.stateChat?configMap.retractHeight:configMap.extendHeight;
        $chat.animate({height:$height},500)
        configMap.stateChat=!configMap.stateChat;
        $('.app-chat').toggleClass('open-chat')
    };
    visibleChat = ()=>{
        $('.app-chat').toggleClass('visible')
    }
    visiblePeople = ()=>{
        $('.app-chat-people').toggleClass('visible-people')
    }
    initModule = ($container)=>{
        $chat=$container;
        //$('.app-chat').css({display:'none'})
        $('.app-chat-header').click(toggleChat);
        $('#inputsm').click((e)=>false)

    }
    return {
         initModule:initModule,
         visibleChat,
         visiblePeople
         }   
}())

export default app_chat;