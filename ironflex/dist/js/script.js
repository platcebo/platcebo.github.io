"use strict";

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
    })
}

var swiperHeader = new Swiper(".header__slider", {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

let headerItem = document.querySelectorAll('.header__item');

if(headerItem !== null) {
    swiperHeader.on('slideChange', function () {
        headerItem.forEach(a=>a.classList.remove('active'))
        headerItem[swiperHeader.activeIndex].classList.add('active')
    });
}


}, false);
