"use strict";

document.addEventListener('DOMContentLoaded', function() {

var swiper = new Swiper(".card__thumb", {
    spaceBetween: 20,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        1025: {
            // slidesPerView: 2,
            spaceBetween: 20
        },
        // 601: {
        //     // slidesPerView: 2,
        //     spaceBetween: 4
        // },
    }
});
var swiper2 = new Swiper(".card__slider", {
    spaceBetween: 10,
    thumbs: {
        swiper: swiper,
    },
    effect: "fade",
    navigation: {
        nextEl: ".card__slider .swiper-button-next",
        prevEl: ".card__slider .swiper-button-prev",
    },
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
});

let cardSlide = document.querySelectorAll('.card__wrapper .card__slide');

if(cardSlide !== null) {

    let modal = document.createElement('div');
    modal.className = "modal";


    cardSlide.forEach((item,i)=>{
        item.addEventListener('click',()=>{
            modal.innerHTML = `
                <div class="modal__overflow"></div>
                <div class="modal__close">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L18.5303 17.4697C18.8232 17.7626 18.8232 18.2374 18.5303 18.5303C18.2374 18.8232 17.7626 18.8232 17.4697 18.5303L5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967Z" fill="#f1cb90"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5303 5.46967C18.8232 5.76256 18.8232 6.23744 18.5303 6.53033L6.53035 18.5303C6.23745 18.8232 5.76258 18.8232 5.46969 18.5303C5.17679 18.2374 5.17679 17.7626 5.46968 17.4697L17.4697 5.46967C17.7626 5.17678 18.2374 5.17678 18.5303 5.46967Z" fill="#f1cb90"/>
                    </svg>
                </div>
            ` + item.innerHTML;

            document.body.append(modal); 
            
        })
    })

    document.body.addEventListener('click',(event)=>{
        if(event.target.closest('div.modal__close') || event.target.closest('div.modal__overflow')) {
            modal.remove()
        }
    })
}

}, false);
