"use strict";

document.addEventListener('DOMContentLoaded', function() {

var swiper = new Swiper(".header__swiper", {
    pagination: {
        el: ".header__swiper .swiper-pagination",
    },
});

var swiper = new Swiper(".direct__slider", {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 12,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".about__slider", {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 40,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
    // when window width is >= 320px
        769: {
            spaceBetween: 12,
        },
    }
});

let directTab = document.querySelectorAll('.direct__tab li'),
    directWrapper = document.querySelectorAll('.direct__wrapper');

if(directTab !== null) {
    directTab.forEach((item, i)=>{
        item.addEventListener('click', ()=>{
            for (let a = 0; a < directTab.length; a++) {
                directTab[a].classList.remove('active')
                directWrapper[a].classList.remove('active')
            }
            item.classList.add('active')
            directWrapper[i].classList.add('active')
        })
    })
}

let perfTab = document.querySelectorAll('.perf__tab li'),
    perfWrapper = document.querySelectorAll('.perf__wrapper');

if(perfTab !== null) {
    perfTab.forEach((item, i)=>{
        item.addEventListener('click', ()=>{
            for (let a = 0; a < perfTab.length; a++) {
                perfTab[a].classList.remove('active')
                perfWrapper[a].classList.remove('active')
            }
            item.classList.add('active')
            perfWrapper[i].classList.add('active')
        })
    })
}

let nav = document.querySelector('.nav'),
    header = document.querySelector('.header');

if(header !== null) {
    if(header.getBoundingClientRect().bottom < nav.getBoundingClientRect().height) {
        nav.classList.add('nav__fix');
    } else {
        nav.classList.remove('nav__fix');
    }
    window.addEventListener('scroll', ()=>{
        if(header.getBoundingClientRect().bottom < nav.getBoundingClientRect().height) {
            nav.classList.add('nav__fix');
        } else {
            nav.classList.remove('nav__fix');
        }
    })
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

let navHum = document.querySelector('.nav__hum');

if(navHum !== null) {
    navHum.addEventListener('click', ()=>{
        nav.classList.toggle('active')
    })
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let section = document.querySelectorAll('.section-block'),
    navLink = document.querySelectorAll('.nav__list a');

if(navLink !== null) {
    navLink.forEach(item=>{
        item.addEventListener('click', ()=>{
            nav.classList.remove('active');
        })
    })

    window.addEventListener('scroll', ()=>{
        section.forEach((item, i)=>{
            if(item.getBoundingClientRect().top < 100 && item.getBoundingClientRect().top > -200) {
                for(let a = 0; a < navLink.length; a++) {
                    navLink[a].classList.remove('active')
                }
                navLink[i].classList.add('active')
            }
        })
    })
}

}, false);