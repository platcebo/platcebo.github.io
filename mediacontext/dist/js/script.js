
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
                    console.log('df')
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

    let headerVideoPlay = document.querySelector('.header__video_play'),
        headerVideoClose = document.querySelector('.header__video_close'),
        headerVideo = document.querySelector('.header__video_wrapper video'),
        headerVideoWrapper = document.querySelector('.header__video_wrapper'),
        headerVideoMob = document.querySelector('.header__mob');

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

        headerVideoMob.addEventListener('click',()=>{
            headerVideoWrapper.classList.add('active')
            headerVideo.play()
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

    let inputFile = document.querySelector('.input__file'),
        inputFileList = document.querySelector('.input__file_list');

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

            console.log(ArrName)
        })
    }

    let price = document.querySelector('.price'),
        priceBlock = document.querySelector('.price__block'),
        priceItem = document.querySelectorAll('.price__item');

    if (price !== null && window.innerWidth > 1200) {
        let x = price.getBoundingClientRect().top
        price.style.height = priceBlock.getBoundingClientRect().height + 40 + 'px'
        window.addEventListener('scroll',()=>{
            x = price.getBoundingClientRect().top
            if(x < 0 && priceItem[1].getBoundingClientRect().top > 268) {
                priceItem[1].style.marginTop = x + 'px'
                priceBlock.style.top = x * -1 + 'px'
            } else if (x < -1 && priceItem[1].getBoundingClientRect().top < 168 + (i * 100)) {
                priceItem[1].style.marginTop = '-' + priceItem[0].getBoundingClientRect().height - 70 + 'px'
            } else if (x > 0) {
                priceBlock.style.top = 0 + 'px'
            }
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

    if(team !== null && window.innerWidth > 1200) {
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

    let certRow = document.querySelectorAll('.cert__row');

    if(certRow !== null) {
        certRow.forEach((element, i) => {
            let text = element.innerHTML,
                a = 1;
            element.innerHTML = text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text
            setInterval(() => {
                element.style.transform = 'translateX(-' + a +'px)'
                a += 0.6
                if (a >= 5000) {
                    a = 1
                }
            }, 10);
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
        faqWrapper = document.querySelector('.faq__title')
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

}, false);