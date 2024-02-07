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

    $( "#slider-range" ).slider({
        range: true,
        min: 1,
        max: 999,
        values: [ 1, 999 ],
        slide: function( event, ui ) {
            $( ".set__range_one" ).val( ui.values[ 0 ] );
            $( ".set__range_second" ).val( ui.values[ 1 ] );
        }
    });

    $( "#slider-range-set" ).slider({
        range: true,
        min: 1,
        max: 999,
        values: [ 1, 999 ],
        slide: function( event, ui ) {
            $( ".set__range_third" ).val( ui.values[ 0 ] );
            $( ".set__range_four" ).val( ui.values[ 1 ] );
        }
    });
});

let nav = document.querySelectorAll('.nav__humburger'),
    aside = document.querySelector('.aside');

if(nav !== null) {
    for(let i = 0; i < nav.length; i++) {
        nav[i].addEventListener('click', ()=>{
            aside.classList.toggle('aside__active');
        });
    }
}

let asidePoint = document.querySelectorAll('.aside__tab_point'),
    asidePointUl = document.querySelectorAll('.aside__tab_wrapper ul'),
    asidePointUlli = document.querySelectorAll('.aside__tab_point_ulli'),
    asidePointOl = document.querySelectorAll('.aside__tab_wrapper ol'),
    asidePointolli = document.querySelectorAll('.aside__tab_point_olli');

if (asidePoint !== null) {
    for (let i = 0; i < asidePoint.length; i++) {
        asidePoint[i].addEventListener('click', function(event) {
            asidePointUl[i].classList.toggle('active');
        });
    }
    for (let i = 0; i < asidePointUlli.length; i++) {
        asidePointUlli[i].addEventListener('click', function(event){
            // event.preventDefault();
            asidePointOl[i].classList.toggle('active');
        });
    }
}

let input = document.querySelectorAll('.product__sum_input'),
    plus = document.querySelectorAll('.product__sum_plus'),
    min = document.querySelectorAll('.product__sum_min');

if (input !== null) {
    for (let i = 0; i < input.length; i++) {
        plus[i].addEventListener('click', ()=>{
            input[i].setAttribute('value', (parseInt(input[i].getAttribute('value')) + 1).toString());
        });
        min[i].addEventListener('click', ()=>{
            input[i].setAttribute('value', (parseInt(input[i].getAttribute('value')) - 1).toString());
        });
    }
}

let tab = document.querySelectorAll('.har__point'),
    info = document.querySelector('.har__title'),
    tabContent = document.querySelectorAll('.har__wrapper');

if (tab !== null) {
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
}

