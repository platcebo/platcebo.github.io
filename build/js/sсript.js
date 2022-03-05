$(document).ready(function() {    
    $('select').niceSelect();

    $('.tape__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/tape_slider_next.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/tape_slider_next.svg" alt="arrow"></button>',
    });

    $('.route-slider__wrapper').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/tape_slider_next.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/tape_slider_next.svg" alt="arrow"></button>',
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    infinite: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    prevArrow: '<button type="button" class="slick-prev"><img src="img/tape_slider_next.svg" alt="arrow"></button>',
                    nextArrow: '<button type="button" class="slick-next"><img src="img/tape_slider_next.svg" alt="arrow"></button>',
                }
            },
            {
                breakpoint: 640,
                settings: {
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: '<button type="button" class="slick-prev"><img src="img/tape_slider_next.svg" alt="arrow"></button>',
                    nextArrow: '<button type="button" class="slick-next"><img src="img/tape_slider_next.svg" alt="arrow"></button>',
                }
            }
        ]
    });

    $('.tour-slider__slider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/tape_slider_next.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/tape_slider_next.svg" alt="arrow"></button>',
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    infinite: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    prevArrow: '<button type="button" class="slick-prev"><img src="img/tape_slider_next.svg" alt="arrow"></button>',
                    nextArrow: '<button type="button" class="slick-next"><img src="img/tape_slider_next.svg" alt="arrow"></button>',
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    infinite: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    prevArrow: '<button type="button" class="slick-prev"><img src="img/tape_slider_next.svg" alt="arrow"></button>',
                    nextArrow: '<button type="button" class="slick-next"><img src="img/tape_slider_next.svg" alt="arrow"></button>',
                }
            },
            {
                breakpoint: 769,
                settings: {
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: '<button type="button" class="slick-prev"><img src="img/tape_slider_next.svg" alt="arrow"></button>',
                    nextArrow: '<button type="button" class="slick-next"><img src="img/tape_slider_next.svg" alt="arrow"></button>',
                }
            },
        ]
    });

    (function($) {
        $(function() {
            $('.programm-day__wrapper ul').on('click', 'li:not(.active)', function() {
                $(this)
                    .addClass('active').siblings().removeClass('active')
                    .closest('div.programm-day__wrapper').find('div.programm-day__tab').removeClass('active').eq($(this).index()).addClass('active');
            });
        });
    })(jQuery);

    (function($) {
        $(function() {
            $('.guide__wrapper ul').on('click', 'li:not(.active)', function() {
                $(this)
                    .addClass('active').siblings().removeClass('active')
                    .closest('div.guide__wrapper').find('div.guide__tab').removeClass('active').eq($(this).index()).addClass('active');
            });
        });
    })(jQuery);

    $(function(){
        if ( $(window).width() < 601 ) {
            $('.adventure__wrapper').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                centerPadding: '100px',
                centerMode: true,
                responsive: [
                    {
                        breakpoint: 426,
                        settings: {
                            infinite: true,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: false,
                            arrows: false,
                            centerPadding: '50px',
                            centerMode: true,
                        }
                    }
                ]
            });
        }
    });

    jQuery('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
      
        jQuery.get(imgURL, function (data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');
      
        // Add replaced image's ID to the new SVG
        if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }
      
        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');
      
        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
        }
        // Replace image with new SVG
        $img.replaceWith($svg);
        }, 'xml');
    });
    
    $('.header__input_wrapper li').click(function(e){
        $('.header__input').val( $(this).text() );
        pointWrapper.style.display = 'none';
    });

	$('.header__input_nav_wrapper li').click(function(e){
        $('.header__input_nav').val( $(this).text() );
        pointWrapperNav.style.display = 'none';
    });

    $(function(){
        if ( $(window).width() > 769 ) {
            const dropFilter = document.querySelectorAll('.search-filter__dropdown_wrapper'),
                dropFilterWrapper = document.querySelectorAll('.search-filter__dropdown'),
                dropFilterWrapperActive = document.querySelector('.search-filter__dropdown_show'),
                dropFilterMenu = document.querySelectorAll('.menu'),
                dropFilterSave = document.querySelectorAll('.menu__save');

            for (let i = 0; i < dropFilter.length; i++) {
                dropFilterSave[i].addEventListener('click', (e)=> {
                    e.preventDefault();
                    dropFilterMenu[i].style.display = 'none';
                    console.log('save');
                    dropFilter[i].classList.remove('search-filter__dropdown_show');
                });
                
                dropFilter[i].addEventListener('click', function() {
                    if (dropFilterWrapper[i].classList.contains('search-filter__dropdown_show')) {
                        dropFilterMenu[i].style.display = 'none';
                        console.log('скрытие');
                        dropFilterWrapper[i].classList.remove('search-filter__dropdown_show');
                    } else {
                        dropFilterMenu[i].style.display = 'block';
                        console.log('открыть');
                        dropFilterWrapper[i].classList.add('search-filter__dropdown_show');
                    }
                });

                document.addEventListener('mouseup', function(Event) {
                    if (! dropFilterWrapper[i].contains(Event.target)) {
                        dropFilterMenu[i].style.display = 'none';
                        console.log('скрытие');
                        dropFilterWrapper[i].classList.remove('search-filter__dropdown_show');
                    }
                });        
            }

            $(window).scroll(function () {
                $(window).scroll(function(){
                    if($(window).scrollTop()>270){
                        $('.nav-search').fadeIn(200);
                    }else{
                        $('.nav-search').fadeOut(200);
                    }
                });
            });

            let mapmapmap = document.querySelector('.map__map_wrapper');

            if (mapmapmap !== null) {
                (function(){
                    var a = document.querySelector('.map__map_wrapper'), b = null, P = 64;  // если ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента. Может быть отрицательным числом
                    window.addEventListener('scroll', Ascroll, false);
                    document.body.addEventListener('scroll', Ascroll, false);
                    function Ascroll() {
                      if (b == null) {
                        var Sa = getComputedStyle(a, ''), s = '';
                        for (var i = 0; i < Sa.length; i++) {
                          if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                            s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; ';
                          }
                        }
                        b = document.createElement('div');
                        b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
                        a.insertBefore(b, a.firstChild);
                        var l = a.childNodes.length;
                        for (var i = 1; i < l; i++) {
                          b.appendChild(a.childNodes[1]);
                        }
                        a.style.height = b.getBoundingClientRect().height + 'px';
                        a.style.padding = '0';
                        a.style.border = '0';
                      }
                      var Ra = a.getBoundingClientRect(),
                          R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('.ceo').getBoundingClientRect().top + 0);  // селектор блока, при достижении верхнего края которого нужно открепить прилипающий элемент;  Math.round() только для IE; если ноль заменить на число, то блок будет прилипать до того, как нижний край элемента дойдёт до футера
                      if ((Ra.top - P) <= 0) {
                        if ((Ra.top - P) <= R) {
                          b.className = 'stop';
                          b.style.top = - R +'px';
                        } else {
                          b.className = 'sticky';
                          b.style.top = P + 'px';
                        }
                      } else {
                        b.className = '';
                        b.style.top = '';
                      }
                      window.addEventListener('resize', function() {
                        a.children[0].style.width = getComputedStyle(a, '').width;
                      }, false);
                    }
                })();
                
                (function(){
                    var a = document.querySelector('.map__close_wrapper'), b = null, P = 152;  // если ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента. Может быть отрицательным числом
                    window.addEventListener('scroll', Ascroll, false);
                    document.body.addEventListener('scroll', Ascroll, false);
                    function Ascroll() {
                      if (b == null) {
                        var Sa = getComputedStyle(a, ''), s = '';
                        for (var i = 0; i < Sa.length; i++) {
                          if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                            s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; ';
                          }
                        }
                        b = document.createElement('div');
                        b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
                        a.insertBefore(b, a.firstChild);
                        var l = a.childNodes.length;
                        for (var i = 1; i < l; i++) {
                          b.appendChild(a.childNodes[1]);
                        }
                        a.style.height = b.getBoundingClientRect().height + 'px';
                        a.style.padding = '0';
                        a.style.border = '0';
                      }
                      var Ra = a.getBoundingClientRect(),
                          R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('.ceo').getBoundingClientRect().top + 200);  // селектор блока, при достижении верхнего края которого нужно открепить прилипающий элемент;  Math.round() только для IE; если ноль заменить на число, то блок будет прилипать до того, как нижний край элемента дойдёт до футера
                      if ((Ra.top - P) <= 0) {
                        if ((Ra.top - P) <= R) {
                          b.className = 'stop';
                          b.style.top = - R +'px';
                        } else {
                          b.className = 'sticky';
                          b.style.top = P + 'px';
                        }
                      } else {
                        b.className = '';
                        b.style.top = '';
                      }
                      window.addEventListener('resize', function() {
                        a.children[0].style.width = getComputedStyle(a, '').width;
                      }, false);
                    }
                })();
            }
        }
    });

    $("#polzunok").slider({
		animate: "slow",
		range: true,	
		values: [ 1, 50 ],
        max: 50,
        min: 1,
		slide : function(event, ui) {	
			$("#result-polzunok_1").text(ui.values[ 0 ]);	
            $("#result-polzunok_2").text(ui.values[ 1 ]);	
		}
	});
});

