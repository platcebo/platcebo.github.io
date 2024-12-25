"use strict";

document.addEventListener('DOMContentLoaded', function() {
    if(document.querySelector('#modal-filter__select-1') !== null) {
        const modalFilterSelect1 = new ItcCustomSelect('#modal-filter__select-1');
    }
    if(document.querySelector('#modal-filter__select-2') !== null) {
        const modalFilterSelect1 = new ItcCustomSelect('#modal-filter__select-2');
    }
    if(document.querySelector('#modal-filter__select-3') !== null) {
        const modalFilterSelect1 = new ItcCustomSelect('#modal-filter__select-3');
    }
    if(document.querySelector('#nav__select-mob') !== null) {
        const navSelectMob = new ItcCustomSelect('#nav__select-mob');
    }
    if(document.querySelector('#nav__select-1') !== null) {
        const navSelect1 = new ItcCustomSelect('#nav__select-1');
    }
    if(document.querySelector('#nav__select-2') !== null) {
        const navSelect1 = new ItcCustomSelect('#nav__select-2');
    }
    if(document.querySelector('#nav__select-3') !== null) {
        const navSelect1 = new ItcCustomSelect('#nav__select-3');
    }

    var articleThumb = new Swiper(".article__thumb", {
        spaceBetween: 16,
        slidesPerView: 5,
        watchSlidesProgress: true,
    });
    var articleSlider = new Swiper(".article__slider", {
        spaceBetween: 25,
        navigation: {
          nextEl: ".article__slider .swiper-button-next",
          prevEl: ".article__slider .swiper-button-prev",
        },
        thumbs: {
            swiper: articleThumb,
        },
        pagination: {
            el: ".article__slider .swiper-pagination",
          },
    });
    var swiper = new Swiper(".header__swiper", {
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
        },
    });


    let svg = document.querySelectorAll('img.svg');

    if( svg !== null) {
        svg.forEach(function(img){
            var imgID = img.id;
            var imgClass = img.className;
            var imgURL = img.src;
        
            fetch(imgURL).then(function(response) {
                return response.text();
            }).then(function(text){
        
                var parser = new DOMParser();
                var xmlDoc = parser.parseFromString(text, "text/xml");
        
                // Get the SVG tag, ignore the rest
                var svg = xmlDoc.getElementsByTagName('svg')[0];
        
                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    svg.setAttribute('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    svg.setAttribute('class', imgClass+' replaced-svg');
                }
        
                // Remove any invalid XML tags as per http://validator.w3.org
                svg.removeAttribute('xmlns:a');
        
                // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
                if(!svg.getAttribute('viewBox') && svg.getAttribute('height') && svg.getAttribute('width')) {
                    svg.setAttribute('viewBox', '0 0 ' + svg.getAttribute('height') + ' ' + svg.getAttribute('width'))
                }
        
                // Replace image with new SVG
                img.parentNode.replaceChild(svg, img);
        
            });
        
        });
    }

    let selectInput = document.querySelectorAll('.select__input'),
        selectVal = document.querySelectorAll('.select__val');

    if(selectInput !== null) {
        selectInput.forEach((item, i)=>{
            item.addEventListener('change', ()=>{
                selectVal[i].innerHTML = item.options[item.selectedIndex].text
            })
        })
    }

    let navHum = document.querySelector('.nav__humburger'),
        nav = document.querySelector('.nav');

    if(nav !== null) {
        navHum.addEventListener('click', ()=>{
            nav.classList.toggle('active')
        })
    }

    let articleAcc = document.querySelectorAll('.article__info_btn');

    if(articleAcc !== null) {
        articleAcc.forEach((item)=>{
            item.addEventListener('click', ()=>{
                item.classList.toggle('active')
            })
        })
    }

    let navLang = document.querySelectorAll('.nav__lang');

    if(navLang !== null) {
        document.addEventListener('click', (event)=>{
            let target = event.target;

            if(target.closest('div.nav__lang')) {
                // navLang.forEach(item => item.classList.remove('nav__lang_open'))
                for(let i = 0; i < navLang.length; i++) {
                    if(target.closest('div.nav__lang') == navLang[i]) {
                        navLang[i].classList.toggle('nav__lang_open')
                    }
                }
                console.log('sd')
            } else {
                navLang.forEach(item => item.classList.remove('nav__lang_open'))
            }
        })
    }

    let FilterPriceBtn = document.querySelectorAll('.modal-filter__price_btn'),
        FilterPriceWrapper = document.querySelectorAll('.modal-filter__price_cur');

    if(FilterPriceWrapper !== null) {
        FilterPriceBtn.forEach((item,i)=>{
            item.addEventListener('click', ()=>{
                FilterPriceWrapper[i].classList.remove('active');
                if (i % 2 == 0) {   
                    FilterPriceWrapper[i+1].classList.add('active')
                } else {
                    FilterPriceWrapper[i-1].classList.add('active')
                }
            })
        })
    }

    let tabPoint = document.querySelectorAll('.tab-point'),
        tabBlock = document.querySelectorAll('.tab-wrapper');

    if(tabPoint !== null) {
        tabPoint.forEach((item,i) =>{
            item.addEventListener('click', ()=>{
                for(let a = 0; a < tabPoint.length; a++) {
                    tabPoint[a].classList.remove('active');
                    tabBlock[a].classList.remove('active');
                }
                item.classList.add('active');
                tabBlock[i].classList.add('active')
            })
        })
    }

    let modal = document.querySelectorAll('.modal'),
        modalClose = document.querySelectorAll('.modal__close'),
        modalOverflow = document.querySelectorAll('.modal__overflow');

    if(modal !== null) {
        for(let i = 0; i < modal.length; i++) {
            modalClose[i].addEventListener('click', ()=>{
                modal[i].classList.remove('active');
            })
            modalOverflow[i].addEventListener('click', ()=>{
                modal[i].classList.remove('active');
            })
        }
    }

    let modalPlaceBtn = document.querySelectorAll('.modal-place__btn'),
        modalPlace = document.querySelector('.modal-place');
    if(modalPlaceBtn !== null) {
        modalPlaceBtn.forEach((item)=>{
            item.addEventListener('click', (e)=>{
                e.preventDefault()
                modalPlace.classList.add('active')
            })
        })
    }

    let modalFilterBtn = document.querySelectorAll('.modal-filter__btn'),
        modalFilter = document.querySelector('.modal-filter');
    if(modalFilterBtn !== null) {
        modalFilterBtn.forEach((item)=>{
            item.addEventListener('click', (e)=>{
                e.preventDefault()
                modalFilter.classList.add('active')
            })
        })
    }

    let modalShareBtn = document.querySelectorAll('.modal-share__btn'),
        modalShare = document.querySelector('.modal-share');
    if(modalShareBtn !== null) {
        modalShareBtn.forEach((item)=>{
            item.addEventListener('click', (e)=>{
                e.preventDefault()
                modalShare.classList.add('active')
            })
        })
    }

    let modalWarBtn = document.querySelectorAll('.modal-war__btn'),
        modalWar = document.querySelector('.modal-war');
    if(modalWarBtn !== null) {
        modalWarBtn.forEach((item)=>{
            item.addEventListener('click', (e)=>{
                e.preventDefault()
                modalWar.classList.add('active')
            })
        })
    }
    
    let modalPrintBtn = document.querySelectorAll('.modal-print__btn'),
        modalPrint = document.querySelector('.modal-print');
    if(modalPrintBtn !== null) {
        modalPrintBtn.forEach((item)=>{
            item.addEventListener('click', (e)=>{
                e.preventDefault()
                modalPrint.classList.add('active')
            })
        })
    }

    let modalPlaceClear = document.querySelector('.modal-place__input_clear'),
        modalPlaceInput = document.querySelector('.modal-place__input input');

    if(modalPlaceClear !== null) {
        modalPlaceClear.addEventListener('click',()=>{
            modalPlaceInput.value = ''
        })
    }

    let modalPrice = document.querySelector('.modal-filter__price');
    if(modalPrice !== null) {
        // modalPrice.addEventListener('click',()=>{
        //     modalPrice.classList.toggle('modal-filter__price_open');
        // })
        document.addEventListener('click', (event)=>{
            let target = event.target;
            if(target.closest('div.modal-filter__price')) {
                modalPrice.classList.toggle('modal-filter__price_open')
            } else {
                modalPrice.classList.remove('modal-filter__price_open')
            }
        })
    }

    // let signIn = document.querySelector('.sign-in');

    // if(signIn !== null) {
    //     signIn.style.minHeight = window.innerHeight - nav.getBoundingClientRect().height + 'px'
    // }

    let fieldset = document.querySelectorAll('fieldset'),
        fieldsetBtn = document.querySelectorAll('fieldset h4');

    if(fieldset !== null) {
        fieldsetBtn.forEach((item, i)=>{
            item.addEventListener('click', ()=>{
                fieldset[i].classList.toggle('open')
            })
        })
        document.body.addEventListener('click', (event)=>{
            if(!event.target.closest('fieldset')) {
                fieldset.forEach(item=> item.classList.remove('open'))
            }
        })
    }

    let signInPassword = document.querySelectorAll('.sign-in__input_password'),
        signInWatch = document.querySelectorAll('.sign-in__input_watch');

    if(signInWatch !== null) {
        signInWatch.forEach((item,i) =>{
            item.addEventListener('click',()=>{
                if(item.classList.contains('active')) {
                    signInPassword[i].setAttribute('type', 'password');
                    item.classList.remove('active')
                } else {
                    signInPassword[i].setAttribute('type', 'text');
                    item.classList.add('active')
                }
            })
        })
    }

    let signInTab = document.querySelector('.sign-in__tab'),
        signInTabLink = document.querySelectorAll('.sign-in__tab a'),
        signInTabWrapper = document.querySelectorAll('.sign-in__tab_wrapper');

    if(signInTab !== null) {
        signInTab.addEventListener('click', (event)=>{
            let target = event.target;

            if(target.closest('.sign-in__tab a')) {
                for(let i = 0; i < signInTabLink.length; i++) {
                    if(target == signInTabLink[i]) {
                        signInTabWrapper.forEach((item,a)=>{
                            item.classList.remove('active');
                            signInTabLink[a].classList.remove('active');
                        })
                        signInTabLink[i].classList.add('active');
                        signInTabWrapper[i].classList.add('active');
                    }
                }
            }
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

    let navMobList = document.querySelectorAll('.nav__mob_drop'),
        navMobListBtn = document.querySelectorAll('.nav__mob_drop p');

    if(navMobListBtn !== null) {
        navMobListBtn.forEach((item,i) => {
            item.addEventListener('click', ()=>{
                navMobList[i].classList.toggle('active');
            })
        }) 
    }

    let navPers = document.querySelector('.nav__pers');
    
    if(navPers !== null) {
        navPers.addEventListener('click', ()=>{
            navPers.classList.toggle('active')
        })
    }

    let searchBtn = document.querySelectorAll('.search__aside_btn'),
        searchItem = document.querySelectorAll('.search__aside_drop');

    if(searchBtn !== null) {
        searchBtn.forEach((item,i)=>{
            item.addEventListener('click',()=>{
                searchItem[i].classList.toggle('active');
            })
        })
    }

    let select = document.querySelectorAll('.select select'),
        selectText = document.querySelectorAll('.select__text');

    select.forEach((item,i)=>{
        item.addEventListener('change', ()=>{
            selectText[i].innerHTML = item.value
        })
    })

    let searchMobBtn = document.querySelector('.search__mob_btn'),
        searchFilter = document.querySelector('.search__mob_wrapper'),
        searchMobClose = document.querySelector('.search__mob_filter');

    if(searchMobBtn !== null) {
        searchMobBtn.addEventListener('click', ()=>{
            searchFilter.classList.toggle('active')
        })
        searchMobClose.addEventListener('click', ()=>{
            searchFilter.classList.toggle('active')
        })
    }

    var chatHistory = document.querySelectorAll(".message__block");

    if(chatHistory !== null) {
        chatHistory.forEach(item=>{item.scrollTop = item.scrollHeight;})
    }

}, false);