"use strict";

document.addEventListener('DOMContentLoaded', function() {

var swiperHeader = new Swiper(".header__slider", {
    loop: false,
    allowTouchMove: false,
    speed: 1000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".header__slider .swiper-button-next",
        prevEl: ".header__slider .swiper-button-prev",
    },
});

let headerSlides = document.querySelectorAll('.header__slide');

if(headerSlides !== null) {
    const currentIndex = swiperHeader.activeIndex;
    const currentSlide = headerSlides[currentIndex];
    
    for(let b = 0; b < headerSlides.length; b++) {
        const dots = headerSlides[b].querySelectorAll('.header__dots span');
    
        for(let a = 0; a < headerSlides.length; a++) {
            if(a > currentIndex) {
                dots[a].classList.remove('active');
                dots[a].classList.remove('fix');
            } else if(a < currentIndex) {
                dots[a].classList.remove('active');
                dots[a].classList.add('fix');
            } else {
                dots[a].classList.remove('active');
                dots[a].classList.remove('fix');
                dots[a].classList.add('active');
            }
        }
    }

    swiperHeader.on('slideChange', function () {
        const currentIndex = swiperHeader.activeIndex;
    
        headerSlides.forEach((slide, slideIndex) => {
            const dots = slide.querySelectorAll('.header__dots span');
    
            dots.forEach((dot, dotIndex) => {
                dot.classList.remove('active', 'fix');
    
                if (dotIndex < currentIndex) {
                    dot.classList.add('fix');
                } else if (dotIndex === currentIndex) {
                    dot.classList.add('active');
                }
            });
        });
    });
    
}     

let btn = document.querySelectorAll('.btn__anim'),
    btnBox = document.querySelectorAll('.btn__anim i');

if(btn !== null) {
    function wrapChars(str, tmpl) {
        return str.replace(/\p{L}/gu, tmpl || "<span>$&</span>");
    }

    for(let a = 0; a < btn.length; a++) {
        var btnText = wrapChars(String(btnBox[a].innerHTML));

        btnBox[a].innerHTML = btnText; 

        let spans = btnBox[a].querySelectorAll("span");

        spans.forEach((span, i) => {
            span.style.transitionDelay = `${(i+0.2) * 0.01 }s`;
        });

        btn[a].innerHTML = '<b>' + btn[a].innerHTML + btn[a].innerHTML + '</b>'
    }

}

let video = document.querySelector('.mission__video video'),
    videoPlay  = document.querySelector('.mission__play'),
    videoMute  = document.querySelector('.mission__mute');

if(video !== null) {
    videoPlay.addEventListener('click', ()=>{
        if (video.paused) {
            video.play();
        } else {
            video.pause();
       }
    })
    videoMute.addEventListener('click', ()=>{
        if (video.muted != true) {
            video.muted = true;
        } else {
            video.muted = false;
        }
    })
}

let setPoint = document.querySelectorAll('.set__tab_point'),
    setWrapper = document.querySelectorAll('.set__wrapper'),
    setAside = document.querySelectorAll('.set__aside');

if(setPoint !== null) {
    setPoint.forEach((item,i)=>{
        item.addEventListener('click', ()=>{
            for(let a = 0; a < setPoint.length; a++) {
                setPoint[a].classList.remove('active');
                setWrapper[a].classList.remove('active');
                setAside[a].classList.remove('active');
            }
            item.classList.add('active');
            setWrapper[i].classList.add('active');
            setAside[i].classList.add('active');
            if(faqFix !== null && window.innerWidth > 1200) {
                if(faqTop.getBoundingClientRect().top <=  0 && faqTop.getBoundingClientRect().bottom - faqFix.getBoundingClientRect().height >=  0) {
                    faqFix.classList.add('fix')
                    faqFix.classList.remove('bottom')
                } else if (faqTop.getBoundingClientRect().top >  0) {
                    faqFix.classList.remove('fix')
                    faqFix.classList.remove('bottom')
                } else if (faqTop.getBoundingClientRect().bottom - faqFix.getBoundingClientRect().height <  0) {
                    faqFix.classList.remove('fix')
                    faqFix.classList.add('bottom')
                }
            }
        })
    })

    setWrapper.forEach((item,i)=>{
        let setItem = item.querySelectorAll('.set__item');

        if(setItem.length < 3) {
            item.classList.add('set__wrapper_width');
        } else if(setItem.length > 3) {
            setAside[i].classList.add('set__aside_fix');
        }
    })

    let faqFix = document.querySelector('.set__aside_fix'),
        faqTop = document.querySelector('.set');

    if(faqFix !== null && window.innerWidth > 1200) {
        if(faqTop.getBoundingClientRect().top <=  0 && faqTop.getBoundingClientRect().bottom - faqFix.getBoundingClientRect().height >=  0) {
            faqFix.classList.add('fix')
            faqFix.classList.remove('bottom')
        } else if (faqTop.getBoundingClientRect().top >  0) {
            faqFix.classList.remove('fix')
            faqFix.classList.remove('bottom')
        } else if (faqTop.getBoundingClientRect().bottom - faqFix.getBoundingClientRect().height <  0) {
            faqFix.classList.remove('fix')
            faqFix.classList.add('bottom')
        }
        window.addEventListener('scroll', ()=>{
            if(faqTop.getBoundingClientRect().top <=  0 && faqTop.getBoundingClientRect().bottom - faqFix.getBoundingClientRect().height >=  0) {
                faqFix.classList.add('fix')
                faqFix.classList.remove('bottom')
            } else if (faqTop.getBoundingClientRect().top >  0) {
                faqFix.classList.remove('fix')
                faqFix.classList.remove('bottom')
            } else if (faqTop.getBoundingClientRect().bottom - faqFix.getBoundingClientRect().height <  0) {
                faqFix.classList.remove('fix')
                faqFix.classList.add('bottom')
            }
        })
    }
}

let form = document.querySelector('.form'),
    formWrapper = document.querySelector('.form__block');

if(form !== null) {
    window.addEventListener('scroll', ()=>{
        if(form.getBoundingClientRect().top < 0) {
            formWrapper.classList.add('active')
        } else {
            formWrapper.classList.remove('active')
        }
    })
}

let pageArrow = document.querySelector('.footer__up');
        
if(pageArrow !== null) {
    function scrollToTop () {
        if (window.scrollY > 0) {
            window.scrollBy(0, -70); 
            setTimeout(scrollToTop, 0); 
        }
    }
    pageArrow.addEventListener("click", scrollToTop)
}

let nav = document.querySelector('.nav'),
    navHam = document.querySelector('.nav__ham');

if(navHam !== null) {
    navHam.addEventListener('click', ()=>{
        nav.classList.toggle('active')
    })
}

}, false);