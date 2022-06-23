let nav = document.querySelector('.nav'),
    humburger = document.querySelector('.nav__humburger');

humburger.addEventListener('click', ()=>{
    nav.classList.toggle('nav__active');
});