let headerFormOpacity = document.querySelector('.header__form');

window.onload = function () {
    headerFormOpacity.style.opacity = "1";
}

let accordBtn = document.querySelectorAll('.accord__btn'),
    accordtext = document.querySelectorAll('.accord__text');

if(accordBtn !== null) {
    for (let i = 0; i < accordBtn.length; i++) {
        accordBtn[i].addEventListener('click', ()=> {
            accordtext[i].classList.toggle('accord__text_active');
            accordBtn[i].classList.toggle('accord__btn_active');
        });
    }
}

let commentMore = document.querySelectorAll('.comment__func'),
    commentText = document.querySelectorAll('.comment__comment');

if(commentMore !== null) {
    for (let i = 0; i < commentMore.length; i++) {
        commentMore[i].addEventListener('click', function (e) {
            e.preventDefault();
            if (commentMore[i].textContent == 'Читать далее') {
                commentText[i].style.height = 'auto';
                commentMore[i].textContent = 'Свернуть';
            } else {
                commentText[i].style.height = commentText[i].clientHeight / 2 + 'px';
                commentMore[i].textContent = 'Читать далее';
            }
        });
    }
}

let collageOpen = document.querySelectorAll('.collage__open'),
    collageSlider = document.querySelector('.collage-slider'),
    collageClose = document.querySelector('.collage-slider__overflow');

