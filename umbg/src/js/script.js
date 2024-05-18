var swiper = new Swiper(".slider__slider", {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 100,
        depth: 0,
        modifier: 1,
        slideShadows: false,
    },
    breakpoints: {
        1441: {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,
            coverflowEffect: {
                rotate: 0,
                stretch: 200,
                depth: 0,
                modifier: 1,
                slideShadows: false,
            },
        },
        801: {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,
            coverflowEffect: {
                rotate: 0,
                stretch: 100,
                depth: 0,
                modifier: 1,
                slideShadows: false,
            },
        }
    }
});

let nav = document.querySelector('.nav'),
    navHumburger = document.querySelector('.nav__humburger');

if(nav !== null) {
    navHumburger.addEventListener('click', ()=>{
        if(document.body.classList.contains('fix')) {
            nav.classList.remove('active')
            document.body.classList.remove('fix')
        } else {
            nav.classList.add('active')
            document.body.classList.add('fix')
        }
    })
}

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}
let options = { threshold: [0.2] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
    observer.observe(elm);
}