"use strict";

document.addEventListener('DOMContentLoaded', function() {

    var swiper = new Swiper(".comment__slider", {
        spaceBetween: 40,
        freeMode: true,
        slidesPerView: 'auto',
    });  
    var swiper = new Swiper(".practic__slider", {
        spaceBetween: 40,
        slidesPerView: 1,
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
            })
        })
        document.body.addEventListener('click',(event)=>{
            let target = event.target;
            if(target.closest('div.comment-modal__overflow')) {
                commentNode.remove()
            }
        })
    }

    let navHum = document.querySelector('.nav__hum'),
        nav = document.querySelector('.nav');
    
    if(navHum !== null) {
        navHum.addEventListener('click', ()=>{
            nav.classList.toggle('active');
        })
    }

}, false);