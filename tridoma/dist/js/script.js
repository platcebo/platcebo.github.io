let headerSlide = document.querySelectorAll('.header__slide'),
    headerStart = document.querySelector('.header__start'),
    headerEnd = document.querySelector('.header__end');

if(headerEnd !== null) {
    headerEnd.innerHTML = "0" + headerSlide.length
    document.querySelector('.header__pag').classList.remove('active');
    setTimeout(() => {
        document.querySelector('.header__pag').classList.add('active');
    }, 50);
}

var swiperHeader = new Swiper(".header__slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 5000,
    },  
    navigation: {
        nextEl: ".header__next",
        prevEl: ".header__prev",
    },
    on: {
        slideChange: () => {
            headerStart.innerHTML = "0" + (swiperHeader.activeIndex + 1)
            document.querySelector('.header__pag').classList.remove('active');
            setTimeout(() => {
                document.querySelector('.header__pag').classList.add('active');
            }, 50);
        }
    }
}); 

let headerCartSlide = document.querySelectorAll('.header-cart__slide'),
    headerCartStart = document.querySelector('.header-cart__start'),
    headerCartEnd = document.querySelector('.header-cart__end');

if(headerCartEnd !== null) {
    headerCartEnd.innerHTML = "0" + headerCartSlide.length
    document.querySelector('.header-cart__pag').classList.remove('active');
    setTimeout(() => {
        document.querySelector('.header-cart__pag').classList.add('active');
    }, 50);
}

var swiperCart = new Swiper(".header-cart__slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 5000,
    },  
    navigation: {
        nextEl: ".header-cart__next",
        prevEl: ".header-cart__prev",
    },
    on: {
        slideChange: () => {
            headerCartStart.innerHTML = "0" + (swiperCart.activeIndex + 1)
            document.querySelector('.header-cart__pag').classList.remove('active');
            setTimeout(() => {
                document.querySelector('.header-cart__pag').classList.add('active');
            }, 50);
        }
    }
}); 

var swiper = new Swiper(".advantage__slider", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: ".advantage__next",
        prevEl: ".advantage__prev",
    },
    pagination: {
        el: ".advantage__pag",
    },
    breakpoints: {
        1301: {
            slidesPerView: 4
        },
        701: {
            slidesPerView: 2
        },
    }
}); 

var swiper = new Swiper(".tech__slider", {
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
        nextEl: ".tech__next",
        prevEl: ".tech__prev",
    },
    pagination: {
        el: ".tech__pag",
    },
}); 

var swiperGallery = new Swiper(".gallery__slider_img", {
    slidesPerView: 1,
    spaceBetween: 24,
    // loop: true,
    pagination: {
        el: ".gallery__pag",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".gallery__next",
        prevEl: ".gallery__prev",
    },
    breakpoints: {
        1301: {
            slidesPerView: 3
        },
    },
}); 

var swiperPopup = new Swiper(".gallery-popup__img .gallery-popup__slider", {
    slidesPerView: 1,
    spaceBetween: 120,
    loop: true,
    pagination: {
        el: ".gallery-popup__pag",
    },
    navigation: {
        nextEl: ".gallery-popup__next",
        prevEl: ".gallery-popup__prev",
    },
}); 

let galleryImgSlide = document.querySelectorAll('.gallery__slider_img .gallery__slide'),
    galleryImgClose = document.querySelector('.gallery-popup__img .gallery-popup__close'),
    galleryImgOverflow = document.querySelector('.gallery-popup__img .gallery-popup__overflow'),
    galleryImg = document.querySelector('.gallery-popup__img');

if(galleryImg !== null) {
    galleryImgSlide.forEach((item, i)=>{
        item.addEventListener('click', ()=>{
            galleryImg.classList.add('active')
            document.body.style.overflow = "hidden"
            swiperPopup.slideTo(i)
        })
    })
    galleryImgClose.addEventListener('click', ()=>{
        galleryImg.classList.remove('active')
        document.body.style.overflow = "visible"
    })
    galleryImgOverflow.addEventListener('click', ()=>{
        galleryImg.classList.remove('active')
        document.body.style.overflow = "visible"
    })
}

var swiperGalleryVideo = new Swiper(".gallery__slider_video", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    pagination: {
        el: ".gallery__pag",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".gallery__next",
        prevEl: ".gallery__prev",
    },
    breakpoints: {
        1301: {
            slidesPerView: 3
        },
    },
}); 

