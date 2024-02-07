jQuery(function($){
    $(".phone").mask("+7(999)999-99-99");
 });

var swiper = new Swiper(".service__slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let tab = document.querySelector('.equip__tab'),
    tabPoint = document.querySelectorAll('.equip__tab_point'),
    tabWrapper = document.querySelectorAll('.equip__wrapper');

if(tab !== null) {
    function tabHide() {
        tabPoint.forEach((item)=>{item.classList.remove('active')})
        tabWrapper.forEach((item)=>{item.classList.remove('active')})
    }
    function tabShow(b) {
        tabPoint[b].classList.add('active')
        tabWrapper[b].classList.add('active')
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