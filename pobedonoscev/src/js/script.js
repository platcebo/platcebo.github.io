'use strict'

document.addEventListener('DOMContentLoaded', function() {

    var swiper = new Swiper(".header__slider", {
        loop: true,
        spaceBetween: 30,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".header .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".header .swiper-button-next",
          prevEl: ".header .swiper-button-prev",
        },
    });

    var swiper = new Swiper(".project__slider", {
        loop: true,
        spaceBetween: 30,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".project .swiper-pagination",
          clickable: true,
        },
    });

    var swiper = new Swiper(".news__slider", {
        loop: false,
        spaceBetween: 23,
        slidesPerView: "auto",
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
    });

    let drop = document.querySelectorAll('.drop'),
        dropBtn = document.querySelectorAll('.drop__btn');

    if(drop !== null) {
        dropBtn.forEach((item, i) =>{
            item.addEventListener('click', ()=>{
                drop[i].classList.toggle('active');
                item.classList.toggle('active');
            })
        })
    }

    let nav = document.querySelector('.nav'),
        navHum = document.querySelector('.nav__hum');

    if(nav !== null) {
        navHum.addEventListener('click', ()=>{
            if(nav.classList.contains('active')) {
                nav.classList.remove('active');
                navHum.classList.remove('active');
                document.body.classList.remove('fix');
                document.documentElement.classList.remove('fix');
                nav.style.maxHeight = window.clientHeight + 'px'
            } else {
                nav.classList.add('active');
                navHum.classList.add('active');
                document.body.classList.add('fix');
                document.documentElement.classList.add('fix');
            }

        })
    }

}, false);