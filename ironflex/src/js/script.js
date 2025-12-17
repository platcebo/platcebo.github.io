"use strict";

document.addEventListener('DOMContentLoaded', function() {

var swiperHeader = new Swiper(".header__slider", {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".header__slider .swiper-pagination",
    },
});

let headerItem = document.querySelectorAll('.header__row .header__item');

if(headerItem !== null) {
    swiperHeader.on('slideChange', function () {
        headerItem.forEach(a=>a.classList.remove('active'));
        headerItem[swiperHeader.activeIndex].classList.add('active');
    });

    headerItem.forEach((item,i)=>{
        item.addEventListener('mouseover',()=>{
            swiperHeader.slideTo(i)
        })
    })
}

var swiperthumb = new Swiper(".catalog-slider__thumb", {
    spaceBetween: 20,
    slidesPerView: 8,
    watchSlidesProgress: true,
    freeMode: true,
});

var swiper = new Swiper(".catalog-slider__wrapper", {
    navigation: {
        nextEl: ".catalog-slider .swiper-button-next",
        prevEl: ".catalog-slider .swiper-button-prev",
    },
    thumbs: {
        swiper: swiperthumb,
    },
});

var swiper = new Swiper(".sport-slider__slider", {
    spaceBetween: 32,
    slidesPerView: 'auto',
    navigation: {
        nextEl: ".sport-slider__slider .swiper-button-next",
        prevEl: ".sport-slider__slider .swiper-button-prev",
    },
});

var modalSwiper = new Swiper(".modal-slider__wrapper", {
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    navigation: {
        nextEl: ".modal-slider__wrapper .swiper-button-next",
        prevEl: ".modal-slider__wrapper .swiper-button-prev",
    },
});

let modalSlider = document.querySelector('.modal-slider'),
    modalCall = document.querySelectorAll('.club-gal__wrapper img');

if(modalSlider !== null) {
    modalCall.forEach((item,i)=>{
        item.addEventListener('click', ()=>{
            modalSlider.classList.add('active');
            modalSwiper.slideTo(i)
        })
    })
}


let navDrop = document.querySelectorAll('.nav__drop'),
    navDropBtn = document.querySelectorAll('.nav__drop_btn');

if(navDrop !== null) {
    navDropBtn.forEach((item,i)=>{
        document.body.addEventListener('click',(e)=>{
            if(e.target.closest('.nav__drop') || e.target.closest('.nav__drop_btn')) {
                return
            } else {
                navDrop.forEach((a,b)=>{
                    navDropBtn[b].classList.remove('active')
                    navDrop[b].classList.remove('active')
                })
            }
        })

        if(window.innerWidth > 800) {
            item.addEventListener('mouseover', (e)=>{

                navDrop.forEach((a,b)=>{
                    navDropBtn[b].classList.remove('active')
                    navDrop[b].classList.remove('active')
                })
                navDropBtn[i].classList.add('active')
                navDrop[i].classList.add('active')

            })

            item.addEventListener('click', (event)=>{
                if(event.target.closest('svg')) {
                    event.preventDefault()
                }
            })
        } else {
            item.addEventListener('click', (e)=>{
                e.preventDefault()
                if(item.classList.contains('active')) {
                    navDrop.forEach((a,b)=>{
                        navDropBtn[b].classList.remove('active')
                        navDrop[b].classList.remove('active')
                    })
                } else {
                    navDrop.forEach((a,b)=>{
                        navDropBtn[b].classList.remove('active')
                        navDrop[b].classList.remove('active')
                    })
                    navDropBtn[i].classList.add('active')
                    navDrop[i].classList.add('active')
                }
            })
        }
    })
}

let nav = document.querySelector('.nav'),
    navHum = document.querySelector('.nav__hum');

if(nav !== null) {
    navHum.addEventListener('click',()=>{
        nav.classList.toggle('active')
    })
}


let catalogDrop = document.querySelectorAll('.catalog__drop'),
    catalogDropWrapper = document.querySelectorAll('.catalog__drop_wrapper');

if(catalogDrop !== null) {
    catalogDrop.forEach((item,i)=>{
        item.addEventListener('click', ()=>{
            item.classList.toggle('active')
            catalogDropWrapper[i].classList.toggle('active')
        })
    })
}

let select = document.querySelectorAll('.select'),
    selectList = document.querySelectorAll('.select ul'),
    selectInput = document.querySelectorAll('.select input');
    
if(select !== null) {
    selectList.forEach((selectUl, num)=>{
        let selectPoint = selectUl.querySelectorAll('li');

        selectPoint.forEach((item)=>{
            item.addEventListener('click', ()=>{
                selectInput[num].value = item.innerHTML
            })
        })
    })

    select.forEach(selectItem => {
        selectItem.addEventListener('click', ()=>{
            selectItem.classList.toggle('active')
        })
    });
}


let drop = document.querySelectorAll('.drop'),
    dropBlock = document.querySelectorAll('.drop-wrapper');

if(drop !== null) {
    drop.forEach((item,i)=>{
        item.addEventListener('click', ()=>{
            item.classList.toggle('active'),
            dropBlock[i].classList.toggle('active')
        })
    })
}

let clubBtn = document.querySelectorAll('.catalog-club__name'),
    clubList = document.querySelectorAll('.catalog-club__list');

if(clubBtn !== null) {
    clubBtn.forEach((item,i)=>{
        item.addEventListener('click', ()=>{
            item.classList.toggle('active'),
            clubList[i].classList.toggle('active')
        })
    })
}

let modal = document.querySelectorAll('.modal'),
    modalOverflow = document.querySelectorAll('.modal__overflow'),
    modalClose = document.querySelectorAll('.modal__close');

if(modal !== null) {
    modalOverflow.forEach((item)=>{
        item.addEventListener('click', ()=>{
            modal.forEach(a=>a.classList.remove('active'))
        })
    })
    modalClose.forEach((item)=>{
        item.addEventListener('click', ()=>{
            modal.forEach(a=>a.classList.remove('active'))
        })
    })
}

let bikiniCall = document.querySelectorAll('.bikini__slider .swiper-slide img'),
    bikiniModal = document.querySelector('.modal-photo'),
    bikiniWrapper = document.querySelector('.modal-photo__img');

if(bikiniCall !== null) {
    bikiniCall.forEach((item)=>{
        item.addEventListener('click', ()=>{
            bikiniWrapper.innerHTML = item.outerHTML;

            bikiniModal.classList.add('active');
        })
    })
}

let tabPoint = document.querySelectorAll('.shop__tab'),
    tabWrapper = document.querySelectorAll('.tab-wrapper');

if(tabPoint !== null) {
    tabPoint.forEach((item)=>{
        let tab = item.querySelectorAll('a');

        tab.forEach((tabItem,i)=>[
            tabItem.addEventListener('click', (e)=>{
                e.preventDefault();

                tabWrapper.forEach(a=>a.classList.remove('active'))
                tabWrapper[i].classList.add('active')
            })
        ])
    })
}


}, false);
