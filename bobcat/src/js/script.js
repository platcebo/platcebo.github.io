'use strict'

document.addEventListener('DOMContentLoaded', function() {
    
    var swiper = new Swiper(".advant__slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: ".advant .swiper-pagination",
        },
        navigation: {
            nextEl: ".advant .swiper-button-next",
            prevEl: ".advant .swiper-button-prev",
        },
        breakpoints: {
            1025: {
				slidesPerView: 3,
				spaceBetween: 20
            },
			601: {
				slidesPerView: 2,
				spaceBetween: 20
			},
        }
    });

    var swiper = new Swiper(".stock__img", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
          	el: ".stock .swiper-pagination",
        },
        navigation: {
            nextEl: ".stock .swiper-button-next",
            prevEl: ".stock .swiper-button-prev",
        },
    });

    var swiper = new Swiper(".equip__slider", {
		slidesPerView: 'auto',
		spaceBetween: 16,
		pagination: {
			el: ".equip .swiper-pagination",
			type: "progressbar"
		},
		navigation: {
			nextEl: ".equip .swiper-button-next",
			prevEl: ".equip .swiper-button-prev",
		},
		breakpoints: {
			1025: {
				slidesPerView: 4,
				spaceBetween: 24
			},
			601: {
				slidesPerView: 3,
				spaceBetween: 16
			},
		}
	});

	let modal = document.querySelectorAll('.modal'),
		modalClose = document.querySelectorAll('.modal__close'),
		modalOverflow = document.querySelectorAll('.modal__overflow');

	if(modal !== null) {
		modalClose.forEach((item)=>{
			item.addEventListener('click', ()=>{
				for(let a = 0; a < modal.length; a++) {
					modal[a].classList.remove('active')
				}
			})
		})
		modalOverflow.forEach((item)=>{
			item.addEventListener('click', ()=>{
				for(let a = 0; a < modal.length; a++) {
					modal[a].classList.remove('active')
				}
			})
		})
	}

	let modalCall = document.querySelector('.modal-call'),
		modalCallBtn = document.querySelectorAll('.modal-call__call');

	if( modalCall !== null ) {
		modalCallBtn.forEach((item)=>{
			item.addEventListener('click', ()=>{
				modalCall.classList.add('active')
			})
		})
	}

	let modalVideo = document.querySelector('.modal-video'),
		modalVideoBtn = document.querySelectorAll('.modal-video__call');

	if( modalVideo !== null ) {
		modalVideoBtn.forEach((item)=>{
			item.addEventListener('click', ()=>{
				modalVideo.classList.add('active')
			})
		})
	}

	let modalPrice = document.querySelector('.modal-price'),
		modalPriceBtn = document.querySelectorAll('.modal-price__call');

	if( modalPrice !== null ) {
		modalPriceBtn.forEach((item)=>{
			item.addEventListener('click', ()=>{
				modalPrice.classList.add('active')
			})
		})
	}

	let modalTest = document.querySelector('.modal-test'),
		modalTestBtn = document.querySelectorAll('.modal-test__call');

	if( modalTest !== null ) {
		modalTestBtn.forEach((item)=>{
			item.addEventListener('click', ()=>{
				modalTest.classList.add('active')
			})
		})
	}

	let modalLeas = document.querySelector('.modal-leas'),
		modalLeasBtn = document.querySelectorAll('.modal-leas__call');

	if( modalLeas !== null ) {
		modalLeasBtn.forEach((item)=>{
			item.addEventListener('click', ()=>{
				modalLeas.classList.add('active')
			})
		})
	}

	let modalCond = document.querySelector('.modal-cond'),
		modalCondBtn = document.querySelectorAll('.modal-cond__call');

	if( modalCond !== null ) {
		modalCondBtn.forEach((item)=>{
			item.addEventListener('click', ()=>{
				modalCond.classList.add('active')
			})
		})
	}

	let modalEquip = document.querySelector('.modal-equip'),
		modalEquipBtn = document.querySelectorAll('.modal-equip__call');

	if( modalEquip !== null ) {
		modalEquipBtn.forEach((item)=>{
			item.addEventListener('click', ()=>{
				modalEquip.classList.add('active')
			})
		})
	}

	let modalAlso = document.querySelector('.modal-also'),
		modalAlsoBtn = document.querySelectorAll('.modal-also__call');

	if( modalAlso !== null ) {
		modalAlsoBtn.forEach((item)=>{
			item.addEventListener('click', ()=>{
				modalAlso.classList.add('active')
			})
		})
	}

}, false);