if (collageOpen !== null) {
    for (let i = 0; i < collageOpen.length; i++) {
        collageOpen[i].addEventListener('click', ()=> {
            collageSlider.classList.add('collage-slider__active');
            document.body.style.overflow = 'hidden';
        });
    }
}

if (collageClose !== null) {
    collageClose.addEventListener('click', ()=> {
        collageSlider.classList.remove('collage-slider__active');
        document.body.style.overflow = 'visible';
    });
}

let setHeader = document.querySelector('.set-header__open a'),
    SetHeaderText = document.querySelector('.set-header__text');

if(setHeader !== null) {
    setHeader.addEventListener('click', function(e) {
        e.preventDefault();
        if (SetHeaderText.style.maxHeight !== 'none') {
            SetHeaderText.style.maxHeight = 'none';
            setHeader.textContent = 'Скрыть';
        } else {
            SetHeaderText.style.maxHeight = '108px';
            setHeader.textContent = 'Читать полностью';
            console.log('figjfigj');
        }
    });
}

let collageWrapper = document.querySelector('.collage__wrapper'),
    collageItem = document.querySelectorAll('.collage__item');

if(collageItem.length == 5) {
    collageWrapper.classList.add('collage__wrapper_five');
}

if(collageItem.length == 4) {
    collageWrapper.classList.add('collage__wrapper_four');
    collageWrapper.classList.add('collage__wrapper_three');
}

if(collageItem.length == 3) {
    collageWrapper.classList.add('collage__wrapper_three');
}

if(collageItem.length == 2) {
    collageWrapper.classList.add('collage__wrapper_two');
}

if(collageItem.length == 1) {
    collageWrapper.classList.add('collage__wrapper_one');
}

let     input = document.querySelector('.header__input'),
        point = document.querySelector('header__input_wrapper li'),
        pointWrapper = document.querySelector('.header__input_wrapper ul'),
        inputWrapper = document.querySelector('.header__input_wrapper');

if (input !== null) {
    input.addEventListener('click', () => {
        pointWrapper.style.display = 'grid';
    });
}

jQuery(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".header__input_wrapper ul"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.hide(); // скрываем его
		}
	});
});

const humburger = document.querySelector('.humburger'),
        menu = document.querySelector('.humburger__wrapper'),
        overflowHumburger = document.querySelector('.humburger__overflow');

humburger.addEventListener('click', () => {
    menu.classList.toggle('humburger__wrapper_active');
});

overflowHumburger.addEventListener('click', () => {
    menu.classList.remove('humburger__wrapper_active');
});

const heart = document.querySelectorAll('.heart');

for (let i = 0; i < heart.length; i++) {
	heart[i].addEventListener('click', () => {
		heart[i].classList.toggle('heart__active');
	});
}

