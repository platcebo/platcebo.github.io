"use strict";

document.addEventListener('DOMContentLoaded', function() {

let btn = document.querySelectorAll('.btn__anim'),
    btnBox = document.querySelectorAll('.btn__anim i');

if(btn !== null) {
    function wrapChars(str, tmpl) {
        return str.replace(/\p{L}/gu, tmpl || "<span>$&</span>");
    }

    for(let a = 0; a < btn.length; a++) {
        var btnText = wrapChars(String(btnBox[a].innerHTML));

        btnBox[a].innerHTML = btnText; 

        let spans = btnBox[a].querySelectorAll("span");

        spans.forEach((span, i) => {
            span.style.transitionDelay = `${(i+0.2) * 0.01 }s`;
        });

        btn[a].innerHTML = '<b>' + btn[a].innerHTML + btn[a].innerHTML + '</b>'
    }

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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let sectionAnim = document.querySelectorAll('.section-anim');

if(sectionAnim !== null) {
    sectionAnim.forEach((item)=>{
        if(item.getBoundingClientRect().top < window.innerHeight/1.2) {
            item.classList.add('section-anim__active')
        }
        window.addEventListener('scroll', ()=>{
            if(item.getBoundingClientRect().top < window.innerHeight/1.2) {
                item.classList.add('section-anim__active')
            }
        })
    })
}

let legalAutor = document.querySelector('.faq__title'),
    legalBlock = document.querySelector('.faq__block');

if(legalBlock != null) {
    if(window.innerWidth > 1024) {
        let articleLeft = legalAutor.getBoundingClientRect().left

        window.addEventListener('scroll', ()=>{
            if(legalBlock.getBoundingClientRect().top < 20 && legalBlock.getBoundingClientRect().bottom > legalAutor.getBoundingClientRect().height + 20) {
                legalAutor.classList.remove('bottom')
                legalAutor.classList.add('fix')
                legalAutor.style.left = articleLeft + 'px'
            } else if (legalBlock.getBoundingClientRect().top > 20) {
                legalAutor.classList.remove('fix')
                legalAutor.style.left = 'auto'
            } else if (legalBlock.getBoundingClientRect().bottom < legalAutor.getBoundingClientRect().height + 20) {
                legalAutor.classList.remove('fix')
                legalAutor.style.left = 'auto'
                legalAutor.classList.add('bottom')
            }

        })

        if(legalBlock.getBoundingClientRect().top < 20 && legalBlock.getBoundingClientRect().bottom > legalAutor.getBoundingClientRect().height + 20) {
            legalAutor.classList.remove('bottom')
            legalAutor.classList.add('fix')
            legalAutor.style.left = articleLeft + 'px'
        } else if (legalBlock.getBoundingClientRect().top > 20) {
            legalAutor.classList.remove('fix')
            legalAutor.style.left = 'auto'
        } else if (legalBlock.getBoundingClientRect().bottom < legalAutor.getBoundingClientRect().height + 20) {
            legalAutor.classList.remove('fix')
            legalAutor.style.left = 'auto'
            legalAutor.classList.add('bottom')
        }
    }
}

let faqBtn = document.querySelectorAll('.faq__btn');

if(faqBtn !== null) {
    faqBtn.forEach((item)=>{
        item.addEventListener('click', ()=>{
            item.classList.toggle('active')
        })
    })
}

var swiper = new Swiper(".work__slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    speed: 2000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        769: {
            slidesPerView: 2,
        }
    },

});

let priceStep = document.querySelectorAll('.price__step'),
    priceNext = document.querySelectorAll('.price__step_next'),
    pricePrev = document.querySelectorAll('.price__step_prev'),
    priceReq = document.querySelectorAll('.price__step.req'),
    priceTotal = document.querySelector('.price__btn_total'),
    priceTotalText = document.querySelector('.price__sum b');

if(priceStep !== null) {
    let step1Radios = document.querySelectorAll('input[name="step-1"]'),
        step2Radios = document.querySelectorAll('input[name="step-2"]'),
        dopCheckboxes = document.querySelectorAll('input[data-dop]');

    function calculatePrice() {
        let basePrice = 0,
            designMultiplier = 1,
            dopSum = 0;

        step1Radios.forEach(radio => {
            if (radio.checked) {
                basePrice = Number(radio.dataset.price);
            }
        });

        step2Radios.forEach(radio => {
            if (radio.checked) {
                designMultiplier = Number(radio.dataset.design) || 1;
            }
        });

        dopCheckboxes.forEach(ch => {
            if (ch.checked) {
                dopSum += Number(ch.dataset.dop) || 0;
            }
        });

        const total = (basePrice * designMultiplier) + dopSum;

        priceTotalText.textContent = total;
        console.log(total)
        console.log(basePrice, designMultiplier, dopSum)
    }




    priceNext.forEach((btn, i)=>{
        let a = i+1;

        btn.addEventListener('click', ()=>{
            priceStep.forEach((all)=> all.style.transform = 'translate(-'+ a + '00%, 0)')
        });

    })

    pricePrev.forEach((btn, i)=>{
        btn.addEventListener('click', ()=>{
            priceStep.forEach((all)=> all.style.transform = 'translate(-'+ i + '00%, 0)')
        });
    })

    priceReq.forEach((item, i)=>{
        let priceInput = item.querySelectorAll('input');

        priceInput.forEach((a)=>{
            a.addEventListener('click', ()=>{
                priceNext[i].classList.remove('dis')
            })

        })
    })

    priceTotal.addEventListener('click', ()=>{

        calculatePrice()

    })

}



}, false);