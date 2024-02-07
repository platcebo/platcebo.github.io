let tab = document.querySelectorAll('.product__tab'),
    info = document.querySelector('.product ul'),
    tabContent = document.querySelectorAll('.product__list');

function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('active');
    }
}

hideTabContent(1);

function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
        tab[b].classList.add('active');
        console.log('[eq');
    }
}

if (info !== null) {
    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('product__tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
}

$(document).ready(function(){
    $('.slider__wrapper').slick({
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/slider_arrow.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/slider_arrow.svg" alt=""></button>'
    });
});

let navFix = document.querySelector('.nav-fix');

window.addEventListener('scroll', ()=> {
    if (window.scrollY > 300) {
        navFix.classList.add('show');
    } else {
        navFix.classList.remove('show');
    }
});

let humburger = document.querySelector('.nav__humburger'),
    nav = document.querySelector('.nav');

humburger.addEventListener('click', ()=>{
    nav.classList.toggle('nav__active');
    document.body.classList.toggle('fix');
});

let modalBtn = document.querySelectorAll('.modal__btn'),
    modalOverflow = document.querySelector('.modal__overflow'),
    modalClose = document.querySelector('.modal__close'),
    modal = document.querySelector('.modal');

for (let i = 0; i < modalBtn.length; i++) {
    modalBtn[i].addEventListener('click', ()=>{
        modal.classList.add('modal__active');
    });
    modalOverflow.addEventListener('click', ()=>{
        modal.classList.remove('modal__active');
    });
    modalClose.addEventListener('click', ()=>{
        modal.classList.remove('modal__active');
    });
}

let card = document.querySelectorAll('.product__card'),
    cardWrapper = document.querySelectorAll('.product__card_wrapper'),
    cardOverflow = document.querySelectorAll('.product__overflow'),
    cardClose = document.querySelectorAll('.product__close');
    
for (let i = 0; i < card.length; i++) {
    cardWrapper[i].addEventListener('click', (event)=>{
        if (event.target.classList.contains('product__btn')) {
            card[i].classList.remove('product__card_active');
        } else {
            card[i].classList.add('product__card_active');
        }
    });
    cardOverflow[i].addEventListener('click', ()=>{
        card[i].classList.remove('product__card_active');
    });
    cardClose[i].addEventListener('click', ()=>{
        card[i].classList.remove('product__card_active');
    });
}

let crateBtn = document.querySelectorAll('.crate__btn'),
    crate = document.querySelector('.crate'),
    crateOverflow = document.querySelector('.crate__overflow'),
    crateClose = document.querySelector('.crate__close');

for (let i = 0; i < crateBtn.length; i++) {
    crateBtn[i].addEventListener('click', ()=>{
        card[i].classList.remove('product__card_active');
        console.log(i);
        crate.classList.add('crate__active');
    });
    crateOverflow.addEventListener('click', ()=>{
        crate.classList.remove('crate__active');
    });
    crateClose.addEventListener('click', ()=>{
        crate.classList.remove('crate__active');
    });
}