let pers = document.querySelector('.humburger__pers'),
    perslist = document.querySelector('.humburger__pers ol');

if (pers !== null) {
    pers.addEventListener('click', ()=> {
        if (perslist.style.maxHeight) {
            perslist.style.maxHeight = null;
            perslist.style.padding = '0';
        } else {
            perslist.style.maxHeight = perslist.scrollHeight + '40' + "px";
            perslist.style.padding = '20px 0 20px 30px';
        }
    });
    
    function closePers(Event) {
        if (!pers.contains(Event.target)) {
            perslist.style.maxHeight = null;
            perslist.style.padding = '0';
        }
    }
    document.addEventListener('click', closePers);
}

let inpitMenuMonth= document.querySelectorAll('input[name=menu__mount]'),
	inputCountMonth = 0,
	inpitMenuMonthWrapper = document.querySelector('.menu__point_month'),
	inputClearMonth = document.querySelector('.menu__clear_month');

for (let i = 0; i < inpitMenuMonth.length; i++) {
	inpitMenuMonth[i].addEventListener('click', ()=> {
		if (inpitMenuMonth[i].checked) {
			inputCountMonth += 1;
			console.log(inputCountMonth);
		} else {
			inputCountMonth -= 1;
		}
		inpitMenuMonthWrapper.textContent=String(inputCountMonth);
		if (inputCountMonth < 1) {
			inpitMenuMonthWrapper.style.display = 'none';
		} else {
			inpitMenuMonthWrapper.style.display = 'flex';
		}
	});
	inputClearMonth.addEventListener('click', function (e) {
		e.preventDefault();
		console.log('очистить чекбоксы');
		inpitMenuMonth[i].checked=false;
		inputCountMonth = 0;
		inpitMenuMonthWrapper.textContent=String(inputCountMonth);
		if (inputCountMonth < 1) {
			inpitMenuMonthWrapper.style.display = 'none';
		} else {
			inpitMenuMonthWrapper.style.display = 'flex';
		}
	});
}

let inpitMenuType= document.querySelectorAll('input[name=menu__type]'),
	inputCountType = 0,
	inpitMenuTypeWrapper = document.querySelector('.menu__point_type'),
	inputClearType = document.querySelector('.menu__clear_type');

for (let i = 0; i < inpitMenuType.length; i++) {
	inpitMenuType[i].addEventListener('click', ()=> {
		if (inpitMenuType[i].checked) {
			inputCountType += 1;
			console.log(inputCountType);
		} else {
			inputCountType -= 1;
		}
		inpitMenuTypeWrapper.textContent=String(inputCountType);
		if (inputCountType < 1) {
			inpitMenuTypeWrapper.style.display = 'none';
		} else {
			inpitMenuTypeWrapper.style.display = 'flex';
		}
	});
	inputClearType.addEventListener('click', function (e) {
		e.preventDefault();
		console.log('очистить чекбоксы');
		inpitMenuType[i].checked=false;
		inputCountType = 0;
		inpitMenuTypeWrapper.textContent=String(inputCountType);
		if (inputCountType < 1) {
			inpitMenuTypeWrapper.style.display = 'none';
		} else {
			inpitMenuTypeWrapper.style.display = 'flex';
		}
	});
}

let inpitMenuhard= document.querySelectorAll('input[name=menu__hard]'),
	inputCounthard = 0,
	inpitMenuhardWrapper = document.querySelector('.menu__point_hard');

for (let i = 0; i < inpitMenuhard.length; i++) {
	inpitMenuhard[i].addEventListener('click', ()=> {
		if (inpitMenuhard[i].checked) {
			inputCounthard += 1;
			console.log(inputCounthard);
		} else {
			inputCounthard -= 1;
		}
		inpitMenuhardWrapper.textContent=String(inputCounthard);
		if (inputCounthard < 1) {
			inpitMenuhardWrapper.style.display = 'none';
		} else {
			inpitMenuhardWrapper.style.display = 'flex';
		}
	});
}

let inpitMenuView = document.querySelectorAll('input[name=menu__view]'),
	inputCountView = 0,
	inpitMenuViewWrapper = document.querySelector('.menu__point_view'),
	inputClearView = document.querySelector('.menu__clear_view');

