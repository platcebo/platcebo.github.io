"use strict";

document.addEventListener('DOMContentLoaded', function() {

let helpBtn = document.querySelectorAll('.help__btn');

if(helpBtn.length > 0) {
    helpBtn.forEach((item)=>{
        item.addEventListener('click', ()=>{
            for(let a = 0; a < helpBtn.length; a++) {
                helpBtn[a].classList.remove('active')
            }
            item.classList.add('active')
        })
    })

    helpBtn[0].classList.add('active')
}

var swiper = new Swiper(".case__slider", {
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
        nextEl: ".case .swiper-button-next",
        prevEl: ".case .swiper-button-prev",
    },
});

var swiper = new Swiper(".trouble__wrapper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
        nextEl: ".trouble .swiper-button-next",
        prevEl: ".trouble .swiper-button-prev",
    },
});

let nav = document.querySelector('.nav'),
    navHum = document.querySelector('.nav__hum');

if(nav !== null) {
    navHum.addEventListener('click',()=>{
        nav.classList.toggle('active')
    })
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

let modal = document.querySelectorAll('.modal'),
    modalOverflow = document.querySelectorAll('.modal__overflow'),
    modalClose = document.querySelectorAll('.modal__close');

if(modal !== null) {
    modalClose.forEach((item)=>{
        item.addEventListener('click', ()=>{
            for(let a = 0; a < modal.length; a++) {
                modal[a].classList.remove('active');
            }
        })
    })
    modalOverflow.forEach((item)=>{
        item.addEventListener('click',()=>{
            for(let a = 0; a < modal.length; a++) {
                modal[a].classList.remove('active');
            }
        })
    })
}

let modalCase = document.querySelectorAll('.case-modal'),
    modalCaseCall = document.querySelectorAll('.case-modal__call');

if(modalCase !== null) {
    modalCaseCall.forEach((item,i)=>{
        item.addEventListener('click', ()=>{
            modalCase[i].classList.add('active');
        })
    })
}

let modalForm = document.querySelector('.modal-form'),
    modalFormCall = document.querySelectorAll('.modal-form__call');

if(modalForm !== null) {
    modalFormCall.forEach((item,i)=>{
        item.addEventListener('click', ()=>{
            modalForm.classList.add('active');
        })
    })
}

let troublePag = document.querySelectorAll('.trouble__pag');

if(troublePag.length > 0) {
    troublePag.forEach((item,i)=>{
        item.innerHTML = i+1 + '/' + troublePag.length
    })
}

let programBtn = document.querySelectorAll('.program__btn'),
    programWrapper = document.querySelectorAll('.program__wrapper');

if(programBtn !== null) {
    programBtn.forEach((item, i)=>{
        item.addEventListener('click', ()=>{
            item.classList.toggle('active');
            programWrapper[i].classList.toggle('active');
        })
    })
}



}, false);