'use strict'

document.addEventListener('DOMContentLoaded', function() {

    var headerSwiper = new Swiper(".header__slider", {
        loop: true,
        spaceBetween: 30,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".header .swiper-button-next",
          prevEl: ".header .swiper-button-prev",
        },
    });

    var swiper = new Swiper(".project__slider", {
        loop: true,
        spaceBetween: 30,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".project .swiper-pagination",
          clickable: true,
        },
    });

    var swiper = new Swiper(".news__slider", {
        loop: false,
        spaceBetween: 23,
        slidesPerView: "auto",
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
    });

    var swiper = new Swiper(".design-new__slider", {
        loop: false,
        spaceBetween: 30,
        slidesPerView: "auto",
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
    });

    let drop = document.querySelectorAll('.drop'),
        dropBtn = document.querySelectorAll('.drop__btn');

    if(drop !== null) {
        dropBtn.forEach((item, i) =>{
            item.addEventListener('click', ()=>{
                if(item.classList.contains('active')) {
                    drop[i].classList.remove('active');
                    item.classList.remove('active');
                } else {
                    dropBtn.forEach((a,b)=>{
                        drop[b].classList.remove('active');
                        a.classList.remove('active');
                    })
                    drop[i].classList.add('active');
                    item.classList.add('active');
                }
            })
        })
    }

    let nav = document.querySelector('.nav'),
        navHum = document.querySelector('.nav__hum');

    if(nav !== null) {
        navHum.addEventListener('click', ()=>{
            if(nav.classList.contains('active')) {
                nav.classList.remove('active');
                navHum.classList.remove('active');
                document.body.classList.remove('fix');
                document.documentElement.classList.remove('fix');
                nav.style.maxHeight = window.clientHeight + 'px'
            } else {
                nav.classList.add('active');
                navHum.classList.add('active');
                document.body.classList.add('fix');
                document.documentElement.classList.add('fix');
            }

        })
    }

    let video = document.querySelectorAll('.design-new__video video'),
        videoPlay  = document.querySelectorAll('.design-new__video_btn');

    if(video !== null) {
        videoPlay.forEach((item,i)=>{
            item.addEventListener('click', ()=>{
                item.classList.remove('active')
                video[i].play();
            })
        })
        video.forEach((item,i)=>{
            item.addEventListener('click',()=>{
                if (!item.paused) {
                    videoPlay[i].classList.add('active')
                    item.pause();
                } else {
                    return
            }
            })
        })
    }

    let newsImg = document.querySelectorAll('.news-new__row img'),
        newsBg = document.querySelector('.news-new__block_bg');


    if(newsImg !== null) {
        newsImg.forEach((item)=>{
            item.addEventListener('click',()=>{
                // newsImg.forEach(a=>a.classList.remove('fix'))
                // item.classList.add('fix')

                newsBg.src = item.src
            })
        })
    }

    let cottage = document.querySelector('.cottage'),
        cottageZoom = document.querySelectorAll('.cottage__zoom'),
        cottagePag = document.querySelector('.cottage__num');

    if(cottage !== null) {
        cottageZoom.forEach((item)=>{
            item.addEventListener('click',()=>{
                cottage.classList.toggle('zoom');
            })
        })

        headerSwiper.on('slideChange', function () {
            cottagePag.innerHTML = String(headerSwiper.activeIndex).padStart(2, '0');
        });

    }

    let navNew = document.querySelector('.nav-new');

    if(window.innerWidth < 1025) {
        navNew.classList.remove('nav-new')
    }


}, false);