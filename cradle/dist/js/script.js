"use strict";

document.addEventListener('DOMContentLoaded', function() {
    var swiperHeader = new Swiper(".header__slider", {
        slidesPerView: 1,
        effect: "fade",
        navigation: {
            nextEl: ".header__slider .swiper-button-next",
            prevEl: ".header__slider .swiper-button-prev",
        },
    });

    let headerPag = document.querySelector('.header__pag span');

    swiperHeader.on('slideChange', function () {
        console.log(swiperHeader.activeIndex)
        headerPag.style.transform = 'translateY(-'+ swiperHeader.activeIndex * 100 +'%)'
    });      

    var swiper = new Swiper(".about-page__slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".about-page__slider .swiper-button-next",
            prevEl: ".about-page__slider .swiper-button-prev",
        },
        pagination: {
            el: ".about-page__slider .swiper-pagination",
            type: "fraction",
            formatFractionCurrent: addZero,
            formatFractionTotal: addZero
        }, 
    });

    function addZero(num){
        return (num > 9) ? num : '0' + num;
    }     

    let statNum = document.querySelectorAll('.stat__val');

    if(statNum !== null) {
        function onEntry(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    function statVal(a) {
                        if(Number(a.innerHTML) < a.dataset.val) {
                            if(a.dataset.plus == null) {
                                a.innerHTML = Number(a.innerHTML) + 1;
                            } else {
                                a.innerHTML = Number(a.innerHTML) + Number(a.dataset.plus);
                                console.log(a.dataset.plus)
                            }
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
        let elements = document.querySelectorAll('.stat__val');
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
                if(element.classList.contains('parthner__col_rev')) {
                    element.style.transform = 'translateY(' + a +'px)'
                } else {
                    element.style.transform = 'translateY(-' + a +'px)'
                }
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
                    var widthBefore = document.body.offsetWidth;
                    document.body.style.overflow = "hidden"
                    document.body.style.width = widthBefore + "px";
                    nav[i].style.width = widthBefore + "px";
                    item.innerHTML = '<i link="Закрыть"><span>Закрыть</span></i>'
                } else {
                    document.body.style.overflow = "visible"
                    document.body.style.width = "";
                    nav[i].style.width = "";
                    item.innerHTML = '<i link="Меню"><span>Меню</span></i>'
                }
            })
        })
        navOverflow.forEach((item,i)=>{
            item.addEventListener('click', ()=>{
                nav[i].classList.toggle('active');
                nav[i].style.width = "";
                document.body.style.overflow = "visible"
                navCall[i].innerHTML = '<i link="Меню"><span>Меню</span></i>'
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

        window.addEventListener('scroll',()=>{
            if(window.scrollY > 1000) {
                pageArrow.classList.add('vis')
            } else {
                pageArrow.classList.remove('vis')
            }
        })
    }

    let repBtn = document.querySelectorAll('.rep__btn');

    if(repBtn !== null) {
        repBtn.forEach((item)=>{
            item.addEventListener('click', ()=>{
                item.classList.toggle('active')
            })
        })
    }

    let tabPoint = document.querySelectorAll('.tab-point'),
        tabWrapper = document.querySelectorAll('.tab-wrapper');

    if(tabPoint !== null) {
        tabPoint.forEach((item,i)=>{
            item.addEventListener('click', ()=>{
                for(let a = 0; a < tabPoint.length; a++) {
                    tabPoint[a].classList.remove('active')
                    tabWrapper[a].classList.remove('active')
                }
                item.classList.add('active')
                tabWrapper[i].classList.add('active')
            })
        })
    }

    let donateInput = document.querySelector('.donate__input_select input'),
        donateSelect = document.querySelector('.donate__input_select ul');

    if(donateInput !== null) {
        donateInput.addEventListener('click',()=>{
            donateInput.classList.toggle('active')
        })
        donateSelect.addEventListener('click', (event)=>{
            let target = event.target;
            if(target == target && target.closest('li')) {
                donateInput.classList.remove('active');
                donateInput.value = target.innerHTML
            }
        })
    }

    let modal = document.querySelector('.modal-thanks'),
        modalClose = document.querySelector('.modal-thanks__close'),
        modalNext = document.querySelector('.modal-thanks .btn__red'),
        modalOverflow = document.querySelector('.modal-thanks__overflow'),
        modalData = document.querySelector('.modal-data'),
        modalDataClose = document.querySelector('.modal-data__close'),
        modalDataOverflow = document.querySelector('.modal-data__overflow'),
        modalCall = document.querySelectorAll('.modal-thanks__call');

    if(modal !== null) {
        modalCall.forEach((item)=>{
            item.addEventListener('click', (event)=>{
                event.preventDefault()
                modal.classList.add('active')
                document.body.style.width = "";
                var widthBefore = document.body.offsetWidth;
                document.body.style.overflow = "hidden"
                document.body.style.width = widthBefore + "px";
                nav.forEach(item => item.style.width = widthBefore + "px")
            })
        })
        modalClose.addEventListener('click', ()=>{
            modal.classList.remove('active')
            document.body.style.overflow = "visible"
            document.body.style.width = "";
            nav.forEach(item => item.style.width = "")
        })
        modalOverflow.addEventListener('click', ()=>{
            modal.classList.remove('active')
            document.body.style.overflow = "visible"
            document.body.style.width = "";
            nav.forEach(item => item.style.width = "")
        })
        modalNext.addEventListener('click', ()=>{
            modal.classList.remove('active')
            modalData.classList.add('active')
        })
        modalDataClose.addEventListener('click', ()=>{
            modalData.classList.remove('active')
            document.body.style.overflow = "visible"
            document.body.style.width = "";
            nav.forEach(item => item.style.width = "")
        })
        modalDataOverflow.addEventListener('click', ()=>{
            modalData.classList.remove('active')
            document.body.style.overflow = "visible"
            document.body.style.width = "";
            nav.forEach(item => item.style.width = "")
        })
    }

}, false);