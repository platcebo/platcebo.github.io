$(document).ready(function(){
    $('.header__history').slick({
        infinite: true,
        dots: true,
        arrows: false,
        fade: true,
    });

    $('.doctor__block').slick({
        infinite: true,
        dots: false,
        arrows: true,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    infinite: true,
                    dots: false,
                    arrows: true,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    infinite: true,
                    dots: true,
                    arrows: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 511,
                settings: {
                    infinite: true,
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                }
            },
        ]        
    });

    $('.comment__slider').slick({
        infinite: true,
        slidesToShow: 1,
        dots: false,
        arrows: true,
        variableWidth: true,
        centerMode: true,
        adaptiveHeight: true,
        appendArrows: $('.comment__arrow'),
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    infinite: false,
                    dots: true,
                    arrows: false,
                    adaptiveHeight: true,
                    variableWidth: false,
                    centerMode: false,
                    centerPadding: "0px"
                }
            },
        ]    
    });
});

let tab = document.querySelectorAll('.doctor__tab_point'),
    info = document.querySelector('.doctor__tab'),
    tabContent = document.querySelectorAll('.doctor__block');

if (info !== null) {
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('doctor__block_active');
            tab[i].classList.remove('doctor__tab_point_active');
        }
    }
    
    hideTabContent(1);
    
    function showTabContent(b) {
        if (!tabContent[b].classList.contains('doctor__block_active')) {
            tabContent[b].classList.add('doctor__block_active');
            tab[b].classList.add('doctor__tab_point_active');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('doctor__tab_point')) {
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

let DocTab = document.querySelectorAll('.doctor-tab__tab_point'),
    Docinfo = document.querySelector('.doctor-tab__tab'),
    DocTabContent = document.querySelectorAll('.doctor-tab__block');

if (Docinfo !== null) {
    function hideTabContentDoc(a) {
        for (let i = a; i < DocTabContent.length; i++) {
            DocTabContent[i].classList.remove('doctor-tab__block_active');
            DocTab[i].classList.remove('doctor-tab__tab_point_active');
        }
    }
    
    hideTabContentDoc(1);
    
    function showTabContentDoc(b) {
        if (!DocTabContent[b].classList.contains('doctor-tab__block_active')) {
            DocTabContent[b].classList.add('doctor-tab__block_active');
            DocTab[b].classList.add('doctor-tab__tab_point_active');
        }
    }

    Docinfo.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('doctor-tab__tab_point')) {
            for(let i = 0; i < DocTab.length; i++) {
                if (target == DocTab[i]) {
                    hideTabContentDoc(0);
                    showTabContentDoc(i);
                    break;
                }
            }
        }
    
    });
}

let quizeBlock = document.querySelectorAll('.quize__block'),
    quizeBtn = document.querySelectorAll('.quize__btn'),
    modal = document.querySelector('.modal'),
    modalClose = document.querySelector('.modal__close'),
    modalOverflow = document.querySelector('.modal__overflow');

if(quizeBtn !== null) {
    for(let i = 0; i < quizeBtn.length; i++) {
        quizeBtn[i].addEventListener('click', ()=>{
            if (i < 6) {
                quizeBlock[i].classList.remove('quize__block_active');
                quizeBlock[i+1].classList.add('quize__block_active');
            } else if (i == 6) {
                modal.classList.add('modal__active');
                console.log('открывается модалка');
            }
        });
    }
    if(modalClose !== null) {
        modalClose.addEventListener('click', ()=>{
            modal.classList.remove('modal__active');
        });
        modalOverflow.addEventListener('click', ()=>{
            modal.classList.remove('modal__active');
        });
    }
}

let modalImg = document.querySelectorAll('.modal-img'),
    modalImgBtn = document.querySelectorAll('.modal-img__btn'),
    modalImgClose = document.querySelectorAll('.modal-img__close'),
    modalImgOverfow = document.querySelectorAll('.modal-img__overflow');

if (modalImg !== null) {
    for(let i = 0; i < modalImgBtn.length; i++) {
        modalImgBtn[i].addEventListener('click', () => {
            modalImg[i].classList.add('modal-img__active');
        });
        modalImgClose[i].addEventListener('click', ()=>{
            modalImg[i].classList.remove('modal-img__active');
        });
        modalImgOverfow[i].addEventListener('click', ()=>{
            modalImg[i].classList.remove('modal-img__active');
        });
        console.log(modalImg[i]);
    }
    console.log('i');
}

let nav = document.querySelector('.nav'),
    navHumburger = document.querySelector('.nav__humburger');

if (nav !== null) {
    navHumburger.addEventListener('click', ()=>{
        nav.classList.toggle('nav__active');
    });
}