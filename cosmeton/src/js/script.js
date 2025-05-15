'use strict'

document.addEventListener('DOMContentLoaded', function() {

let navDrop = document.querySelectorAll('.nav__drop'),
    navDropBtn = document.querySelectorAll('.nav__drop_btn');

if(navDrop !== null) {
    navDropBtn.forEach((item,i)=>{
        item.addEventListener('click', ()=>{
            item.classList.toggle('active')
            navDrop[i].classList.toggle('active')
        })
    })
}

var swiper = new Swiper(".header__slider", {
    spaceBetween: 60,
    effect: "fade",
    pagination: {
      el: ".header__slider .swiper-pagination",
    },
    navigation: {
        nextEl: ".header__slider .swiper-button-next",
        prevEl: ".header__slider .swiper-button-prev",
    },
});

let dropBtn = document.querySelectorAll('.drop__btn'),
    drop = document.querySelectorAll('.drop');

if(drop !== null) {
    dropBtn.forEach((item,i)=>{
        item.addEventListener('click', ()=>{
            drop[i].classList.toggle('active')
        })
    })
}

document.body.addEventListener('click', (event)=>{
    let target = event.target;

    if(target.closest('.nav__drop') || target.closest('.nav__drop_btn')) {
        return
    } else {
        for(let a = 0; a < navDrop.length; a++) {
            navDropBtn[a].classList.remove('active')
            navDrop[a].classList.remove('active')
        }
    }

    if(target.closest('.drop__btn') || target.closest('.drop')) {
        return
    } else {
        for(let a = 0; a < drop.length; a++) {
            drop[a].classList.remove('active')
            dropBtn[a].classList.remove('active')
        }
    }
})

var swiper = new Swiper(".about__slider .swiper", {
    spaceBetween: 0,
    navigation: {
        nextEl: ".about__slider .swiper-button-next",
        prevEl: ".about__slider .swiper-button-prev",
    },
});

var swiper = new Swiper(".work__slider", {
    spaceBetween: 20,
    pagination: {
      el: ".work__slider .swiper-pagination",
    },
    navigation: {
        nextEl: ".work__slider .swiper-button-next",
        prevEl: ".work__slider .swiper-button-prev",
    },
});

var swiper = new Swiper(".spec__slider", {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
        nextEl: ".spec .swiper-button-next",
        prevEl: ".spec .swiper-button-prev",
    },
    breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1025: {
          slidesPerView: 3,
        },
    }
});

var swiper = new Swiper(".space__wrapper", {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
        nextEl: ".space .swiper-button-next",
        prevEl: ".space .swiper-button-prev",
    },
});

var swiper = new Swiper(".comment__slider", {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
        nextEl: ".comment .swiper-button-next",
        prevEl: ".comment .swiper-button-prev",
    },
    breakpoints: {
        1025: {
          slidesPerView: 2,
        },
    }
});

if(window.innerWidth <= 1300) {
    var swiper = new Swiper(".stage__wrapper", {
        spaceBetween: 30,
        slidesPerView: 'auto',
        navigation: {
            nextEl: ".stage .swiper-button-next",
            prevEl: ".stage .swiper-button-prev",
        },
    });
}

[].forEach.call( document.querySelectorAll('.data-phone-pattern'), function(input) {
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

let navMob = document.querySelector('.nav__mob'),
    navClose = document.querySelector('.nav__close'),
    navHum = document.querySelector('.nav__hum');

if(navMob !== null) {
    navHum.addEventListener('click', ()=>{
        navMob.classList.add('active');
    })
    navClose.addEventListener('click', ()=>{
        navMob.classList.toggle('active');
    })
}

let navAside = document.querySelectorAll('.nav__aside'),
    navAsideBtn = document.querySelectorAll('.nav__aside_call');

if(navAside !== null) {
    navAsideBtn.forEach((item,i)=>{
        item.addEventListener('click', ()=>{
            item.classList.toggle('active')
            navAside[i].classList.toggle('active')
        })
    })
}

let modal = document.querySelector('.modal'),
    modalCall = document.querySelectorAll('.modal__call'),
    modalOverflow = document.querySelector('.modal__overflow'),
    modalClose = document.querySelector('.modal__close');

if(modal !== null) {
    modalCall.forEach((item)=>{
        item.addEventListener('click',()=>{
            modal.classList.add('active');
        })
    })
    modalClose.addEventListener('click', ()=>{
        modal.classList.remove('active');
    })
    modalOverflow.addEventListener('click', ()=>{
        modal.classList.remove('active');
    })
}

}, false);