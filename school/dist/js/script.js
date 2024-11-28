"use strict";

document.addEventListener('DOMContentLoaded', function() {

    var swiper = new Swiper(".comment__slider", {
        spaceBetween: 40,
        freeMode: true,
        slidesPerView: 'auto',
    });  
    var swiper = new Swiper(".practic__slider", {
        spaceBetween: 40,
        slidesPerView: 1,
        breakpoints: {
            1201: {
                spaceBetween: 40,
                slidesPerView: 3
            },
        }
    });  

}, false);