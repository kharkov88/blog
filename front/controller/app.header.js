let app_header = (function(){
    let
        stateToggle=true,
        toggleBurger,
        burgerClick,
        initModule,
        smootheAnchor;
    smootheAnchor = (e)=>{
        let elClick = $(this).attr('href');
        let dest = $("#contact-us").offset().top;
         $('body').animate({ scrollTop: dest}, 1100); //1100 - скорость
         //$('html').animate({ scrollTop: dest}, 1100);
        
        return false; 
    }
    toggleBurger = function(e){
        stateToggle? $('.menu').addClass('open'):$('.menu').removeClass('open')
        stateToggle = !stateToggle;
    }
    burgerClick = function(){
        toggleBurger();
        return false;
    }
    initModule = function(){
        let ww=window.innerWidth;
        $('#link-contact-us').click(smootheAnchor)
        if(ww<1200){
            $('.burger').unbind('click',toggleBurger);
            $('.burger').click(toggleBurger);
            $('.topMenu li').unbind('click',toggleBurger)
            $('.topMenu li').click(toggleBurger)
            $('.menu').addClass('tablet-mobile');
            $('.App').addClass('app-mobile');
            $('.story').hide();
        }
        else {
            $('.App').removeClass('app-mobile');
            $('.menu').removeClass('tablet-mobile')
            $('.topMenu li').unbind('click',toggleBurger)
            $('.story').show()
        }
    }
    return{
        initModule:initModule
    }
}())

export default app_header;