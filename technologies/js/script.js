$(document).ready(function(){
    $('.catalog__wrapper').slick({
        variableWidth: true,
        slidesToShow: 3,
        arrows: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                }
            },
        ]
    });
    let nav = document.querySelectorAll('.nav__humburger'),
        aside = document.querySelector('.aside');

    for(let i = 0; i < nav.length; i++) {
        nav[i].addEventListener('click', ()=>{
            aside.classList.toggle('aside__active');
        });
    }
});