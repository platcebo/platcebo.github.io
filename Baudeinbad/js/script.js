var swiper = new Swiper(".gallery__slider", {
    slidesPerView: "auto",
    spaceBetween: 40,
    freeMode : true
});

var swiper = new Swiper(".comment__slider", {
    slidesPerView: "auto",
    spaceBetween: 20,
    breakpoints: {
        651: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1025: {
            slidesPerView: 3,
            spaceBetween: 40
        },
    }
});

let faqBtn = document.querySelectorAll('.faq__btn'),
    faqText = document.querySelectorAll('.faq__text');

if(faqBtn !== null) {
    faqBtn.forEach((item, i) =>{
        item.addEventListener('click', ()=>{
            faqText[i].classList.toggle('faq__text_active')
            item.classList.toggle('active')
        })
    })
}

let nav = document.querySelector('.nav'),
    navClose = document.querySelector('.nav__close'),
    navHumburger = document.querySelector('.nav__humburger'),
    header = document.querySelector('.header');

if(nav !== null) {
    if(window.scrollY > header.clientHeight) {
        nav.style.top = 0
    } else if (window.scrollY <= header.clientHeight) {
        nav.style.top = '-' + nav.clientHeight + 'px'
    }
    window.addEventListener('scroll', ()=>{
        if(window.scrollY > header.clientHeight) {
            nav.style.top = 0
        } else if (window.scrollY <= header.clientHeight) {
            nav.style.top = '-' + nav.clientHeight + 'px'
        }
    })
    navHumburger.addEventListener('click', ()=>{
        nav.classList.add('active')
    })
    navClose.addEventListener('click', ()=>{
        nav.classList.remove('active')
    })
}

let navLink = document.querySelectorAll('a[href^="#"');

if(navLink !== null) {
    navLink.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
    
            let href = this.getAttribute('href').substring(1);
    
            const scrollTarget = document.getElementById(href);
    
            const topOffset = 0; 
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;
    
            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    })
}

// new

AOS.init();

let animHeaders = document.querySelectorAll('.header__dop_item'),
    animWrapper = document.querySelector('.header__dop');

if(animWrapper !== null) {
    window.addEventListener('scroll', animation)
    function animation () {
        let index = 0
        setInterval(() => {
            if(index < animHeaders.length) {
                if(window.innerHeight >= animWrapper.getBoundingClientRect().top ) {
                    let animHeader = animHeaders[index];
                    
                    animHeader.classList.remove('_down');
                    
                    index++
                } 
            } else if (index > animHeaders.length) {
                clearInterval()
            }
        }, 900);
    }
    setTimeout(() => {
        animation()
    }, 300);
}