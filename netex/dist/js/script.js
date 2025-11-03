"use strict";

document.addEventListener('DOMContentLoaded', function() {

let drop = document.querySelectorAll('.drop'),
    dropBtn = document.querySelectorAll('.drop-btn');

if(drop !== null) {
    dropBtn.forEach((item,i)=>{
        item.addEventListener('click', ()=>{
            drop[i].classList.toggle('active')
        })
    })
    document.body.addEventListener('click', (event)=>{
        if(!event.target.closest('.drop')) {
            drop.forEach(item=>item.classList.remove('active'))
        } 
    })
}

if(window.innerWidth > 500) {
    var swiper = new Swiper(".service__slider", {
        slidesPerView: "auto",
        spaceBetween: 24,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

let nav = document.querySelector('.nav'),
    navHum = document.querySelector('.nav__hum');

if(nav !== null) {
    navHum.addEventListener('click', ()=>{
        nav.classList.toggle('active')
    })
}

let howTab = document.querySelectorAll('.how__tab li'),
    howImg = document.querySelectorAll('.how__bg');

if(howTab !== null) {
    howTab.forEach((item,i)=>{
        item.addEventListener('click', ()=>{
            howTab.forEach((a,b)=>{
                howImg[b].classList.remove('active')
                a.classList.remove('active')
            })
            item.classList.add('active')
            howImg[i].classList.add('active')
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

}, false);
