"use strict";

document.addEventListener('DOMContentLoaded', function() {

let helpBtn = document.querySelectorAll('.help__btn');

if(helpBtn != null) {
    helpBtn.forEach((item)=>{
        item.addEventListener('click', ()=>{
            for(let a = 0; a < helpBtn.length; a++) {
                helpBtn[a].classList.remove('active')
            }
            item.classList.add('active')
        })
    })
}

var swiper = new Swiper(".case__slider", {
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
        nextEl: ".case .swiper-button-next",
        prevEl: ".case .swiper-button-prev",
    },
});

let nav = document.querySelector('.nav'),
    navHum = document.querySelector('.nav__hum');

if(nav !== null) {
    navHum.addEventListener('click',()=>{
        nav.classList.toggle('active')
    })
}

}, false);