for (let i = 0; i < inpitMenuView.length; i++) {
	inpitMenuView[i].addEventListener('click', ()=> {
		if (inpitMenuView[i].checked) {
			inputCountView += 1;
			console.log(inputCountView);
		} else {
			inputCountView -= 1;
		}
		inpitMenuViewWrapper.textContent=String(inputCountView);
		if (inputCountView < 1) {
			inpitMenuViewWrapper.style.display = 'none';
		} else {
			inpitMenuViewWrapper.style.display = 'flex';
		}
	});
	inputClearView.addEventListener('click', function (e) {
		e.preventDefault();
		console.log('очистить чекбоксы');
		inpitMenuView[i].checked=false;
		inputCountView = 0;
		inpitMenuViewWrapper.textContent=String(inputCountView);
		if (inputCountView < 1) {
			inpitMenuViewWrapper.style.display = 'none';
		} else {
			inpitMenuViewWrapper.style.display = 'flex';
		}
	});
}

let inpitMenuAll = document.querySelectorAll('.search-filter__dropdown input[type="checkbox"]'),
	inputCountAll = 0,
	inpitMenuAllWrapper = document.querySelector('.header__open_filter span'),
    spanSetings = document.querySelector('.search-filter__setings span'),
	inputClearAll = document.querySelector('.menu__clear_footer');

for (let i = 0; i < inpitMenuAll.length; i++) {
	inpitMenuAll[i].addEventListener('click', ()=> {
		if (inpitMenuAll[i].checked) {
			inputCountAll += 1;
			console.log(inputCountAll);
		} else {
			inputCountAll -= 1;
		}
		inpitMenuAllWrapper.textContent=String(inputCountAll);
        spanSetings.textContent=String(inputCountAll);
		if (inputCountAll < 1) {
			inpitMenuAllWrapper.style.display = 'none';
            spanSetings.style.display = 'none';
		} else {
			inpitMenuAllWrapper.style.display = 'flex';
            spanSetings.style.display = 'flex';
		}
	});
}

for (let i = 0; i < inpitMenuMonth.length; i++) {
	inputClearAll.addEventListener('click', function (e) {
		e.preventDefault();
		console.log('очистить чекбоксы');
		inpitMenuMonth[i].checked=false;
        inpitMenuType[i].checked=false;
        inpitMenuhard[i].checked=false;
        inpitMenuView[i].checked=false;
		inputCountAll = 0;
		inpitMenuAllWrapper.textContent=String(inputCountAll);
        spanSetings.textContent=String(inputCountAll);
		if (inputCountAll < 1) {
			inpitMenuAllWrapper.style.display = 'none';
            spanSetings.style.display = 'none';
		} else {
			inpitMenuAllWrapper.style.display = 'flex';
            spanSetings.style.display = 'flex';
		}
	});
}

for (let i = 0; i < inpitMenuType.length; i++) {
	inputClearAll.addEventListener('click', function (e) {
		console.log('очистить чекбоксы типа');
		inpitMenuType[i].checked=false;
		inpitMenuAllWrapper.textContent=String(inputCountAll);
        spanSetings.textContent=String(inputCountAll);
		if (inputCountAll < 1) {
			inpitMenuAllWrapper.style.display = 'none';
            spanSetings.style.display = 'none';
		} else {
			inpitMenuAllWrapper.style.display = 'flex';
            spanSetings.style.display = 'flex';
		}
	});
}

for (let i = 0; i < inpitMenuhard.length; i++) {
	inputClearAll.addEventListener('click', function (e) {
		console.log('очистить чекбоксы типа');
		inpitMenuhard[i].checked=false;
		inpitMenuAllWrapper.textContent=String(inputCountAll);
        spanSetings.textContent=String(inputCountAll);
		if (inputCountAll < 1) {
			inpitMenuAllWrapper.style.display = 'none';
            spanSetings.style.display = 'none';
		} else {
			inpitMenuAllWrapper.style.display = 'flex';
            spanSetings.style.display = 'flex';
		}
	});
}

for (let i = 0; i < inpitMenuView.length; i++) {
	inputClearAll.addEventListener('click', function (e) {
		console.log('очистить чекбоксы типа');
		inpitMenuView[i].checked=false;
		inpitMenuAllWrapper.textContent=String(inputCountAll);
        spanSetings.textContent=String(inputCountAll);
		if (inputCountAll < 1) {
			inpitMenuAllWrapper.style.display = 'none';
            spanSetings.style.display = 'none';
		} else {
			inpitMenuAllWrapper.style.display = 'flex';
            spanSetings.style.display = 'flex';
		}
	});
}

var ceoText = document.querySelector('.ceo__text'),
    ceoArrow = document.querySelector('.ceo__arrow');

