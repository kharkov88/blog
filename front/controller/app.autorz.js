let app_autorization = (function(){
    let stateMap,setState,handleClick,initModule;

    stateMap={
        state_user:false
    }
    setState = ()=>{
        stateMap.state_user=!stateMap.state_user
    }
    handleClick = ()=>{
        if(stateMap.state_user){
            setState()
            $('.logout').addClass('login').removeClass('logout')
        }
        else{
            console.log(stateMap.state_user)       
                $('body').addClass('autif')
                $('.login').addClass('logout') 
                $('.content-login').show()
        }
    }
    initModule = ()=>{
        
        $('.login').click(handleClick)
    }
    return {
        initModule,
        handleClick,
        setState
    }
}())

export default app_autorization;