var swiperPopupVideo = new Swiper(".gallery-popup__video .gallery-popup__slider", {
    slidesPerView: 1,
    spaceBetween: 120,
    // loop: true,
    pagination: {
        el: ".gallery-popup__pag",
    },
    navigation: {
        nextEl: ".gallery-popup__next",
        prevEl: ".gallery-popup__prev",
    },
}); 

let galleryVideoSlide = document.querySelectorAll('.gallery__slider_video .gallery__slide'),
    galleryVideoClose = document.querySelector('.gallery-popup__video .gallery-popup__close'),
    galleryVideoOverflow = document.querySelector('.gallery-popup__video .gallery-popup__overflow'),
    galleryVideo = document.querySelector('.gallery-popup__video');

if(galleryVideo !== null) {
    galleryVideoSlide.forEach((item, i)=>{
        item.addEventListener('click', ()=>{
            galleryVideo.classList.add('active')
            swiperPopupVideo.slideTo(i)
        })
    })
    galleryVideoClose.addEventListener('click', ()=>{
        galleryVideo.classList.remove('active')
    })
    galleryVideoOverflow.addEventListener('click', ()=>{
        galleryVideo.classList.remove('active')
    })
}

var swiper = new Swiper(".check-more__slider", {
    slidesPerView: 1,
    spaceBetween: 24,
    // loop: true,
    pagination: {
        el: ".check-more__pag",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".check-more__next",
        prevEl: ".check-more__prev",
    },
    breakpoints: {
        1301: {
            slidesPerView: 3
        },
    }
}); 

".svg".toSVG({
    svgClass: "replaced",
    onComplete: function() {}
});

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}
let options = { threshold: [0.2] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
    observer.observe(elm);
}

let programText = document.querySelector('.program__text'),
    programRow = document.querySelector('.program__row');
if(programText !== null) {
    programText.style.left = (programRow.getBoundingClientRect().width - 24 * 3) / 2 + 48 + "px"
    programText.style.width = (programRow.getBoundingClientRect().width - 24 * 3) / 4 + 'px'
}

let tab = document.querySelector('.tab'),
    tabPoint = document.querySelectorAll('.tab__item'),
    tabWrapper = document.querySelectorAll('.tab__wrapper');

if(tab !== null) {
    function tabHide() {
        for(let i = 0; i < tabPoint.length; i++) {
            tabPoint[i].classList.remove('active')
            tabWrapper[i].classList.remove('active')
        }
    }
    function tabShow(a) {
        tabPoint[a].classList.add('active')
        tabWrapper[a].classList.add('active')
    }

    tab.addEventListener('click', (event)=>{
        let target = event.target;
        for(let i = 0; i < tabPoint.length; i++) {
            if(target && target == tabPoint[i]) {
                tabHide()
                tabShow(i)
            }
        }
    })
}

let gallery = document.querySelector('.gallery__tab'),
    galleryPoint = document.querySelectorAll('.gallery__tab_item'),
    galleryWrapper = document.querySelectorAll('.gallery__wrapper');

if(gallery !== null) {
    function galleryHide() {
        for(let i = 0; i < galleryPoint.length; i++) {
            galleryPoint[i].classList.remove('active')
            galleryWrapper[i].classList.remove('active')
        }
    }
    function galleryShow(a) {
        galleryPoint[a].classList.add('active')
        galleryWrapper[a].classList.add('active')
    }

    gallery.addEventListener('click', (event)=>{
        let target = event.target;
        for(let i = 0; i < galleryPoint.length; i++) {
            if(target && target == galleryPoint[i]) {
                galleryHide()
                galleryShow(i)
            }
        }
    })
}

let plan = document.querySelector('.plan__tab'),
    planPoint = document.querySelectorAll('.plan__tab_point'),
    planWrapper = document.querySelectorAll('.plan__wrapper');

if(plan !== null) {
    function planHide() {
        for(let i = 0; i < planPoint.length; i++) {
            planPoint[i].classList.remove('active')
            planWrapper[i].classList.remove('active')
        }
    }
    function planShow(a) {
        planPoint[a].classList.add('active')
        planWrapper[a].classList.add('active')
    }

    plan.addEventListener('click', (event)=>{
        let target = event.target;
        for(let i = 0; i < planPoint.length; i++) {
            if(target && target == planPoint[i]) {
                planHide()
                planShow(i)
            }
        }
    })
}

let acc = document.querySelectorAll('.acc__item'),
    accBtn = document.querySelectorAll('.acc__btn'),
    accImg = document.querySelectorAll('.service__prev img');

