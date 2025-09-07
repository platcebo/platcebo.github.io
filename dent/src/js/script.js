"use strict";

document.addEventListener('DOMContentLoaded', function() {

var swiper = new Swiper(".doctor-list__swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
});

var swiper = new Swiper(".case__swiper", {
    slidesPerView: 'auto',
    spaceBetween: 20,
});

var swiper = new Swiper(".stocks__swiper", {
    slidesPerView: 'auto',
    spaceBetween: 20,
});

var swiper = new Swiper(".comment__swiper", {
    slidesPerView: 'auto',
    spaceBetween: 20,
});

var swiper = new Swiper(".welcome__slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".welcome__slider .swiper-button-next",
        prevEl: ".welcome__slider .swiper-button-prev",
    },
});

let navListBtn = document.querySelectorAll('.nav__list_btn'),
    navOverflow = document.querySelector('.nav__row_overflow'),
    navListLink = document.querySelectorAll('.nav__list_link'),
    navSearchBtn = document.querySelector('.nav__search_btn'),
    navSearchClear = document.querySelector('.nav__search_clear'),
    navSearchInput = document.querySelector('.nav__search_input');

if(navListBtn !== null) {
    navListLink.forEach((item,i)=>{
        item.addEventListener('click', (e)=>{
            e.preventDefault()
            if(item.classList.contains('active')) {
                navListBtn[i].classList.toggle('active');
                item.classList.toggle('active');
                navOverflow.classList.toggle('active')
                document.body.classList.toggle('fix')
            } else {
                for(let a = 0; a < navListBtn.length; a++) {
                    navListBtn[a].classList.remove('active')
                    navListLink[a].classList.remove('active')
                    navOverflow.classList.remove('active')
                    document.body.classList.remove('fix')
                }
                navListBtn[i].classList.toggle('active');
                item.classList.toggle('active');
                navOverflow.classList.toggle('active')
                document.body.classList.toggle('fix')
            }
        })
    })

    document.body.addEventListener('click', (event)=>{
        if(!event.target.closest('.nav__list_btn') && !event.target.closest('div.nav__search')) {
            for(let a = 0; a < navListBtn.length; a++) {
                navListBtn[a].classList.remove('active')
                navListLink[a].classList.remove('active')
                navOverflow.classList.remove('active')
                navSearchInput.querySelector('input').value = ""
                navSearchInput.classList.remove('active')
                navOverflow.classList.remove('active')
                document.body.classList.remove('fix')
            }
        }
    })

    navSearchBtn.addEventListener('click', ()=>{
        navSearchInput.classList.add('active')
        navOverflow.classList.add('active')
        document.body.classList.add('fix')
    })
    navSearchClear.addEventListener('click', (e)=>{
        e.preventDefault()
        navSearchInput.querySelector('input').value = ""
        navSearchInput.classList.remove('active')
        navOverflow.classList.remove('active')
        document.body.classList.remove('fix')
    })
}

let serviceTab = document.querySelectorAll('.service-block');

if(serviceTab !== null) {
    serviceTab.forEach((item)=>{
        let navServiceTab = item.querySelectorAll('.nav__service_tab li'),
            navServiceWrapper = item.querySelectorAll('.nav__service_wrapper');

        navServiceTab.forEach((item,i)=>{
            item.addEventListener('click', ()=>{
                for(let a = 0; a < navServiceTab.length; a++) {
                    navServiceTab[a].classList.remove('active')
                    navServiceWrapper[a].classList.remove('active')
                }
                item.classList.add('active')
                navServiceWrapper[i].classList.add('active')
            })
        })  
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

let selectInput = document.querySelectorAll('.select select'),
    selectVal = document.querySelectorAll('.select p');

if(selectInput !== null) {
    for(let i = 0; i < selectInput.length; i++) {
        selectInput[i].addEventListener('change', ()=>{
            selectVal[i].innerHTML = selectInput[i].options[selectInput[i].selectedIndex].text
        })
    }
}

let video = document.querySelectorAll('.video-player'),
    videoPlay  = document.querySelectorAll('.video-btn');

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

let navMob = document.querySelector('.nav-menu'),
    navClose = document.querySelector('.nav-menu__close'),
    navHum = document.querySelector('.nav__hum');

if(navMob !== null) {
    navHum.addEventListener('click', ()=>{
        navMob.classList.add('active')
    })
    navClose.addEventListener('click', ()=>{
        navMob.classList.remove('active')
    })
}

let navMenuLink = document.querySelectorAll('.nav-menu__wrapper_btn'),
    navMenuWrapper = document.querySelectorAll('.nav-menu__wrapper'),
    navMenuClose = document.querySelectorAll('.nav-menu__wrapper_title');

if(navMenuLink !== null) {
    navMenuLink.forEach((item,i)=>{
        item.addEventListener('click', ()=>{
            for(let a = 0; a < navMenuWrapper.length; a++) {
                if(navMenuWrapper[a].getAttribute('data-name') == item.getAttribute('data-link')) {
                    navMenuWrapper[a].classList.add('active');
                } else {
                    navMenuWrapper[a].classList.remove('active')
                }
            }
        })
    })
    navMenuClose.forEach((item)=>{
        item.addEventListener('click', ()=>{
            for(let a = 0; a < navMenuWrapper.length; a++) {
                if(navMenuWrapper[a].getAttribute('data-name') == 'main') {
                    navMenuWrapper[a].classList.add('active');
                } else {
                    navMenuWrapper[a].classList.remove('active')
                }
            }
        })
    })
}

let tab = document.querySelectorAll('.tab');

if(tab !== null) {
    tab.forEach((item)=>{
        let tabPoint = item.querySelectorAll('.tab-point'),
            tabWrapper = item.querySelectorAll('.tab-wrapper');

        tabPoint.forEach((element, i) => {
            element.addEventListener('click', ()=>{
                for(let a = 0; a < tabPoint.length; a++) {
                    tabPoint[a].classList.remove('active')
                    tabWrapper[a].classList.remove('active')
                }
                element.classList.add('active')
                tabWrapper[i].classList.add('active')
            })
        });
        
    })
}

let vacancyBtn = document.querySelectorAll('.all-vacancy__btn'),
    vacancyItem = document.querySelectorAll('.all-vacancy__item');

if(vacancyBtn !== null) {
    vacancyBtn.forEach((item,i)=>{
        item.addEventListener('click', ()=>{
            item.classList.toggle('active');
            vacancyItem[i].classList.toggle('active');
        })
    })
}

let serviceMore = document.querySelectorAll('.price-service__more'),
    serviceDrop = document.querySelectorAll('.price-service__drop');

if(serviceMore !== null) {
    serviceMore.forEach((item,i)=>{
        if(serviceDrop[i].querySelectorAll('.price-service__row').length < 7) {
            serviceDrop[i].classList.add('dis')
        }
        
        item.addEventListener('click', ()=>{
            serviceDrop[i].classList.toggle('drop')
            if(serviceDrop[i].classList.contains('drop')) {
                item.querySelector('p').innerHTML = "Скрыть"
            } else {
                item.querySelector('p').innerHTML = "Показать еще"
            }
        })
    })
}


}, false);
