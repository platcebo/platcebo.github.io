$(document).ready(function(){
    $('.slider__wrapper').slick({
        infinite: true,
        autoplay: true,
        dots: true,
    });

    $('.comment__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: true,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><</button>',
        nextArrow: '<button type="button" class="slick-next">></button>',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: false,
                }
            },
            {
                breakpoint: 426,
                settings: {
                    adaptiveHeight: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    $('.modal__fun').click(function () {
        $('.modal').addClass('modal__active');
        console.log('rkbr');
    });
     
    $('.modal__close').click(function () {
        $('.modal').removeClass('modal__active');
    });
});