"use strict";

document.addEventListener('DOMContentLoaded', function() {

let questItem = document.querySelectorAll('.quest__item');

if(questItem !== null) {
    questItem.forEach((item)=>{
        item.addEventListener('click', ()=>{
            item.classList.toggle('active')
        })
    })
}

}, false);