if(acc.length !== 0 && acc !== null) {
    // acc[0].classList.add('active')
    // if(accImg.length !== 0 && accImg !== null) {
    //     accImg[0].classList.add('active')
    // }
    for (let a = 0; a < accBtn.length; a++) {
        accBtn[a].addEventListener('click', ()=>{
            if(acc[a].classList.contains('active')) {
                acc[a].classList.remove('active')
            } else {
                acc.forEach((item, i) =>{
                    item.classList.remove('active')
                    if(accImg.length !== 0 && accImg !== null) {
                        accImg[i].classList.remove('active')
                    }
                })
                acc[a].classList.add('active')
                if(accImg.length !== 0 && accImg !== null) {
                    accImg[a].classList.add('active')
                }
            }
        })
    }
}

let tech = document.querySelectorAll('.tech__item'),
    techBtn = document.querySelectorAll('.tech__btn');

if(tech !== null && tech.length !== 0) {
    for (let a = 0; a < techBtn.length; a++) {
        techBtn[a].addEventListener('click', ()=>{
            if(tech[a].classList.contains('active')) {
                tech[a].classList.remove('active')
            } else {
                tech.forEach((item, i) =>{
                    item.classList.remove('active')
                })
                tech[a].classList.add('active')
            }
        })
    }
}

let faq = document.querySelectorAll('.faq__item'),
    faqBtn = document.querySelectorAll('.faq__btn');

