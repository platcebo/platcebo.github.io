
$(document).ready(function(){
   
    
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mt-mobile');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    
});





});



$(document).ready(function(){

	if ($('#language-selected').is(':empty')){
	  $( ".menu li" ).each(function() {
	    if($(this).attr('class') == 'selected'){
	    	var selected = $(this).find('.lang-code').html().toUpperCase();
	        console.log($(this).find('.lang-code').html().toUpperCase());
	        $("#language-selected").html(selected);
	    }
	  });
	}

	//The next following line displays and set selected language
	  $(".dropdownbox").click(function(){
		$(".menu").toggleClass("showMenu");
		  $(".menu > li").click(function(){
		    var selected = $(this).find('.lang-code').html().toUpperCase();
		    console.log($(this).find('.lang-code').html().toUpperCase());
		    $("#language-selected").html(selected);
		    $(".menu").removeClass("showMenu");	        
	      });
	  });
	
	  //Close language select box if nothing is selected
	  $("#dropdown-wrapper").mouseleave(function(){
		  $(".menu").removeClass("showMenu");
	  });

});


$(document).ready(function(){

	if ($('#language-selected2').is(':empty')){
	  $( ".menu2 li" ).each(function() {
	    if($(this).attr('class') == 'selected2'){
	    	var selected = $(this).find('.lang-code2').html().toUpperCase();
	        console.log($(this).find('.lang-code2').html().toUpperCase());
	        $("#language-selected2").html(selected);
	    }
	  });
	}

	//The next following line displays and set selected language
	  $(".dropdownbox2").click(function(){
		$(".menu2").toggleClass("showMenu2");
		  $(".menu2 > li").click(function(){
		    var selected = $(this).find('.lang-code2').html().toUpperCase();
		    console.log($(this).find('.lang-code2').html().toUpperCase());
		    $("#language-selected2").html(selected);
		    $(".menu2").removeClass("showMenu2");	        
	      });
	  });
	
	  //Close language select box if nothing is selected
	  $("#dropdown-wrapper2").mouseleave(function(){
		  $(".menu2").removeClass("showMenu2");
	  });

});