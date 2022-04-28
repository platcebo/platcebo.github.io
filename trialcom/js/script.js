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
});