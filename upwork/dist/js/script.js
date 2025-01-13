"use strict";

document.addEventListener('DOMContentLoaded', function() {

    let dropdown = document.querySelectorAll('.dropdown__list'),
        dropdownBtn = document.querySelectorAll('.dropdown__btn');

    if(dropdown !== null) {
        dropdown.forEach((item,i)=>{
            dropdownBtn[i].addEventListener('click', ()=>{
                if(dropdownBtn[i].classList.contains('active')) {
                    dropdownBtn[i].classList.remove('active');
                    item.classList.remove('active')
                } else {
                    for(let a = 0; a < dropdown.length; a++) {
                        dropdownBtn[a].classList.remove('active');
                        dropdown[a].classList.remove('active')
                    }
                    dropdownBtn[i].classList.add('active');
                    item.classList.add('active')
                }
            })
        })
    }

    let select = document.querySelectorAll('.select select'),
        selectText = document.querySelectorAll('.select p');

    if(select !== null) {
        select.forEach((item, i)=>{
            item.addEventListener('change', ()=>{
                selectText[i].innerHTML = item.value
            })
        })
    }

}, false);