let headerModule = (function(){
    let
        toggleBurger,burgerClick,initModule;
    toggleBurger = function(){
        $('.menu').toggleClass('open')
    }
    burgerClick = function(){
        toggleBurger();
        return false;
    }
    initModule = function(){
            $('.burger').click(toggleBurger);
            $('.topMenu li a').click(toggleBurger)
        }

    return{
        initModule:initModule
    }
}())

export default headerModule;