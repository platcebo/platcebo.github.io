"use strict";

document.addEventListener('DOMContentLoaded', function() {

let navDop = document.querySelectorAll('.nav-dop-js'),
    navDopBtn = document.querySelectorAll('.nav-dop-js__btn');

if(navDop !== null) {
    navDopBtn.forEach((item,i)=>{
        item.addEventListener('click', ()=>{
            if(navDop[i].classList.contains('active')) {
                navDop.forEach(a=>a.classList.remove('active'))
            } else {
                navDop.forEach(a=>a.classList.remove('active'))
                navDop[i].classList.add('active')
            }
        })
    })
}

const blocks = document.querySelectorAll(".title__anim"),
    aboutImg = document.querySelectorAll('.about__bg'),
    statItem = document.querySelectorAll('.stat__item'),
    mapItem = document.querySelectorAll('.map__icon');

const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // убираем, если анимация нужна один раз
        }
        });
    },
    {
        threshold: 0.2 // 20% блока видно → запускаем
    }
);

blocks.forEach(block => observer.observe(block));
aboutImg.forEach(block => observer.observe(block));
statItem.forEach(block => observer.observe(block));
mapItem.forEach(block => observer.observe(block));

[].forEach.call( document.querySelectorAll('input.wpcf7-tel'), function(input) {
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

const selects = document.querySelectorAll(".input__select");

    selects.forEach(select => {
        const input = select.querySelector("input");
        const list = select.querySelector("ul");
        const items = select.querySelectorAll("li");

        // открыть / закрыть список
        input.addEventListener("click", () => {
        select.classList.toggle("active");
        });

        // выбор элемента
        items.forEach(item => {
        item.addEventListener("click", () => {
            input.value = item.textContent;
            select.classList.remove("active");
        });
        });
    });

    // закрытие при клике вне
    document.addEventListener("click", (e) => {
        document.querySelectorAll(".input__select").forEach(select => {
        if (!select.contains(e.target)) {
            select.classList.remove("active");
        }
    });
});

let mapIcon = document.querySelectorAll('.map__icon'),
    mapInfo = document.querySelectorAll('.map__info_city'),
    mapNum = document.querySelectorAll('.map__info_num span');

if(mapIcon !== null) {
    mapIcon.forEach((item, i)=>{
        item.addEventListener('click',()=>{
            mapIcon.forEach((a,b)=>{
                mapIcon[b].classList.remove('active');
                mapInfo[b].classList.remove('active');
                mapNum[b].classList.remove('active');
            })
            item.classList.add('active');
            mapInfo[i].classList.add('active');
            mapNum[i].classList.add('active');
        })
    })
}

let footerDrop = document.querySelectorAll('.footer__drop');

if(footerDrop !== null) {
    footerDrop.forEach((item)=>{
        item.addEventListener('click', ()=>{
            if(item.classList.contains('active')) {
                item.classList.remove('active')
            } else {
                footerDrop.forEach(a=>a.classList.remove('active'));
                item.classList.add('active');
            }
        })
    })
}

let navFix = document.querySelector('.nav-fix'),
    sectionFirst = document.querySelector('.section-first');

if(navFix !== null) {
    if(sectionFirst.getBoundingClientRect().bottom < 0) {
        navFix.classList.add('active')
    } else {
        navFix.classList.remove('active')
    }
    window.addEventListener('scroll', ()=>{
        if(sectionFirst.getBoundingClientRect().bottom < 0) {
            navFix.classList.add('active')
        } else {
            navFix.classList.remove('active')
        }
    })
}

let lastScrollTop = 0,
    nav = document.querySelector('.nav'),
    navContainer = document.querySelector('.nav-info');

if(nav !== null) {
    window.addEventListener('scroll', () => {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll < lastScrollTop) {
            // скролл вверх
            nav.classList.add('active');
            nav.style.top = - navContainer.getBoundingClientRect().height + "px"
        } else {
            // скролл вниз
            nav.classList.remove('active');
            nav.style.top = "-100%"
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // защита от отрицательных значений
    });
}

let navHum = document.querySelector ('.nav .nav__hum'),
    navMenu = document.querySelector('.nav-menu'),
    navClose = document.querySelector('.nav-menu .nav__hum');

if(navMenu !== null) {
    navHum.addEventListener('click', ()=>{
        navMenu.classList.add('active')
    })
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('active')
    })
}



}, false);
