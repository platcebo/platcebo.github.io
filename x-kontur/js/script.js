jQuery(function($){
    $(".phone").mask("+7(999)999-99-99");
 });

var swiper = new Swiper(".equip__slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".equip__next",
        prevEl: ".equip__prev",
      },
    breakpoints: {
        1201: {
            slidesPerView: 3,
        },
        600: {
            slidesPerView: 2,
        },
    },
});

let tab = document.querySelector('.equip__tab'),
    tabPoint = document.querySelectorAll('.equip__tab_point'),
    tabWrapper = document.querySelectorAll('.equip__slider');

if(tab !== null) {
    function tabHide (a){
        for(let i = a; i < tabPoint.length; i++) {
            tabPoint[i].classList.remove('active')
            tabWrapper[i].classList.remove('active')
        }
    }
    function tabShow (b) {
        tabPoint[b].classList.add('active')
        tabWrapper[b].classList.add('active')
    }
    tabHide(0)
    tabShow(1)
    tab.addEventListener('click', (event)=>{
        let target = event.target;
        if(target && target.classList.contains('equip__tab_point')) {
            for(let i = 0; i < tabPoint.length; i++) {
                if( target == tabPoint[i]) {
                    tabHide(0)
                    tabShow(i)
                    break
                }
            }
        }
    })
}

let pageArrow = document.querySelector('.footer__up');

if(pageArrow !== null) {
    function scrollToTop () {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -100); 
            setTimeout(scrollToTop, 0); 
        }
    }
    pageArrow.addEventListener("click", scrollToTop)
}

let nav = document.querySelector('.nav'),
    navHamburger = document.querySelector('.nav__hamburger');

if(nav !== null) {
    navHamburger.addEventListener('click', ()=>{
        nav.classList.toggle('active')
    })
}

let modal = document.querySelector('.modal-call'),
    modalBtn = document.querySelectorAll('.modal-call__btn'),
    modalClose = document.querySelector('.modal-call__close'),
    modalOverflow = document.querySelector('.modal-call__overflow');

if(modalBtn !== null) {
    modalBtn.forEach((item)=>{
        item.addEventListener('click', ()=>{
            modal.classList.add('active')
        })
    })
    modalClose.addEventListener('click', ()=>{
        modal.classList.remove('active')
    })
    modalOverflow.addEventListener('click', ()=>{
        modal.classList.remove('active')
    })
}

let modalEquip = document.querySelector('.modal-equip'),
    modalEquipBtn = document.querySelectorAll('.modal-equip__btn'),
    modalEquipClose = document.querySelector('.modal-equip__close'),
    modalEquipOverflow = document.querySelector('.modal-equip__overflow');

if(modalEquipBtn !== null) {
    modalEquipBtn.forEach((item)=>{
        item.addEventListener('click', ()=>{
            modalEquip.classList.add('active')
        })
    })
    modalEquipClose.addEventListener('click', ()=>{
        modalEquip.classList.remove('active')
    })
    modalEquipOverflow.addEventListener('click', ()=>{
        modalEquip.classList.remove('active')
    })
}

let serviceBlock = document.querySelectorAll('.service__slide');

if(serviceBlock !== null) {
    serviceBlock.forEach((item)=>{
        item.addEventListener('click', ()=>{
            serviceBlock.forEach((item)=>{item.classList.remove('active')})
            item.classList.add('active')
        })
    })
}