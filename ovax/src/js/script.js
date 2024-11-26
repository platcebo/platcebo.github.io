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