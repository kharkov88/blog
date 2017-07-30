let shell_header = (function(){
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
        let ww=window.innerWidth;
        if(ww<1200){
            $('.burger').unbind('click',toggleBurger);
            $('.burger').click(toggleBurger);
            $('.topMenu li a').unbind('click',toggleBurger)
            $('.topMenu li a').click(toggleBurger)
            $('.menu').addClass('tablet-mobile');
            $('.chat').hide();
        }
        else {
            $('.menu').removeClass('tablet-mobile')
            $('.chat').show();
            $('.topMenu li a').unbind('click',toggleBurger)
        }
    }

    return{
        initModule:initModule
    }
}())

export default shell_header;