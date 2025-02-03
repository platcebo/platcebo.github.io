
document.addEventListener('DOMContentLoaded', function() {
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

        if(window.scrollY > window.innerHeight * 2) {
            nav.classList.add('fix')
        } else {
            nav.classList.remove('fix')
        }
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > window.innerHeight * 2) {
                nav.classList.add('fix')
            } else if (window.scrollY < window.innerHeight * 2 && nav.classList.contains('fix')) {
                nav.style.opacity = 0
                setTimeout(() => {
                    nav.style.opacity = 1
                    nav.classList.remove('fix')
                }, 500);
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

    let workPar = document.querySelectorAll('.par__layer'),
        workWrapper = document.querySelector('.work__wrapper');

    if(workPar.length > 0) {
        window.addEventListener('scroll', ()=>{
            workPar.forEach((item)=>{
                if(item.getBoundingClientRect().top <= window.innerHeight && workWrapper.getBoundingClientRect().bottom > 0) {
                    item.style.transform = 'translateY(' + (item.getBoundingClientRect().top/workWrapper.getBoundingClientRect().height) * 50 + '%)'
                }
            })
        })
    }

    let checkPar = document.querySelector('.check__layer'),
        checkWrapper = document.querySelector('.check__block');

    if(checkPar !== null) {
        window.addEventListener('scroll', ()=>{
            if(checkPar.getBoundingClientRect().top <= window.innerHeight && checkWrapper.getBoundingClientRect().bottom > 0) {
                checkPar.style.transform = 'translateY(' + (checkPar.getBoundingClientRect().top/window.innerHeight)*10 + '%)'
            }
        })
    }

    let addPar = document.querySelector('.add-header__bg'),
        addWrapper = document.querySelector('.add-header__block');

    if(addPar !== null) {
        if(addPar.getBoundingClientRect().top <= window.innerHeight && addWrapper.getBoundingClientRect().bottom > 0) {
            addPar.style.transform = 'translateY(' + (addPar.getBoundingClientRect().top/window.innerHeight)*10 + '%)'
        }
        window.addEventListener('scroll', ()=>{
            if(addPar.getBoundingClientRect().top <= window.innerHeight && addWrapper.getBoundingClientRect().bottom > 0) {
                addPar.style.transform = 'translateY(' + (addPar.getBoundingClientRect().top/window.innerHeight)*10 + '%)'
            }
        })
    }

    let sermPar = document.querySelector('.serm__bg');

    if(sermPar !== null) {
        if(sermPar.getBoundingClientRect().top <= window.innerHeight && addWrapper.getBoundingClientRect().bottom > 0) {
            sermPar.style.transform = 'translateY(' + (sermPar.getBoundingClientRect().top/window.innerHeight)*10 + '%)'
        }
        window.addEventListener('scroll', ()=>{
            if(sermPar.getBoundingClientRect().top <= window.innerHeight && addWrapper.getBoundingClientRect().bottom > 0) {
                sermPar.style.transform = 'translateY(' + (sermPar.getBoundingClientRect().top/window.innerHeight)*10 + '%)'
            }
        })
    }

    let advantagePar = document.querySelector('.advantage__bg'),
        advantageWrapper = document.querySelector('.advantage__block');

    if(advantagePar !== null) {
        if(advantagePar.getBoundingClientRect().top <= window.innerHeight && advantageWrapper.getBoundingClientRect().bottom > 0) {
            advantagePar.style.transform = 'translateY(' + (advantagePar.getBoundingClientRect().top/workWrapper.getBoundingClientRect().height) * 50 + '%)'
        }
        window.addEventListener('scroll', ()=>{
            if(advantagePar.getBoundingClientRect().top <= window.innerHeight && advantageWrapper.getBoundingClientRect().bottom > 0) {
                advantagePar.style.transform = 'translateY(' + (advantagePar.getBoundingClientRect().top/workWrapper.getBoundingClientRect().height) * 50 + '%)'
            }
        })
    }

    let headerVideoPlay = document.querySelector('.header__video_play'),
        headerVideoClose = document.querySelector('.header__video_close'),
        headerVideo = document.querySelector('.header__video_wrapper video'),
        headerVideoWrapper = document.querySelector('.header__video_wrapper'),
        headerVideoMob = document.querySelector('.header__mob');

    if(headerVideoWrapper !== null) {
        function videoPlay() {
            headerVideoWrapper.classList.add('active')
            if(headerVideo !== null) {
                headerVideo.play()
            }
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
            if(headerVideo !== null) {
                headerVideo.pause()
            }
            setTimeout(videostop, 300)
        })
        window.addEventListener('scroll', ()=>{
            headerVideoWrapper.classList.remove('active')
            if(headerVideo !== null) {
                headerVideo.pause()
            }
            setTimeout(videostop, 300)
        })

        headerVideoMob.addEventListener('click',()=>{
            headerVideoWrapper.classList.add('active')
            if(headerVideo !== null) {
                headerVideo.play()
            }
        })
    }

    let serviceRow = document.querySelectorAll('.scroll-row');

    if(serviceRow !== null) {
        serviceRow.forEach((element, i) => {
            if  (element.classList.contains('cert__row') && window.innerWidth <= 600) {
                return
            } else {
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
            }
        });
    }

    let service = document.querySelector('.service'),
        serviceWrapper = document.querySelector('.service__wrapper'),
        serviceBlock = document.querySelector('.service__block'),
        serviceSlider = document.querySelector('.service__scroll');

    if(service !== null && window.innerWidth > 1200) {
        service.style.height = serviceSlider.getBoundingClientRect().width - serviceWrapper.getBoundingClientRect().width + serviceBlock.getBoundingClientRect().height + 60 + 'px'

        window.addEventListener('scroll', ()=>{
            if (service.getBoundingClientRect().top < 0 && serviceBlock.getBoundingClientRect().top > 20) {
                serviceSlider.style.transform = 'translateX(' + service.getBoundingClientRect().top + 'px)';
            } else if (service.getBoundingClientRect().top < 0) {
                serviceSlider.style.transform = 'translateX(-' + (serviceSlider.getBoundingClientRect().width - serviceWrapper.getBoundingClientRect().width) + 'px)';
            } else if (serviceBlock.getBoundingClientRect().top > 20) {
                serviceSlider.style.transform = 'translateX(' + 0 + 'px)';
            }
        })
        if (service.getBoundingClientRect().top < 0 && serviceBlock.getBoundingClientRect().top > 20) {
            serviceSlider.style.transform = 'translateX(' + service.getBoundingClientRect().top + 'px)';
        } else if (service.getBoundingClientRect().top < 0) {
            serviceSlider.style.transform = 'translateX(-' + (serviceSlider.getBoundingClientRect().width - serviceWrapper.getBoundingClientRect().width) + 'px)';
        } else if (serviceBlock.getBoundingClientRect().top > 20) {
            serviceSlider.style.transform = 'translateX(' + 0 + 'px)';
        }
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

    var swiper = new Swiper(".team__structure", {
        spaceBetween: 20,
        slidesPerView: 1,
        speed: 700,
        loop: true,
        navigation: {
            nextEl: ".team__structure .swiper-button-next",
            prevEl: ".team__structure .swiper-button-prev",
        },
        breakpoints: {
            1201: {
                spaceBetween: 40,
                slidesPerView: 4
            },
            701: {
                slidesPerView: 2
            },
        }
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

    let modalTeamCall = document.querySelectorAll('a.modal-team__btn'),
        modalTeam = document.querySelector('.modal-team'),
        modalTeamClose = document.querySelector('.modal-team__close'),
        modalTeamOverflow = document.querySelector('.modal-team__overflow');

    if(modalTeam !== null) {
        modalTeamCall.forEach((item)=>{
            item.addEventListener('click', (e)=>{
                e.preventDefault()
                modalTeam.classList.add('active');
                nav.classList.remove('active');
                navBurger.classList.remove('active');
                document.body.classList.add('fix')
            })
        })
        modalTeamClose.addEventListener('click', ()=>{
            modalTeam.classList.remove('active');
            document.body.classList.remove('fix')
        })
        modalTeamOverflow.addEventListener('click', ()=>{
            modalTeam.classList.remove('active');
            document.body.classList.remove('fix')
        })
    }

    let modalRefCall = document.querySelectorAll('.modal-ref__btn'),
        modalRef = document.querySelector('.modal-ref'),
        modalRefClose = document.querySelector('.modal-ref__close'),
        modalRefOverflow = document.querySelector('.modal-ref__overflow');

    if(modalRef !== null) {
        modalRefCall.forEach((item)=>{
            item.addEventListener('click', (e)=>{
                e.preventDefault()
                modalRef.classList.add('active');
                nav.classList.remove('active');
                navBurger.classList.remove('active');
                document.body.classList.add('fix')
            })
        })
        modalRefClose.addEventListener('click', ()=>{
            modalRef.classList.remove('active');
            document.body.classList.remove('fix')
        })
        modalRefOverflow.addEventListener('click', ()=>{
            modalRef.classList.remove('active');
            document.body.classList.remove('fix')
        })
    }

    let modalSetCall = document.querySelectorAll('.modal-set__btn'),
        modalSet = document.querySelector('.modal-set'),
        modalSetClose = document.querySelector('.modal-set__close'),
        modalSetOverflow = document.querySelector('.modal-set__overflow');

    if(modalSet !== null) {
        modalSetCall.forEach((item)=>{
            item.addEventListener('click', (e)=>{
                e.preventDefault()
                modalSet.classList.add('active');
                nav.classList.remove('active');
                navBurger.classList.remove('active');
                document.body.classList.add('fix')
            })
        })
        modalSetClose.addEventListener('click', ()=>{
            modalSet.classList.remove('active');
            document.body.classList.remove('fix')
        })
        modalSetOverflow.addEventListener('click', ()=>{
            modalSet.classList.remove('active');
            document.body.classList.remove('fix')
        })
    }

    let menuLink = document.querySelectorAll('.menu__link'),
        menuCall = document.querySelectorAll('.menu__call'),
        menu = document.querySelectorAll('.menu__call ul');

    if(menu !== null) {
        menuCall.forEach((item, i)=>{
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
        caseWrapper.style.height = caseHeader.getBoundingClientRect().height + 'px';
        caseItem.forEach(item => item.style.top = caseHeader.getBoundingClientRect().height + 'px')
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

    // блок с формой

    let formPrev = document.querySelector('.form__wrapper');

    if(formPrev !== null) {
        formPrev.addEventListener('submit', formPrevSend);
    }

    async function formPrevSend(event) {
        event.preventDefault()
        let error = formVal(formPrev);

        // let formData = new FormData(formPrev)
        // if(error == 0) {
        

        //     let response = await fetch('php/send.php', {
        //         method: 'POST',
        //         body: formData
        //     });
        //     if(response.ok) {
            	
        //         //let result = await response.json();
        //         //alert(result.message);
        //         window.location.href = 'https://media-context.ru/thanks.html';
        //         formPrev.reset();
        //     } else {
        //         alert('send error')
        //     }



        // }
    }

    // document.querySelector('.modal-thanks').classList.add('active')

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
            } else if(input.classList.contains('_phone')) {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                } else if(input.value.length !== 18 ) {
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

        if (document.querySelector('.form ._email').value === '') {
            document.querySelector('.form ._email').classList.remove('error')
            document.querySelector('.form ._email').parentElement.classList.remove('error__email')
        } else if(formModalEmail(document.querySelector('.form ._email'))) {
            formModalAddErrorEmail(document.querySelector('.form ._email'));
            error++;
        } else {
            document.querySelector('.form ._email').classList.remove('error')
            document.querySelector('.form ._email').parentElement.classList.remove('error__email')
        }

        return error
    }

    function formAddError(input){
        input.classList.add('error')
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

    // форма обсудить проект 

    let formModal = document.querySelector('.modal-form .modal__container');

    if(formModal !== null) {
        formModal.addEventListener('submit', formModalSend);
    }

    async function formModalSend(event) {
        event.preventDefault()
        let error = formModalVal(formModal);

        // let formData = new FormData(formModal)
        // if(error == 0) {
        

        //     let response = await fetch('php/send.php', {
        //         method: 'POST',
        //         body: formData
        //     });
        //     if(response.ok) {
            	
        //         //let result = await response.json();
        //         //alert(result.message);
        //         window.location.href = 'https://media-context.ru/thanks.html';
        //         formPrev.reset();
        //     } else {
        //         alert('send error')
        //     }



        // }
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
            } else if(Modalinput.classList.contains('_phone')) {
                if (Modalinput.value === '') {
                    formModalAddError(Modalinput);
                    error++;
                } else if(Modalinput.value.length !== 18 ) {
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

        if (document.querySelector('.modal-form .modal__container ._email').value === '') {
            document.querySelector('.modal-form .modal__container ._email').classList.remove('error')
            document.querySelector('.modal-form .modal__container ._email').parentElement.classList.remove('error__email')
        } else if(formModalEmail(document.querySelector('.modal-form .modal__container ._email'))) {
            formModalAddErrorEmail(document.querySelector('.modal-form .modal__container ._email'));
            error++;
        } else {
            document.querySelector('.modal-form .modal__container ._email').classList.remove('error')
            document.querySelector('.modal-form .modal__container ._email').parentElement.classList.remove('error__email')
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

    // форма рассылки

    let formMail = document.querySelector('.modal-mail .modal__container');

    if(formMail !== null) {
        formMail.addEventListener('submit', formMailSend);
    }

    async function formMailSend(event) {
        event.preventDefault()
        let error = formMailVal(formMail);

        // let formData = new FormData(formMail)
        // if(error == 0) {
        

        //     let response = await fetch('php/send.php', {
        //         method: 'POST',
        //         body: formData
        //     });
        //     if(response.ok) {
            	
        //         //let result = await response.json();
        //         //alert(result.message);
        //         window.location.href = 'https://media-context.ru/thanks.html';
        //         formPrev.reset();
        //     } else {
        //         alert('send error')
        //     }



        // }
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
            } else if(Modalinput.classList.contains('_phone')) {
                if (Modalinput.value === '') {
                    formMailAddError(Modalinput);
                    error++;
                } else if(Modalinput.value.length !== 18 ) {
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

    // форма партнерки

    let formRef = document.querySelector('.modal-ref .modal-team__form');

    if(formRef !== null) {
        formRef.addEventListener('submit', formRefSend);
    }

    async function formRefSend(event) {
        event.preventDefault()
        let error = formRefVal(formRef);

        // let formData = new FormData(formRef)
        // if(error == 0) {
        

        //     let response = await fetch('php/send.php', {
        //         method: 'POST',
        //         body: formData
        //     });
        //     if(response.ok) {
            	
        //         //let result = await response.json();
        //         //alert(result.message);
        //         window.location.href = 'https://media-context.ru/thanks.html';
        //         formPrev.reset();
        //     } else {
        //         alert('send error')
        //     }



        // }
    }

    function formRefVal(form) {
        let error = 0,
            formRefReq = document.querySelectorAll('.modal-ref .modal-team__form ._req');

        for (let index = 0; index < formRefReq.length; index++) {
            const Modalinput = formRefReq[index];
            formRefRemError(Modalinput);

            if(Modalinput.classList.contains('_email')) {
                if (Modalinput.value === '') {
                    formRefAddError(Modalinput);
                    error++;
                } else if(formRefEmail(Modalinput)) {
                    formRefAddError(Modalinput);
                    error++;
                }
            } else if(Modalinput.classList.contains('_phone')) {
                if (Modalinput.value === '') {
                    formRefAddError(Modalinput);
                    error++;
                } else if(Modalinput.value.length !== 18 ) {
                    formRefAddError(Modalinput);
                    error++;
                }
            } else if(Modalinput.getAttribute('type') === 'checkbox' && Modalinput.checked === false) {
                formRefAddError(Modalinput);
                error++;
            } else if (Modalinput.value === '') {
                formRefAddError(Modalinput);
                error++;
            }
        }

        return error
    }

    function formRefAddError(Modalinput){
        Modalinput.classList.add('error')
        Modalinput.parentElement.classList.add('error')
    }
    function formRefAddErrorEmail(Modalinput) {
        Modalinput.classList.add('error')
        Modalinput.parentElement.classList.add('error__email')
    }
    function formRefRemError(Modalinput){
        Modalinput.classList.remove('error')
        Modalinput.parentElement.classList.remove('error__email')
    }
    function formRefEmail(Modalinput) {
        return !/^\w+([\.-]?\w+)*@\w+([\--]?\w+)*(\.\w{2,8})+$/.test(Modalinput.value);
    }

    // форма команды

    let formTeam = document.querySelector('.modal-team .modal-team__form');

    if(formTeam !== null) {
        formTeam.addEventListener('submit', formTeamSend);
    }

    async function formTeamSend(event) {
        event.preventDefault()
        let error = formTeamVal(formTeam);

        // let formData = new FormData(formTeam)
        // if(error == 0) {
        

        //     let response = await fetch('php/send.php', {
        //         method: 'POST',
        //         body: formData
        //     });
        //     if(response.ok) {
            	
        //         //let result = await response.json();
        //         //alert(result.message);
        //         window.location.href = 'https://media-context.ru/thanks.html';
        //         formPrev.reset();
        //     } else {
        //         alert('send error')
        //     }



        // }
    }

    function formTeamVal(form) {
        let error = 0,
            formTeamReq = document.querySelectorAll('.modal-team .modal-team__form ._req');

        for (let index = 0; index < formTeamReq.length; index++) {
            const Modalinput = formTeamReq[index];
            formTeamRemError(Modalinput);

            if(Modalinput.classList.contains('_email')) {
                if (Modalinput.value === '') {
                    formTeamAddError(Modalinput);
                    error++;
                } else if(formTeamEmail(Modalinput)) {
                    formTeamAddErrorEmail(Modalinput);
                    error++;
                }
            } else if(Modalinput.classList.contains('_phone')) {
                if (Modalinput.value === '') {
                    formTeamAddError(Modalinput);
                    error++;
                } else if(Modalinput.value.length !== 18 ) {
                    formTeamAddErrorEmail(Modalinput);
                    error++;
                }
            } else if(Modalinput.getAttribute('type') === 'checkbox' && Modalinput.checked === false) {
                formTeamAddError(Modalinput);
                error++;
            } else if (Modalinput.value === '') {
                formTeamAddError(Modalinput);
                error++;
            }
        }

        return error
    }

    function formTeamAddError(Modalinput){
        Modalinput.classList.add('error')
        Modalinput.parentElement.classList.add('error')
    }
    function formTeamAddErrorEmail(Modalinput) {
        Modalinput.classList.add('error')
        Modalinput.parentElement.classList.add('error__email')
    }
    function formTeamRemError(Modalinput){
        Modalinput.classList.remove('error')
        Modalinput.parentElement.classList.remove('error__email')
    }
    function formTeamEmail(Modalinput) {
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

    let inputFile = document.querySelector('.form .input__file'),
        inputFileList = document.querySelector('.form .input__file_list');

    if(inputFile !== null) {
        let ArrName = [],
        countFiles = '';
        inputFile.addEventListener('change', (e)=>{
            countFiles = '';
            countFiles = inputFile.files.length;
            inputFileList.innerHTML = ""
            ArrName = [];
            if (countFiles > 0) {
                for(let i = 0; i < countFiles; i++) {
                    ArrName.push(inputFile.files[i].name)    
                    let ArrElem = `<div><p>${ArrName[i]}</p><img class="input__file_rem" src="img/close.svg" alt=""><span>Удалить прикрепленный файл</span></div>`
                    inputFileList.insertAdjacentHTML('beforeend', ArrElem)       
                }
            } else {
                inputFileList.innerHTML = ""
            }
        });

        inputFileList.addEventListener('click', (event)=>{
            let fileBuffer = Array.from(inputFile.files);
            let target = event.target,
                inputFileRem = document.querySelectorAll('.input__file_rem'),
                dt = new ClipboardEvent('').clipboardData || new DataTransfer();
            
            for(let i = 0; i < inputFileRem.length; i++) {
                if(target == inputFileRem[i]) {
                    countFiles = countFiles - 1;
                    inputFileList.innerHTML = ""
                    ArrName.splice(i, 1);
                    fileBuffer.splice(i, 1);
                    for (let file of fileBuffer) { dt.items.add(file); }
                    inputFile.files = dt.files;
                    for(let a = 0; a < countFiles; a++) {
                        let ArrElem = `<div><p>${ArrName[a]}</p><img class="input__file_rem" src="img/close.svg" alt=""><span>Удалить прикрепленный файл</span></div>`
                        inputFileList.insertAdjacentHTML('beforeend', ArrElem)       
                    }
                }
            }
        })
    }

    let price = document.querySelector('.price__block'),
        priceWrapper = document.querySelectorAll('.price__item_wrapper'),
        priceItem = document.querySelectorAll('.price__item');

    if (price !== null && window.innerWidth > 1200) {
        priceWrapper.forEach((item,i) =>{
            item.style.width = priceItem[i].getBoundingClientRect().width + 'px'
            item.style.height = priceItem[i].getBoundingClientRect().height + 'px'
        })
        window.addEventListener('scroll',()=>{
            priceItem.forEach((item,i)=>{
                if(priceWrapper[i].getBoundingClientRect().top <=  (i) * 100 + 20 && price.getBoundingClientRect().bottom - item.getBoundingClientRect().height >=  60 + ((i) * 100 + 20)) {
                    item.classList.add('fix')
                    item.style.left =  priceWrapper[i].getBoundingClientRect().left + "px"
                    item.style.top =  (i) * 100 + 20 + "px"
                    item.classList.remove('bottom')
                    item.style.bottom = "auto"
                } else if (priceWrapper[i].getBoundingClientRect().top > (i) * 100 + 20) {
                    item.classList.remove('fix')
                    item.style.left = "auto"
                    item.style.top = "auto"
                    item.style.bottom = "auto"
                    item.classList.remove('bottom')
                } else if (price.getBoundingClientRect().bottom < price.getBoundingClientRect().bottom - item.getBoundingClientRect().height < 60 + ((i) * 100 + 20)) {
                    item.classList.remove('fix')
                    item.style.left = "0"
                    item.style.top = "auto"
                    item.style.bottom = "0"
                    item.classList.add('bottom')
                }
            })
        })
    }

    var swiper = new Swiper(".team__slider", {
        spaceBetween: 40,
        speed: 700,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    let teamNum = document.querySelectorAll('.team__slider_num');

    if(teamNum.length > 0) {
        teamNum.forEach((item, i)=>{
            item.innerHTML = '0'+(i + 1)
        })
    }

    let team = document.querySelector('.team'),
        teamBlock = document.querySelector('.team__block'),
        teamRow = document.querySelector('.team__row'),
        teamItem = document.querySelectorAll('.team__item'),
        teamMove = document.querySelector('.team__move');

    if(teamRow !== null && window.innerWidth > 1200) {
        let x = teamItem[0].getBoundingClientRect().width * teamItem.length + 40 * (teamItem.length)
        team.style.height = (x - teamRow.getBoundingClientRect().width) + teamBlock.getBoundingClientRect().height + 'px'

        window.addEventListener('scroll', ()=>{
            if(team.getBoundingClientRect().top < 0 && teamBlock.getBoundingClientRect().top == 40) {
                teamMove.style.transform = 'translateX(' + team.getBoundingClientRect().top + 'px)'
            } else if (team.getBoundingClientRect().top < 0 && teamBlock.getBoundingClientRect().top <= 39) {
                teamMove.style.transform = 'translateX(' + (x - teamRow.getBoundingClientRect().width - 40) * -1 + 'px)'
            } else if (team.getBoundingClientRect().top > 0) {
                teamMove.style.transform = 'translateX(' + 0 + 'px)'
            }
        })
        if(team.getBoundingClientRect().top < 0 && teamBlock.getBoundingClientRect().top == 40) {
            teamMove.style.transform = 'translateX(' + team.getBoundingClientRect().top + 'px)'
        } else if (team.getBoundingClientRect().top < 0 && teamBlock.getBoundingClientRect().top <= 39) {
            teamMove.style.transform = 'translateX(' + (x - teamRow.getBoundingClientRect().width - 40) * -1 + 'px)'
        } else if (team.getBoundingClientRect().top > 0) {
            teamMove.style.transform = 'translateX(' + 0 + 'px)'
        }
    }

    if(window.innerWidth <= 600) {
        var swiper = new Swiper(".cert__wrapper", {
            spaceBetween: 40,
            slidesPerView: 1,
            speed: 700,
            loop: false,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }

    let certWrapper = document.querySelectorAll('.cert__wrapper'),
        certTab = document.querySelector('.cert__tab'),
        certPoint = document.querySelectorAll('.cert__tab_point');

    if(certTab !== null) {
        function certHide() {
            for(let i = 0; i < certWrapper.length; i++) {
                certPoint[i].classList.remove('active');
                certWrapper[i].classList.remove('active');
            }
        }
        function certShow(a) {
            certPoint[a].classList.add('active');
            certWrapper[a].classList.add('active');
        }

        certTab.addEventListener('click', (event)=>{
            let target = event.target;

            if(target && target.classList.contains('cert__tab_point')) {
                for(let i = 0; i < certPoint.length; i++) {
                    if(target == certPoint[i]) {
                        certHide()
                        certShow(i)
                    }
                }
            }
        })
    }

    let faqFix = document.querySelector('.faq__fix'),
        faqWrapper = document.querySelector('.faq__title'),
        faqTop = document.querySelector('.faq__wrapper'),
        faqBottom = document.querySelector('.faq');

    if(faqFix !== null && window.innerWidth > 1200) {
        faqFix.style.width = faqWrapper.getBoundingClientRect().width + 'px'

        window.addEventListener('scroll', ()=>{
            if(faqTop.getBoundingClientRect().top <=  20 && faqTop.getBoundingClientRect().bottom - faqFix.getBoundingClientRect().height >=  20) {
                faqFix.classList.add('fix')
                faqFix.style.top =  20 + "px"
                faqFix.classList.remove('bottom')
            } else if (faqTop.getBoundingClientRect().top >  20) {
                faqFix.classList.remove('fix')
                faqFix.style.top = "auto"
                faqFix.classList.remove('bottom')
            } else if (faqTop.getBoundingClientRect().bottom - faqFix.getBoundingClientRect().height <  20) {
                faqFix.classList.remove('fix')
                faqFix.style.top = "auto"
                faqFix.classList.add('bottom')
            }
        })
    }

    let faqBtn = document.querySelectorAll('.faq__btn'),
        faqText = document.querySelectorAll('.faq__info');

    if(faqBtn.length > 0) {
        faqBtn.forEach((item,i)=>{
            item.addEventListener('click',()=>{
                item.classList.toggle('active')
            })
        })
    }

    let achievItem = document.querySelectorAll('.achiev__item');
        // achievImg = document.querySelectorAll('.achiev__item img');

    if(achievItem !== null) {
        if(window.innerWidth > 1200) {
            achievItem.forEach((item)=>{
                item.addEventListener('click', ()=>{
                    if(item.classList.contains('active')) {
                        item.classList.remove('active')
                    } else {
                        for(let i = 0; i < achievItem.length; i++) {
                            achievItem[i].classList.remove('active')
                        }
                        item.classList.add('active')
                    }
                })
                item.addEventListener('mouseout', ()=>{
                    item.classList.remove('active')
                })
            })
        }
        else {
            achievItem.forEach((item)=>{
                item.addEventListener('click', ()=>{
                    if(item.classList.contains('active')) {
                        item.classList.remove('active')
                    } else {
                        for(let i = 0; i < achievItem.length; i++) {
                            achievItem[i].classList.remove('active')
                        }
                        item.classList.add('active')
                    }
                })
            })
        }
    }

    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };

    let type = document.querySelector('.type'),
        typeBlock = document.querySelector('.type__block'),
        typeRow = document.querySelector('.type__wrapper'),
        typeItem = document.querySelectorAll('.type__item'),
        typeMove = document.querySelector('.type__row');

    if(type !== null && window.innerWidth > 1200) {
        let x = typeItem[0].getBoundingClientRect().width * typeItem.length + 40 * (typeItem.length)
        type.style.height = (x - typeRow.getBoundingClientRect().width) + typeBlock.getBoundingClientRect().height + 'px'

        window.addEventListener('scroll', ()=>{
            if(type.getBoundingClientRect().top < 0 && typeBlock.getBoundingClientRect().top == 40) {
                typeMove.style.transform = 'translateX(' + type.getBoundingClientRect().top + 'px)'
            } else if (type.getBoundingClientRect().top < 0 && typeBlock.getBoundingClientRect().top <= 39) {
                typeMove.style.transform = 'translateX(' + (x - typeRow.getBoundingClientRect().width - 40) * -1 + 'px)'
            } else if (type.getBoundingClientRect().top > 0) {
                typeMove.style.transform = 'translateX(' + 0 + 'px)'
            }
        })
        if(type.getBoundingClientRect().top < 0 && typeBlock.getBoundingClientRect().top == 40) {
            typeMove.style.transform = 'translateX(' + type.getBoundingClientRect().top + 'px)'
        } else if (type.getBoundingClientRect().top < 0 && typeBlock.getBoundingClientRect().top <= 39) {
            typeMove.style.transform = 'translateX(' + (x - typeRow.getBoundingClientRect().width - 40) * -1 + 'px)'
        } else if (type.getBoundingClientRect().top > 0) {
            typeMove.style.transform = 'translateX(' + 0 + 'px)'
        }
    }

    let articleAside = document.querySelector('.article__aside'),
        articleAsideWrapper = document.querySelector('.article__aside_wrapper'),
        articleAsideArrow = document.querySelector('.article__aside_arrow'),
        articleAsideVal = document.querySelector('.article__aside_val'),
        articleAsideLink = document.querySelectorAll('.article__aside ul a'),
        articleAsideTitle = document.querySelectorAll('.article__aside_title'),
        articleBlock = document.querySelector('.article__block'),
        articleTg = document.querySelector('.article__tg');

    if(articleAside !== null) {
        if(window.innerWidth > 1200) {
            if (articleTg !== null) {
                if(articleBlock.getBoundingClientRect().top <=  -40 && articleBlock.getBoundingClientRect().bottom - articleAside.getBoundingClientRect().height >=  100 + articleTg.getBoundingClientRect().height) {
                    articleAside.classList.add('fix')
                    articleAside.classList.remove('bottom')
                    articleAside.style.left = articleBlock.getBoundingClientRect().right + 'px'
                    articleAside.style.bottom = "auto"
                } else if (articleBlock.getBoundingClientRect().top >  -40) {
                    articleAside.classList.remove('fix')
                    articleAside.style.left = "auto"
                    articleAside.classList.remove('bottom')
                    articleAside.style.bottom = "auto"
                } else if (articleBlock.getBoundingClientRect().bottom - articleAside.getBoundingClientRect().height < 100 + articleTg.getBoundingClientRect().height) {
                    articleAside.classList.remove('fix')
                    articleAside.style.left = "auto"
                    articleAside.classList.add('bottom')
                    articleAside.style.bottom = articleTg.getBoundingClientRect().height + 80 + 'px'
                }
            } else {
                if(articleBlock.getBoundingClientRect().top <=  -40 && articleBlock.getBoundingClientRect().bottom - articleAside.getBoundingClientRect().height >=  20) {
                    articleAside.classList.add('fix')
                    articleAside.classList.remove('bottom')
                    articleAside.style.left = articleBlock.getBoundingClientRect().right + 'px'
                    articleAside.style.bottom = "auto"
                } else if (articleBlock.getBoundingClientRect().top >  -40) {
                    articleAside.classList.remove('fix')
                    articleAside.style.left = "auto"
                    articleAside.classList.remove('bottom')
                    articleAside.style.bottom = "auto"
                } else if (articleBlock.getBoundingClientRect().bottom - articleAside.getBoundingClientRect().height < 20) {
                    articleAside.classList.remove('fix')
                    articleAside.style.left = "auto"
                    articleAside.classList.add('bottom')
                    articleAside.style.bottom = 20 + 'px'
                }
            }

            articleAsideTitle.forEach((item,i)=>{
                if(item.getBoundingClientRect().top < 100 && item.getBoundingClientRect().top > -110 ) {
                    for(let a = 0; a < articleAsideLink.length; a++) {
                        articleAsideLink[a].classList.remove('active')
                    }
                    articleAsideLink[i].classList.add('active')
                    articleAsideVal.innerHTML = '<span>'+ articleAsideCount() +'</span> / '+articleAsideLink.length
                }
            })
        } else {
            articleAsideLink.forEach((item,i)=>{
                item.addEventListener('click', ()=>{
                    for(let a = 0; a < articleAsideLink.length; a++) {
                        articleAsideLink[a].classList.remove('active')
                    }
                    item.classList.add('active')
                    // console.log('sd')
                })
            })
        }

        window.addEventListener('scroll', (event)=>{
            if(window.innerWidth > 1200) {
                if (articleTg !== null) {
                    if(articleBlock.getBoundingClientRect().top <=  -40 && articleBlock.getBoundingClientRect().bottom - articleAside.getBoundingClientRect().height >=  100 + articleTg.getBoundingClientRect().height) {
                        articleAside.classList.add('fix')
                        articleAside.classList.remove('bottom')
                        articleAside.style.left = articleBlock.getBoundingClientRect().right + 'px'
                        articleAside.style.bottom = "auto"
                    } else if (articleBlock.getBoundingClientRect().top >  -40) {
                        articleAside.classList.remove('fix')
                        articleAside.style.left = "auto"
                        articleAside.classList.remove('bottom')
                        articleAside.style.bottom = "auto"
                    } else if (articleBlock.getBoundingClientRect().bottom - articleAside.getBoundingClientRect().height < 100 + articleTg.getBoundingClientRect().height) {
                        articleAside.classList.remove('fix')
                        articleAside.style.left = "auto"
                        articleAside.classList.add('bottom')
                        articleAside.style.bottom = articleTg.getBoundingClientRect().height + 80 + 'px'
                    }
                } else {
                    if(articleBlock.getBoundingClientRect().top <=  20 && articleBlock.getBoundingClientRect().bottom - articleAside.getBoundingClientRect().height >=  20) {
                        articleAside.classList.add('fix')
                        articleAside.classList.remove('bottom')
                        articleAside.style.left = articleBlock.getBoundingClientRect().right + 'px'
                        articleAside.style.bottom = "auto"
                    } else if (articleBlock.getBoundingClientRect().top >  20) {
                        articleAside.classList.remove('fix')
                        articleAside.style.left = "auto"
                        articleAside.classList.remove('bottom')
                        articleAside.style.bottom = "auto"
                    } else if (articleBlock.getBoundingClientRect().bottom - articleAside.getBoundingClientRect().height < 20) {
                        articleAside.classList.remove('fix')
                        articleAside.style.left = "auto"
                        articleAside.classList.add('bottom')
                        articleAside.style.bottom = 0 + 'px'
                    }
                }

                articleAsideTitle.forEach((item,i)=>{
                    if(item.getBoundingClientRect().top < 100 && item.getBoundingClientRect().top > -110 ) {
                        for(let a = 0; a < articleAsideLink.length; a++) {
                            articleAsideLink[a].classList.remove('active')
                        }
                        articleAsideLink[i].classList.add('active')
                        articleAsideVal.innerHTML = '<span>'+ articleAsideCount() +'</span> / '+articleAsideLink.length
                    }
                })
            } 
        })

        articleAsideVal.innerHTML = '<span>'+ articleAsideCount() +'</span> / '+articleAsideLink.length

        function articleAsideCount() {
            for(let i = 0; i < articleAsideLink.length; i++) {
                if(articleAsideLink[i].classList.contains('active')) {
                    return i + 1
                }
            }
        }

        articleAsideArrow.addEventListener('click', ()=>{
            articleAside.classList.toggle('active');
            articleAsideWrapper.style.width = articleAside.getBoundingClientRect().width + 'px'
            articleAsideWrapper.style.height = articleAside.getBoundingClientRect().height + 'px'
        })
    }

    if(articleTg !== null && window.innerWidth > 1200) {
        if(articleBlock.getBoundingClientRect().top <=  -870 && articleBlock.getBoundingClientRect().bottom - articleAside.getBoundingClientRect().height >=  100 + articleTg.getBoundingClientRect().height) {
            articleTg.classList.add('fix')
            articleTg.classList.remove('bottom')
            articleTg.style.left = articleBlock.getBoundingClientRect().right + 'px'
        } else if (articleBlock.getBoundingClientRect().top >  -870) {
            articleTg.classList.remove('fix')
            articleTg.style.left = "auto"
            articleTg.classList.remove('bottom')
        } else if (articleBlock.getBoundingClientRect().bottom - articleAside.getBoundingClientRect().height < 100 + articleTg.getBoundingClientRect().height) {
            articleTg.classList.remove('fix')
            articleTg.style.left = "auto"
            articleTg.classList.add('bottom')
        }
        window.addEventListener('scroll', (event)=>{
            if(articleBlock.getBoundingClientRect().top <=  -870 && articleBlock.getBoundingClientRect().bottom - articleAside.getBoundingClientRect().height >=  100 + articleTg.getBoundingClientRect().height) {
                articleTg.classList.add('fix')
                articleTg.classList.remove('bottom')
                articleTg.style.left = articleBlock.getBoundingClientRect().right + 'px'
            } else if (articleBlock.getBoundingClientRect().top >  -870) {
                articleTg.classList.remove('fix')
                articleTg.style.left = "auto"
                articleTg.classList.remove('bottom')
            } else if (articleBlock.getBoundingClientRect().bottom - articleAside.getBoundingClientRect().height < 100 + articleTg.getBoundingClientRect().height) {
                articleTg.classList.remove('fix')
                articleTg.style.left = "auto"
                articleTg.classList.add('bottom')
            }
        })
    }

    let blogInput = document.querySelector('.blog-page__search input'),
        blogClear = document.querySelector('.blog-page__search span.clear'),
        blogWrapper = document.querySelector('.blog-page__search');

    if(blogInput !== null) {
        if(blogInput.value == '') {
            blogWrapper.classList.remove('active')
        } else {
            blogWrapper.classList.add('active')
        }
        blogInput.addEventListener('input', ()=>{
            if(blogInput.value == '') {
                blogWrapper.classList.remove('active')
            } else {
                blogWrapper.classList.add('active')
            }
        })
        blogClear.addEventListener('click', ()=>{
            blogInput.value = '';
            blogWrapper.classList.remove('active')
        })
    }

    let articleImg = document.querySelectorAll('.article__content img'),
        articlePopup = document.createElement('div');;

    if(articleImg !== null) {
        articlePopup.className = 'modal modal-article active';
        articleImg.forEach((item)=>{
            item.addEventListener('click',()=>{
                articlePopup.innerHTML = `
                                            <div class="modal__overflow modal-artice__overflow"></div>
                                            `+ item.outerHTML +`
                                        `
                document.body.append(articlePopup);
            })
        })
        document.body.addEventListener('click', (event)=>{
            if(event.target.classList.contains('modal-artice__overflow')) {
                articlePopup.remove()
            }
        })
    }

    let caseAside = document.querySelector('.case-list__aside_fix'),
        caseBlock = document.querySelector('.case-list__container'),
        caseBtn = document.querySelector('.case-list__aside_btn'),
        caseClose = document.querySelector('.case-list__aside_close'),
        caseMenu = document.querySelector('.case-list__aside');

    if(caseAside !== null) {
        if(window.innerWidth > 1200) {
            window.addEventListener('scroll', (event)=>{
                if(caseBlock.getBoundingClientRect().top <=  20 && caseBlock.getBoundingClientRect().bottom - caseAside.getBoundingClientRect().height >=  20 ) {
                    caseAside.classList.add('fix')
                    caseAside.classList.remove('bottom')
                    caseAside.style.left = caseBlock.getBoundingClientRect().left + 'px'
                } else if (caseBlock.getBoundingClientRect().top >  -40) {
                    caseAside.classList.remove('fix')
                    caseAside.style.left = "auto"
                    caseAside.classList.remove('bottom')
                } else if (caseBlock.getBoundingClientRect().bottom - caseAside.getBoundingClientRect().height < 20 ) {
                    caseAside.classList.remove('fix')
                    caseAside.style.left = "auto"
                    caseAside.classList.add('bottom')
                }
            })
            if(caseBlock.getBoundingClientRect().top <=  20 && caseBlock.getBoundingClientRect().bottom - caseAside.getBoundingClientRect().height >=  20 ) {
                caseAside.classList.add('fix')
                caseAside.classList.remove('bottom')
                caseAside.style.left = caseBlock.getBoundingClientRect().left + 'px'
            } else if (caseBlock.getBoundingClientRect().top >  -40) {
                caseAside.classList.remove('fix')
                caseAside.style.left = "auto"
                caseAside.classList.remove('bottom')
            } else if (caseBlock.getBoundingClientRect().bottom - caseAside.getBoundingClientRect().height < 20 ) {
                caseAside.classList.remove('fix')
                caseAside.style.left = "auto"
                caseAside.classList.add('bottom')
            }
        } else {
            caseBtn.addEventListener('click', ()=>{
                caseMenu.classList.add('active')
                document.body.classList.add('fix')
            })
            caseClose.addEventListener('click', ()=>{
                caseMenu.classList.remove('active')
                document.body.classList.remove('fix')
            })
        }
    }

}, false);