/*RAITING*/
if ($('.rating__button')) {
	$('.rating__button').on('click', function(e){
		var $t = $(this), // the clicked star
				$ct = $t.parent(); // the stars container
		
		// add .is--active to the user selected star 
		$t.siblings().removeClass('is--active').end().toggleClass('is--active');
		// add .has--rating to the rating container, if there's a star selected. remove it if there's no star selected.
		$ct.find('.rating__button.is--active').length ? $ct.addClass('has--rating') : $ct.removeClass('has--rating');
	});

	var star = $('input[type="radio"]');
	var lng = star.length;

	for (var i = 0; i < lng; i++) {
		var el = star[i];

		$(el).on('click', function(){
			$(this).parents('.raiting__wrap').find('.raiting__mark').text($(this).val());
		});
	}
	
	function charCount(text){
	  return text.replace(/[\.,!?; ]*/g, '').length;
	}
	function g(el){
		return document.getElementById(el);
	}

	g('otziv__textarea').onkeyup=function(){
	g('char-num').innerHTML=charCount(this.value);
	}
}
    