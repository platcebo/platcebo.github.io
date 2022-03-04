$(document).ready(function(){
	$('.main-container').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><svg width="60" height="58" viewBox="0 0 60 58" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M60 29L55 26.1133L55 31.8868L60 29ZM2 29.5L55.5 29.5L55.5 28.5L2 28.5L2 29.5Z" fill="white"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg width="60" height="58" viewBox="0 0 60 58" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M60 29L55 26.1133L55 31.8868L60 29ZM2 29.5L55.5 29.5L55.5 28.5L2 28.5L2 29.5Z" fill="white"/></svg></button>',
		dots: true,
	});

	$('a[data-slide]').click(function(e) {
		e.preventDefault();
		var slideno = $(this).data('slide');
		$('.main-container').slick('slickGoTo', slideno - 1);
	});

	$("input[name=phone]").mask("7+(999) 999-99-99");

	$('.contact__form').validate({
		rules: {
			name: "required",
			email: {
			  required: true,
			  email: true
			},
			ask: "required",
			phone: "required"
		},
		messages: {
			name: "Это поле обязательно для заполнения",
			email: "Это поле обязательно для заполнения",
			ask: "Это поле обязательно для заполнения",
			phone: "Это поле обязательно для заполнения"
		}
	});

	$('.form__form').validate({
		rules: {
			date: "required",
			city: "required",
			guest: "required",
			area: "required",
			name: "required",
			phone: "required"
		},
		messages: {
			name: "Это поле обязательно для заполнения",
			date: "Это поле обязательно для заполнения",
			city: "Это поле обязательно для заполнения",
			guest: "Это поле обязательно для заполнения",
			area: "Это поле обязательно для заполнения",
			phone: "Это поле обязательно для заполнения"
		}
	});

	$('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val();

            $('form').trigger('reset');
        });
        return false;
    });
});

let humburger = document.querySelectorAll('.nav__humburger'),
	HumburgerSoc = document.querySelectorAll('.nav__soc'),
	humburgerList = document.querySelectorAll('.nav ul');

for (let i = 0; i < humburger.length; i++) {
	humburger[i].addEventListener('click' , ()=>{
		humburger[i].classList.toggle('nav__humburger_active');
		HumburgerSoc[i].classList.toggle('nav__soc_active');
		humburgerList[i].classList.toggle('active');
	});
}

let contactBtn = document.querySelector('.contact__btn'),
	contactClose = document.querySelector('.contact__close'),
	contactForm = document.querySelector('.contact__form');

contactBtn.addEventListener('click', ()=>{
	contactForm.classList.add('contact__form_active');
});

contactClose.addEventListener('click', ()=>{
	contactForm.classList.remove('contact__form_active');
});