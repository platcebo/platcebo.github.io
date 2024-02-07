$(document).ready(function(){
    $('.slider-film__wrapper').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    dots: false,
                    arrows: false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    centerMode: true,
                    variableWidth: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                } 
            },
        ]
    });
    $('.series-slider__wrapper').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        centerMode: false,
        variableWidth: true,
        autoplay: false,
        slidesToScroll: 2
    });
    $('.list-film__wrapper').slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    dots: false,
                    arrows: false,
                    infinite: false,
                    speed: 300,
                    slidesToShow: 1,
                    centerMode: false,
                    variableWidth: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    infinite: true,
                } 
            },
        ]
    });
    $('.tv__bar').slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 7,
        slidesToScroll: 7,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    dots: false,
                    arrows: false,
                    infinite: false,
                    speed: 300,
                    variableWidth: true,
                    slidesToScroll: 1,
                    slidesToShow: 1,
                } 
            },
        ]
    });
    $('.radio-slider__slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 5000,
    });
    $('.music-slider__wrapper').slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    dots: false,
                    arrows: false,
                    infinite: false,
                    speed: 300,
                    slidesToShow: 1,
                    centerMode: false,
                    variableWidth: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    infinite: true,
                } 
            },
        ]
    });
    $('.radio-program__slider').slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 7,
        slidesToScroll: 7,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    dots: false,
                    arrows: false,
                    infinite: false,
                    speed: 300,
                    variableWidth: true,
                    slidesToScroll: 1,
                    slidesToShow: 1,
                } 
            },
        ]
    });
});

let navHumburger = document.querySelector('.nav__humburger'),
    nav = document.querySelector('.nav');

if(nav!==null) {
    navHumburger.addEventListener('click',()=>{
        nav.classList.toggle('nav__active')
    })
}

let tvText = document.querySelectorAll('.tv__info_text'),
    tvTextBtn = document.querySelectorAll('.tv__info_btn'),
    tvSpan = document.querySelectorAll('.tv__info_btn span');

if(tvText !== null) {
    for(let i = 0; i < tvText.length; i++) {
        tvTextBtn[i].addEventListener('click', ()=>{
            tvText[i].classList.toggle('active');
            tvTextBtn[i].classList.toggle('active');
            if(tvText[i].classList.contains('active')) {
                tvSpan[i].innerHTML = 'Свернуть'
            } else {
                tvSpan[i].innerHTML = 'Читать полностью'
            }
        })
    }
}

var swiper = new Swiper(".mySwiper", {
    spaceBetween: -50,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    autoHeight: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    coverflowEffect: {
        rotate: 70,
        stretch: 0,
        depth: 1100,
        modifier: 1,
        slideShadows: false,
    },
    breakpoints: {
        600: {
            spaceBetween: -150,
            coverflowEffect: {
                rotate: 70,
                stretch: 0,
                depth: 1400,
                modifier: 1,
                slideShadows: false,
            },
        },
    },
});

let detailsTab = document.querySelector('.details__tab'),
    detailsBtn = document.querySelector('.details__btn'),
    detailsSpan = document.querySelector('.details__btn span');

if(detailsBtn !== null) {
    detailsBtn.addEventListener('click', ()=>{
        detailsTab.classList.toggle('active')
        if(detailsTab.classList.contains('active')) {
            detailsSpan.innerHTML = 'Свернуть'
        } else {
            detailsSpan.innerHTML = 'Читать полностью'
        }
    })
}

var SJ_setiings = {
    options: {
        hlw: true, // Height as width
        wlh: true, // Width as height
        hlt: true, // Width of the target element (target id is the same as for height)
        wlt: true, // Height of the target element (target id is the same as for width)
        alo: true, // All elements as one (height)
    },
    settings: {
        windowResize: true, 
        writeHystory: true 
    }
}
var sj = new SJ(SJ_setiings);

var tvBar = document.querySelector('.tv__bar_base'),
    tvBarWrapper = document.querySelector('.tv__bar_scroll');

if(tvBar !== null) {
    var tvBardist = tvBar.getBoundingClientRect().top
    if(tvBardist == 0 || tvBardist < 0) {
        tvBarWrapper.classList.add('active');
    }
    window.addEventListener('scroll', function (evt) {
        tvBardist = tvBar.getBoundingClientRect().bottom

        if(tvBardist == 0 || tvBardist < 0) {
            tvBarWrapper.classList.add('active');
        }

        if(tvBardist > 0) {
            tvBarWrapper.classList.remove('active');
        }
    });
}

let filter = document.querySelector('.filter__input p'),
    filterWrapper = document.querySelector('.filter__input'),
    filterList = document.querySelector('.filter__wrapper ul'),
    filterPoint = document.querySelectorAll('.filter__wrapper li'),
    filterSpan = document.querySelector('.filter__input p span');

if(filter !== null) {
    filter.addEventListener('click', ()=>{
        filterWrapper.classList.toggle('active')
        filterList.classList.toggle('active')
    })
    for(let i = 0; i<filterPoint.length; i++) {
        filterPoint[i].addEventListener('click', ()=>{
            filterSpan.innerHTML = filterPoint[i].innerHTML;
            filterWrapper.classList.remove('active')
            filterList.classList.remove('active')
        })
    }
}