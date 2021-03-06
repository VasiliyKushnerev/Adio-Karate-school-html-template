jQuery(document).ready(function(){

    "use strict";

    // here all ready functions

    adio_animate_sidebar();
    adio_switcher();
    adio_accordion_mobile();
    adio_slide_menu();
    adio__slick();
    adio_aos();

});




// -----------------------------------------------------
// -----------------    SWITCHER MENU   --------------------
// -----------------------------------------------------

function adio_switcher(){

    "use strict";

    var switcherOpener	= jQuery('.sidebar__click');
    var leftPart = jQuery('.sidebar');
    var subMenu = jQuery ('.navigation__second');

      jQuery(window).on('scroll',function(){
        var windowt = jQuery(window).scrollTop();
       var philos = '.ident';
       var scrollTarget = jQuery(philos).height();

      if(windowt-130 >= scrollTarget){
            switcherOpener.css({'display':'block'});
            }
           else if(windowt<=50){
            leftPart.removeClass('opened');
            switcherOpener.removeClass('opened');
            switcherOpener.css({'display':'none'});
            subMenu.removeClass('opened');
        }
       else {
            switcherOpener.css({'display':'none'});
        }
        });
        switcherOpener.on('click',function(){
        if(switcherOpener.hasClass('opened')){
            switcherOpener.removeClass('opened');
            leftPart.removeClass('opened');
            subMenu.removeClass('opened');

        }else{
            switcherOpener.addClass('opened');
            leftPart.addClass('opened');
            subMenu.addClass('opened');
        }
    });
   }



// -----------------------------------------------------
// -----------------    ACCORDION MOBILE MENU   --------
// -----------------------------------------------------

function adio_accordion_mobile() {

    "use strict";

    var accordToggle = jQuery('p');

    accordToggle.click(function () {

        if (jQuery('.second__nav').is(':visible')) {
            jQuery('.second__nav').slideUp(600);
            jQuery('.main__nav__span').removeClass('active');
            jQuery('.main__nav__p').removeClass('icons__active');
        }
        else{
            jQuery(this).parent().next().slideToggle(600);
            jQuery(this).prev().addClass('active');
            jQuery(this).addClass('icons__active');
        }
    });

    var accordMainToggle = jQuery('.toggle-switch');

    accordMainToggle.click(function () {
        if (jQuery('.toggle-block-container').is(':visible')) {
            jQuery('.toggle-block-container').slideUp(600);
            accordMainToggle.removeClass('toggleActive');
            }
            else {
            jQuery('.toggle-block-container').slideToggle(600);
            accordMainToggle.addClass('toggleActive');
        }
    });
}

// -----------------------------------------------------
// -----------------    SLIDE MENU    --------------------
// -----------------------------------------------------

function adio_slide_menu() {


    var didScroll;

    jQuery(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = jQuery(this).scrollTop();
        if (st > 50) {
            // Scroll Down
            jQuery('.main_head__nav').fadeOut(150);
            jQuery('.header-top-main-hp').slideDown(250);
        }
        else {

        // Scroll Up
        jQuery('.main_head__nav').fadeIn(250);
        jQuery('.header-top-main-hp').slideUp(150);

    }
}}


// -----------------------------------------------------
// -----------------    AOS    --------------------
// -----------------------------------------------------

function adio_aos() {
    AOS.init({
        once: true,
        offset: 100,
        disable:"mobile",
    });
}

// -----------------------------------------------------
// -----------------    ANIMATION   --------------------
// -----------------------------------------------------

function adio_animate_sidebar() {
    var side = jQuery('.sidebar');
    side.animate({'opacity':'1'},500);
}


// -----------------------------------------------------
// -----------------    SLICK SLIDER    --------------------
// -----------------------------------------------------

function adio__slick() {


   jQuery('.says__main__slide').slick({
      // autoplay:true,
       dots:true,
       appendDots:('.says__main__nav__dotts'),
       prevArrow: ('.says__main__nav__prew'),
       nextArrow: ('.says__main__nav__next'),
   });
   }


