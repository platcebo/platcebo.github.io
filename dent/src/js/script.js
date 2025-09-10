"use strict";

document.addEventListener('DOMContentLoaded', function() {

var swiper = new Swiper(".doctor-list__swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
});

var swiper = new Swiper(".case__swiper", {
    slidesPerView: 'auto',
    spaceBetween: 20,
});

var swiper = new Swiper(".stocks__swiper", {
    slidesPerView: 'auto',
    spaceBetween: 20,
});

var swiper = new Swiper(".comment__swiper", {
    slidesPerView: 'auto',
    spaceBetween: 20,
});

var swiper = new Swiper(".welcome__slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".welcome__slider .swiper-button-next",
        prevEl: ".welcome__slider .swiper-button-prev",
    },
});

let navListBtn = document.querySelectorAll('.nav__list_btn'),
    navOverflow = document.querySelector('.nav__row_overflow'),
    navListLink = document.querySelectorAll('.nav__list_link'),
    navSearchBtn = document.querySelector('.nav__search_btn'),
    navSearchClear = document.querySelector('.nav__search_clear'),
    nav = document.querySelector('.nav'),
    navSearchInput = document.querySelector('.nav__search_input');

if(navListBtn !== null) {
    navListLink.forEach((item,i)=>{
        navListBtn[i].addEventListener('mouseover', (e)=>{

            if(e.target.closest('.nav__list_btn')) {

                for(let a = 0; a < navListBtn.length; a++) {
                    navListBtn[a].classList.remove('active')
                    navListLink[a].classList.remove('active')
                    navOverflow.classList.remove('active')
                    document.body.classList.remove('fix')
                }
                navListBtn[i].classList.add('active');
                item.classList.add('active');

            }

        })

        // nav.addEventListener('mouseout', (e)=>{
        //     if(e.target.closest('.nav')) {

        //         console.log('as')

        //         for(let a = 0; a < navListBtn.length; a++) {
        //             navListLink[a].classList.remove('active')
        //             navListBtn[a].classList.remove('active')
        //             setInterval
        //         }

        //     }
        // })
    })

    document.body.addEventListener('click', (event)=>{
        if(!event.target.closest('.nav__list_btn') && !event.target.closest('div.nav__search')) {
            for(let a = 0; a < navListBtn.length; a++) {
                navListBtn[a].classList.remove('active')
                navListLink[a].classList.remove('active')
                navOverflow.classList.remove('active')
                navSearchInput.querySelector('input').value = ""
                navSearchInput.classList.remove('active')
                navOverflow.classList.remove('active')
                document.body.classList.remove('fix')
            }
        }
    })

    navSearchBtn.addEventListener('click', ()=>{
        navSearchInput.classList.add('active')
        navOverflow.classList.add('active')
        document.body.classList.add('fix')
    })
    navSearchClear.addEventListener('click', (e)=>{
        e.preventDefault()
        navSearchInput.querySelector('input').value = ""
        navSearchInput.classList.remove('active')
        navOverflow.classList.remove('active')
        document.body.classList.remove('fix')
    })
}

let serviceTab = document.querySelectorAll('.service-block');

if(serviceTab !== null) {
    serviceTab.forEach((item)=>{
        let navServiceTab = item.querySelectorAll('.nav__service_tab li'),
            navServiceWrapper = item.querySelectorAll('.nav__service_wrapper');

        navServiceTab.forEach((item,i)=>{
            item.addEventListener('click', ()=>{
                for(let a = 0; a < navServiceTab.length; a++) {
                    navServiceTab[a].classList.remove('active')
                    navServiceWrapper[a].classList.remove('active')
                }
                item.classList.add('active')
                navServiceWrapper[i].classList.add('active')
            })
        })  
    })
}

