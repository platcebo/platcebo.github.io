$(document).ready(function(){
    $('.header__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
              breakpoint: 769,
              settings: {
                arrows: false,
              }
            }
        ]        
    });

    if (innerWidth < 769) {
        $('.affiliates__grid').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
        });
    }

    let accordBtn = document.querySelectorAll('.company__btn'),
        accordText = document.querySelectorAll('.company__text');

    if (accordBtn !== null) {
        for (let i = 0; i < accordBtn.length; i++) {
            accordBtn[i].addEventListener('click', ()=> {
                accordBtn[i].classList.toggle('company__btn_active');
                accordText[i].classList.toggle('company__text_active');
            });
        }
    }

    let humburger = document.querySelector('.nav__humburger'),
        humburgerWrapper = document.querySelector('.nav');

    if(humburgerWrapper !== null) {
        humburger.addEventListener('click', ()=>{
            if (document.body.style.overflow == "hidden"){
                humburgerWrapper.classList.remove('nav__active');
                document.body.style.overflow = "visible";
            } else {
                humburgerWrapper.classList.add('nav__active');
                document.body.style.overflow = "hidden";
            }
        });
    }

    let detailedMore = document.querySelectorAll('.detailed__more'),
        detailedText = document.querySelectorAll('.detailed__info ul');

    if(detailedMore !== null) {
        for (let i = 0; i < detailedMore.length; i++) {
            detailedMore[i].addEventListener('click', ()=> {
                detailedMore[i].classList.toggle('detailed__more_active');
                detailedText[i].classList.toggle('active');
            });
        }
    }

    let fitsBtn = document.querySelector('.fits__btn'),
        fitsAccord = document.querySelector('.fits__accord');

    if (fitsBtn !== null) {
        fitsBtn.addEventListener('click', ()=> {
            fitsAccord.classList.toggle('fits__accord_active');
            fitsBtn.classList.toggle('fits__btn_active');
        });
    }

    let navPageUl = document.querySelector('.nav-page ul'),
        navPageArrow = document.querySelector('.nav-page__arrow');

    if (navPageUl !== null) {
        navPageArrow.addEventListener('click', ()=> {
            navPageUl.classList.toggle('active');
            navPageArrow.classList.toggle('nav-page__arrow_active');
        });
    }

    let requestBtn = document.querySelector('.request__btn');

    if (innerWidth < 426 && requestBtn !== null) {
        requestBtn.textContent = 'Опишите ваш проект и мы поможем в его реализации';
    }

    let marketBtn = document.querySelectorAll('.marketing-accord__btn'),
        marketText = document.querySelectorAll('.marketing-accord__text');

    if (marketBtn !== null) {
        for (let i = 0; i < marketBtn.length; i++) {
            marketBtn[i].addEventListener('click', ()=> {
                marketBtn[i].classList.toggle('marketing-accord__btn_active');
                marketText[i].classList.toggle('marketing-accord__text_active');
            });
        }
    }

    if (innerWidth < 769) {
        $('.portfolio__item').click(function(){
            if(!$(this).hasClass('portfolio__item_active')){
            $(this).siblings().removeClass('portfolio__item_active');
            $(this).addClass('portfolio__item_active');
            }
        });
    }    
    
    let quizePage = document.querySelectorAll('.quize__page'),
        quizeButton = document.querySelectorAll('.quize__next'),
        // quizwBtnLast = document.querySelector('.quize__prev')
        quizePrev = document.querySelectorAll('.quize__prev');

    if(quizePage !== null) {
        for (let i = 0; i < quizePage.length; i++) {
            quizeButton[i].addEventListener('click', ()=> {
                quizePage[i].classList.remove('quize__page_active');
                quizePage[i + 1].classList.add('quize__page_active');
            });
    
            quizePrev[i].addEventListener('click', ()=> {
                quizePage[i+1].classList.remove('quize__page_active');
                quizePage[i].classList.add('quize__page_active');
            });
        }
    }
});

let quizeWrapper = document.querySelector('.quize'),
    quizeCall = document.querySelectorAll('.btn__quize'),
    quizeOverflow = document.querySelector('.quize__overflow');

if (quizeWrapper !== null) {
    for (let i = 0; i < quizeCall.length; i++) {
        quizeCall[i].addEventListener('click', ()=>{
            quizeWrapper.classList.add('quize__active');
        });
    }

    quizeOverflow.addEventListener('click', ()=>{
        quizeWrapper.classList.remove('quize__active');
    });
}

let shortQuizePage = document.querySelectorAll('.short-quize__page'),
    shortQuizeBtn = document.querySelector('.short-quize__page button');

if (shortQuizePage !== null) {
    shortQuizeBtn.addEventListener('click', ()=> {
        shortQuizePage[0].classList.remove('short-quize__page_active');
        shortQuizePage[1].classList.add('short-quize__page_active');
    });
}

let shortQuizeCall = document.querySelectorAll('.short-quize__call'),
    shortQuizeWrapper = document.querySelector('.short-quize'),
    shortQuizeOverflow = document.querySelector('.short-quize__overflow');

if (shortQuizeWrapper !== null) {
    for (let i = 0; i < shortQuizeCall.length; i++) {
        shortQuizeCall[i].addEventListener('click', ()=>{
            shortQuizeWrapper.classList.add('short-quize__active');
        });
    }

    shortQuizeOverflow.addEventListener('click', ()=> {
        shortQuizeWrapper.classList.remove('short-quize__active');
    });
}