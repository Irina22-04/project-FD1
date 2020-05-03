
jQuery(function ($) {
    var toTop = $('.to-top');
    var body = $('html, body');
    var butMenu = $('.burger-button');
    var menuEl = $('.menu');

    $(window).scroll(function () {
        var winScrollTopValue = $(window).scrollTop();

        if (winScrollTopValue > 600) {
            toTop.fadeIn(600);
        }
        else if (winScrollTopValue < 1000) {
            toTop.hide();
        }
    });

    toTop.on('click', function (event) {
        event.preventDefault();
        body.animate({ scrollTop: 0 }, 1200);
    });

    butMenu.on('click', function (event) {
        menuEl.toggleClass('visibleEl');
    });

    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2500,
    }
    );

});

new WOW().init();