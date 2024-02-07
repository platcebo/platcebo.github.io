jQuery(function($){
    $(".phone").mask("+7(999)999-99-99");
});

var swiper = new Swiper(".equip__slider", {
    slidesPerView: 1,
    spaceBetween: 15,
    navigation: {
        nextEl: ".swiper-button-next-equip",
        prevEl: ".swiper-button-prev-equip",
    },
    breakpoints: {
        1401: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
    },
});
var swiper = new Swiper(".export__slider", {
    slidesPerView: 1,
    spaceBetween: 15,
    navigation: {
        nextEl: ".swiper-button-next-export",
        prevEl: ".swiper-button-prev-export",
    },
    breakpoints: {
        1401: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
    },
});

let tab = document.querySelector('.equip__tab'),
    tabPoint = document.querySelectorAll('.equip__tab_point'),
    tabWrapper = document.querySelectorAll('.equip__slider');

if(tab !== null) {
    function tabHide() {
        tabPoint.forEach((item)=>{item.classList.remove('active')})
        tabWrapper.forEach((item)=>{item.classList.remove('active')})
    }
    function tabShow(a) {
        tabPoint[a].classList.add('active')
        tabWrapper[a].classList.add('active')
    }
    tabHide()
    tabShow(0)
    tab.addEventListener('click', (event)=>{
        let target = event.target;
        if(target && target.classList.contains('equip__tab_point')) {
            for(let i = 0; i < tabPoint.length; i++) {
                if(target == tabPoint[i]) {
                    tabHide()
                    tabShow(i)
                }
            }
        }
    })
}

let pageArrow = document.querySelector('.page__arrow');

if(pageArrow !== null) {
    if(window.scrollY > 500) {
        pageArrow.classList.add('active')
    } else {
        pageArrow.classList.remove('active')
    }
    window.addEventListener('scroll', ()=>{
        if(window.scrollY > 500) {
            pageArrow.classList.add('active')
        } else {
            pageArrow.classList.remove('active')
        }
    })
    function scrollToTop () {
        if (window.scrollY > 0) {
            window.scrollBy(0, -100); 
            setTimeout(scrollToTop, 0); 
        }
    }
    pageArrow.addEventListener("click", scrollToTop)
}

let nav = document.querySelector('.nav'),
    navHumburger = document.querySelector('.nav__humburger');

if(nav !== null) {
    navHumburger.addEventListener('click', ()=>{
        nav.classList.toggle('active')
    })
}

let modal = document.querySelector('.modal'),
    modalBtn = document.querySelectorAll('.modal__btn'),
    modalClose = document.querySelector('.modal__close'),
    modalOverflow = document.querySelector('.modal__overflow');

if(modal !== null) {
    modalBtn.forEach((item)=>{
        item.addEventListener('click', ()=>{
            modal.classList.add('active');
        })
    })
    modalClose.addEventListener('click', ()=>{
        modal.classList.remove('active');
    })
    modalOverflow.addEventListener('click', ()=>{
        modal.classList.remove('active');
    })
}