"use strict";

document.addEventListener('DOMContentLoaded', function() {

var swiper = new Swiper(".header__slider", {});

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        nav.classList.remove('active')
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    });
};

let nav = document.querySelector('.nav'),
    navClose = document.querySelector('.nav__close'),
    navHum = document.querySelector('.nav__hum');

if(nav !== null) {
    navClose.addEventListener('click', ()=>{
        nav.classList.remove('active')
    })
    navHum.addEventListener('click', ()=>{
        nav.classList.add('active')
    })
}


}, false);
