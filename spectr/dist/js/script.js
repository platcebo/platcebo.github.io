"use strict";

document.addEventListener('DOMContentLoaded', function() {

document.body.style.width = document.body.getBoundingClientRect().width + 'px';
document.documentElement.style.width = document.documentElement.getBoundingClientRect().width + 'px';

var swiper = new Swiper(".step__slider", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    pagination: {
        el: ".step .swiper-pagination",
    },
    navigation: {
        nextEl: ".step .swiper-button-next",
        prevEl: ".step .swiper-button-prev",
    },
});

var swiper = new Swiper(".practic__slider", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    pagination: {
        el: ".practic .swiper-pagination",
    },
    navigation: {
        nextEl: ".practic .swiper-button-next",
        prevEl: ".practic .swiper-button-prev",
    },
});

var contact = new Swiper(".contact__thumb", {
    spaceBetween: 5,
    slidesPerView: 3,
    // freeMode: true,
    watchSlidesProgress: true,
});
var swiper3 = new Swiper(".contact__slider", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: contact,
    },
});

var modalSwiper = new Swiper(".modal-gal__thumb", {
    spaceBetween: 20,
    slidesPerView: 4,
    // freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".modal-gal__slider", {
    spaceBetween: 40,
    
    navigation: {
        nextEl: ".modal-gal .swiper-button-next",
        prevEl: ".modal-gal .swiper-button-prev",
    },

    thumbs: {
        swiper: modalSwiper,
    },

    autoplay: {
        delay: 2700,
        disableOnInteraction: false,
    },

});
swiper2.autoplay.stop();
swiper2.on('slideChangeTransitionStart', ()=>{
    autoProgres.classList.remove('active');
    if (isAutoPlaying) {
        setTimeout(() => {
            autoProgres.classList.add('active');
        }, 300);
    }
})


let navDop = document.querySelectorAll('.nav-dop-js'),
    navOverflow = document.querySelector('.nav__overflow'),
    navDopBtn = document.querySelectorAll('.nav-dop-js__btn');

if(navDop !== null) {
    navDopBtn.forEach((item,i)=>{
        item.addEventListener('click', ()=>{
            if(navDop[i].classList.contains('active')) {
                navDop.forEach(a=>a.classList.remove('active'))
                document.body.classList.remove('fix')
                nav.classList.remove('drop')
            } else {
                navDop.forEach(a=>a.classList.remove('active'))
                navDop[i].classList.add('active')
                document.body.classList.add('fix')
                nav.classList.add('drop')
            }
        })
    })

    navOverflow.addEventListener('click',()=>{
        navDop.forEach(a=>a.classList.remove('active'))
        document.body.classList.remove('fix')
        nav.classList.remove('drop')
    })
}

const blocks = document.querySelectorAll(".title__anim"),
    aboutImg = document.querySelectorAll('.about__bg'),
    statItem = document.querySelectorAll('.stat__item'),
    mapItem = document.querySelectorAll('.map__icon');

const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // убираем, если анимация нужна один раз
        }
        });
    },
    {
        threshold: 0.2 // 20% блока видно → запускаем
    }
);

blocks.forEach(block => observer.observe(block));
aboutImg.forEach(block => observer.observe(block));
statItem.forEach(block => observer.observe(block));
mapItem.forEach(block => observer.observe(block));

[].forEach.call( document.querySelectorAll('input.wpcf7-tel'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___-__-__",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = new_value;
        }
        if (event.type == "blur" && this.value.length < 5) {
            this.value = "";
        }
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);

});

const selects = document.querySelectorAll(".input__select");

selects.forEach(select => {
    const input = select.querySelector("input");
    const list = select.querySelector("ul");
    const items = select.querySelectorAll("li");

    // открыть / закрыть список
    input.addEventListener("click", () => {
        select.classList.toggle("active");
    });

    // выбор элемента
    items.forEach(item => {
        item.addEventListener("click", () => {
            input.value = item.textContent;
            items.forEach(a=>a.classList.remove("active"))
            item.classList.add("active");
            select.classList.remove("active");
        });
    });
});

// закрытие при клике вне
document.addEventListener("click", (e) => {
    document.querySelectorAll(".input__select").forEach(select => {
        if (!select.contains(e.target)) {
            select.classList.remove("active");
        }
    });
});

let mapIcon = document.querySelectorAll('.map__icon'),
    mapInfo = document.querySelectorAll('.map__info_city'),
    mapNum = document.querySelectorAll('.map__info_num span');

if(mapIcon !== null) {
    mapIcon.forEach((item, i)=>{
        item.addEventListener('click',()=>{
            mapIcon.forEach((a,b)=>{
                mapIcon[b].classList.remove('active');
                mapInfo[b].classList.remove('active');
                mapNum[b].classList.remove('active');
            })
            item.classList.add('active');
            mapInfo[i].classList.add('active');
            mapNum[i].classList.add('active');
        })
    })
}

