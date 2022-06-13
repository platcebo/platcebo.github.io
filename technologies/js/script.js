$(document).ready(function(){
    $('.catalog__wrapper').slick({
        variableWidth: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.product__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product__slider_nav'
    });
    $('.product__slider_nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product__slider',
        dots: true,
        arrows: true,
        centerMode: true,
        adaptiveHeight: false,
    });

    let nav = document.querySelectorAll('.nav__humburger'),
        aside = document.querySelector('.aside');

    for(let i = 0; i < nav.length; i++) {
        nav[i].addEventListener('click', ()=>{
            aside.classList.toggle('aside__active');
        });
    }

    let tab = document.querySelectorAll('.har__point'),
        info = document.querySelector('.har__title'),
        tabContent = document.querySelectorAll('.har__wrapper');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('har__wrapper_active');
            tab[i].classList.remove('har__point_active');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (! tabContent[b].classList.contains('har__wrapper_active')) {
            tabContent[b].classList.add('har__wrapper_active');
            tab[b].classList.add('har__point_active');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('har__point')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });

    let input = document.querySelectorAll('.product__sum_input'),
        plus = document.querySelectorAll('.product__sum_plus'),
        min = document.querySelectorAll('.product__sum_min');

    for (let i = 0; i < input.length; i++) {
        plus[i].addEventListener('click', ()=>{
            input[i].setAttribute('value', (parseInt(input[i].getAttribute('value')) + 1).toString());
        });
        min[i].addEventListener('click', ()=>{
            input[i].setAttribute('value', (parseInt(input[i].getAttribute('value')) - 1).toString());
        });
    }
});