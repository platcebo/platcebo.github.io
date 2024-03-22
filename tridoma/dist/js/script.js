window.addEventListener("DOMContentLoaded", function() {
    let prevOver = document.querySelector('.prev-modal__overflow'),
        prevBtn = document.querySelector('.prev-modal__call'),
        prevClose = document.querySelector('.prev-modal__close'),
        prevModal = document.querySelector('.prev-modal');

    if(prevModal !== null) {
        prevOver.addEventListener('click', ()=>{
            prevModal.classList.remove('prev-modal__active')
            document.body.classList.remove('fix')
        })
        prevClose.addEventListener('click', ()=>{
            prevModal.classList.remove('prev-modal__active')
            document.body.classList.remove('fix')
        })
        prevBtn.addEventListener('click', ()=>{
            prevModal.classList.add('prev-modal__active')
            document.body.classList.add('fix')
        })
    }

    let thanksModal = document.querySelector('.thanks-modal'),
        thanksModalClose = document.querySelector('.thanks-modal__close');

    function thanksModalShow(){
        thanksModal.classList.add('active');
        prevModal.classList.remove('prev-modal__active')
    }
    if(thanksModalClose !== null) {
        thanksModalClose.addEventListener('click', ()=>{
            thanksModal.classList.remove('active');
            document.body.classList.remove('fix')
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
  
    let formPrev = document.querySelector('.prev-modal__form');

    if(formPrev !== null) {
        formPrev.addEventListener('submit', formPrevSend);
    }

    async function formPrevSend(event) {
        event.preventDefault()
        let error = formVal(formPrev);

        if (error == 0) {
            var form_data = $(this).serialize(); // Собираем все данные из формы
            $.ajax({
                method: "post", // Метод отправки
                url: "php/send.php", // Путь до php файла отправителя
                data: form_data,
                success: function () {
                    // Код в этом блоке выполняется при успешной отправке сообщения
                    thanksModalShow()
                    formPrev.reset()
                },
                error: function () {
                    // Код в этом блоке выполняется при ошибке
                    alert('ошибка')
                },
            });
        } else {
            return
        }
    }

    function formVal(form) {
        let error = 0,
            formReq = document.querySelectorAll('._req');

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
        input.parentElement.classList.remove('error')
    }
    function formEmail(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\--]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});