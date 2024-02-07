jQuery(document).ready(function() {
	$("input[name=phone]").mask("+7 (999) 999-99-99");

	let quizeScrollDebt = document.querySelector('.debt .quize__scroll_block'),
		quizeLineDebt = document.querySelector('.debt .quize__line span'),
		quizeTextDebt = document.querySelector('.debt .quize__num'),
		quizePageDebt = document.querySelectorAll('.debt .quize__page'),
		quizeNumDebt = 1
	function quizeLineMoveDebt(a) {
		quizeLineDebt.style.width = 100 / quizePageDebt.length * a + "%"
	} 
	function quizeScrollMoveDebt(a) {
		a = a - 1
		quizeScrollDebt.style.transform = "translateX(-" + 100 * a + "%)"
	}
	function quizeTextChangeDebt(a) {
		quizeTextDebt.innerHTML = "Вопрос " + a + "	из " + quizePageDebt.length
	}
	if (quizeScrollDebt !== null) {
		if(quizeTextDebt !== null) {
			quizeLineMoveDebt(quizeNumDebt)
			quizeTextChangeDebt(1)
		}
		quizeScrollMoveDebt(quizeNumDebt)
	
		quizeScrollDebt.addEventListener('click', (evt)=>{
			let target = evt.target;
			if(target.classList.contains('quize__next')) {
				evt.preventDefault()
				quizeNumDebt = quizeNumDebt + 1
				if(quizeTextDebt !== null) {
					quizeLineMoveDebt(quizeNumDebt)
					if(quizeNumDebt < quizePageDebt.length) {
						quizeTextChangeDebt(quizeNumDebt)
					} else {
						quizeTextDebt.innerHTML = "Последний этап"
					}
				}
				quizeScrollMoveDebt(quizeNumDebt)
			} else if(target.classList.contains('quize__back')) {
				evt.preventDefault()
				quizeNumDebt = quizeNumDebt - 1
				if(quizeTextDebt !== null) {
					quizeLineMoveDebt(quizeNumDebt)
					quizeTextChangeDebt(quizeNumDebt)
				}
				quizeScrollMoveDebt(quizeNumDebt)
			}
		});
	}

	let quizeScroll = document.querySelector('.header-lend .quize__scroll_block'),
		quizePage = document.querySelectorAll('.header-lend .quize__page'),
		quizeNum = 1
	function quizeScrollMove(a) {
		a = a - 1
		quizeScroll.style.transform = "translateX(-" + 100 * a + "%)"
	}
	if(quizeScroll !== null) {
		quizeScrollMove(quizeNum)

		quizeScroll.addEventListener('click', (evt)=>{
			let target = evt.target;
			if(target.classList.contains('quize__next')) {
				evt.preventDefault()
				quizeNum = quizeNum + 1
				quizeScrollMove(quizeNum)
			} else if(target.classList.contains('quize__back')) {
				evt.preventDefault()
				quizeNum = quizeNum - 1
				quizeScrollMove(quizeNum)
			}
		})
	}
	
	if ($('.select-city').width() >= '120') {
		$('.head__search-form').css('width', '218px');
		$('.head__search-form').css('margin-right', '9px');
	}else{
		$('.head__search-form').css('width', '344px')
	}

	$(".show-hide").click(function(e){
		e.preventDefault();
		var $this = $(this);
		if (!$this.hasClass('hide-list'))
		{
			$this.siblings('.bullets').show(function(e) {
				var reducedHeight = $(this).height();
				$(this).css('height', 'auto');
				var fullHeight = $(this).height();
				$(this).height(reducedHeight);
				$(this).animate({height: fullHeight}, 300);
			}); 
			$this.html('Меньше');
			$this.addClass('hide-list');
			$this.removeClass('show');
		}else{
			$this.siblings('.bullets').show(function(e) {
				var reducedHeight = $(this).height();
				$(this).css('height', '300px');
				var fullHeight = $(this).height();
				$(this).height(reducedHeight);
				$(this).animate({height: fullHeight}, 300);
			}); 
			$this.html('Больше');
			$this.removeClass('hide-list');
			$this.addClass('show');
		}
	});

	var fHeight = $(".show__dop-filter").siblings('.search-credit__form').height();
	$(".show__dop-filter").click(function(e){
		e.preventDefault();
		var $this = $(this);
		if (!$this.hasClass('hide-filter'))
		{
			$this.siblings('.search-credit__form').show(function(e) {
				var reducedHeight = $(this).height();
				$(this).css('height', 'auto');
				$(this).css('overflow', 'visible');
				var fullHeight = $(this).height();
				$(this).height(reducedHeight);
				$(this).animate({height: fullHeight}, 300);
			}); 
			$this.html('Свернуть');
			$this.addClass('hide-filter');
			$this.removeClass('show__filter');
		}else{
			$this.siblings('.search-credit__form').show(function(e) {
				var reducedHeight = $(this).height();
				$(this).css('height', fHeight);
				$(this).css('overflow', 'hidden');
				var fullHeight = $(this).height();
				$(this).height(reducedHeight);
				$(this).animate({height: fullHeight}, 300);
			}); 
			$this.html('Дополнительно');
			$this.removeClass('hide-filter');
			$this.addClass('show__filter');
		}
	});

$(".show__more").click(function(e){
		e.preventDefault();
		var $this = $(this);
		if (!$this.hasClass('hide-filter'))
		{
			$this.siblings('.search-credit__form').show(function(e) {
				var reducedHeight = $(this).height();
				$(this).css('height', 'auto');
				$(this).css('overflow', 'visible');
				$(this).find('.credit__smth-important').css('opacity', '1');
				var fullHeight = $(this).height();
				$(this).height(reducedHeight);
				$(this).animate({height: fullHeight}, 300);
			}); 
			$this.html('Свернуть');
			$this.addClass('hide-filter');
			$this.removeClass('show__filter');
		}else{
			$this.siblings('.search-credit__form').show(function(e) {
				var reducedHeight = $(this).height();
				$(this).css('height', '132px');
				$(this).css('overflow', 'visible');
				$(this).find('.credit__smth-important').css('opacity', '0');
				var fullHeight = $(this).height();
				$(this).height(reducedHeight);
				$(this).animate({height: fullHeight}, 300);
			}); 
			$this.html('Дополнительно');
			$this.removeClass('hide-filter');
			$this.addClass('show__filter');
		}
	});
	var dop_btn = $(".show__dop-result");
	var lng = $(dop_btn).length;

	for (var i = 0; i < lng; i++) {
		var el = $(dop_btn)[i];

		$(el).click(function(e){
		e.preventDefault();
		
		if (!$(this).hasClass('hide-filter'))
		{
			$(this).next('.result__item__dop-info').slideDown(300, function(){
				$(this).next('.result__item__dop-info').css('display', 'flex');
			});
			$(this).html('Свернуть');
			$(this).addClass('hide-filter');
			$(this).removeClass('show__filter');
		}else{
			$(this).next('.result__item__dop-info').slideUp(300, function(){
				$(this).next('.result__item__dop-info').css('display', 'none');
			});
			$(this).html('Дополнительно');
			$(this).removeClass('hide-filter');
			$(this).addClass('show__filter');
		}
	})
	}
	
		$(".show__details").click(function(e){
		e.preventDefault();
		var $this = $(this);
		if (!$this.hasClass('hide-filter'))
		{
			$(this).siblings('.online-credit__benefits').slideDown(300, function(){
				$(this).siblings('.online-credit__benefits').css('display', 'block');
			});
			$(this).html('Свернуть');
			$(this).addClass('hide-filter');
			$(this).removeClass('show__filter');
		}else{
			$(this).siblings('.online-credit__benefits').slideUp(300, function(){
				$(this).siblings('.online-credit__benefits').css('display', 'none');
			});
			$(this).html('Дополнительно');
			$(this).removeClass('hide-filter');
			$(this).addClass('show__filter');
		}
	});
	
	$('#footer').load('../footer.html');

	  /*COMMENT COUNT*/

	  if ($('.minus_r') || $('.plus_r')) {
	   	var min = $('.minus_r');
	    var plus = $('.plus_r');

	    for (var i = 0; i < min.length; i++) {
	        var p_el = $(plus)[i];
	        var m_el = $(min)[i];

	        $(m_el).click(function () {
	            var $input = $(this).prev('.comment__reaction__numb');
	            var count = parseInt($input.val()) - 1;
	            count = count < 1 ? 1 : count;
	            $input.val(count);
	            $input.change();
	            return false;
	        });
	        $(p_el).click(function () {
	            var $input = $(this).parent('.comment__reaction').find('.comment__reaction__numb');
	            $input.val(parseInt($input.val()) + 1);
	            $input.change();
	            return false;
	        });
	    }

	    if ($('.article__body').height() >= 2000) {
	        $('.top-btm__nav').css('display', 'block');
	    }else{
	        $('.top-btm__nav').css('display', 'none');
	    }
        $(window).scroll(function () { 
            if ($(this).scrollTop() > 0) $('.goto__top').removeClass('intop');
            else $('.goto__top').addClass('intop');
        });

        $('.goto__top').click(function (e) {
            e.preventDefault();
            $('body,html').animate({scrollTop: 0}, 1000);
        });

        $('.goto__bottom').click(function (e) {
            e.preventDefault();
            var top = $('.article__comments__form').offset().top;
            $('body,html').animate({scrollTop: top}, 1000);
        });
    }

if ($('select').length) {
	$(function() {
	  $('select').selectric();
	});
}

let tab = document.querySelectorAll('.variant__tab_point'),
	info = document.querySelector('.variant__tab_list'),
	tabContent = document.querySelectorAll('.variant__tab_wrapper');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('variant__tab_wrapper_active');
			tab[i].classList.remove('variant__tab_point_active');
        }
    }

    function showTabContent(b) {
        if (!tabContent[b].classList.contains('variant__tab_wrapper_active')) {
            tabContent[b].classList.add('variant__tab_wrapper_active');
			tab[b].classList.add('variant__tab_point_active');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('variant__tab_point')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });

