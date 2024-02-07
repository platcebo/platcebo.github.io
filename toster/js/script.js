var swiper = new Swiper(".slider", {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
});

let nav = document.querySelector('.nav__menu'),
    navOpen = document.querySelector('.nav__hamburger'),
    navClose = document.querySelector('.nav__menu_hamburger');

if(nav !== null) {
    navOpen.addEventListener('click', ()=>{
        nav.classList.add('active')
    })
    navClose.addEventListener('click', ()=>{
        nav.classList.remove('active')
    })
}

let tab = document.querySelectorAll('.product__tab_btn');

if(tab !== null) {
    tab.forEach((item)=>{
        item.addEventListener('click',()=>{
            item.classList.toggle('active')
        })
    })
}

let modalBtn = document.querySelector('.product__btn'),
    modal = document.querySelector('.modal'),
    modalOverflow = document.querySelector('.modal__overflow'),
    modalClose = document.querySelector('.modal__close');

if(modal !== null) {
    modalBtn.addEventListener('click', ()=>{
        modal.classList.add('active')
    })
    modalOverflow.addEventListener('click', ()=>{
        modal.classList.remove('active')
    })
    modalClose.addEventListener('click', ()=>{
        modal.classList.remove('active')
    })
}

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

var endDate = new Date("feb 8, 2024 12:00:00").getTime();
var timer = setInterval(function() {
    let now = new Date().getTime();
    let t = endDate - now;
    
    if (t >= 0) {
    
        let hours = Math.floor(t  / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);
    
        document.getElementById("timer__hours").innerHTML = ("0"+hours).slice(-2) +
        "<span class='label'>:</span>";
    
        document.getElementById("timer__mins").innerHTML = ("0"+mins).slice(-2) +
        "<span class='label'>:</span>";
    
        document.getElementById("timer__secs").innerHTML = ("0"+secs).slice(-2) +
        "<span class='label'></span>";
    
    } else {
        document.getElementById("timer").innerHTML = "The countdown is over!";
    
    }
    
}, 1000);