if(faq !== null && faq.length !== 0) {
    for (let a = 0; a < faqBtn.length; a++) {
        faqBtn[a].addEventListener('click', ()=>{
            if(faq[a].classList.contains('active')) {
                faq[a].classList.remove('active')
            } else {
                faq.forEach((item, i) =>{
                    item.classList.remove('active')
                })
                faq[a].classList.add('active')
            }
        })
    }
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

let pageArrow = document.querySelector('.footer__up');
        
if(pageArrow !== null) {
    function scrollToTop () {
        if (window.scrollY > 0) {
            window.scrollBy(0, -70); 
            setTimeout(scrollToTop, 0); 
        }
    }
    pageArrow.addEventListener("click", scrollToTop)
}

let navPart = document.querySelector('.nav-part'),
    navPartClose = document.querySelector('.nav-part__close');

if(navPart !== null) {
    navPartClose.addEventListener('click', ()=>{
        navPart.classList.add('remove')
    })
}

let nav = document.querySelector('.nav'),
    navHum = document.querySelector('.nav__hum');

if(nav !== null) {
    navHum.addEventListener('click',()=>{
        nav.classList.toggle('active')
        if(nav.classList.contains('active')) {
            nav.style.height = window.innerHeight +'px'
        } else {
            nav.style.height = 'auto'
        }
    })
}

function modalToggle(modal) {
    modal.classList.toggle('active')
    if(modal.classList.contains('active')) {
        modal.style.height = window.innerHeight + 'px'
    } else {
        modal.style.height = 'auto'
    }
}

let modalCall = document.querySelector('.modal-call'),
    modalCallBtn = document.querySelectorAll('.modal-call__btn'),
    modalCallOf = document.querySelector('.modal-call__overflow'),
    modalCallClose = document.querySelector('.modal-call__close');

if(modalCall !== null) {
    modalCallBtn.forEach((item)=>{
        item.addEventListener('click', ()=>{
            modalToggle(modalCall)
        })
    })
    modalCallClose.addEventListener('click', ()=>{
        modalToggle(modalCall)
    })
    modalCallOf.addEventListener('click', ()=>{
        modalToggle(modalCall)
    })
}

let modalFaq = document.querySelector('.modal-faq'),
    modalFaqBtn = document.querySelectorAll('.modal-faq__btn'),
    modalFaqOf = document.querySelector('.modal-faq__overflow'),
    modalFaqClose = document.querySelector('.modal-faq__close');

if(modalFaq !== null) {
    modalFaqBtn.forEach((item)=>{
        item.addEventListener('click', ()=>{
            modalToggle(modalFaq)
        })
    })
    modalFaqClose.addEventListener('click', ()=>{
        modalToggle(modalFaq)
    })
    modalFaqOf.addEventListener('click', ()=>{
        modalToggle(modalFaq)
    })
}

let faqFix = document.querySelector('.faq__fix'),
    faqWrapper = document.querySelector('.faq__title')
    faqTop = document.querySelector('.faq__block'),
    faqBottom = document.querySelector('.faq');

if(faqFix !== null && window.innerWidth > 1300) {
    faqFix.style.width = faqWrapper.getBoundingClientRect().width + 'px'
    window.addEventListener('scroll', ()=>{
        if(faqTop.getBoundingClientRect().top <= 20 && faqTop.getBoundingClientRect().bottom - faqFix.getBoundingClientRect().height >= 20) {
            faqFix.classList.add('fix')
            faqFix.classList.remove('bottom')
        } else if (faqTop.getBoundingClientRect().top > 20) {
            faqFix.classList.remove('fix')
            faqFix.classList.remove('bottom')
        } else if (faqTop.getBoundingClientRect().bottom - faqFix.getBoundingClientRect().height < 20) {
            faqFix.classList.remove('fix')
            faqFix.classList.add('bottom')
        }
    })
}

let formPrev = document.querySelector('.contact__form'),
    formReq = document.querySelectorAll('.contact__form ._req');
    
if(formPrev !== null) {
    formPrev.addEventListener('submit', () => formVal(formReq , event));
}

let formCall = document.querySelector('.modal-call'),
    formCallItem = document.querySelectorAll('.modal-call ._req');
    
if(formCall !== null) {
    formCall.addEventListener('submit', () => formVal(formCallItem , event));
}

let formFaq = document.querySelector('.modal-faq'),
    formFaqItem = document.querySelectorAll('.modal-faq ._req');
    
if(formCall !== null) {
    formCall.addEventListener('submit', () => formVal(formCallItem , event));
}

function formVal(input, event) {

    input.forEach(function(item) {
        item.classList.remove('error');
        item.parentElement.classList.remove('error__email')
        item.parentElement.classList.remove('wrapper_error')
    })

    let error = 0;

    input.forEach(function(item) {
        if(item.classList.contains('_email')) {
            if(item.value === '') {
                item.classList.add('error')
                item.parentElement.classList.add('wrapper_error')
                error++;
            } else if(formEmail(item)) {
                item.classList.add('error')
                item.parentElement.classList.add('wrapper_error')
                item.parentElement.classList.add('error__email')
                error++;
            } 
        } else if (item.classList.contains('_phone')) {
            if (item.value === '') {
                item.classList.add('error')
                item.parentElement.classList.add('wrapper_error')
                error++;
            } else if(item.value.length !== 18 ) {
                item.classList.add('error')
                item.parentElement.classList.add('wrapper_error')
                error++;
            }
        } else if (item.getAttribute('type') === 'checkbox' && item.checked === false) {
            item.classList.add('error')
            item.parentElement.classList.add('wrapper_error')
            error++;
        } else if (item.value === '') {
            item.classList.add('error')
            item.parentElement.classList.add('wrapper_error')
            error++;
        }
    });

    if(error !== 0) {
        event.preventDefault()
    }
}

function formEmail(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\--]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

let equipBtn1 = document.querySelector('.equip__1_btn'),
    equipText1 = document.querySelectorAll('.equip_1'),
    equipBtn2 = document.querySelector('.equip__2_btn'),
    equipText2 = document.querySelectorAll('.equip_2');

if(equipBtn1 !== null) {
    equip1()

    equipBtn1.addEventListener('click', ()=>{
        equip1()
    })
    equipBtn2.addEventListener('click', ()=>{
        equip2()
    })

    function equip1(){
        equipBtn2.classList.remove('active')
        equipText2.forEach((item)=>{
            item.classList.remove('active')
        })
        equipBtn1.classList.add('active')
        equipText1.forEach((item)=>{
            item.classList.add('active')
        })
    }
    function equip2(){
        equipBtn1.classList.remove('active')
        equipText1.forEach((item)=>{
            item.classList.remove('active')
        })
        equipBtn2.classList.add('active')
        equipText2.forEach((item)=>{
            item.classList.add('active')
        })
    }
}

let equipName = document.querySelectorAll('.equip__name'),
    equipTab = document.querySelectorAll('.equip__tab');

if(equipTab !== null) {
    for(let i = 0; i < equipName.length; i++){
        equipName[i].addEventListener('click',()=>{
            equipTab[i].classList.toggle('active')
            equipName[i].classList.toggle('active')
        })
    }
}

const navElements = document.querySelectorAll('a[href^="#"]');

navElements.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const id = link.getAttribute('href');
    const target = document.querySelector(id);
    const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
  });
});


if(document.querySelectorAll('.itc-select')!==null) {
    const select1 = new ItcCustomSelect('#select-1');
}
