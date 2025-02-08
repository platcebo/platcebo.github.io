"use strict";

document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".header__slider", {
        slidesPerView: 1,
        effect: "fade",
        navigation: {
          nextEl: ".header__slider .swiper-button-next",
          prevEl: ".header__slider .swiper-button-prev",
        },
        pagination: {
          el: ".header__slider .swiper-pagination",
          type: "fraction",
        },
    });

    let statNum = document.querySelectorAll('.stat__val');

    if(statNum !== null) {
        function onEntry(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    function statVal(a) {
                        if(Number(a.innerHTML) < a.dataset.val) {
                            a.innerHTML = Number(a.innerHTML) + 1;
                            setTimeout(()=>{statVal(a)}, 10);
                        } else {
                            return
                        }
                    }
                    statNum.forEach((item)=>{
                        statVal(item)
                    })
                }
            });
        }
        let options = { threshold: [0.8] };
        let observer = new IntersectionObserver(onEntry, options);
        let elements = document.querySelectorAll('.stat');
        for (let elm of elements) {
            observer.observe(elm);
        }
    }

    // function onEntry(entry) {
    //     entry.forEach(change => {
    //         if (change.isIntersecting) {
    //             if(change.target.classList.contains('title-anim')) {
    //                 change.target.classList.add('element-show');
    //                 let index = 0;
    //                 for (let element of change.target.children) {
    //                     element.style.transitionDelay = index * 0.1 + 's';
    //                     index++;
    //                 }
    //             } else {
    //                 change.target.classList.add('element-show');
    //             }
    //         }
    //     });
    // }
    // let options = { threshold: [0.5] };
    // let observer = new IntersectionObserver(onEntry, options);
    // let elements = document.querySelectorAll('.element-animation');
    // for (let elm of elements) {
    //     observer.observe(elm);
    // }

    // let serviceRow = document.querySelectorAll('.scroll-row');

    // if(serviceRow !== null) {
    //     serviceRow.forEach((element, i) => {
    //         let text = element.innerHTML,
    //         a = 1;
    //         element.innerHTML = text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text
    //         setInterval(() => {
    //             element.style.transform = 'translateY(-' + a +'px)'
    //             a += 0.3
    //             if (a >= 5000) {
    //                 a = 1
    //             }
    //         }, 10);
    //     });
    // }

}, false);