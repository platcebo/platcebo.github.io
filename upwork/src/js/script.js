"use strict";

document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".vacancy-like__slider", {
        slidesPerView: 'auto',
        spaceBetween: 20,
        navigation: {
            nextEl: ".vacancy-like__slider .swiper-button-next",
            prevEl: ".vacancy-like__slider .swiper-button-prev",
        },
    });

    let dropdown = document.querySelectorAll('.dropdown__list'),
        dropdownBtn = document.querySelectorAll('.dropdown__btn');

    if(dropdown !== null) {
        dropdown.forEach((item,i)=>{
            dropdownBtn[i].addEventListener('click', ()=>{
                if(dropdownBtn[i].classList.contains('active')) {
                    dropdownBtn[i].classList.remove('active');
                    item.classList.remove('active')
                } else {
                    for(let a = 0; a < dropdown.length; a++) {
                        dropdownBtn[a].classList.remove('active');
                        dropdown[a].classList.remove('active')
                    }
                    dropdownBtn[i].classList.add('active');
                    item.classList.add('active')
                }
            })
        })
    }

    let select = document.querySelectorAll('.select select'),
        selectText = document.querySelectorAll('.select p');

    if(select !== null) {
        select.forEach((item, i)=>{
            item.addEventListener('change', ()=>{
                selectText[i].innerHTML = item.value
            })
        })
    }

    let nav = document.querySelector('.nav'),
        navHum = document.querySelector('.nav__hum');

    if(nav !== null) {
        navHum.addEventListener('click', ()=>{
            nav.classList.toggle('active');
            document.body.classList.toggle('fix')
            document.body.parentNode.classList.toggle('fix')
        })
    }

    let asideBtn = document.querySelector('.search__aside .title'),
        aside = document.querySelector('.search__aside');

    if(aside !== null) {
        asideBtn.addEventListener('click', ()=>{
            aside.classList.toggle('active')
        })
    }

}, false);