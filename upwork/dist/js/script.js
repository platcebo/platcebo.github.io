"use strict";

document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".vacancy-like__slider", {
        slidesPerView: 'auto',
        spaceBetween: 20,
        navigation: {
            nextEl: ".vacancy-like__slider .swiper-button-next",
            prevEl: ".vacancy-like__slider .swiper-button-prev",
        },
    });
    var swiper = new Swiper(".about-us__comment_wrapper", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".about-us__comment_wrapper .swiper-button-next",
            prevEl: ".about-us__comment_wrapper .swiper-button-prev",
        }, 
        breakpoints: {
            769: {
                slidesPerView: 2,
            }
        }
    });

    let dropdown = document.querySelectorAll('.dropdown__list'),
        dropdownBtn = document.querySelectorAll('.dropdown__btn');

    if(dropdown !== null) {
        dropdown.forEach((item,i)=>{
            dropdownBtn[i].addEventListener('click', ()=>{
                if(dropdownBtn[i].classList.contains('active')) {
                    dropdownBtn[i].classList.remove('active');
                    item.classList.remove('active')
                } else {
                    for(let a = 0; a < dropdown.length; a++) {
                        dropdownBtn[a].classList.remove('active');
                        dropdown[a].classList.remove('active')
                    }
                    dropdownBtn[i].classList.add('active');
                    item.classList.add('active')
                }
            })
        })
    }

    let nav = document.querySelector('.nav'),
        navHum = document.querySelector('.nav__hum');

    if(nav !== null) {
        navHum.addEventListener('click', ()=>{
            nav.classList.toggle('active');
            document.body.classList.toggle('fix')
            document.body.parentNode.classList.toggle('fix')
        })
    }

    let asideBtn = document.querySelector('.search__aside .title'),
        aside = document.querySelector('.search__aside');

    if(aside !== null) {
        asideBtn.addEventListener('click', ()=>{
            aside.classList.toggle('active')
        })
    }

    let helpBtn = document.querySelectorAll('.help-page__btn'),
        helpText = document.querySelectorAll('.help-page__text');

    if(helpBtn !== null) {
        helpBtn.forEach((item, i)=>{
            item.addEventListener('click', ()=>{
                item.classList.toggle('active');
            })
        })
    }

    let tab = document.querySelectorAll('.tab p'),
        tabWrapper = document.querySelectorAll('.tab-wrapper');

    if(tab !== null) {
        tab.forEach((item,i)=>{
            item.addEventListener('click', ()=>{
                for(let a = 0; a < tab.length; a++) {
                    tab[a].classList.remove('active');
                    tabWrapper[a].classList.remove('active');
                }
                item.classList.add('active')
                tabWrapper[i].classList.add('active')
            })
        })
    }

    let accBtn = document.querySelector('.acc-recom__btn');

    if(accBtn !== null) {
        accBtn.addEventListener('click', (e)=>{
            e.preventDefault();
            accBtn.classList.toggle('active')
        })
    }

    let dropInput = document.querySelectorAll('.select input'),
        dropSelect = document.querySelectorAll('.select ul');

    if(dropInput !== null) {
        document.body.addEventListener('click',(event)=>{
            let target = event.target;

            if(target && target.closest('.select')) {
                return
            } else {
                dropInput.forEach(item => item.classList.remove('active'))
            }
        })

        dropInput.forEach((item,i)=>{
            item.addEventListener('click',()=>{
                item.classList.toggle('active')
            })
        })

        dropSelect.forEach((item,i)=>{
            item.addEventListener('click', (event)=>{
                let target = event.target;
                if(target == target && target.closest('li')) {
                    dropInput[i].classList.remove('active');
                    dropInput[i].value = target.innerHTML
                }
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

    let inputPassword = document.querySelectorAll('.input__password input'),
        inputBtn = document.querySelectorAll('.input__password a');

    if(inputPassword !== null) {
        inputBtn.forEach((item, i)=>{
            item.addEventListener('click', (e)=>{
                e.preventDefault()
                if(inputPassword[i].type == 'password') {
                    inputPassword[i].setAttribute('type','text');
                } else {
                    inputPassword[i].setAttribute('type','password');
                }
            })
        })
    }
let modalClose = document.querySelectorAll('.modal__close'),
    modal = document.querySelectorAll('.modal'),
    modalOverflow = document.querySelectorAll('.modal__overflow'),
    modalEnter = document.querySelector('.modal-enter'),
    modalEnterBtn = document.querySelectorAll('.modal-enter__call'),
    modalReg = document.querySelector('.modal-reg'),
    modalRegBtn = document.querySelectorAll('.modal-reg__call'),
    modalPas = document.querySelector('.modal-pas'),
    modalPasBtn = document.querySelectorAll('.modal-pas__call'),
    modalMail = document.querySelector('.modal-mail'),
    modalMailBtn = document.querySelectorAll('.modal-mail__call'),
    modalNew = document.querySelector('.modal-new'),
    modalNewBtn = document.querySelectorAll('.modal-new__call'),
    modalConf = document.querySelector('.modal-conf'),
    modalConfBtn = document.querySelectorAll('.modal-conf__call'),
    modalAccept = document.querySelector('.modal-accept'),
    modalAcceptBtn = document.querySelectorAll('.modal-accept__call'),
    modalResume = document.querySelector('.modal-resume'),
    modalResumeBtn = document.querySelectorAll('.modal-resume__call');

if(modal !== null) {
    modalClose.forEach((item)=>{
        item.addEventListener('click',()=>{
            for(let a = 0; a < modal.length; a++) {
                modal[a].classList.remove('active')
            }
        })
    })
    modalOverflow.forEach((item)=>{
        item.addEventListener('click',()=>{
            for(let a = 0; a < modal.length; a++) {
                modal[a].classList.remove('active')
            }
        })
    })
}
if(modalEnter !== null) {
    modalEnterBtn.forEach((item)=>{
        item.addEventListener('click',()=>{
            for(let a = 0; a < modal.length; a++) {
                modal[a].classList.remove('active')
            }
            modalEnter.classList.add('active')
        })
    })
}
if(modalReg !== null) {
    modalRegBtn.forEach((item)=>{
        item.addEventListener('click',()=>{
            for(let a = 0; a < modal.length; a++) {
                modal[a].classList.remove('active')
            }
            modalReg.classList.add('active')
        })
    })
}
if(modalPas !== null) {
    modalPasBtn.forEach((item)=>{
        item.addEventListener('click',()=>{
            for(let a = 0; a < modal.length; a++) {
                modal[a].classList.remove('active')
            }
            modalPas.classList.add('active')
        })
    })
}
if(modalMail !== null) {
    modalMailBtn.forEach((item)=>{
        item.addEventListener('click',()=>{
            for(let a = 0; a < modal.length; a++) {
                modal[a].classList.remove('active')
            }
            modalMail.classList.add('active')
        })
    })
}
if(modalNew !== null) {
    modalNewBtn.forEach((item)=>{
        item.addEventListener('click',()=>{
            for(let a = 0; a < modal.length; a++) {
                modal[a].classList.remove('active')
            }
            modalNew.classList.add('active')
        })
    })
}
if(modalConf !== null) {
    modalConfBtn.forEach((item)=>{
        item.addEventListener('click',()=>{
            for(let a = 0; a < modal.length; a++) {
                modal[a].classList.remove('active')
            }
            modalConf.classList.add('active')
        })
    })
}
if(modalAccept !== null) {
    modalAcceptBtn.forEach((item)=>{
        item.addEventListener('click',()=>{
            for(let a = 0; a < modal.length; a++) {
                modal[a].classList.remove('active')
            }
            modalAccept.classList.add('active')
        })
    })
}
if(modalResume !== null) {
    modalResumeBtn.forEach((item)=>{
        item.addEventListener('click',()=>{
            for(let a = 0; a < modal.length; a++) {
                modal[a].classList.remove('active')
            }
            modalResume.classList.add('active')
        })
    })
}

let vacancyList = document.querySelectorAll('.category__list_script ul');

if(vacancyList !== null) {
    vacancyList.forEach((item)=>{
        console.log('as')
        item.style.maxHeight = item.getBoundingClientRect().height / 2 + 25 + 'px'
    })
}


}, false);