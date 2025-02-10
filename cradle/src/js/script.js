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
        let options = { threshold: [0.5] };
        let observer = new IntersectionObserver(onEntry, options);
        let elements = document.querySelectorAll('.stat');
        for (let elm of elements) {
            observer.observe(elm);
        }
    }

    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show');
                let index = 0;
                for (let element of change.target.children) {
                    element.style.transitionDelay = index * 0.1 + 's';
                    index++;
                }
            }
        });
    }
    let options = { threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-animation');
    for (let elm of elements) {
        observer.observe(elm);
    }

    let serviceRow = document.querySelectorAll('.scroll-row');

    if(serviceRow !== null) {
        serviceRow.forEach((element, i) => {
            let text = element.innerHTML,
            a = 1;
            element.innerHTML = text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text
            setInterval(() => {
                element.style.transform = 'translateY(-' + a +'px)'
                a += 0.3
                if (a >= 5000) {
                    a = 1
                }
            }, 10);
        });
    }

    let nav = document.querySelectorAll('.nav'),
        navFix = document.querySelector('.nav.fix'),
        navCall = document.querySelectorAll('.nav__call'),
        navOverflow = document.querySelectorAll('.nav__overflow'),
        navBtn = document.querySelectorAll('.nav__menu_btn');

    if(nav !== null) {
        navCall.forEach((item,i)=>{
            item.addEventListener('click', ()=>{
                nav[i].classList.toggle('active');
                if(nav[i].classList.contains('active')) {
                    document.body.style.overflow = "hidden"
                    item.innerHTML = '<i link="Закрыть"><span>Закрыть</span></i>'
                } else {
                    document.body.style.overflow = "visible"
                    item.innerHTML = '<i link="Меню"><span>Меню</span></i>'
                }
            })
        })
        navOverflow.forEach((item,i)=>{
            item.addEventListener('click', ()=>{
                nav[i].classList.toggle('active');
            })
        })
        navBtn.forEach((item)=>{
            item.addEventListener('click', (e)=>{
                e.preventDefault()
                item.classList.toggle('active');
            })
        })
        let up = window.scrollY
        window.addEventListener('scroll', ()=>{
            
            if(window.scrollY > navFix.getBoundingClientRect().height) {
                if(up < window.scrollY) {
                    up = window.scrollY
                    navFix.classList.remove('vis')
                } else {
                    navFix.classList.add('vis')
                    up = window.scrollY
                }
            } else {
                navFix.classList.remove('vis')
            }
        })
    }

    let pageArrow = document.querySelector('.arrow-up');
        
    if(pageArrow !== null) {
        function scrollToTop () {
            if (window.scrollY > 0) {
                window.scrollBy(0, -70); 
                setTimeout(scrollToTop, 0); 
            }
        }
        pageArrow.addEventListener("click", scrollToTop)
    }

    let repBtn = document.querySelectorAll('.rep__btn');

    if(repBtn !== null) {
        repBtn.forEach((item)=>{
            item.addEventListener('click', ()=>{
                item.classList.toggle('active')
            })
        })
    }

}, false);