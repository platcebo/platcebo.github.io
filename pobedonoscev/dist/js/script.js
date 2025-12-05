'use strict'

document.addEventListener('DOMContentLoaded', function() {

    var headerSwiper = new Swiper(".header__slider", {
        loop: true,
        spaceBetween: 30,
        // autoplay: {
        //   delay: 5000,
        //   disableOnInteraction: false,
        // },
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

    [].forEach.call( document.querySelectorAll('[data-phone-pattern]'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (9__) ___-__-__",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = new_value;
        }
        if (event.type == "blur" && this.value.length < 5) {
            this.value = "";
        }
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);

});

let modalCall = document.querySelectorAll('.modal-form__call'),
    modalForm = document.querySelector('.modal-form'),
    modal = document.querySelectorAll('.modal'),
    modalOverflow = document.querySelectorAll('.modal__overflow');

if(modal !== null) {
    modalOverflow.forEach(item=>{
        item.addEventListener('click', ()=>{
            modal.forEach(a=>a.classList.remove('active'))
        })
    })
}

if(modalForm!==null) {
    modalCall.forEach((item)=>{
        item.addEventListener('click', ()=>{
            modalForm.classList.add('active');
        })
    })
}

let sectionAnim = document.querySelectorAll('.section-anim');

if(sectionAnim !== null) {
    sectionAnim.forEach((item)=>{
        if(item.getBoundingClientRect().top < window.innerHeight/1.2) {
            item.classList.add('section-anim__active')
        }
        window.addEventListener('scroll', ()=>{
            if(item.getBoundingClientRect().top < window.innerHeight/1.2) {
                item.classList.add('section-anim__active')
            }
        })
    })
}


}, false);