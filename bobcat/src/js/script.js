'use strict'

document.addEventListener('DOMContentLoaded', function() {
    
    var swiper = new Swiper(".advant__slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: ".advant .swiper-pagination",
        },
        navigation: {
            nextEl: ".advant .swiper-button-next",
            prevEl: ".advant .swiper-button-prev",
        },
        breakpoints: {
            1024: {
              slidesPerView: 3,
              spaceBetween: 20
            },
        }
    });

    var swiper = new Swiper(".stock__img", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
          el: ".stock .swiper-pagination",
        },
        navigation: {
            nextEl: ".stock .swiper-button-next",
            prevEl: ".stock .swiper-button-prev",
        },
    });

}, false);