if (ceoArrow !== null) {
    ceoArrow.addEventListener('click', function () {
        ceoArrow.classList.add('ceo__arrow_active');
        ceoText.classList.add('ceo__text_active');
    });
}

let accordSetings = document.querySelector('.search-filter__accord_setings'),
    dropDownMenu = document.querySelectorAll('.search-filter__dropdown'),
    filterFooter = document.querySelector('.search-filter__footer'),
    filterSearch = document.querySelector('.search-filter__mob-wrapper'),
    accordSearch = document.querySelector('.search-filter__accord_search');

if(accordSearch !== null) {
    accordSearch.addEventListener('click', ()=> {
        if (accordSearch.classList.contains('search-filter__accord_search_active')) {
            console.log('error');
        } else {
            for (let i = 0; i < dropDownMenu.length; i++) {
                accordSearch.classList.add('search-filter__accord_search_active');
                accordSetings.classList.remove('search-filter__accord_setings_active');
                dropDownMenu[i].style.display = 'none';
                filterFooter.style.display = 'none';
                filterSearch.style.display = 'grid';
            }
        }
    });

    accordSetings.addEventListener('click', ()=> {
        if (accordSetings.classList.contains('search-filter__accord_setings_active')) {
            console.log('error');
        } else {
            for (let i = 0; i < dropDownMenu.length; i++) {
                accordSetings.classList.add('search-filter__accord_setings_active');
                accordSearch.classList.remove('search-filter__accord_search_active');
                dropDownMenu[i].style.display = 'block';
                filterFooter.style.display = 'flex';
                filterSearch.style.display = 'none';
            }
        }
    });
}

var s_win_w = $(window).width();
$(window).resize(function(){
	win_w = $(window).width();
	if (win_w >= s_win_w*1.3 || win_w <= s_win_w*0.7) {
		location.reload();
	}
});

let mapSwip = document.querySelector('.map__swipe_swipe'),
    mapSwiper = document.querySelector('.map__swipe'),
    mapSwiperNew = document.querySelector('.map__swipe_active .map__swipe_swipe'),
    mapBtnFilter = document.querySelector('.search-filter'),
    y1 = null;

if (mapSwip !== null) {
    mapSwip.addEventListener('click', ()=> {
        if (mapSwip.textContent !== 'Свернуть карту') {
            window.scrollTo(0, 0);
            mapSwiper.style.maxHeight = 'calc( 100vh - 455px )';
            mapSwiper.style.height = 'calc( 100vh - 455px )';
            document.body.style.overflow = 'hidden';
            mapSwip.textContent = 'Свернуть карту';
        } else {
            mapSwiper.style.maxHeight = '75px';
            mapSwiper.style.height = '75px';
            document.body.style.overflow = 'visible';
            mapSwip.textContent = 'Открыть карту';
        }
    });
}

var mapBlock = document.querySelector('.map__block'),
    mapBtn = document.querySelector('.map__transform'),
    mapBtnClose = document.querySelector('.map__close_wrapper');

if (mapBtn !== null) {
    mapBtn.addEventListener('click', () => {
        mapBlock.classList.add('map__block_active');
        mapBtn.classList.add('map__transform_active');
    });
    
    mapBtnClose.addEventListener('click', () => {
        mapBlock.classList.remove('map__block_active');
        mapBtn.classList.remove('map__transform_active');
    });
}

let     inputNav = document.querySelector('.header__input_nav'),
        pointNav = document.querySelector('header__input_nav_wrapper li'),
        pointWrapperNav = document.querySelector('.header__input_nav_wrapper ul'),
        inputWrapperNav = document.querySelector('.header__input_nav_wrapper');

if (inputNav !== null) {
    inputNav.addEventListener('click', () => {
        pointWrapperNav.style.display = 'grid';
    });
}

jQuery(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".header__input_nav_wrapper ul"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.hide(); // скрываем его
		}
	});
});

var formOpen = document.querySelector('.header__open'),
        nav = document.querySelector('.nav'),
        form = document.querySelector('.header__form'),
        formClose = document.querySelector('.header__close');

if (formOpen !== null) {
    formOpen.addEventListener('click', () => {
        form.classList.add('header__form_active');
        nav.classList.add('form__open');
    });

    formClose.addEventListener('click', () => {
        form.classList.remove('header__form_active');
        nav.classList.remove('form__open');
    });

    // if (document.getElementsByName('header__check') !== null) {
    //     function RAZ911() {
    //         var c = document.getElementsByName('header__check');
    //         if (!c[0].checked) c[0].checked = true;  // поставить checked на второй input, если он не установлен
    //       }
    //     RAZ911();
    // }
}

