"use strict";

document.addEventListener('DOMContentLoaded', function() {

var swiper = new Swiper(".header__wrapper", {
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".content__wrapper", {
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".content__wrapper .swiper-pagination",
        // dynamicBullets: true,
    },
    navigation: {
        nextEl: ".content__wrapper .swiper-button-next",
        prevEl: ".content__wrapper .swiper-button-prev",
    },
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




}, false);
