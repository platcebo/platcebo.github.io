let nav = document.querySelector('.nav'),
    navHum = document.querySelector('.nav__humburger');

navHum.addEventListener('click', ()=>{
    nav.classList.toggle('nav__active');
});