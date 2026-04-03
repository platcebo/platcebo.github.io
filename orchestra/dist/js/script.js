"use strict";

document.addEventListener('DOMContentLoaded', function() {

let tabPoint = document.querySelectorAll('.program__tab li'),
    tabWrapper = document.querySelectorAll('.program__wrapper');

if(tabPoint !== null) {
    tabPoint.forEach((item,i)=>{
        item.addEventListener('click', ()=>{
            tabPoint.forEach(a=>a.classList.remove('active'));
            tabWrapper.forEach(a=>a.classList.remove('active'));
            item.classList.add('active');
            tabWrapper[i].classList.add('active');
        })
    })
}

}, false);