let footerDrop = document.querySelectorAll('.footer__drop');

if(footerDrop !== null) {
    footerDrop.forEach((item)=>{
        item.addEventListener('click', ()=>{
            if(item.classList.contains('active')) {
                item.classList.remove('active')
            } else {
                footerDrop.forEach(a=>a.classList.remove('active'));
                item.classList.add('active');
            }
        })
    })
}

document.addEventListener("click", (e) => {
    document.querySelectorAll(".footer__drop").forEach(select => {
        if (!select.contains(e.target)) {
            select.classList.remove("active");
        }
    });
});

let navFix = document.querySelector('.nav-fix'),
    sectionFirst = document.querySelector('.section-first');

if(navFix !== null) {
    if(sectionFirst.getBoundingClientRect().bottom < 0) {
        navFix.classList.add('active')
    } else {
        navFix.classList.remove('active')
    }
    window.addEventListener('scroll', ()=>{
        if(sectionFirst.getBoundingClientRect().bottom < 0) {
            navFix.classList.add('active')
        } else {
            navFix.classList.remove('active')
        }
    })
}

let lastScrollTop = 0,
    nav = document.querySelector('.nav'),
    navContainer = document.querySelector('.nav-info');

if(nav !== null) {
    window.addEventListener('scroll', () => {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll < lastScrollTop) {
            // скролл вверх
            nav.classList.add('active');
            nav.style.top = - navContainer.getBoundingClientRect().height + "px"
        } else {
            // скролл вниз
            nav.classList.remove('active');
            nav.style.top = "-100%"
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // защита от отрицательных значений
    });
}

let navHum = document.querySelector ('.nav .nav__hum'),
    navMenu = document.querySelector('.nav-menu');
    // navClose = document.querySelector('.nav-menu .nav__hum');

if(navMenu !== null) {
    navHum.addEventListener('click', ()=>{
        navMenu.classList.toggle('active');
        nav.classList.toggle('open');

        if(nav.classList.contains('open')) {
            document.body.classList.add('fix')
        } else {
            document.body.classList.remove('fix')
        }
    })
}

let service = document.querySelector('.service-list'),
    serviceItem = document.querySelectorAll('.service-list__item'),
    serviceMore = document.querySelector('.service-list__more');

if(service !== null) {
    if(serviceItem.length <= 8) {
        service.classList.add('active')
    } 

    serviceMore.addEventListener('click', ()=>{
        service.classList.add('active')
    })    
}

let tab = document.querySelectorAll('.service-table__tab li'),
    serviceTabItem = document.querySelectorAll('.service-table__item'),
    serviceTabTitle = document.querySelectorAll('.service-table__tab_title');

if(tab !== null) {
    tab.forEach((item,i)=>{
        item.addEventListener('click', ()=>{
            document.querySelectorAll('.service-table__tab_title').forEach((a)=>a.classList.remove('active'))
            document.querySelectorAll('.service-table__item_info').forEach((a)=>a.classList.remove('active'))
            tab.forEach((a)=>a.classList.remove('active'))

            serviceTabTitle[i].classList.add('active')
            item.classList.add('active')
            
            serviceTabItem.forEach((block)=>{
                // console.log(block.querySelectorAll('.service-table__item_info')[i])
                block.querySelectorAll('.service-table__item_info')[i].classList.add('active')
            })

        })
    })
}

let about = document.querySelector('.about .container'),
    aboutBg = document.querySelector('.about__bg img');

if(aboutBg !== null && window.innerWidth > 500) {
    aboutBg.style.minHeight = about.getBoundingClientRect().height +'px'
}

let modal = document.querySelectorAll('.modal'),
    modalClose = document.querySelectorAll('.modal__close'),
    modalOverflow = document.querySelectorAll('.modal__overflow');

if(modal !== null) {
    modalClose.forEach((item)=>{
        item.addEventListener('click', ()=>{
            modal.forEach(i=>i.classList.remove('active'))
            document.body.classList.remove('fix')
        })
    })
    modalOverflow.forEach((item)=>{
        item.addEventListener('click', ()=>{
            modal.forEach(i=>i.classList.remove('active'))
            document.body.classList.remove('fix')
        })
    })
}

let modalGal = document.querySelector('.modal-gal'),
    modalGalBtn = document.querySelectorAll('.modal-gal__call');

if(modalGalBtn !== null) {
    modalGalBtn.forEach((item)=>{
        item.addEventListener('click', ()=>{
            modalGal.classList.add('active')
            document.body.classList.add('fix')
        })
    })
}

let modalCons = document.querySelector('.modal-consult'),
    modalConsBtn = document.querySelectorAll('.modal-consult__call');

