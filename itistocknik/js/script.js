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
    if (window.scrollY > 500) {
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