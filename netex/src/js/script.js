"use strict";

document.addEventListener('DOMContentLoaded', function() {

let drop = document.querySelectorAll('.drop'),
    dropBtn = document.querySelectorAll('.drop-btn');

if(drop !== null) {
    dropBtn.forEach((item,i)=>{
        item.addEventListener('click', ()=>{
            drop[i].classList.toggle('active')
        })
    })
    document.body.addEventListener('click', (event)=>{
        if(!event.target.closest('.drop')) {
            drop.forEach(item=>item.classList.remove('active'))
        } 
    })
}

if(window.innerWidth > 500) {
    var swiper = new Swiper(".service__slider", {
        slidesPerView: "auto",
        spaceBetween: 24,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

let nav = document.querySelector('.nav'),
    navHum = document.querySelector('.nav__hum');

if(nav !== null) {
    navHum.addEventListener('click', ()=>{
        nav.classList.toggle('active')
    })
}

}, false);