if(modalConsBtn !== null) {
    modalConsBtn.forEach((item)=>{
        item.addEventListener('click', ()=>{
            modalCons.classList.add('active')
            document.body.classList.add('fix')
        })
    })
}



const slider = document.querySelector(".modal-gal__slider");
const zoomBtn = document.querySelector(".modal-gal__zoom");

let isZoomed = false;
let scale = 2.5;
let currentImg = null;

let pos = { x: 0, y: 0 };
let start = { x: 0, y: 0 };
let isDragging = false;

function getActiveImage() {
    const activeSlide = slider.querySelector(".swiper-slide-active");
    return activeSlide ? activeSlide.querySelector("img") : null;
}

function getBounds() {
const containerRect = slider.getBoundingClientRect();

const imgWidth = currentImg.naturalWidth;
const imgHeight = currentImg.naturalHeight;

const scaledWidth = imgWidth * scale;
const scaledHeight = imgHeight * scale;

const maxX = Math.max(100, (scaledWidth - containerRect.width) / 0.7);
const maxY = Math.max(100, (scaledHeight - containerRect.height) / 0.7);

return {
    minX: -maxX,
    maxX: maxX,
    minY: -maxY,
    maxY: maxY
};
}

function clamp(val, min, max) {
    return Math.max(min, Math.min(max, val));
}

function applyTransform() {
    if (!currentImg) return;

    const bounds = getBounds();

    pos.x = clamp(pos.x, bounds.minX, bounds.maxX);
    pos.y = clamp(pos.y, bounds.minY, bounds.maxY);

    currentImg.style.transform =
    `translate(${pos.x}px, ${pos.y}px) scale(${scale})`;
}

function resetTransform() {
    if (currentImg) currentImg.style.transform = "";
    pos = { x: 0, y: 0 };
}

if(zoomBtn !== null) {
    zoomBtn.addEventListener("click", () => {
        currentImg = getActiveImage();
        if (!currentImg) return;

        isZoomed = !isZoomed;

        if (isZoomed) {
        currentImg.style.transition = "transform 0s ease";
        applyTransform();
        } else {
        resetTransform();
        }
    });

    // --- MOUSE ---
    slider.addEventListener("mousedown", (e) => {
        if (!isZoomed || !currentImg) return;

        isDragging = true;
        start.x = e.clientX - pos.x;
        start.y = e.clientY - pos.y;
        currentImg.style.cursor = "grabbing";
    });

    window.addEventListener("mousemove", (e) => {
        if (!isDragging) return;

        pos.x = e.clientX - start.x;
        pos.y = e.clientY - start.y;
        applyTransform();
    });

    window.addEventListener("mouseup", () => {
        isDragging = false;
        if (currentImg) currentImg.style.cursor = "grab";
    });

    // --- TOUCH ---
    slider.addEventListener("touchstart", (e) => {
        if (!isZoomed || !currentImg) return;

        const touch = e.touches[0];
        isDragging = true;
        start.x = touch.clientX - pos.x;
        start.y = touch.clientY - pos.y;
    });

    slider.addEventListener("touchmove", (e) => {
        if (!isDragging) return;

        const touch = e.touches[0];
        pos.x = touch.clientX - start.x;
        pos.y = touch.clientY - start.y;
        applyTransform();
    });

    slider.addEventListener("touchend", () => {
        isDragging = false;
    });
}


const autoBtn = document.querySelector(".modal-gal__auto"),
    autoProgres = document.querySelector('.modal-gal__progress');

let isAutoPlaying = false;

if(autoBtn !== null) {
    autoBtn.addEventListener("click", () => {
        if (isAutoPlaying) {
            swiper2.autoplay.stop();
            autoBtn.classList.remove("active");
            autoProgres.classList.remove('active');
        } else {
            swiper2.autoplay.start();
            autoBtn.classList.add("active");
            autoProgres.classList.add('active');
        }

        isAutoPlaying = !isAutoPlaying;
    });
}

const fullscreenBtn = document.querySelector(".modal-gal__fullscreen");

if(fullscreenBtn !== null) {
    fullscreenBtn.addEventListener("click", () => {
        if (!document.fullscreenElement) {
            openFullscreen(document.body);
        } else {
            closeFullscreen();
        }
    });

    function openFullscreen(elem) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { // Safari
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { // IE11
            elem.msRequestFullscreen();
        }
    }

    function closeFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

let cookie = document.querySelector('.cookie'),
    cookieBtn = document.querySelector('.cookie .btn__brown');
    
if(cookie !== null) {
    if (!localStorage.getItem("cookieAccepted")) {
        cookie.classList.add("active");
    } else {
        cookie.classList.remove("active");
    }

    cookieBtn.addEventListener('click', ()=>{
        cookie.classList.remove('active');
        localStorage.setItem("cookieAccepted", "true");
    })
}





}, false);