$(function() {
	// Owl Carousel
	var owl = $(".conduct .owl-carousel");
	owl.owlCarousel({
		items: 1,
		nav: false,
		margin: 23,
		dots: true,
		responsive:{
			426:{
				items: 2,
				nav: false,
				margin: 23,
			},
			1100:{
				items: 4,
				margin: 24,
				dots: false,
				nav: true,
			}
		}	
	});
});
$(function() {
	// Owl Carousel
	var owl = $(".comment .owl-carousel");
	owl.owlCarousel({
		items: 1,
		nav: false,
		margin: 23,
		dots: true,
		responsive:{
			426:{
				items: 1,
				nav: false,
				margin: 23,
			},
			601:{
				items: 2,
				nav: false,
				margin: 23,
			},
			1100:{
				items: 3,
				margin: 23,
				dots: false,
				nav: true,
			}
		}	
	});
});

if ($(window).width() < 501) {
	$(function() {
		// Owl Carousel
		var owl = $(".team .owl-carousel");
		owl.owlCarousel({
			items: 1,
			nav: false,
			margin: 23,
			dots: true
		});
	});
}

let commentBtn = document.querySelectorAll('.comment__play'),
	commentPopup = document.querySelector('.comment__popup'),
	// commentVideo = document.querySelectorAll('.comment__popup iframe'),
	commentOverflow = document.querySelector('.comment__overflow');

