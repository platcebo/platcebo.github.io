const lenis = new Lenis({
	duration: 3,
})

function raf(time) {
	lenis.raf(time)
	requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

let nav = document.querySelector('.nav'),
    navBurger = document.querySelector('.nav__burger');
    
if(nav !== null) {
    navBurger.addEventListener('click', ()=>{
        nav.classList.toggle('active');
        navBurger.classList.toggle('active');
    })
}

const wrapper = document.querySelector('.parallax');
const layers = document.querySelectorAll('.parallax__layer');

const handleParallax = (evt) => {
 //размер области просмотра
  const parallaxLeftOffset = wrapper.getBoundingClientRect().left;
  const parallaxTopOffset = wrapper.getBoundingClientRect().top;

  // координаты центра экрана
  const coordX = evt.clientX - parallaxLeftOffset - 0.2 * wrapper.offsetWidth;
  const coordY = evt.clientY - parallaxTopOffset - 0.2 *  wrapper.offsetHeight;
    
  layers.forEach((layer)=>{
    const layerSpeed = layer.dataset.speed;
    const x = - (coordX * layerSpeed).toFixed(2);
    const y = - (coordY * layerSpeed).toFixed(2);
    layer.setAttribute('style', `transform: translate(${x}px, ${y}px);`)
  });
};

const reset = () => {
  layers.forEach((layer)=>{
      layer.removeAttribute('style');
  });
}
 
wrapper.addEventListener('mousemove', handleParallax);
wrapper.addEventListener('mouseout', reset);

let headerVideoPlay = document.querySelector('.header__video_play'),
    headerVideoClose = document.querySelector('.header__video_close'),
    headerVideo = document.querySelector('.header__video_wrapper video')
    headerVideoWrapper = document.querySelector('.header__video_wrapper')

if(headerVideo !== null) {
    function videoPlay() {
        headerVideoWrapper.classList.add('active')
        headerVideo.play()
    }
    function videostop() {
        headerVideoWrapper.style.cssText = `
            position: relative;
            top: auto;
            left: auto;
        `
    }
    headerVideoPlay.addEventListener('click', ()=>{
        headerVideoWrapper.style.cssText = `
        position: fixed;
        top: ${headerVideoWrapper.getBoundingClientRect().top}px;
        left: ${headerVideoWrapper.getBoundingClientRect().left}px;
        `;
        setTimeout(videoPlay, 300)
    })
    headerVideoClose.addEventListener('click', ()=>{
        headerVideoWrapper.classList.remove('active')
        headerVideo.pause()
        setTimeout(videostop, 300)
    })
    window.addEventListener('scroll', ()=>{
        headerVideoWrapper.classList.remove('active')
        headerVideo.pause()
        setTimeout(videostop, 300)
    })
}

let serviceRow = document.querySelectorAll('.service__item_scroll');

if(serviceRow !== null) {
    serviceRow.forEach((element, i) => {
        let text = element.innerHTML,
            a = 1;
        element.innerHTML = text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text
        setInterval(() => {
            element.style.transform = 'translateX(-' + a +'px)'
            a += 0.3
            if (a >= 5000) {
                a = 1
            }
        }, 10);
    });
}

let service = document.querySelector('.service'),
    serviceWrapper = document.querySelector('.service__wrapper'),
    serviceBlock = document.querySelector('.service__block'),
    serviceSlider = document.querySelector('.service__scroll');

if(service !== null && window.innerWidth > 1200) {
    service.style.height = serviceSlider.getBoundingClientRect().width + 'px'

    window.addEventListener('scroll', ()=>{
        if (service.getBoundingClientRect().top < 0 && serviceBlock.getBoundingClientRect().top > 20) {
            serviceSlider.style.transform = 'translateX(' + service.getBoundingClientRect().top + 'px)'
        }
    })
}

let caseRow = document.querySelectorAll('.case__info_scroll');

if(caseRow !== null) {
    caseRow.forEach((element, i) => {
        let text = element.innerHTML,
            a = 1;
        element.innerHTML = text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text
        setInterval(() => {
            element.style.transform = 'translateX(-' + a +'px)'
            a += 0.3
            if (a >= 5000) {
                a = 1
            }
        }, 10);
    });
}

let withRow = document.querySelectorAll('.with__scroll');

if(withRow !== null) {
    withRow.forEach((element, i) => {
        let text = element.innerHTML,
            a = 1;
        element.innerHTML = text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text
        setInterval(() => {
            element.style.transform = 'translateX(-' + a +'px)'
            a += 0.3
            if (a >= 5000) {
                a = 1
            }
        }, 10);
    });
}

var swiper = new Swiper(".about__slider", {
    spaceBetween: 40,
    speed: 700,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let tab = document.querySelector('.achiev__tab'),
    tabPoint = document.querySelectorAll('.achiev__tab_item'),
    tabWrapper = document.querySelectorAll('.achiev__wrapper');

if(tab !== null) {
    function tabShow (a) {
        tabPoint[a].classList.add('active');
        tabWrapper[a].classList.add('active');
    }
    function tabHide() {
        for(let i = 0; i < tabPoint.length; i++) {
            tabPoint[i].classList.remove('active');
            tabWrapper[i].classList.remove('active');
        }
    }
    tab.addEventListener('click', (event)=>{
        let target = event.target;

        if(target.classList.contains('achiev__tab_item')) {
            for(let i = 0; i < tabPoint.length; i++) {
                if(target == tabPoint[i]) {
                    tabHide()
                    tabShow(i)
                }
            }
        }
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
