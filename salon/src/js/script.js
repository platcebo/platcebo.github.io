'use strict'

document.addEventListener('DOMContentLoaded', function() {

    let produceSwiper = document.querySelectorAll(".produce__block .produce__slider"),
        produceNext = document.querySelectorAll(".produce__block .swiper-button-next"),
        produceprev = document.querySelectorAll(".produce__block .swiper-button-prev");

    for(let i = 0; i < produceSwiper.length; i++) {
        var swiper = new Swiper(produceSwiper[i], {
            slidesPerView: 1,
            spaceBetween: 25,  
            navigation: {
                nextEl: produceNext[i],
                prevEl: produceprev[i],
            },
            pagination: {
              el: ".produce__block .swiper-pagination",
            },
            watchSlidesProgress: true,
            breakpoints: {
                1025: {
                  slidesPerView: 3,
                },
                769: {
                    slidesPerView: 2,
                }
            }
        });
    }

    var swiper = new Swiper('.montage__slider .swiper', {
        slidesPerView: 1,
        spaceBetween: 20,  
        loop: true,
        navigation: {
            nextEl: ".montage__slider .swiper-button-next",
            prevEl: ".montage__slider .swiper-button-prev",
        },
    });

    let expSwiper = document.querySelectorAll(".exp__block .exp__slider"),
        expNext = document.querySelectorAll(".exp__block .swiper-button-next"),
        expprev = document.querySelectorAll(".exp__block .swiper-button-prev");

    for(let i = 0; i < expSwiper.length; i++) {
        var swiper = new Swiper(expSwiper[i], {
            slidesPerView: 1,
            spaceBetween: 20,  
            navigation: {
                nextEl: expNext[i],
                prevEl: expprev[i],
            },
        });
    }


    let drop = document.querySelectorAll('.drop'),
        dropBtn = document.querySelectorAll('.drop__btn');

    if(drop !== null) {
        drop.forEach((item, i)=>{
            document.body.addEventListener('click', (event)=>{
                let target = event.target;
                
                if(target == dropBtn[i]) {
                    item.classList.toggle('active');
                    dropBtn[i].classList.toggle('active')
                } else {
                    item.classList.remove('active');
                    dropBtn[i].classList.remove('active')
                }
            })
        })
    }

    let select = document.querySelectorAll('.catalog__form_select select'),
        selectText = document.querySelectorAll('.catalog__form_select p');

    if (select !== null) {
        select.forEach((item, i)=>{
            selectText[i].innerHTML = item.value
            item.addEventListener('change', ()=>{
                selectText[i].innerHTML = item.value
            })
        })
    }

    let navHum = document.querySelectorAll('.nav__hum'),
        nav = document.querySelector('.nav-menu');

    if(nav !== null) {
        navHum.forEach((item)=>{
            item.addEventListener('click', ()=>{
                nav.classList.toggle('active')
            })
        })
    }
})