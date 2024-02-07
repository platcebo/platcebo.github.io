var swiper = new Swiper(".header__slider", {
    speed: 3000,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});
var swiper = new Swiper(".project__slider", {
    loop: true,
    navigation: {
        nextEl: ".project__next",
        prevEl: ".project__prev",
    },
    pagination: {
        el: ".project__pagination",
    },
});
var swiper = new Swiper(".team-work__wrapper", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
    centeredSlides: true,
    navigation: {
        nextEl: ".team-work__next",
        prevEl: ".team-work__prev",
    },
    pagination: {
        el: ".team-work__pagination",
    },
    breakpoints: {
        768: {
            slidesPerView: 1.5
        }
    }
});
var swiper = new Swiper(".popular__wrapper", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".popular__next",
        prevEl: ".popular__prev",
    },
    breakpoints: {
        600: {
            slidesPerView: 2
        }
    }
});

let nav = document.querySelector('.nav'),
    navHumburger = document.querySelector('.nav__humburger');

if(nav !== null) {
    navHumburger.addEventListener('click', ()=>{
        nav.classList.toggle('nav__active');
    })
}