jQuery(document).ready(function() {
	
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
});

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
		responsive:{
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

let commentBtn = document.querySelectorAll('.comment__play'),
	commentPopup = document.querySelector('.comment__popup'),
	commentOverflow = document.querySelector('.comment__overflow');

for(let i = 0; i < commentBtn.length; i++) {
	commentBtn[i].addEventListener('click', ()=>{
		commentPopup.classList.add('comment__popup_active');
	});
	commentOverflow.addEventListener('click', ()=>{
		commentPopup.classList.remove('comment__popup_active');
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

$("input[name=phone]").mask("+7 (999) 999-99-99");