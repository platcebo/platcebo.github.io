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
            nav.classList.toggle('active');
            navHum.classList.toggle('active');
        })
    }

}, false);