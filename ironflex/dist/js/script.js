"use strict";

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

// var bikini = new Swiper(".bikini__thumb", {
//     spaceBetween: 20,
//     slidesPerView: 8,
//     watchSlidesProgress: true,
//     freeMode: true,
// });

var swiper = new Swiper(".bikini__slider", {
    navigation: {
        nextEl: ".bikini .swiper-button-next",
        prevEl: ".bikini .swiper-button-prev",
    },
    thumbs: {
        swiper: swiperthumb,
    },
});

document.addEventListener('DOMContentLoaded', function() {

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

const selects = document.querySelectorAll('.select');
    
if(selects !== null) {
    selects.forEach(selectContainer => {
        const selectInput = selectContainer.querySelector('select');
        const selectVal = selectContainer.querySelector('p');
        
        if (!selectInput || !selectVal) return;
        
        // Подписываем на change при инициализации
        selectInput.addEventListener('change', () => {
            selectVal.innerHTML = selectInput.value;
        });
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


}, false);
