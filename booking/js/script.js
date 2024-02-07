$(document).ready(function(){
    $('.popular__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    variableWidth: true
                }
            }
        ]
    });
    $('.hot__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
    });

    $( ".catalog__budget_range" ).slider({
        animate: "slow",
        range: true,    
        values: [ 3000, 5000 ],
        max: 7500,
        min: 2500, 
    });
    $( ".catalog__num_range" ).slider({
        animate: "slow",
        range: "min",    
        value: 8,
        max: 10,
        min: 1, 
        slide : function(event, ui) {	
			$(".catalog__num_result").text( "+ " + ui.value );		
		}
    });
    $( ".catalog__stars_range" ).slider({
        animate: "slow",
        range: true,    
        values: [ 3 , 5 ],
        max: 5,
        min: 1, 
        tick: 1
    });
});

let footerTab = document.querySelectorAll('.footer__list'),
    FooterTabBtn = document.querySelectorAll('.footer__list p');

if(footerTab !== null) {
    for(let i = 0; i < footerTab.length; i++) {
        FooterTabBtn[i].addEventListener('click', ()=>{
            footerTab[i].classList.toggle('active')
        })
    }
}

let navMore = document.querySelector('.nav__more'),
    navLink = document.querySelector('.nav__link');

if(navMore !== null) {
    navMore.addEventListener('click', ()=>{
        navLink.classList.toggle('nav__link_active')
    })
}

let filterBtn = document.querySelector('.catalog__filter h3'),
    filterWrapper = document.querySelector('.catalog__filter_wrapper');

if(filterBtn !== null) {
    filterBtn.addEventListener('click', ()=>{
        filterWrapper.classList.toggle('active');
    })
}

let descrPoint = document.querySelectorAll('.descr__wrapper_point'),
    descrWrapper = document.querySelectorAll('.descr__tab'),
    descrTab = document.querySelector('.descr__wrapper_tab');

if(descrTab !== null) {
    function descrHide(a) {
        for (let i = a; i < descrPoint.length; i++) {
            descrPoint[i].classList.remove('active');
            descrWrapper[i].classList.remove('descr__tab_active');
        }
    }

    descrHide(1);

    function descrShow(b) {
        if (!descrPoint[b].classList.contains('active')) {
            descrPoint[b].classList.add('active');
            descrWrapper[b].classList.add('descr__tab_active');
        }
    }

    descrTab.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('descr__wrapper_point')) {
            for(let i = 0; i < descrPoint.length; i++) {
                if (target == descrPoint[i]) {
                    descrHide(0);
                    descrShow(i);
                    break;
                }
            }
        }

    });

}

let descrFilterBtn = document.querySelector('.descr__filter h3'),
    descrFilterWrapper = document.querySelector('.descr__filter_wrapper');

if(descrFilterBtn !== null) {
    descrFilterBtn.addEventListener('click', ()=>{
        descrFilterWrapper.classList.toggle('active');
    })
}