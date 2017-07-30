let shell_chat = (function(){
    let
     configMap={
        stateChat:false,
        extendHeight:415,
        retractHeight:15
    },
    toggleChat,versionToggle,initModule,$chat=$('.chat');

    toggleChat = function (){
        let $height = configMap.stateChat?configMap.retractHeight:configMap.extendHeight;
        $chat.animate({height:$height},1000)
        console.log('click')
        configMap.stateChat=!configMap.stateChat;
    };
    versionToggle = function(){
        if(window.innerWidth<1200){
           // $($chat).hide()
        }
    }
    initModule = function ($container){
        $chat=$container;
        $chat.click(toggleChat);
        versionToggle();
    }
    return {
         initModule:initModule
         }   
}())

export default shell_chat;