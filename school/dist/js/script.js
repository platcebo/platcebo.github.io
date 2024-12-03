"use strict";

document.addEventListener('DOMContentLoaded', function() {

    var swiper = new Swiper(".comment__slider", {
        spaceBetween: 10,
        freeMode: true,
        slidesPerView: 'auto',
        mousewheel: true,
        breakpoints: {
            600: {
                spaceBetween: 40,
            },
        }
    });  
    var swiper = new Swiper(".practic__slider", {
        spaceBetween: 40,
        slidesPerView: 'auto',
        freeMode: true,
        mousewheel: true,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },    
        breakpoints: {
            1025: {
                spaceBetween: 40,
                slidesPerView: 3
            },
        }
    });  

    let headerArrow = document.querySelector('.header__arrow');

    if (headerArrow !== null) {
        function headerScroll() {
            if(headerArrow.getBoundingClientRect().top > -100) {
                window.scrollBy(0, 20)
                setTimeout(() => {headerScroll()}, 0);
            } else {
                return
            }
        }

        headerArrow.addEventListener('click',(event)=>{
            event.preventDefault()
            headerScroll()
        })
    }

    let scrollAnim = document.querySelectorAll('.scroll-anim img');

    if(scrollAnim !== null){
        scrollAnim.forEach((item)=>{
            window.addEventListener('scroll', ()=>{
                let animX = item.getBoundingClientRect().top - document.documentElement.clientHeight
                if(animX < 0 && item.getBoundingClientRect().bottom > 0) {
                    item.style.transform = 'translateX('+ item.getBoundingClientRect().top/30 +'%)'
                }
            })
        })
    }

    let commentLink = document.querySelectorAll('.comment__link'),
        commentItem = document.querySelectorAll('.comment__slide');

    if(commentItem !== null) {
        let commentNode = document.createElement('div');
        commentNode.className = 'comment-modal';
        commentItem.forEach((item, i)=>{
            commentLink[i].addEventListener('click', (event)=>{
                event.preventDefault()
                commentNode.innerHTML = '<div class="comment-modal__overflow"></div>' + item.outerHTML
                document.body.append(commentNode);
                document.body.classList.add('fix');
                document.documentElement.classList.add('fix');
            })
        })
        document.body.addEventListener('click',(event)=>{
            let target = event.target;
            if(target.closest('div.comment-modal__overflow') || target.closest('div.comment-modal__close')) {
                commentNode.remove()
                document.body.classList.remove('fix');
            document.documentElement.classList.remove('fix');
            }
        })
    }

    let navHum = document.querySelector('.nav__hum'),
        nav = document.querySelector('.nav');
    
    if(navHum !== null) {
        navHum.addEventListener('click', ()=>{
            nav.classList.toggle('active');
            document.body.classList.toggle('fix');
            document.documentElement.classList.toggle('fix');
        })
    }

    let canFix = document.querySelector('.can__fix'),
        canFixWrapper = document.querySelector('.can__fix_wrapper');

    if(canFix !== null) {
        window.addEventListener('scroll', ()=>{
            if(canFixWrapper.getBoundingClientRect().top <= 20 && canFixWrapper.getBoundingClientRect().bottom > canFix.getBoundingClientRect().height + 20) {
                canFix.style.transform = 'translateY(' + -1 * (canFixWrapper.getBoundingClientRect().top - 20) +'px)'
            }
        })
    }

}, false);