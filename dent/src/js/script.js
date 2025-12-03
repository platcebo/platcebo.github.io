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
    spaceBetween: 20,
    slidesPerView: 'auto',
});

var swiper = new Swiper(".awards__scroll", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    // mousewheel: true,
});

var swiper = new Swiper(".welcome__slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".welcome__slider .swiper-button-next",
        prevEl: ".welcome__slider .swiper-button-prev",
    },
});

var swiper = new Swiper(".interview__wrapper", {
    slidesPerView: 'auto',
    spaceBetween: 20,

});

var swiper = new Swiper(".result-detail__slider", {
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".result-detail__slider_func .swiper-button-next",
        prevEl: ".result-detail__slider_func .swiper-button-prev",
    },
    pagination: {
        el: ".result-detail__slider_func .swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    },
});

let nav = document.querySelectorAll('.nav');

if(nav !== null) {
    nav.forEach((navitem)=>{
        let navListBtn = navitem.querySelectorAll('.nav__list_btn'),
            navOverflow = navitem.querySelector('.nav__row_overflow'),
            navListLink = navitem.querySelectorAll('.nav__list_link'),
            navSearchBtn = navitem.querySelectorAll('.nav__search_btn'),
            navSearchClear = navitem.querySelectorAll('.nav__search_clear'),
            navSearchInput = navitem.querySelectorAll('.nav__search_input');

        navListLink.forEach((item,i)=>{
            navListBtn[i].addEventListener('mouseover', (e)=>{

                if(e.target.closest('.nav__list_btn')) {

                    // if(navListBtn[i].classList.contains('nav__list_service')) {
                    //     for(let a = 0; a < navListBtn.length; a++) {
                    //         navListBtn[a].classList.remove('active')
                    //         navListLink[a].classList.remove('active')
                    //         navOverflow.forEach(item=>item.classList.remove('active'))
                    //         document.querySelector('html').classList.remove('fix')
                    //     }
                    //     navListBtn[i].classList.add('active');
                    //     item.classList.add('active');
                    //     navOverflow.forEach(item=>item.classList.add('active'))
                    //     document.querySelector('html').classList.add('fix')
                    // } else {
                    //     for(let a = 0; a < navListBtn.length; a++) {
                    //         navListBtn[a].classList.remove('active')
                    //         navListLink[a].classList.remove('active')
                    //         navOverflow.forEach(item=>item.classList.remove('active'))
                    //         document.querySelector('html').classList.remove('fix')
                    //     }
                    //     navListBtn[i].classList.add('active');
                    //     item.classList.add('active');
                    // }

                    for(let a = 0; a < navListBtn.length; a++) {
                        navListBtn[a].classList.remove('active')
                        navListLink[a].classList.remove('active')
                        navOverflow.classList.remove('active')
                        document.querySelector('html').classList.remove('fix')
                    }
                    navListBtn[i].classList.add('active');
                    item.classList.add('active');
                    navOverflow.classList.add('active')
                    document.querySelector('html').classList.add('fix')
                }
            })
        })

        document.body.addEventListener('click', (event)=>{
            if(!event.target.closest('.nav__list_btn') && !event.target.closest('div.nav__search')) {
                for(let a = 0; a < navListBtn.length; a++) {
                    navListBtn[a].classList.remove('active')
                    navListLink[a].classList.remove('active')
                    navOverflow.classList.remove('active')
                    navSearchInput.forEach((item,i)=>{
                        navSearchInput[i].querySelector('input').value = ""
                        navSearchInput[i].classList.remove('active')
                    })
                    navOverflow.classList.remove('active')
                    document.querySelector('html').classList.remove('fix')
                }
            }
        })

        navSearchBtn.forEach((item,i)=>{
            item.addEventListener('click', ()=>{
                navSearchInput[i].classList.add('active')
            })
        })
        navSearchClear.forEach((item,i)=>{
            item.addEventListener('click', (e)=>{
                e.preventDefault()
                navSearchInput[i].querySelector('input').value = ""
                navSearchInput[i].classList.remove('active')
            })
        })
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

let legalImg = document.querySelectorAll('.legal-info .welcome__slider img');

if(legalImg !== null) {
    legalImg.forEach((item)=>{
        item.addEventListener('click', (event)=>{
            educModal.classList.add('active');
            educWrapper.innerHTML = item.outerHTML
        })
    })
}

let video = document.querySelectorAll('.video-player'),
    videoPlay  = document.querySelectorAll('.video-btn');

if(video !== null) {
    // videoPlay.forEach((item,i)=>{
    //     item.addEventListener('click', ()=>{
    //         item.classList.remove('active')
    //         video[i].play();
    //     })
    // })
    // video.forEach((item,i)=>{
    //     item.addEventListener('click',()=>{
    //         if (!item.paused) {
    //             videoPlay[i].classList.add('active')
    //             item.pause();
    //         } else {
    //             return
    //     }
    //     })
    // })

    videoPlay.forEach((item,i)=>{
        item.addEventListener('click',()=>{
            educModal.classList.add('active');
            educWrapper.innerHTML = video[i].getAttribute('data-iframe')
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
        item.addEventListener('click', (e)=>{
            e.preventDefault()
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
        if(item.parentElement.classList.contains('legal-info')) {
            return
        }
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
            console.log(item.getBoundingClientRect().top - document.body.getBoundingClientRect().top)
            if(item.classList.contains('active')) {
                window.scrollTo({
                    top: item.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 200,
                    left: 0,
                    behavior: "smooth"
                });
            }
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
            if(!serviceDrop[i].classList.contains('drop')) {
                window.scrollTo({
                    top: item.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 200,
                    left: 0,
                    behavior: "smooth"
                });
            }
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

if(btn.length > 0) {

    btn.forEach((p) => {
        let words = p.innerText.split(/(\s+)/); // сохраняем пробелы
        let result = words.map(word => {
            if (word.trim() === "") return word; // пробел оставляем как есть
            let letters = word.split("").map(ch => `<span style="opacity:0">${ch}</span>`).join("");
            return `<span class="word">${letters}</span>`;
        }).join("");

        p.innerHTML = result;

        let spans = p.querySelectorAll("span span"); // только буквы
        spans.forEach((span, i) => {
            setTimeout(() => {
                span.style.opacity = 1;
            }, i * 50); // скорость печати
        });
    });




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
    modalOverflow = document.querySelectorAll('.modal__overflow'),
    modalClose = document.querySelectorAll('.modal__close');

if(modal !== null) {
    modalOverflow.forEach((item)=>{
        item.addEventListener('click', (event)=>{
            if(event.target.closest('.modal-educ')) {
                educWrapper.innerHTML = "";
                for(let a = 0; a < modal.length; a++) {
                    modal[a].classList.remove('active');
                }
            } else {
                for(let a = 0; a < modal.length; a++) {
                    modal[a].classList.remove('active');
                }
            }
        })
    })
    modalClose.forEach((item)=>{
        item.addEventListener('click', (event)=>{
            if(event.target.closest('.modal-educ')) {
                educWrapper.innerHTML = "";
                for(let a = 0; a < modal.length; a++) {
                    modal[a].classList.remove('active');
                }
            } else {
                for(let a = 0; a < modal.length; a++) {
                    modal[a].classList.remove('active');
                }
            }
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

let navFix = document.querySelector('.nav__fix'),
    headerFix = document.querySelector('.header-fix');

if(navFix !== null) {
    window.addEventListener('scroll', ()=>{
        if(window.scrollY > headerFix.getBoundingClientRect().height ) {
            navFix.classList.add('fix')
        } else {
            navFix.classList.remove('fix')
        }
    })
}

let navSticky = document.querySelector('.nav__sticky');

if(navSticky !== null) {
    navSticky.style.height = navSticky.getBoundingClientRect().height + "px"
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
            if(item.classList.contains('active')) {
                item.classList.remove('active')
            } else {
                select.forEach(sl=>sl.classList.remove('active'))
                item.classList.add('active')
            }
        })

        selectOption.forEach((option)=>{
            option.addEventListener('click', ()=>{
                selectInput.value = option.innerHTML;
                item.classList.remove('active')
            })
        })
    })

    document.body.addEventListener('click', (event)=>{
        if(!event.target.closest('.select')) {
            select.forEach((option)=>{
                option.classList.remove('active')
            })
        }
    })
}

let serviceInput = document.querySelectorAll('.price-service__form_input input'),
    serviceInputClear = document.querySelectorAll('.price-service__form_close');

if(serviceInput !== null) {
    serviceInputClear.forEach((item,i)=>{
        item.addEventListener('click', ()=>{
            serviceInput[i].value = ""
        })
    })
}

let mediaAutor = document.querySelector('.media-detail__fix'),
    mediaBlock = document.querySelector('.media-detail__block');

if(mediaBlock != null) {
    if(window.innerWidth > 1023) {
        let articleLeft = mediaAutor.getBoundingClientRect().left

        window.addEventListener('scroll', ()=>{
            if(mediaBlock.getBoundingClientRect().top < 100 && mediaBlock.getBoundingClientRect().bottom > mediaAutor.getBoundingClientRect().height + 100) {
                mediaAutor.classList.remove('bottom')
                mediaAutor.classList.add('fix')
                mediaAutor.style.left = articleLeft + 'px'
            } else if (mediaBlock.getBoundingClientRect().top > 100) {
                mediaAutor.classList.remove('fix')
                mediaAutor.style.left = 'auto'
            } else if (mediaBlock.getBoundingClientRect().bottom < mediaAutor.getBoundingClientRect().height + 100) {
                mediaAutor.classList.remove('fix')
                mediaAutor.style.left = 'auto'
                mediaAutor.classList.add('bottom')
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

        if(mediaBlock.getBoundingClientRect().top < 100 && mediaBlock.getBoundingClientRect().bottom > mediaAutor.getBoundingClientRect().height + 100) {
            mediaAutor.classList.remove('bottom')
            mediaAutor.classList.add('fix')
            mediaAutor.style.left = articleLeft + 'px'
        } else if (mediaBlock.getBoundingClientRect().top > 100) {
            mediaAutor.classList.remove('fix')
            mediaAutor.style.left = 'auto'
        } else if (mediaBlock.getBoundingClientRect().bottom < mediaAutor.getBoundingClientRect().height + 100) {
            mediaAutor.classList.remove('fix')
            mediaAutor.style.left = 'auto'
            mediaAutor.classList.add('bottom')
        }
    }

}

let legalAutor = document.querySelector('.legal-info__aside'),
    legalBlock = document.querySelector('.legal-info__block'),
    legalLink = document.querySelectorAll('.legal-info__aside li');

if(legalBlock != null) {
    if(window.innerWidth > 1023) {
        let articleLeft = legalAutor.getBoundingClientRect().left

        window.addEventListener('scroll', ()=>{
            if(legalBlock.getBoundingClientRect().top < 100 && legalBlock.getBoundingClientRect().bottom > legalAutor.getBoundingClientRect().height + 100) {
                legalAutor.classList.remove('bottom')
                legalAutor.classList.add('fix')
                legalAutor.style.left = articleLeft + 'px'
            } else if (legalBlock.getBoundingClientRect().top > 100) {
                legalAutor.classList.remove('fix')
                legalAutor.style.left = 'auto'
            } else if (legalBlock.getBoundingClientRect().bottom < legalAutor.getBoundingClientRect().height + 100) {
                legalAutor.classList.remove('fix')
                legalAutor.style.left = 'auto'
                legalAutor.classList.add('bottom')
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

        if(legalBlock.getBoundingClientRect().top < 100 && legalBlock.getBoundingClientRect().bottom > legalAutor.getBoundingClientRect().height + 100) {
            legalAutor.classList.remove('bottom')
            legalAutor.classList.add('fix')
            legalAutor.style.left = articleLeft + 'px'
        } else if (legalBlock.getBoundingClientRect().top > 100) {
            legalAutor.classList.remove('fix')
            legalAutor.style.left = 'auto'
        } else if (legalBlock.getBoundingClientRect().bottom < legalAutor.getBoundingClientRect().height + 100) {
            legalAutor.classList.remove('fix')
            legalAutor.style.left = 'auto'
            legalAutor.classList.add('bottom')
        }
    }

    legalLink.forEach((item)=>{
        item.addEventListener('click', ()=>{
            window.scrollTo({
                top: legalBlock.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 200,
                left: 0,
                behavior: "smooth"
            });
        })
    })

}

let consultFile = document.querySelectorAll('.consult__file input'),
    consultFileText = document.querySelectorAll('.consult__file p');

if(consultFile !== null) {
    consultFile.forEach((item,i)=>{
        item.addEventListener('change', ()=>{
            consultFileText[i].innerHTML = '<span>' + item.files[0].name + '</span>'
        })
    })
}

if(document.querySelector('.magazine') !== null) {
    const pageFlip = new St.PageFlip(document.getElementById('book'),
        {
            width: 674, 
            height: 827,  
            showCover: true,
            size: "stretch",
            maxWidth: 674, 
            maxHeight: 827,  
            minWidth: 250,

        }
    );

    pageFlip.loadFromHTML(document.querySelectorAll('.my-page'));

    let magazinPage = document.querySelectorAll('.magazine__page');

    magazinPage.forEach((item, i)=>{
        let x = i+1;
        document.querySelector(".magazine__func_pag").innerHTML = document.querySelector(".magazine__func_pag").innerHTML + '<span>'+ x +'</span>'
    })

    let magazineSpan = document.querySelectorAll('.magazine__func_pag span');

    magazineSpan[pageFlip.getCurrentPageIndex()].classList.add('active');

    magazineSpan.forEach((item,i)=>{
        item.addEventListener('click', ()=>{
            pageFlip.flip(i);
            magazineSpan.forEach(span => span.classList.remove('active'))
            item.classList.add('active')
        })
    })

    document.querySelector(".btn-prev").addEventListener("click", () => {
        pageFlip.flipPrev(); 
        magazineSpan.forEach(span => span.classList.remove('active'))
        magazineSpan[pageFlip.getCurrentPageIndex()].classList.add('active');
    });

    document.querySelector(".btn-next").addEventListener("click", () => {
        pageFlip.flipNext(); 
        magazineSpan.forEach(span => span.classList.remove('active'))
        magazineSpan[pageFlip.getCurrentPageIndex()].classList.add('active');
    });

    pageFlip.on('flip', (e) => {
        magazineSpan.forEach(span => span.classList.remove('active'))
        magazineSpan[pageFlip.getCurrentPageIndex()].classList.add('active');
    });
}

let articleText = document.querySelectorAll('.article-doc__info_text');

if(articleText !== null) {
    articleText.forEach((item)=>{
        item.innerHTML = item.innerHTML + `<span>${item.innerHTML}</span>`
    })
}

let newsText = document.querySelectorAll('.news-page__text');

if(newsText !== null) {
    newsText.forEach((item)=>{
        item.innerHTML = item.innerHTML + `<span>${item.innerHTML}</span>`
    })
}

let commentText = document.querySelectorAll('.comment__text');

if(commentText !== null) {
    commentText.forEach((item)=>{
        item.innerHTML = item.innerHTML + `<span>${item.innerHTML}</span>`
    })
}

let modalRate = document.querySelector('.modal-rate'),
    modalRateBtn = document.querySelectorAll('.modal-rate__call'),
    rateCheck = document.querySelectorAll('.modal-rate__form input'),
    modalBad = document.querySelector('.modal-bad'),
    modalGood = document.querySelector('.modal-good');

if(modalRateBtn !== null) {
    modalRateBtn.forEach((item)=>{
        item.addEventListener('click',()=>{
            modalRate.classList.add('active');
        })
    })

    rateCheck.forEach((item, i)=>{
        item.addEventListener('mouseover',(e)=>{
            e.preventDefault()
            for(let a = 0; a < i + 1; a++) {
                rateCheck[a].checked = true
            }
        })
        item.addEventListener('mouseout',()=>{
            rateCheck.forEach((item)=>{
                item.checked = false
            })
        })
    })

    rateCheck.forEach((item, i)=>{
        item.addEventListener('click',()=>{
            modalRate.classList.remove('active')
            if(i < 3) {
                modalBad.classList.add('active')
            } else {
                modalGood.classList.add('active')
            }
        })
    })
}


let modalForm = document.querySelector('.modal-form'),
    modalFormCall =document.querySelectorAll('.modal__call');

if(modalForm!==null) {
    modalFormCall.forEach((item)=>{
        item.addEventListener('click',()=>{
            modalForm.classList.add('active')
        })
    })
}


let priceAutor = document.querySelectorAll('.price__service .price__doc_autor'),
    priceBlock = document.querySelectorAll('.price__service');

if(priceAutor != null) {
    if(window.innerWidth > 1400) {
        let articleLeft = document.querySelectorAll('.price__doc_autor')[0].getBoundingClientRect().left - 20

        window.addEventListener('scroll', ()=>{

            priceAutor.forEach((item,i)=>{
                if(priceBlock[i].getBoundingClientRect().top < 100 && priceBlock[i].getBoundingClientRect().bottom > item.getBoundingClientRect().height + 100) {
                    item.classList.remove('bottom')
                    item.classList.add('fix')
                    item.style.left = articleLeft + 'px'
                } else if (priceBlock[i].getBoundingClientRect().top > 100) {
                    item.classList.remove('fix')
                    item.style.left = 'auto'
                } else if (priceBlock[i].getBoundingClientRect().bottom < item.getBoundingClientRect().height + 100) {
                    item.classList.remove('fix')
                    item.style.left = 'auto'
                    item.classList.add('bottom')
                }
            })

        })
    }

    document.querySelectorAll('.price-service__tab li').forEach((link, i)=>{
        link.addEventListener('click',()=>{
            priceAutor.forEach((item,i)=>{
                item.classList.remove('fix')
                item.style.left = 'auto'
                item.classList.remove('bottom')
            })
        })
    })
}



}, false);
