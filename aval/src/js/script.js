"use strict";

document.addEventListener('DOMContentLoaded', function() {

var swiper = new Swiper(".result__slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".result .swiper-button-next",
        prevEl: ".result .swiper-button-prev",
    },
    pagination: {
        el: ".result .swiper-pagination",
    },
});

var swiper = new Swiper(".event__slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".event-next",
        prevEl: ".event-prev",
    },
    breakpoints: {
        1025: {
            slidesPerView: 2,
            spaceBetween: 30,
        }
    }
});

var swiper = new Swiper(".massage__slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".massage-next",
        prevEl: ".massage-prev",
    },
    pagination: {
        el: ".massage__wrapper .swiper-pagination",
    },
    breakpoints: {
        1201: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        769: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    }
});

var swiper = new Swiper(".comment__slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".comment .swiper-button-next",
        prevEl: ".comment .swiper-button-prev",
    },
    pagination: {
        el: ".comment .swiper-pagination",
    },
    breakpoints: {
        1301: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        501: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    }
});

if (window.innerWidth < 1025) {
    var swiper = new Swiper(".service__wrapper", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: ".service__wrapper .swiper-pagination",
        },
    });

    var swiper = new Swiper(".acc__cours_wrapper", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: ".acc .swiper-pagination",
        },
    });
}
    
let tab = document.querySelectorAll('.tab-list li'),
    tabWrapper = document.querySelectorAll('.tab-wrapper');

if(tab !== null) {
    tab.forEach((item, i)=>{
        item.addEventListener('click', ()=>{
            for(let a = 0; a < tab.length; a++) {
                tab[a].classList.remove('active');
                tabWrapper[a].classList.remove('active');
            }
            item.classList.add('active');
            tabWrapper[i].classList.add('active');
        })
    })
}

let navHumburger = document.querySelector('.nav__humburger'),
    nav = document.querySelector('.nav');

if(nav !== null) {
    navHumburger.addEventListener('click',()=>{
        nav.classList.toggle('active');
    })
}

let program = document.querySelectorAll('.program__btn');

if(program !== null) {
    program.forEach((item)=>{
        item.addEventListener('click', ()=>{
            item.classList.toggle('active')
        })
    })
}

let modal = document.querySelectorAll('.modal'),
    modalOverflow = document.querySelectorAll('.modal__overflow'),
    modalClose = document.querySelectorAll('.modal__close'),
    modalReq = document.querySelector('.modal-req'),
    modalReqCall = document.querySelectorAll('.modal-req__call'),
    modalEnter = document.querySelector('.modal-enter'),
    modalEnterCall = document.querySelectorAll('.modal-enter__call'),
    modalReg = document.querySelector('.modal-reg'),
    modalRegCall = document.querySelectorAll('.modal-reg__call');

if(modal !== null) {
    modalOverflow.forEach((item)=>{
        item.addEventListener('click', ()=>{
            for(let a = 0; a < modal.length; a++) {
                modal[a].classList.remove('active')
            }
        })
    })
    modalClose.forEach((item)=>{
        item.addEventListener('click', ()=>{
            for(let a = 0; a < modal.length; a++) {
                modal[a].classList.remove('active')
            }
        })
    })
    modalReqCall.forEach((item)=>{
        item.addEventListener('click', ()=>{
            for(let a = 0; a < modal.length; a++) {
                modal[a].classList.remove('active')
            }
            modalReq.classList.add('active')
        })
    })
    modalEnterCall.forEach((item)=>{
        item.addEventListener('click', ()=>{
            for(let a = 0; a < modal.length; a++) {
                modal[a].classList.remove('active')
            }
            modalEnter.classList.add('active')
        })
    })
    modalRegCall.forEach((item)=>{
        item.addEventListener('click', ()=>{
            for(let a = 0; a < modal.length; a++) {
                modal[a].classList.remove('active')
            }
            modalReg.classList.add('active')
        })
    })
}

}, false);