[].forEach.call( document.querySelectorAll('[data-phone-pattern]'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (9__) ___-__-__",
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

let selectInput = document.querySelectorAll('.select select'),
    selectVal = document.querySelectorAll('.select p');

if(selectInput !== null) {
    for(let i = 0; i < selectInput.length; i++) {
        selectInput[i].addEventListener('change', ()=>{
            selectVal[i].innerHTML = selectInput[i].options[selectInput[i].selectedIndex].text
        })
    }
}

let video = document.querySelectorAll('.video-player'),
    videoPlay  = document.querySelectorAll('.video-btn');

if(video !== null) {
    videoPlay.forEach((item,i)=>{
        item.addEventListener('click', ()=>{
            item.classList.remove('active')
            video[i].play();
        })
    })
    video.forEach((item,i)=>{
        item.addEventListener('click',()=>{
            if (!item.paused) {
                videoPlay[i].classList.add('active')
                item.pause();
            } else {
                return
        }
        })
    })
}

let navMob = document.querySelector('.nav-menu'),
    navClose = document.querySelector('.nav-menu__close'),
    navHum = document.querySelectorAll('.nav__hum');

if(navMob !== null) {
    navHum.forEach(item=>{
        item.addEventListener('click', ()=>{
            navMob.classList.add('active')
        })
    })
    navClose.addEventListener('click', ()=>{
        navMob.classList.remove('active')
    })
}

let navMenuLink = document.querySelectorAll('.nav-menu__wrapper_btn'),
    navMenuWrapper = document.querySelectorAll('.nav-menu__wrapper'),
    navMenuClose = document.querySelectorAll('.nav-menu__wrapper_title');

if(navMenuLink !== null) {
    navMenuLink.forEach((item,i)=>{
        item.addEventListener('click', ()=>{
            for(let a = 0; a < navMenuWrapper.length; a++) {
                if(navMenuWrapper[a].getAttribute('data-name') == item.getAttribute('data-link')) {
                    navMenuWrapper[a].classList.add('active');
                } else {
                    navMenuWrapper[a].classList.remove('active')
                }
            }
        })
    })
    navMenuClose.forEach((item)=>{
        item.addEventListener('click', ()=>{
            for(let a = 0; a < navMenuWrapper.length; a++) {
                if(navMenuWrapper[a].getAttribute('data-name') == 'main') {
                    navMenuWrapper[a].classList.add('active');
                } else {
                    navMenuWrapper[a].classList.remove('active')
                }
            }
        })
    })
}

let tab = document.querySelectorAll('.tab');

if(tab !== null) {
    tab.forEach((item)=>{
        let tabPoint = item.querySelectorAll('.tab-point'),
            tabWrapper = item.querySelectorAll('.tab-wrapper');

        tabPoint.forEach((element, i) => {
            element.addEventListener('click', ()=>{
                for(let a = 0; a < tabPoint.length; a++) {
                    tabPoint[a].classList.remove('active')
                    tabWrapper[a].classList.remove('active')
                }
                element.classList.add('active')
                tabWrapper[i].classList.add('active')
            })
        });
        
    })
}

let vacancyBtn = document.querySelectorAll('.all-vacancy__btn'),
    vacancyItem = document.querySelectorAll('.all-vacancy__item');

if(vacancyBtn !== null) {
    vacancyBtn.forEach((item,i)=>{
        item.addEventListener('click', ()=>{
            item.classList.toggle('active');
            vacancyItem[i].classList.toggle('active');
        })
    })
}

let serviceMore = document.querySelectorAll('.price-service__more'),
    serviceDrop = document.querySelectorAll('.price-service__drop');

if(serviceMore !== null) {
    serviceMore.forEach((item,i)=>{
        if(serviceDrop[i].classList.contains('educ__drop')) {
            if(serviceDrop[i].querySelectorAll('.price-service__row').length < 5) {
                serviceDrop[i].classList.add('dis')
            }
        } else {
            if(serviceDrop[i].querySelectorAll('.price-service__row').length < 7) {
                serviceDrop[i].classList.add('dis')
            }
        }
        
        item.addEventListener('click', ()=>{
            serviceDrop[i].classList.toggle('drop')
            if(serviceDrop[i].classList.contains('drop')) {
                item.querySelector('p').innerHTML = "Скрыть"
            } else {
                item.querySelector('p').innerHTML = "Показать еще"
            }
        })
    })
}

let btn = document.querySelectorAll('.header-doc__blockquote p');
    // btnBox = document.querySelectorAll('.header-doc__blockquote p');

if(btn.length > 0) {
    function wrapChars(str, tmpl) {
        return str.replace(/\S+/g, tmpl || "<span>$&</span>");
    }

    for(let a = 0; a < btn.length; a++) {
        var btnText = wrapChars(String(btn[a].innerHTML));

        btn[a].innerHTML = btnText; 

        let spans = btn[a].querySelectorAll("span");

        spans.forEach((span, i) => {
            span.style.transitionDelay = `${(i+0.2) * 0.05 }s`;
        });
    }


    if(document.querySelector('.header-doc__blockquote').getBoundingClientRect().top < 400) {
        document.querySelector('.header-doc__blockquote').classList.add('active')
    }
    window.addEventListener('scroll', ()=>{
        if(document.querySelector('.header-doc__blockquote').getBoundingClientRect().top < 400) {
            document.querySelector('.header-doc__blockquote').classList.add('active')
        }
    })
}

let modal = document.querySelectorAll('.modal'),
    modalOverflow = document.querySelectorAll('.modal__overflow');

if(modal !== null) {
    modalOverflow.forEach((item)=>{
        item.addEventListener('click', ()=>{
            for(let a = 0; a < modal.length; a++) {
                modal[a].classList.remove('active');
            }
        })
    })
}

let educGallery = document.querySelectorAll('.educ__gallery img'),
    educModal = document.querySelector('.modal-educ'),
    educWrapper = document.querySelector('.modal-educ__wrapper');

if(educGallery !== null) {
    educGallery.forEach((item)=>{
        item.addEventListener('click', (event)=>{
            educModal.classList.add('active');
            educWrapper.innerHTML = item.outerHTML
        })
    })
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


let articleAside = document.querySelector('.article__aside'),
    articleLink = document.querySelectorAll('.article__list a'),
    articleTitle = document.querySelectorAll('.article-title'),
    articleBlock = document.querySelector('.article__block');

if(articleBlock != null) {
    if(window.innerWidth > 1359) {
        let articleLeft = articleAside.getBoundingClientRect().left

        window.addEventListener('scroll', ()=>{
            if(articleBlock.getBoundingClientRect().top < 100 && articleBlock.getBoundingClientRect().bottom > articleAside.getBoundingClientRect().height + 100) {
                articleAside.classList.remove('bottom')
                articleAside.classList.add('fix')
                articleAside.style.left = articleLeft + 'px'
            } else if (articleBlock.getBoundingClientRect().top > 100) {
                articleAside.classList.remove('fix')
                articleAside.style.left = 'auto'
            } else if (articleBlock.getBoundingClientRect().bottom < articleAside.getBoundingClientRect().height + 100) {
                articleAside.classList.remove('fix')
                articleAside.style.left = 'auto'
                articleAside.classList.add('bottom')
            }

            articleTitle.forEach((item,i)=>{
                if(item.getBoundingClientRect().top > 100 && item.getBoundingClientRect().top < 300) {
                    for(let a = 0; a < articleTitle.length; a++) {
                        articleLink[a].classList.remove('active')
                    }
                    articleLink[i].classList.add('active')
                }
            })
        })

        if(articleBlock.getBoundingClientRect().top < 100 && articleBlock.getBoundingClientRect().bottom > articleAside.getBoundingClientRect().height + 100) {
            articleAside.classList.remove('bottom')
            articleAside.classList.add('fix')
            articleAside.style.left = articleLeft + 'px'
        } else if (articleBlock.getBoundingClientRect().top > 100) {
            articleAside.classList.remove('fix')
            articleAside.style.left = 'auto'
        } else if (articleBlock.getBoundingClientRect().bottom < articleAside.getBoundingClientRect().height + 100) {
            articleAside.classList.remove('fix')
            articleAside.style.left = 'auto'
            articleAside.classList.add('bottom')
        }

        articleTitle.forEach((item,i)=>{
            if(item.getBoundingClientRect().top > 100 && item.getBoundingClientRect().top < 300) {
                for(let a = 0; a < articleTitle.length; a++) {
                    articleLink[a].classList.remove('active')
                }
                articleLink[i].classList.add('active')
            }
        })
    }

}

let navFix = document.querySelector('.nav__fix');

if(navFix !== null) {
    window.addEventListener('scroll', ()=>{
        if(window.scrollY > window.innerHeight ) {
            navFix.classList.add('fix')
        } else {
            navFix.classList.remove('fix')
        }
    })
}

let navSticky = document.querySelector('.nav__sticky');

if(navSticky !== null) {
    nav.style.height = nav.getBoundingClientRect().height + "px"
    window.addEventListener('scroll',()=>{
        if(navSticky.querySelector('.nav__info').getBoundingClientRect().bottom < 0) {
            navSticky.classList.add('fix')
        } else {
            navSticky.classList.remove('fix')
        }
    })
}

let commentSlide = document.querySelectorAll('.comment__slide');

if(commentSlide !== null) {
    commentSlide.forEach((item)=>{
        item.addEventListener('click', ()=>{
            for(let a = 0; a < commentSlide.length; a++) {
                commentSlide[a].classList.remove('active')
            }
            item.classList.add('active')
        })
    })
}

let sectionAnim = document.querySelectorAll('.section-anim');

if(sectionAnim !== null) {
    sectionAnim.forEach((item)=>{
        if(item.getBoundingClientRect().top < window.innerHeight/1.5) {
            item.classList.add('section-anim__active')
        }
        window.addEventListener('scroll', ()=>{
            if(item.getBoundingClientRect().top < window.innerHeight/1.5) {
                item.classList.add('section-anim__active')
            }
        })
    })
}

let select = document.querySelectorAll('.select');

if(select !== null) {
    select.forEach((item,i)=>{
        let selectInput = item.querySelector('input'),
            selectOption = item.querySelectorAll('li');

        selectInput.addEventListener('click', ()=>{
            item.classList.toggle('active')
        })

        selectOption.forEach((option)=>{
            option.addEventListener('click', ()=>{
                selectInput.value = option.innerHTML;
                item.classList.remove('active')
            })
        })
    })
}




}, false);
