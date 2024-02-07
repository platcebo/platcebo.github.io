var mainSlider = new Swiper(".slider__slider", {
    loop: false,
    autoHeight: true,
    navigation: {
        nextEl: ".slider__next",
        prevEl: ".slider__prev",
    },
});
var catalogImg = new Swiper(".catalog__img", {
    loop: false,
    pagination: {
        el: ".catalog__img_pag",
    },
});
var productThumbs = new Swiper(".product__thumbs", {
    spaceBetween: 5,
    slidesPerView: 4,
    breakpoints: {
        1441: {
            slidesPerView: 5,
        },
    }
});
var productSlider = new Swiper(".product__slider", {
    spaceBetween: 10,
    thumbs: {
        swiper: productThumbs,
    },
});
var productInter = new Swiper(".product__inter_mob", {
    spaceBetween: 6,
    slidesPerView: 2,
});

let navDrop = document.querySelectorAll('.nav__drop')

if(navDrop !== null) {
    navDrop.forEach((item)=>{
        item.addEventListener('click', ()=>{
            item.classList.toggle('active')
        })
    })
}

let arrow = document.querySelector('.footer__arrow');

if(arrow !== null) {
    function scrollToTop () {
        if (window.scrollY > 0) {
            window.scrollBy(0, -70); 
            setTimeout(scrollToTop, 0); 
        }
    }
    arrow.addEventListener("click", scrollToTop)
}

let nav = document.querySelector('.nav'),
    navHumburger = document.querySelector('.nav__humburger');

if(nav !== null) {
    navHumburger.addEventListener('click', ()=>{
        nav.classList.toggle('active')
    })
}

let askBtn = document.querySelectorAll('.comment__ask_btn'),
    askText = document.querySelectorAll('.comment__ask_text');

if(askBtn !== null) {
    askBtn.forEach((item, i)=>{
        item.addEventListener('click', ()=>{
            item.classList.toggle('active')
        })
    })
}

let footerBtn = document.querySelectorAll('.footer__mob_btn');

if(footerBtn !== null) {
    footerBtn.forEach((item)=>{
        item.addEventListener('click',()=>{
            item.classList.toggle('active')
        })
    })
}

let commentBtn = document.querySelectorAll('.comment-page__btn a'),
    commentItem = document.querySelectorAll('.comment-page__btn');

if(commentItem !== null) {
    commentItem.forEach((item, i)=>{
        commentBtn[i].addEventListener('click',(e)=>{
            e.preventDefault()
            item.classList.toggle('active')
            if(item.classList.contains('active')) {
                commentBtn[i].innerHTML = "скрыть"
            } else {
                commentBtn[i].innerHTML = "читать далее..."
            }
        })
    })
}