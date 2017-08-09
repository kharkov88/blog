let app_autorization = (function(){
    let watitingLogin,visibleLogin,stateMap,setState,handleClick,initModule;

    stateMap={
        state_user:false
    }
    setState = ()=>{
        stateMap.state_user=!stateMap.state_user
    }
    watitingLogin = ()=>{
        $('body').toggleClass('waiting')
    }
    visibleLogin = ()=>{
        $('.content-login').toggleClass('login-visible')
    }
    handleClick = ()=>{
        if(stateMap.state_user){
            setState()
        }
    }
    
    initModule = ()=>{    
    }
    return {
        initModule,
        handleClick,
        setState,
        watitingLogin,
        visibleLogin
    }
}())

export default app_autorization;