// Add -----------------------------------------
// функции для списков в плавующем блоке

let swimBlockPrice = document.querySelector('.swim-block__price'),
    swimBlockMenu = document.querySelector('.swim-block__price_list')
    swimBlockPriceList = document.querySelectorAll('.swim-block__price_list li'),
    swimBlockPriceSpan = document.querySelectorAll('.swim-block__price_list span'),
    swimBlockPriceSpanCheck = document.querySelector('.swim-block__price span'),
    swimBlockPriceDate = document.querySelector('.swim-block__price_date_enter'),
    swimBlockPriceHow = document.querySelector('.swim-block__price_how');

if (swimBlockPrice !== null) {
    swimBlockPrice.addEventListener('click', ()=> {
        if (getComputedStyle(swimBlockMenu).display == 'none') {
            console.log('открываем')
            swimBlockMenu.style.display = 'grid'
        } else {
            console.log('закрываем')
            swimBlockMenu.style.display = 'none'
        }
    })

    for (let i = 0; i < swimBlockPriceList.length; i++) {
        if (swimBlockPriceSpan[i].classList.contains('swim-block__discount')) {
            swimBlockPriceHow.style.display = 'block'
            swimBlockPriceDate.style.display = 'none'
        } else if (swimBlockPriceSpan[i].classList.contains('swim-block__price_date')) {
            swimBlockPriceHow.style.display = 'none'
            swimBlockPriceDate.style.display = 'flex'
        } else {
            swimBlockPriceHow.style.display = 'none'
            swimBlockPriceDate.style.display = 'none'
        }

        function swimBlockCheck () {
            if (swimBlockPriceSpan[i].classList.contains('swim-block__discount')) {
                swimBlockPriceHow.style.display = 'block'
                swimBlockPriceDate.style.display = 'none'
            } else if (swimBlockPriceSpan[i].classList.contains('swim-block__price_date')) {
                swimBlockPriceHow.style.display = 'none'
                swimBlockPriceDate.style.display = 'flex'
            } else {
                swimBlockPriceHow.style.display = 'none'
                swimBlockPriceDate.style.display = 'none'
            }
        }

        swimBlockPriceList[i].addEventListener('click', ()=>{
            swimBlockPrice.innerHTML = swimBlockPriceList[i].outerHTML
            swimBlockMenu.style.display = 'none'
            swimBlockCheck()
        })
    }

    if (swimBlockPriceSpanCheck.classList.contains('swim-block__discount')) {
        swimBlockPriceHow.style.display = 'block'
    }   else {
        swimBlockPriceHow.style.display = 'none'
    }

    function closeSwimBlockMenu(Event) {
        if (!swimBlockPrice.contains(Event.target)) {
            swimBlockMenu.style.display = 'none'
        }
    }
    document.addEventListener('click', closeSwimBlockMenu);
}

let swimBlockName = document.querySelector('.swim-block__name'),
    swimBlockTel = document.querySelector('.swim-block__tel'),
    swimBlockEmail = document.querySelector('.swim-block__email')
    swimBlockNameMenu = document.querySelector('.swim-block__name_wrapper ul'),
    swimBlockPoint = document.querySelectorAll('.swim-block__name_wrapper li');

if (swimBlockNameMenu !== null) {
    swimBlockName.addEventListener('click', ()=> {
        if (getComputedStyle(swimBlockNameMenu).display == 'none') {
            swimBlockNameMenu.style.display = 'grid'
        } else {
            swimBlockNameMenu.style.display = 'none'
        }
    })

    for (let i = 0; i < swimBlockPoint.length; i++) {
        swimBlockPoint[i].addEventListener('click', ()=>{
            swimBlockName.innerHTML = swimBlockPoint[i].outerHTML
            swimBlockNameMenu.style.display = 'none'
            if (i == 1 || i == 2) {
                swimBlockTel.style.display = 'block'
                swimBlockEmail.style.display = 'none'
            } else if ( i == 0) {
                swimBlockTel.style.display = 'none'
                swimBlockEmail.style.display = 'block'
            } else {
                swimBlockTel.style.display = 'none'
                swimBlockEmail.style.display = 'none'
            }
        })
    }

    function closeSwimBlocNameMenu(Event) {
        if (!swimBlockName.contains(Event.target)) {
            swimBlockNameMenu.style.display = 'none'
        }
    }
    document.addEventListener('click', closeSwimBlocNameMenu);
}
// конец функций для списков в плавующем блоке

