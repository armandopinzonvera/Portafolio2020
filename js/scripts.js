/*////////////   PARALLAX   //////////////*/
$(document).ready(function(){
    $(window).scroll(function(){
        var barra = $(window).scrollTop();
        var posicion2 = barra * 0.2;
        var posicion3 = barra * 0.4;
        var posicion4 = barra * 0.6;
        var posicion5 = barra * 0.8;



        $('.xxx').css({
            'background-position':'0 +' + posicion2 + 'px'
        });
        $('#tres').css({
            'background-position':'0 +' + posicion3 + 'px'
        });
        $('#four').css({
            'background-position':'0 +' + posicion4 + 'px'
        });
        $('#five').css({
            'background-position':'0 +' + posicion5 + 'px'
        });       

    });
});

    (function ($) {
    "use strict";

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict















