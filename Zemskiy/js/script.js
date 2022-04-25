$(document).ready(function(){
    if ($(window).width() < 769) {
        $('.realiz__slider').slick({
            slidesToShow: 2,
            dots: true, 
            arrows: false,
            infinite: false,
            responsive: [
                {
                    breakpoint: 426,
                    settings: {
                        slidesToShow: 1,
                  }
                },
              ]
        });
        $('.portfolio__mob').slick({
            slidesToShow: 2,
            dots: true, 
            arrows: false,
            infinite: false,
            responsive: [
                {
                    breakpoint: 426,
                    settings: {
                        slidesToShow: 1,
                  }
                },
            ]
        });
        $('.case__mob').slick({
            slidesToShow: 2,
            dots: true, 
            arrows: false,
            infinite: false,
            responsive: [
                {
                    breakpoint: 426,
                    settings: {
                        slidesToShow: 1,
                  }
                },
            ]
        });
    }
});