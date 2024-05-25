let headerSlide = document.querySelectorAll('.header__slide'),
    headerStart = document.querySelector('.header__start'),
    headerEnd = document.querySelector('.header__end');

if(headerEnd !== null) {
    headerEnd.innerHTML = "0" + headerSlide.length
}

var swiper = new Swiper(".header__slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".header__pag",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".header__next",
        prevEl: ".header__prev",
    },
    on: {
        slideChange: (event) => {
            headerStart.innerHTML = "0" + (swiper.realIndex + 1)
        }
    }
}); 

".svg".toSVG({
    svgClass: "replaced",
    onComplete: function() {}
});

let tab = document.querySelector('.project__tab'),
    tabPoint = document.querySelectorAll('.project__tab_item'),
    tabWrapper = document.querySelectorAll('.project__wrapper');

if(tab !== null) {
    function tabHide() {
        for(let i = 0; i < tabPoint.length; i++) {
            tabPoint[i].classList.remove('active')
            tabWrapper[i].classList.remove('active')
        }
    }
    function tabShow(a) {
        tabPoint[a].classList.add('active')
        tabWrapper[a].classList.add('active')
    }

    tabHide()
    tabShow(0)

    tab.addEventListener('click', (event)=>{
        let target = event.target;
        for(let i = 0; i < tabPoint.length; i++) {
            if(target && target == tabPoint[i]) {
                tabHide()
                tabShow(i)
            }
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

let programText = document.querySelector('.program__text'),
    programRow = document.querySelector('.program__row');
if(programText !== null) {
    programText.style.left = (programRow.getBoundingClientRect().width - 24 * 3) / 2 + 48 + "px"
    programText.style.width = (programRow.getBoundingClientRect().width - 24 * 3) / 4 + 'px'
}

let acc = document.querySelectorAll('.service__item'),
    accBtn = document.querySelectorAll('.service__btn'),
    accImg = document.querySelectorAll('.service__prev img');

if(acc !== null) {
    acc[0].classList.add('active')
    accImg[0].classList.add('active')
    for (let a = 0; a < accBtn.length; a++) {
        accBtn[a].addEventListener('click', ()=>{
            acc.forEach((item, i) =>{
                item.classList.remove('active')
                accImg[i].classList.remove('active')
            })
            acc[a].classList.add('active')
            accImg[a].classList.add('active')
        })
    }
}