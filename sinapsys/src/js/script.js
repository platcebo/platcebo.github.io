'use strict'

AOS.init();

var swiper = new Swiper(".comment__slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: true,
    navigation: {
        nextEl: ".comment .swiper-button-next",
        prevEl: ".comment .swiper-button-prev",
    },
    breakpoints: {
        1025: {
          slidesPerView: 3,
        },
        769: {
            slidesPerView: 2,
        }
      }
    
});

let questBtn = document.querySelectorAll('.quest__btn');

if(questBtn !== null) {
    questBtn.forEach((item)=>{
        item.addEventListener('click', ()=>{
            item.classList.toggle('active');
        })
    })
}

let hum = document.querySelector('.nav__hum'),
    nav = document.querySelector('.nav');

if(hum !== null) {
    hum.addEventListener('click', ()=>{
        nav.classList.toggle('active')
    })
}