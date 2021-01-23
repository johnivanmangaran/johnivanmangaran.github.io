(function($) {
    'use strict';

$(document).ready(function(event) {
    $('.owl_projects').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        // center: true,
        smartSpeed:800,
        // animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        dotsEach: 3,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });


});



jQuery(document).ready(function(){
    jQuery('.skill_container').each(function(){
        jQuery(this).find('.skills').animate({
            width:jQuery(this).attr('data-percent')
        },3000);
    });
});

$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'linear',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

})(jQuery);