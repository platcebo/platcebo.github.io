"use strict";

document.addEventListener('DOMContentLoaded', function() {

    let troubleLink = document.querySelectorAll('.trouble__tag p');

    var swiperTrouble = new Swiper(".trouble__slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".trouble .swiper-button-next",
            prevEl: ".trouble .swiper-button-prev",
        },
    });
    swiperTrouble.on('slideChange', function () {
        for(let i = 0; i < troubleLink.length; i++) {
            troubleLink[i].classList.remove('active');
            troubleLink[swiperTrouble.activeIndex].classList.add('active');
        }
    });
    troubleLink.forEach((item, i)=>{
        item.addEventListener('click', ()=>{
            swiperTrouble.slideTo(i)
        })
    })

    let faqBtn = document.querySelectorAll('.faq__btn');

    if(faqBtn !== null) {
        faqBtn.forEach((item)=>{
            item.addEventListener('click',()=>{
                item.classList.toggle('active')
            })
        })
    }

    var swiper = new Swiper(".comment__slider", {
        slidesPerView: 1,
        spaceBetween: 16,
        navigation: {
            nextEl: ".comment .swiper-button-next",
            prevEl: ".comment .swiper-button-prev",
        },
        breakpoints: {
            769: {
                slidesPerView: 2,
            }
        }
    });
      

}, false);