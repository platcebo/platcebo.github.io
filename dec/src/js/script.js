"use strict";

document.addEventListener('DOMContentLoaded', function() {

let catalog = document.querySelector('.nav__drop'),
    catalogBtn = document.querySelector('.nav__drop_call'),
    catalogLink = document.querySelectorAll('.nav__drop_list li'),
    catalogOverflow = document.querySelector('.nav__overflow'),
    catalogMob = document.querySelector('.nav__mob'),
    navHum = document.querySelector('.nav__hum'),
    catalogBlock = document.querySelectorAll('.nav__drop_block');

if(catalog !== null) {
    catalogBtn.addEventListener('click', ()=>{
        catalog.classList.toggle('active')
        catalogOverflow.classList.toggle('active')
    })

    navHum.addEventListener('click', ()=>{
        catalogMob.classList.toggle('active')
        catalogOverflow.classList.toggle('active')
    })

    catalogOverflow.addEventListener('click', ()=>{
        catalog.classList.remove('active')
        catalogOverflow.classList.remove('active')
        catalogMob.classList.remove('active')
    })

    catalogLink.forEach((item,i)=>{
        item.addEventListener('click', ()=>{
            for(let a=0;a<catalogLink.length; a++) {
                catalogLink[a].classList.remove('active')
                catalogBlock[a].classList.remove('active')
            }
            catalogLink[i].classList.add('active')
            catalogBlock[i].classList.add('active')
        })
    })
}

var swiper = new Swiper(".brand__slider", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    breakpoints: {
        1201: {
            slidesPerView: 4,
        }
    }
});

let mediacenterTab = document.querySelectorAll('.mediacenter__tab a'),
    mediacenterWrapper = document.querySelectorAll('.mediacenter__wrapper');

if(mediacenterTab !== null) {
    mediacenterTab.forEach((item,i)=>{
        item.addEventListener('click', (e)=>{
            e.preventDefault()
            for(let a=0;a<mediacenterTab.length; a++) {
                mediacenterTab[a].classList.remove('active')
                mediacenterWrapper[a].classList.remove('active')
            }
            mediacenterTab[i].classList.add('active')
            mediacenterWrapper[i].classList.add('active')
        })
    })
}

let select = document.querySelectorAll('.brand-page__filter_select select'),
	selectText = document.querySelectorAll('.brand-page__filter_select p');

if(select !== null) {
	select.forEach((item,i)=>{
        item.addEventListener('change', ()=>{
            selectText[i].innerHTML = item.options[item.selectedIndex].textContent;
        })
    })
}

let supplyBtn = document.querySelectorAll('.supply__filter_btn'),
    supplyFilter = document.querySelector('.supply__filter_drop');

if(supplyFilter !== null) {
    supplyBtn.forEach((item)=>{
        item.addEventListener('click', ()=>{
            supplyFilter.classList.add('active')
        })
    })
    document.body.addEventListener('click', (event)=>{
        if(event.target.closest('div.supply__filter')) {
            return
        } else {
            supplyFilter.classList.remove('active')
        }
    })
}



}, false);