var swiper = new Swiper(".slider__slider", {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 100,
        depth: 0,
        modifier: 1,
        slideShadows: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
        1441: {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,
            coverflowEffect: {
                rotate: 0,
                stretch: 200,
                depth: 0,
                modifier: 1,
                slideShadows: false,
            },
        },
        801: {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,
            coverflowEffect: {
                rotate: 0,
                stretch: 100,
                depth: 0,
                modifier: 1,
                slideShadows: false,
            },
        }
    }
});

var swiper = new Swiper(".menu__slider", {
    direction: "vertical",
    slidesPerView: 'auto',
    spaceBetween: 20,
    mousewheel: true,
    centeredSlides: true,
    loop: true,
    grabCursor: false,
});

let sliderDots = document.querySelector('.menu__dots'),
    slider = document.querySelectorAll(".menu__bg .swiper-slide");

if(sliderDots !== null) {
    let sliderCount = slider.length,
        sliderSpan = `<span></span>`;
    for(let i = 0; i < slider.length; i++) {
        sliderDots.insertAdjacentHTML('beforeend', sliderSpan)
    }
    var SliderSpan = document.querySelectorAll('.menu__dots span');
}

var swiper = new Swiper(".menu__bg", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.menu__num',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    on: {
        slideChange: (event) => {
            SliderSpan.forEach(item => item.classList.remove('active'))
            SliderSpan[swiper.realIndex].classList.add('active')
        }
    }
});

let nav = document.querySelector('.nav'),
    navHumburger = document.querySelector('.nav__humburger');

if(nav !== null) {
    navHumburger.addEventListener('click', ()=>{
        if(document.body.classList.contains('fix')) {
            nav.classList.remove('active')
            document.body.classList.remove('fix')
        } else {
            nav.classList.add('active')
            document.body.classList.add('fix')
        }
    })
}

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

let navMenu = document.querySelectorAll('.height');

if(navMenu !== null) {
    window.addEventListener('scroll', ()=>{
        navMenu.forEach(item => item.style.height = window.innerHeight + 'px')
    })
    navMenu.forEach(item => item.style.height = window.innerHeight + 'px')
}