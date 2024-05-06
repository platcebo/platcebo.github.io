document.addEventListener('DOMContentLoaded', function() {
    // const lenis = new Lenis({
    // 	duration: 3,
    //     wrapper: document.body,
    // })

    // function raf(time) {
    // 	lenis.raf(time)
    // 	requestAnimationFrame(raf)
    // }

    // requestAnimationFrame(raf)

    let nav = document.querySelector('.nav'),
        navBurger = document.querySelector('.nav__burger');
        
    if(nav !== null) {
        navBurger.addEventListener('click', ()=>{
            if(nav.classList.contains('active')) {
                nav.classList.remove('active');
                navBurger.classList.remove('active');
                document.body.classList.remove('fix')
            } else {
                nav.classList.add('active');
                navBurger.classList.add('active');
                document.body.classList.add('fix')
            }
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
    
    if(wrapper !== null) {
        wrapper.addEventListener('mousemove', handleParallax);
        wrapper.addEventListener('mouseout', reset);
    }

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
        // service.style.height = serviceSlider.getBoundingClientRect().width - (serviceWrapper.getBoundingClientRect().width - serviceBlock.getBoundingClientRect().height - 70) + 'px'
        if(window.innerWidth > 1700 || window.innerWidth < 1235) {
            service.style.height = (serviceSlider.getBoundingClientRect().width - serviceWrapper.getBoundingClientRect().width) + serviceBlock.getBoundingClientRect().height + 60 + 'px'
        } else {
            service.style.height = (serviceSlider.getBoundingClientRect().width - serviceWrapper.getBoundingClientRect().width) + serviceBlock.getBoundingClientRect().height + 'px'
        }

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

    let aboutRow = document.querySelectorAll('.about__run_scroll');

    if(aboutRow !== null) {
        aboutRow.forEach((element, i) => {
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
        loop: true,
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

    let modalCall = document.querySelectorAll('.modal-form__call'),
        modal = document.querySelector('.modal-form'),
        modalClose = document.querySelector('.modal-form__close'),
        modalOverflow = document.querySelector('.modal-form__overflow');

    if(modal !== null) {
        modalCall.forEach((item)=>{
            item.addEventListener('click', (e)=>{
                e.preventDefault()
                modal.classList.add('active');
                nav.classList.remove('active');
                navBurger.classList.remove('active');
                document.body.classList.add('fix')
            })
        })
        modalClose.addEventListener('click', ()=>{
            modal.classList.remove('active');
            document.body.classList.remove('fix')
        })
        modalOverflow.addEventListener('click', ()=>{
            modal.classList.remove('active');
            document.body.classList.remove('fix')
        })
    }
    let modalMailCall = document.querySelectorAll('.modal-mail__call'),
        modalMail = document.querySelector('.modal-mail'),
        modalMailClose = document.querySelector('.modal-mail__close'),
        modalMailOverflow = document.querySelector('.modal-mail__overflow');

    if(modalMail !== null) {
        modalMailCall.forEach((item)=>{
            item.addEventListener('click', (e)=>{
                e.preventDefault()
                modalMail.classList.add('active');
                nav.classList.remove('active');
                navBurger.classList.remove('active');
                document.body.classList.add('fix')
            })
        })
        modalMailClose.addEventListener('click', ()=>{
            modalMail.classList.remove('active');
            document.body.classList.remove('fix')
        })
        modalMailOverflow.addEventListener('click', ()=>{
            modalMail.classList.remove('active');
            document.body.classList.remove('fix')
        })
    }

    let menuLink = document.querySelectorAll('.menu__link'),
        menuCall = document.querySelectorAll('.menu__call'),
        menu = document.querySelectorAll('.menu');

    if(menu !== null) {
        menuLink.forEach((item, i)=>{
            item.addEventListener('click', (e)=>{
                e.preventDefault()
                menuCall[i].classList.toggle('active')
            })
        })
    }

    let caseItem = document.querySelectorAll('.case__item'),
        caseWrapper = document.querySelector('.case__sticy_wrapper'),
        caseHeader = document.querySelector('.case__sticy');

    if(caseHeader !== null && window.innerWidth > 750) {
        caseWrapper.style.height = caseHeader.getBoundingClientRect().height + 'px'
        window.addEventListener('scroll',()=>{
            let i = caseItem.length - 1;
            if(caseItem[i].getBoundingClientRect().top <= caseWrapper.getBoundingClientRect().height) {
                caseHeader.classList.add('sticy')
                caseHeader.classList.remove('fix')
                if (window.innerWidth > 1200) {
                    caseHeader.style.bottom = caseItem[i].getBoundingClientRect().height + 60 + "px"
                } else if (window.innerWidth <= 1200) {
                    caseHeader.style.bottom = caseItem[i].getBoundingClientRect().height + 130 + "px"
                }
            } else if(caseItem[i].getBoundingClientRect().top > caseHeader.getBoundingClientRect().height && caseWrapper.getBoundingClientRect().top <= 0) {
                caseHeader.classList.add('fix')
                caseHeader.classList.remove('sticy')
                caseHeader.style.bottom = 'auto'
            } else {
                caseHeader.classList.remove('active')
                caseHeader.classList.remove('fix')
                caseHeader.style.bottom = 'auto'
            }
        })
    }

    let formPrev = document.querySelector('.form__wrapper');

    if(formPrev !== null) {
        formPrev.addEventListener('submit', formPrevSend);
    }

    async function formPrevSend(event) {
        event.preventDefault()
        let error = formVal(formPrev);
    }

    function formVal(form) {
        let error = 0,
            formReq = document.querySelectorAll('.form__wrapper ._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemError(input);

            if(input.classList.contains('_email')) {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                } else if(formEmail(input)) {
                    formAddErrorEmail(input);
                    error++;
                }
            } else if(input.getAttribute('type') === 'checkbox' && input.checked === false) {
                formAddError(input);
                error++;
            } else if (input.value === '') {
                formAddError(input);
                error++;
            }
        }

        return error
    }

    function formAddError(input){
        input.classList.add('error')
        input.parentElement.classList.add('error')
    }
    function formAddErrorEmail(input) {
        input.classList.add('error')
        input.parentElement.classList.add('error__email')
    }
    function formRemError(input){
        input.classList.remove('error')
        input.parentElement.classList.remove('error__email')
    }
    function formEmail(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\--]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    let formModal = document.querySelector('.modal-form .modal__container');

    if(formModal !== null) {
        formModal.addEventListener('submit', formModalSend);
    }

    async function formModalSend(event) {
        event.preventDefault()
        let error = formModalVal(formModal);
    }

    function formModalVal(form) {
        let error = 0,
            formModalReq = document.querySelectorAll('.modal-form .modal__container ._req');

        for (let index = 0; index < formModalReq.length; index++) {
            const Modalinput = formModalReq[index];
            formModalRemError(Modalinput);

            if(Modalinput.classList.contains('_email')) {
                if (Modalinput.value === '') {
                    formModalAddError(Modalinput);
                    error++;
                } else if(formModalEmail(Modalinput)) {
                    formModalAddErrorEmail(Modalinput);
                    error++;
                }
            } else if(Modalinput.getAttribute('type') === 'checkbox' && Modalinput.checked === false) {
                formModalAddError(Modalinput);
                error++;
            } else if (Modalinput.value === '') {
                formModalAddError(Modalinput);
                error++;
            }
        }

        return error
    }

    function formModalAddError(Modalinput){
        Modalinput.classList.add('error')
        Modalinput.parentElement.classList.add('error')
    }
    function formModalAddErrorEmail(Modalinput) {
        Modalinput.classList.add('error')
        Modalinput.parentElement.classList.add('error__email')
    }
    function formModalRemError(Modalinput){
        Modalinput.classList.remove('error')
        Modalinput.parentElement.classList.remove('error__email')
    }
    function formModalEmail(Modalinput) {
        return !/^\w+([\.-]?\w+)*@\w+([\--]?\w+)*(\.\w{2,8})+$/.test(Modalinput.value);
    }

    let formMail = document.querySelector('.modal-mail .modal__container');

    if(formMail !== null) {
        formMail.addEventListener('submit', formMailSend);
    }

    async function formMailSend(event) {
        event.preventDefault()
        let error = formMailVal(formMail);
    }

    function formMailVal(form) {
        let error = 0,
            formMailReq = document.querySelectorAll('.modal-mail .modal__container ._req');

        for (let index = 0; index < formMailReq.length; index++) {
            const Modalinput = formMailReq[index];
            formMailRemError(Modalinput);

            if(Modalinput.classList.contains('_email')) {
                if (Modalinput.value === '') {
                    formMailAddError(Modalinput);
                    error++;
                } else if(formMailEmail(Modalinput)) {
                    formMailAddErrorEmail(Modalinput);
                    error++;
                }
            } else if(Modalinput.getAttribute('type') === 'checkbox' && Modalinput.checked === false) {
                formMailAddError(Modalinput);
                error++;
            } else if (Modalinput.value === '') {
                formMailAddError(Modalinput);
                error++;
            }
        }

        return error
    }

    function formMailAddError(Modalinput){
        Modalinput.classList.add('error')
        Modalinput.parentElement.classList.add('error')
    }
    function formMailAddErrorEmail(Modalinput) {
        Modalinput.classList.add('error')
        Modalinput.parentElement.classList.add('error__email')
    }
    function formMailRemError(Modalinput){
        Modalinput.classList.remove('error')
        Modalinput.parentElement.classList.remove('error__email')
    }
    function formMailEmail(Modalinput) {
        return !/^\w+([\.-]?\w+)*@\w+([\--]?\w+)*(\.\w{2,8})+$/.test(Modalinput.value);
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
}, false);