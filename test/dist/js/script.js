var swiper = new Swiper(".slider__slider", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: ".slider__dots",
        clickable: true,
    },
});
var swiper = new Swiper(".carier__slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});