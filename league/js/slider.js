

    /*SLIDERS*/
if($( "#slider-range-credit-sum" )){
	$( function() {
	    $( "#slider-range-credit-sum" ).slider({
	      range: "min",
	      value: 150000,
	      min: 1500,
	      max: 300000,
	      step: 50,
	      slide: function( event, ui ) {
	        $( "#amount_sum" ).val( ui.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") );
	    	$( "#range_value__sum" ).text( ui.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") );
	      }
	    });
	    $( "#amount_sum" ).val( $( "#slider-range-credit-sum" ).slider( "value" ).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") );

	 } );
}

if($( "#slider-range-credit-term" )){
	$( function() {
	    $( "#slider-range-credit-term" ).slider({
	      range: "min",
	      value: 145,
	      min: 1,
	      max: 300,
	      slide: function( event, ui ) {
	        $( "#amount_day" ).val( ui.value );
	    	$( "#range_value__day" ).text( ui.value );
	      }
	    });
	    $( "#amount_day" ).val( $( "#slider-range-credit-term" ).slider( "value" ) );
	 } );
}

if($( "#slider-range-credit-vklad" )){
	$( function() {
	    $( "#slider-range-credit-vklad" ).slider({
	      range: "min",
	      value: 150000000,
	      min: 1500,
	      max: 1000000000,
	      step: 50,
	      slide: function( event, ui ) {
	        $( "#amount_vklad" ).val( ui.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") );
	    	$( "#range_value__sum" ).text( ui.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") );
	      }
	    });
	    $( "#amount_vklad" ).val( $( "#slider-range-credit-vklad" ).slider( "value" ).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") );

	 } );
}


if($( "#slider-range-credit-auto-price" )){
	$( function() {
	    $( "#slider-range-credit-auto-price" ).slider({
	      range: "min",
	      value: 150000,
	      min: 50000,
	      max: 5000000,
	      step: 500,
	      slide: function( event, ui ) {
	        $( "#amount_auto-price" ).val( ui.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") );
	    	$( "#range_value__sum" ).text( ui.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") );
	      }
	    });
	    $( "#amount_auto-price" ).val( $( "#slider-range-credit-auto-price" ).slider( "value" ).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") );

	 } );
}

if($( "#slider-range-credit-ipot-price" )){
	$( function() {
	    $( "#slider-range-credit-ipot-price" ).slider({
	      range: "min",
	      value: 150000,
	      min: 50000,
	      max: 100000000,
	      step: 500,
	      slide: function( event, ui ) {
	        $( "#amount_ipot-price" ).val( ui.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") );
	    	$( "#range_value__sum" ).text( ui.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") );
	      }
	    });
	    $( "#amount_ipot-price" ).val( $( "#slider-range-credit-ipot-price" ).slider( "value" ).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") );

	 } );
}


if($( "#slider-range-credit-first-val" )){
	$( function() {
	    $( "#slider-range-credit-first-val" ).slider({
	      range: "min",
	      value: 150000,
	      min: 0,
	      max: 5000000,
	      step: 500,
	      slide: function( event, ui ) {
	        $( "#amount_first-val" ).val( ui.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") );
	    	$( "#range_value__first-val" ).text( ui.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") );
	      }
	    });
	    $( "#amount_first-val" ).val( $( "#slider-range-credit-first-val" ).slider( "value" ).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") );

	 } );
}

if($( "#slider-range-credit-buy-price" )){
	$( function() {
	    $( "#slider-range-credit-buy-price" ).slider({
	      range: "min",
	      value: 150000,
	      min: 1500,
	      max: 1000000,
	      step: 100,
	      slide: function( event, ui ) {
	        $( "#amount_buy-price" ).val( ui.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") );
	    	$( "#range_value__buy-price" ).text( ui.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") );
	      }
	    });
	    $( "#amount_buy-price" ).val( $( "#slider-range-credit-buy-price" ).slider( "value" ).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") );

	 } );
}