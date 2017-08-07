let app_header = (function(){
    let
        stateToggle=true,
        toggleBurger,
        burgerClick,
        initModule;

    toggleBurger = function(e){
        //alert('click',e.currentTarget.id)
        stateToggle? $('.menu').addClass('open'):$('.menu').removeClass('open')
        stateToggle = !stateToggle;
        //return false;
    }
    burgerClick = function(){
        toggleBurger();
        return false;
    }
    initModule = function(){
        //$('.login').click(()=>$('body').addClass('autif'))
        $('.logout').click(()=>$('.logout').addClass('login').removeClass('logout'))
        let ww=window.innerWidth;
        if(ww<1200){
            $('.burger').unbind('click',toggleBurger);
            $('.burger').click(toggleBurger);
            $('.topMenu li').unbind('click',toggleBurger)
            $('.topMenu li').click(toggleBurger)
            $('.menu').addClass('tablet-mobile');
            $('.App').addClass('app-mobile');
        }
        else {
            $('.menu').removeClass('tablet-mobile')
            $('.app-chat').show();
            $('.topMenu li').unbind('click',toggleBurger)
        }
    }

    return{
        initModule:initModule
    }
}())

export default app_header;