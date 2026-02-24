"use strict";

document.addEventListener('DOMContentLoaded', function() {

var swiper = new Swiper(".card__thumb", {
    spaceBetween: 20,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        1025: {
            // slidesPerView: 2,
            spaceBetween: 50
        },
        601: {
            // slidesPerView: 2,
            spaceBetween: 4
        },
    }
});
var swiper2 = new Swiper(".card__slider", {
    spaceBetween: 10,
    thumbs: {
        swiper: swiper,
    },
    effect: "fade",
});

}, false);