// функция для swim-block
let swimBlockWidth = document.querySelector('.swim-block-autor_wight').offsetWidth,
    swimBlockWrapperWidth = document.querySelector('.swim-block');

if (document.documentElement.clientWidth > 1024) {
    if (swimBlockWrapperWidth !== null) {
        swimBlockWrapperWidth.style.width = swimBlockWidth + 'px'
    
        $(document).ready(function() {  
            (function(){
                var a = document.querySelector('.swim-block'), b = null, P = 94;  // если ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента. Может быть отрицательным числом
                window.addEventListener('scroll', Ascroll, false);
                document.body.addEventListener('scroll', Ascroll, false);
                function Ascroll() {
                if (b == null) {
                    var Sa = getComputedStyle(a, ''), s = '';
                    for (var i = 0; i < Sa.length; i++) {
                    if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                        s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; ';
                    }
                    }
                    b = document.createElement('div');
                    b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
                    a.insertBefore(b, a.firstChild);
                    var l = a.childNodes.length;
                    for (var i = 1; i < l; i++) {
                        b.appendChild(a.childNodes[1]);
                    }
                    a.style.height = b.getBoundingClientRect().height + 'px';
                    a.style.padding = '0';
                    a.style.border = '0';
                    }
                    var Ra = a.getBoundingClientRect(),
                        R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('.tour-slider').getBoundingClientRect().top + 53);  // селектор блока, при достижении верхнего края которого нужно открепить прилипающий элемент;  Math.round() только для IE; если ноль заменить на число, то блок будет прилипать до того, как нижний край элемента дойдёт до футера
                    if ((Ra.top - P) <= 0) {
                        if ((Ra.top - P) <= R) {
                            b.className = 'stop';
                            b.style.top = - R +'px';
                        } else {
                            b.className = 'sticky';
                            b.style.top = P + 'px';
                        }
                    } else {
                            b.className = '';
                            b.style.top = '';
                    }
                    window.addEventListener('resize', function() {
                        a.children[0].style.width = getComputedStyle(a, '').width;
                    }, false);
                }
            })();
        });
    }
}

// функция появления навигации к set.html   

if (document.documentElement.clientWidth > 1024 ) {
    $(document).ready(function() {  
        $(window).scroll(function () {
            $(window).scroll(function(){
                if($(window).scrollTop()>500){
                    $('.nav-set-fixed').fadeIn(0);
                    $('.nav-set').fadeOut(0);
                }else{
                    $('.nav-set-fixed').fadeOut(0);
                    $('.nav-set').fadeIn(0);
                }
            });
        });
    });
}

// слайдеры 
$(document).ready(function() {  
    $('.collage-slider__wrapper').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/tape_slider_next.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/tape_slider_next.svg" alt="arrow"></button>',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true,
                    adaptiveHeight: false,
                }
            }
        ]
    });

    (function($) {
        $(function() {
            $('.tour-slider__wrapper ul').on('click', 'li:not(.active)', function() {
                $(this)
                    .addClass('active').siblings().removeClass('active')
                    .closest('div.tour-slider__wrapper').find('div.tour-slider__slider').removeClass('active').eq($(this).index()).addClass('active');
            });
        });
    })(jQuery);
});

//  аккордеон в мобильной версии

let funcBtn = document.querySelectorAll('.func__title'),
    funcText = document.querySelectorAll('.func__wrapper');

if(funcBtn !== null && document.documentElement.clientWidth < 769) {
    for (let i = 0; i < funcBtn.length; i++) {
        funcBtn[i].addEventListener('click', ()=>{
            funcBtn[i].classList.toggle('func__title_active')
            funcText[i].classList.toggle('func__wrapper_active')
        })
    }
}

// расскрытие формы заявки в моб версии 

let swimBlockOverflow = document.querySelector('.swim-block__overflow'),
    SwimBlockMob = document.querySelector('.swim-block'),
    SetmainNav = document.querySelector('.set-main__nav');

if(SwimBlockMob !== null && document.documentElement.clientWidth < 1025) {
    swimBlockOverflow.addEventListener('click', ()=>{
        SwimBlockMob.classList.toggle('swim-block__open')
        SetmainNav.classList.toggle('swim-block__open')
    })
}



let mapDesctop = document.querySelector('.map__map iframe'),
    mapMobContainer = document.querySelector('.map__swipe');

if ($(window).width() < 769)  {
    mapMobContainer.innerHTML += mapDesctop.outerHTML
    mapDesctop.remove()
}