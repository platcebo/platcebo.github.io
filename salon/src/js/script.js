'use strict'

document.addEventListener('DOMContentLoaded', function() {

    let produceSwiper = document.querySelectorAll(".produce__block .produce__slider"),
        produceNext = document.querySelectorAll(".produce__block .swiper-button-next"),
        produceprev = document.querySelectorAll(".produce__block .swiper-button-prev");

    for(let i = 0; i < produceSwiper.length; i++) {
        var swiper = new Swiper(produceSwiper[i], {
            slidesPerView: 3,
            spaceBetween: 16,  
            navigation: {
                nextEl: produceNext[i],
                prevEl: produceprev[i],
            },
            pagination: {
              el: ".produce__block .swiper-pagination",
            },
            watchSlidesProgress: true,
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

})