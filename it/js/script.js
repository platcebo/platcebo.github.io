$(document).ready(function(){
    $('.client__wrapper').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
        ]
    });
});

let nav = document.querySelector('.nav'),
    navHum = document.querySelector('.nav__humburger');

navHum.addEventListener('click', ()=>{
    nav.classList.toggle('nav__active');
});

let modal = document.querySelector('.modal'),
    modalBtn = document.querySelectorAll('.modal__btn'),
    modalClose = document.querySelector('.modal__close'),
    modalOverflow = document.querySelector('.modal__overflow');

for(let i = 0; i < modalBtn.length; i++) {
    modalBtn[i].addEventListener('click', (e)=>{
        modal.classList.add('modal__active');
        e.preventDefault();
    });
}

modalClose.addEventListener('click', ()=>{
    modal.classList.remove('modal__active');
});

modalOverflow.addEventListener('click', ()=>{
    modal.classList.remove('modal__active');
});