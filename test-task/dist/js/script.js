"use strict";

document.addEventListener('DOMContentLoaded', function() {

var swiper = new Swiper(".header__slider", {
    pagination: {
        el: ".header__slider .swiper-pagination",
    },
});

let headerSlides = document.querySelectorAll('.header__slide');

if(headerSlides.length > 0) {
    swiper.on('slideChange', function () {
        let currentIndex = swiper.activeIndex,
            headerPag = document.querySelectorAll('.header__pag_item');

        headerPag.forEach(item=>item.classList.remove('active'));

        headerPag[currentIndex].classList.add('active')
    });
}   


}, false);
