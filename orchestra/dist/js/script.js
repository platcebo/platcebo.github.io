"use strict";

document.addEventListener('DOMContentLoaded', function() {

let tabPoint = document.querySelectorAll('.program__tab li'),
    tabWrapper = document.querySelectorAll('.program__wrapper');

if(tabPoint !== null) {
    tabPoint.forEach((item,i)=>{
        item.addEventListener('click', ()=>{
            tabPoint.forEach(a=>a.classList.remove('active'));
            tabWrapper.forEach(a=>a.classList.remove('active'));
            item.classList.add('active');
            tabWrapper[i].classList.add('active');
        })
    })
}

var swiper = new Swiper(".comment__wrapper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        601:{
            slidesPerView: 3,
        }
    }
});

const select = document.querySelector('.form__select select');
    const text = document.querySelector('.form__select p');

    select.addEventListener('change', function () {
        text.textContent = this.value;
    });


}, false);
