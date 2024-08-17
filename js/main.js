(function ($) {
    "use strict";

   


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('sticky').css('top', 0);
            } else {
                $('.fixed-top').removeClass('sticky');
            }
        } else {
            if ($(this).scrollTop() > 119) {
                $('.fixed-top').addClass('sticky').css('top', -119);
            } else {
                $('.fixed-top').removeClass('sticky').css('top', 0);
            }
        } 
    });
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    


})(jQuery);