for(let i = 0; i < commentBtn.length; i++) {
	commentBtn[i].addEventListener('click', ()=>{
		commentPopup.classList.add('comment__popup_active');
	});
	commentOverflow.addEventListener('click', ()=>{
		commentPopup.classList.remove('comment__popup_active');
		// commentPopup.removeChild('iframe');
	});
}

let tabBtn = document.querySelectorAll('.quest__btn'),
	tabWrapper = document.querySelectorAll('.quest__wrapper');

for(let i = 0; i < tabBtn.length; i++) {
	tabBtn[i].addEventListener('click', ()=>{
		tabWrapper[i].classList.toggle('quest__wrapper_active');
		tabBtn[i].classList.toggle('quest__btn_active');
	});
}

let modalBtn = document.querySelectorAll('.modal-lend__btn'),
	modal = document.querySelectorAll('.modal-lend'),
	modalOverflow = document.querySelectorAll('.modal-lend__overflow');

for(let i = 0; i < modal.length; i++) {
	modalBtn[i].addEventListener('click',()=>{
		modal[i].classList.add('modal-lend__active');
	});
	modalOverflow[i].addEventListener('click',()=>{
		modal[i].classList.remove('modal-lend__active');
	});
}

let lawyersModal = document.querySelector('.lawyers-modal'),
	lawyersImg = document.querySelector('.lawyers__zoom'),
	lawyersOverflow = document.querySelector('.lawyers-modal__overflow');

lawyersImg.addEventListener('click', ()=>{
	lawyersModal.classList.add('lawyers-modal__active');
});
lawyersOverflow.addEventListener('click', ()=>{
	lawyersModal.classList.remove('lawyers-modal__active');
});

let conductModal = document.querySelectorAll('.conduct__modal'),
	conductImg = document.querySelectorAll('.conduct__wrapper a'),
	conductOverflow = document.querySelectorAll('.conduct__overflow'),
	conductPicture = document.querySelectorAll('.conduct__item img');

for( let i = 0; i < conductImg.length; i++) {
	// conductImg[i].addEventListener('click', (e)=>{
	// 	conductModal[i].classList.add('conduct__modal_active');
	// 	e.preventDefault();
	// });
	conductPicture[i].addEventListener('click', (e)=>{
		conductModal[i].classList.add('conduct__modal_active');
	});
	conductOverflow[i].addEventListener('click', ()=>{
		conductModal[i].classList.remove('conduct__modal_active');
	});
}


$(function(){
    $('.comment__overflow').click(function(){      
        $('.comment__popup iframe').attr('src', $('.comment__popup iframe').attr('src'));
    });
});
});

var stickyEl = new Sticksy('.js-sticky-widget', {
	topSpacing: 60,
})
// you can handle state changing
stickyEl.onStateChanged = function (state) {
    if(state === 'fixed') {
        stickyEl.nodeRef.classList.add('widget--sticky')
    } else {
        stickyEl.nodeRef.classList.remove('widget--sticky')
    }
}

// let asidePoint = document.querySelector('#article-new__intro');

// window.addEventListener('scroll', ()=>{
// 	if(asidePoint.getBoundingClientRect().top <= 0) {
// 		stickyEl.nodeRef.classList.add('active')
// 	}
// })
// if(asidePoint.getBoundingClientRect().top <= 0) {
// 	stickyEl.nodeRef.classList.add('active')
// }

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
