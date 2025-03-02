"use strict";

document.addEventListener('DOMContentLoaded', function() {
    
let tab = document.querySelectorAll('.tab-list li'),
    tabWrapper = document.querySelectorAll('.tab-wrapper');

if(tab !== null) {
    tab.forEach((item, i)=>{
        item.addEventListener('click', ()=>{
            for(let a = 0; a < tab.length; a++) {
                tab[a].classList.remove('active');
                tabWrapper[a].classList.remove('active');
            }
            item.classList.add('active');
            tabWrapper[i].classList.add('active');
        })
    })
}

}, false);