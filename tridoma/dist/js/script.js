let headerSlide = document.querySelectorAll('.header__slide'),
    headerStart = document.querySelector('.header__start'),
    headerEnd = document.querySelector('.header__end');

if(headerEnd !== null) {
    headerEnd.innerHTML = "0" + headerSlide.length
}

var swiper = new Swiper(".header__slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".header__pag",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".header__next",
        prevEl: ".header__prev",
    },
    on: {
        slideChange: (event) => {
            headerStart.innerHTML = "0" + (swiper.realIndex + 1)
        }
    }
}); 

var swiper = new Swiper(".advantage__slider", {
    slidesPerView: 4,
    spaceBetween: 24,
    navigation: {
        nextEl: ".advantage__next",
        prevEl: ".advantage__prev",
    },
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

var swiper = new Swiper(".gallery__slider", {
    slidesPerView: 3,
    spaceBetween: 24,
    navigation: {
        nextEl: ".gallery__next",
        prevEl: ".gallery__prev",
    },
}); 

".svg".toSVG({
    svgClass: "replaced",
    onComplete: function() {}
});

const select1 = new ItcCustomSelect('#select-1');

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

let acc = document.querySelectorAll('.acc__item'),
    accBtn = document.querySelectorAll('.acc__btn'),
    accImg = document.querySelectorAll('.service__prev img');

if(acc !== null) {
    acc[0].classList.add('active')
    accImg[0].classList.add('active')
    for (let a = 0; a < accBtn.length; a++) {
        accBtn[a].addEventListener('click', ()=>{
            acc.forEach((item, i) =>{
                item.classList.remove('active')
                accImg[i].classList.remove('active')
            })
            acc[a].classList.add('active')
            accImg[a].classList.add('active')
        })
    }
}

let tech = document.querySelectorAll('.tech__item'),
    techBtn = document.querySelectorAll('.tech__btn');

if(tech !== null) {
    tech[0].classList.add('active')
    for (let a = 0; a < techBtn.length; a++) {
        techBtn[a].addEventListener('click', ()=>{
            tech.forEach((item, i) =>{
                item.classList.remove('active')
            })
            tech[a].classList.add('active')
        })
    }
}

let faq = document.querySelectorAll('.faq__item'),
    faqBtn = document.querySelectorAll('.faq__btn');

if(faq !== null) {
    faq[0].classList.add('active')
    for (let a = 0; a < faqBtn.length; a++) {
        faqBtn[a].addEventListener('click', ()=>{
            faq.forEach((item, i) =>{
                item.classList.remove('active')
            })
            faq[a].classList.add('active')
            console.log('dfdf')
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