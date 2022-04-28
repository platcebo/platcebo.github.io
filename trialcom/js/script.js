$(document).ready(function(){
    $('.header__slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        fade: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/arrow.svg"></button>'
    });

    let humburger = document.querySelector('.nav__humburger'),
        nav = document.querySelector('.nav');

    humburger.addEventListener('click', ()=>{
        nav.classList.toggle('nav__active');
    });

    let tab = document.querySelectorAll('.equip__tab'),
        info = document.querySelector('.equip__tab_wrapper'),
        tabContent = document.querySelectorAll('.equip__wrapper');
    
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('equip__wrapper_active');
            tab[i].classList.remove('equip__tab_active');
        }
    }
    
    hideTabContent(1);
    
    function showTabContent(b) {
        if (!tabContent[b].classList.contains('equip__wrapper_active')) {
            tabContent[b].classList.add('equip__wrapper_active');
            tab[b].classList.add('equip__tab_active');
        }
    }
    
    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('equip__tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    let modalBtn = document.querySelectorAll('.modal__btn'),    
        modal = document.querySelector('.modal'),
        modalOverflow = document.querySelector('.modal__overflow'),
        modalClose = document.querySelector('.modal__close');

    for(let i = 0; i < modalBtn.length; i++) {
        modalBtn[i].addEventListener('click', ()=>{
            modal.classList.add('modal__active');
        });
    }
    modalOverflow.addEventListener('click', ()=>{
        modal.classList.remove('modal__active');
    });
    modalClose.addEventListener('click', ()=>{
        modal.classList.remove('modal__active');
    });

    let input = document.querySelectorAll('.modal input'),
        label = document.querySelectorAll('.modal label');

    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener('input', ()=>{
            if (input[i].value == '') {
                label[i].classList.remove('active');
            } else {
                label[i].classList.add('active');
            }
        });
    }

    let crateBtn = document.querySelectorAll('.crate__btn'),    
        crate = document.querySelector('.crate'),
        crateOverflow = document.querySelector('.crate__overflow'),
        crateClose = document.querySelector('.crate__close');

    for(let i = 0; i < crateBtn.length; i++) {
        crateBtn[i].addEventListener('click', ()=>{
            crate.classList.add('crate__active');
        });
    }
    crateOverflow.addEventListener('click', ()=>{
        crate.classList.remove('crate__active');
    });
    crateClose.addEventListener('click', ()=>{
        crate.classList.remove('crate__active');
    });

    let crateInput = document.querySelectorAll('.crate input'),
        crateLabel = document.querySelectorAll('.crate label');

    for (let i = 0; i < crateInput.length; i++) {
        crateInput[i].addEventListener('input', ()=>{
            if (crateInput[i].value == '') {
                crateLabel[i].classList.remove('active');
            } else {
                crateLabel[i].classList.add('active');
            }
        });
    }
});