"use strict";

document.addEventListener('DOMContentLoaded', function() {

let serviceBtn = document.querySelectorAll('.service__btn');

if(serviceBtn !== null) {
    serviceBtn.forEach((item)=>{
        item.addEventListener('click', ()=>{
            item.classList.toggle('active')
        })
    })
}

let portItem = document.querySelectorAll('.port__item');

if(portItem.length > 0) {
    const clearPortItems = () => {
        portItem.forEach((item) => {
            item.classList.remove('active');
        });
    };

    document.addEventListener('click', (event) => {
        const currentItem = event.target.closest('.port__item');

        if (!currentItem) {
            clearPortItems();
            return;
        }

        clearPortItems();
        currentItem.classList.add('active');
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        let targetSelector = this.getAttribute('href');

        if(targetSelector === '#') {
            e.preventDefault();
            return;
        }

        let target = document.querySelector(targetSelector);

        if(target === null) {
            return;
        }

        e.preventDefault();

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var swiper = new Swiper(".comment__wrapper", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    navigation: {
        nextEl: ".comment .swiper-button-next",
        prevEl: ".comment .swiper-button-prev",
    },
});

let nav = document.querySelector('.nav'),
    navHum = document.querySelector('.nav__hum');

if(nav !== null) {
    navHum.addEventListener('click', ()=>{
        nav.classList.toggle('active')
    })
}



}, false);
