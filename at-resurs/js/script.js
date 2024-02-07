$('.case__wrapper').slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    customPaging: '40px',
    prevArrow: '<button type="button" class="slick-prev btn__grey"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.25 13.5L6.75 9L11.25 4.5" stroke="#1E1E1E" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next btn__red"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 13.5L11.25 9L6.75 4.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    appendArrows: $('.case__arrow'),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                dots: false,
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                customPaging: '40px',
            }
        },
        {
            breakpoint: 550,
            settings: {
                dots: false,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                customPaging: '40px',
            }
        },
    ]
});

let nav = document.querySelector('.nav'),
    navHumburger = document.querySelector('.nav__humburger');

if(nav !== null) {
    navHumburger.addEventListener('click', ()=>{
        nav.classList.toggle('nav__active')
    })
}

let modalProductBtn = document.querySelectorAll('.modal-product__btn'),
    modalProduct = document.querySelector('.modal-product'),
    modalProductClose = document.querySelector('.modal-product__close'),
    modalProductOverflow = document.querySelector('.modal-product__overflow');

if(modalProduct !== null) {
    for(let i = 0; i < modalProductBtn.length; i++) {
        modalProductBtn[i].addEventListener('click', ()=>{
            modalProduct.classList.add('modal-product__active')
        })
    }
    modalProductClose.addEventListener('click', ()=>{
        modalProduct.classList.remove('modal-product__active')
    })
    modalProductOverflow.addEventListener('click', ()=>{
        modalProduct.classList.remove('modal-product__active')
    })
}

let modalOrderBtn = document.querySelectorAll('.modal-order__btn'),
    modalOrder = document.querySelector('.modal-order'),
    modalOrderClose = document.querySelector('.modal-order__close'),
    modalOrderOverflow = document.querySelector('.modal-order__overflow');

if(modalOrder !== null) {
    for(let i = 0; i < modalOrderBtn.length; i++) {
        modalOrderBtn[i].addEventListener('click', ()=>{
            modalProduct.classList.remove('modal-product__active');
            modalOrder.classList.add('modal-order__active');
        })
    }
    modalOrderClose.addEventListener('click', ()=>{
        modalOrder.classList.remove('modal-order__active')
    })
    modalOrderOverflow.addEventListener('click', ()=>{
        modalOrder.classList.remove('modal-order__active')
    })
}