'use strict'

document.addEventListener('DOMContentLoaded', function() {

    let serviceRow = document.querySelectorAll('.run-line__wrapper');

    if(serviceRow !== null) {
        serviceRow.forEach((element, i) => {
            let text = element.innerHTML,
                a = 1;
            element.innerHTML = text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text
            setInterval(() => {
                element.style.transform = 'translateX(-' + a +'px)'
                a += 0.3
                // console.log(a)
                if (a >= 4000) {
                    a = 1
                }
            }, 10);
        });
    }

    let nav = document.querySelector('.nav'),
        navHum = document.querySelector('.nav__hum');

    if(nav !== null) {
        navHum.addEventListener('click', ()=>{
            if(nav.classList.contains('active')) {
                nav.classList.toggle('active');
            } else {
                nav.classList.toggle('active');
            }
        })
    }

}, false);