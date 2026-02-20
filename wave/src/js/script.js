"use strict";

document.addEventListener('DOMContentLoaded', function() {

var swiper = new Swiper(".header__wrapper", {
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".content__wrapper", {
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".content__wrapper .swiper-pagination",
        // dynamicBullets: true,
    },
});

document.querySelectorAll('a[href^="/#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    if (window.location.pathname === '/' || window.location.pathname === '') {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href').replace('/', ''))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }
  })
})

if(document.querySelector('.footer__row a') !== null ) {
    let policyLink = document.querySelector('.footer__row a').getAttribute('href');

    let InputLink = document.querySelectorAll('.input__check p a');

    InputLink.forEach((item)=>{
        item.href = policyLink;
    })
}




}, false);
