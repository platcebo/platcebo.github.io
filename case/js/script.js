$(document).ready(function(){
    if ($(window).width() > 768) {
        $('.account__slider').slick({
            centerMode: true,
            slidesToShow: 1,
            dots: true, 
            arrows: false,
            centerPadding: '200px',
            infinite: false,
        });
    }
});
  