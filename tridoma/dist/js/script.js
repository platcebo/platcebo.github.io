let prevOver = document.querySelector('.prev-modal__overflow'),
    prevBtn = document.querySelector('.prev-modal__call'),
    prevClose = document.querySelector('.prev-modal__close'),
    prevModal = document.querySelector('.prev-modal');

if(prevModal !== null) {
    prevOver.addEventListener('click', ()=>{
        prevModal.classList.remove('prev-modal__active')
        document.body.classList.remove('fix')
    })
    prevClose.addEventListener('click', ()=>{
        prevModal.classList.remove('prev-modal__active')
        document.body.classList.remove('fix')
    })
    prevBtn.addEventListener('click', ()=>{
        prevModal.classList.add('prev-modal__active')
        document.body.classList.add('fix')
    })
}

let pageArrow = document.querySelector('.footer__up');
    
if(pageArrow !== null) {
    function scrollToTop () {
        if (window.scrollY > 0) {
            window.scrollBy(0, -70); 
            setTimeout(scrollToTop, 0); 
        }
    }
    pageArrow.addEventListener("click", scrollToTop)
}