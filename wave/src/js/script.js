"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const headerSlider = document.querySelector(".header__wrapper");
    if (headerSlider) {
        new Swiper(headerSlider, {
            spaceBetween: 30,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
        });
    }

    document.querySelectorAll(".content__wrapper").forEach((sliderEl) => {
        new Swiper(sliderEl, {
            spaceBetween: 30,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: sliderEl.querySelector(".swiper-pagination"),
            },
            navigation: {
                nextEl: sliderEl.querySelector(".swiper-button-next"),
                prevEl: sliderEl.querySelector(".swiper-button-prev"),
            },
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            const target = document.querySelector(this.getAttribute("href"));
            if (!target) {
                return;
            }

            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        });
    });
}, false);
