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

let howTab = document.querySelectorAll('.how__tab li'),
    howImg = document.querySelectorAll('.how__bg');

if(howTab !== null) {
    howTab.forEach((item,i)=>{
        item.addEventListener('click', ()=>{
            howTab.forEach((a,b)=>{
                howImg[b].classList.remove('active')
                a.classList.remove('active')
            })
            item.classList.add('active')
            howImg[i].classList.add('active')
        })
    })
}

[].forEach.call(document.querySelectorAll('[data-phone-pattern]'), function (input) {
    let keyCode;

    function mask(event) {
        if (event.keyCode) keyCode = event.keyCode;

        let matrix = "+_____________", // 12 знаков "_" после +7
            i = 0,
            val = input.value.replace(/\D/g, "").substring(0, 13), // максимум 13 цифр после 7
            new_value = "+" + val;

        if (event.type === "blur" && val.length < 13) {
            input.value = "";
            return;
        }

        input.value = new_value;
    }

    input.addEventListener("input", mask);
    input.addEventListener("focus", mask);
    input.addEventListener("blur", mask);
    input.addEventListener("keydown", mask);
});

}, false);
