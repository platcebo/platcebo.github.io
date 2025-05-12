'use strict'

document.addEventListener('DOMContentLoaded', function() {

    var swiper = new Swiper(".friend__slider", {
        direction: "horizontal",
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".friend__wrapper .swiper-button-next",
            prevEl: ".friend__wrapper .swiper-button-prev",
        },
        breakpoints: {
            601: {
                direction: "vertical",
                slidesPerView: 3,
                centeredSlides: true,
            }
        }
    });

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

    let passwordBtn = document.querySelectorAll('.sign-in__password'),
        passwordInput = document.querySelectorAll('.sign-in__password_input');

    if(passwordBtn !== null) {
        passwordBtn.forEach((item,i)=>{
            item.addEventListener('click', ()=>{
                if(item.classList.contains('active')) {
                    passwordInput[i].setAttribute('type', 'password');
                    item.classList.remove('active')
                } else {
                    passwordInput[i].setAttribute('type', 'text');
                    item.classList.add('active')
                }
            })
        })
    }

}, false);

window.addEventListener('load', () => {
    setTimeout( () => {
        const o = new IntersectionObserver(e => {
            e.forEach(t => {
                var s = t.target.querySelectorAll("path");
                t.isIntersecting && (i(s, 7),
                t.target.classList.contains("comet") && i(s, 2))
              }
            )
          }
        );
        function i(e, t) {
          e.forEach( (s, l) => {
              setTimeout( () => {
                  s.classList.add("white-blink--active")
                }
                , l * t)
            }
          )
        }
        document.querySelectorAll(".scroll-spy").forEach(e => o.observe(e))
      }, 500);
})

let serviceRow = document.querySelectorAll('.part__col');

if(serviceRow !== null) {
    serviceRow.forEach((element, i) => {
        let text = element.innerHTML,
        a = 1;
        element.innerHTML = text + text + text + text + text 
        setInterval(() => {
            element.style.transform = 'translateX(' + a +'px)'
            a += 0.3
            if (a >= 2000) {
                a = 1
            }
        }, 30);
    });
}