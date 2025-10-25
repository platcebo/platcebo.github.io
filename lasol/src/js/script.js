"use strict";

document.addEventListener('DOMContentLoaded', function() {

var swiper = new Swiper(".header__slider", {});

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        nav.classList.remove('active')
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    });
};

let nav = document.querySelector('.nav'),
    navClose = document.querySelector('.nav__close'),
    navHum = document.querySelector('.nav__hum');

if(nav !== null) {
    navClose.addEventListener('click', ()=>{
        nav.classList.remove('active')
    })
    navHum.addEventListener('click', ()=>{
        nav.classList.add('active')
    })
}

let mediaAutor = document.querySelector('.about__fix'),
    mediaBlock = document.querySelector('.about__container');

if(mediaBlock != null) {
    if(window.innerWidth > 100) {
        let articleLeft = mediaAutor.getBoundingClientRect().left

        window.addEventListener('scroll', ()=>{
            if(mediaBlock.getBoundingClientRect().top < 50 && mediaBlock.getBoundingClientRect().bottom > mediaAutor.getBoundingClientRect().height + 50) {
                mediaAutor.classList.remove('bottom')
                mediaAutor.classList.add('fix')
                mediaAutor.style.left = articleLeft + 'px'
            } else if (mediaBlock.getBoundingClientRect().top > 50) {
                mediaAutor.classList.remove('fix')
                mediaAutor.style.left = 'auto'
            } else if (mediaBlock.getBoundingClientRect().bottom < mediaAutor.getBoundingClientRect().height + 50) {
                mediaAutor.classList.remove('fix')
                mediaAutor.style.left = '30px'
                mediaAutor.classList.add('bottom')
            }
        })

        if(mediaBlock.getBoundingClientRect().top < 50 && mediaBlock.getBoundingClientRect().bottom > mediaAutor.getBoundingClientRect().height + 50) {
            mediaAutor.classList.remove('bottom')
            mediaAutor.classList.add('fix')
            mediaAutor.style.left = articleLeft + 'px'
        } else if (mediaBlock.getBoundingClientRect().top > 50) {
            mediaAutor.classList.remove('fix')
            mediaAutor.style.left = 'auto'
        } else if (mediaBlock.getBoundingClientRect().bottom < mediaAutor.getBoundingClientRect().height + 100) {
            mediaAutor.classList.remove('fix')
            mediaAutor.style.left = '30px'
            mediaAutor.classList.add('bottom')
        }
    }

}

let mediaAuto = document.querySelector('.for__fix'),
    mediaBloc = document.querySelector('.for__wrapper');

if(mediaBloc != null) {
    if(window.innerWidth > 100) {
        let articleLef = mediaAuto.getBoundingClientRect().left

        window.addEventListener('scroll', ()=>{
            if(mediaBloc.getBoundingClientRect().top < 50 && mediaBloc.getBoundingClientRect().bottom > mediaAuto.getBoundingClientRect().height + 50) {
                mediaAuto.classList.remove('bottom')
                mediaAuto.classList.add('fix')
                mediaAuto.style.left = articleLef + 'px'
            } else if (mediaBloc.getBoundingClientRect().top > 50) {
                mediaAuto.classList.remove('fix')
                mediaAuto.style.left = 'auto'
            } else if (mediaBloc.getBoundingClientRect().bottom < mediaAuto.getBoundingClientRect().height + 50) {
                mediaAuto.classList.remove('fix')
                mediaAuto.style.left = '30px'
                mediaAuto.classList.add('bottom')
            }
        })

        if(mediaBloc.getBoundingClientRect().top < 50 && mediaBloc.getBoundingClientRect().bottom > mediaAuto.getBoundingClientRect().height + 50) {
            mediaAuto.classList.remove('bottom')
            mediaAuto.classList.add('fix')
            mediaAuto.style.left = articleLef + 'px'
        } else if (mediaBloc.getBoundingClientRect().top > 50) {
            mediaAuto.classList.remove('fix')
            mediaAuto.style.left = 'auto'
        } else if (mediaBloc.getBoundingClientRect().bottom < mediaAuto.getBoundingClientRect().height + 50) {
            mediaAuto.classList.remove('fix')
            mediaAuto.style.left = '30px'
            mediaAuto.classList.add('bottom')
        }
    }

}


}, false);
