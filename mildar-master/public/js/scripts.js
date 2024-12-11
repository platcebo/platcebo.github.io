var dotOffset;

$('.slider').each(function() {
  var sliderItem = $(this);

  sliderItem.on('init', function(slick) {
    sliderItem.find('.slick-dots li:first-child').prepend('<div class="slick-dots__filler"></div>');
    setTimeout(function() {
      var dotOffset = sliderItem.find('.slick-dots li.slick-active').position().left;
      sliderItem.find('.slick-dots__filler').css('left', dotOffset);
    }, 500)
    setTimeout(function() {
      sliderItem.find('.slick-dots__filler').addClass('slick-dots__filler--animated')
    }, 1000)
  });

  sliderItem.on('afterChange', function(slick, currentSlide) {
    var dotOffset = sliderItem.find('.slick-dots li.slick-active').position().left;
    sliderItem.find('.slick-dots__filler').css('left', dotOffset);
  });
});

if ($(window).width() > 767) {
  $('.article__news').slick({
    dots: true,
    arrows: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    slidesToScroll: 2
  });
}

if ($(window).width() < 1371) {
  $('.cheese-desc').slick({
    dots: true,
    arrows: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1
  });
}








$('.input[type="tel"]').inputmask("+7 (999) 999-99-99");
 



ScrollReveal().reveal(".front__title", {
  duration: 1000,
  opacity: 0,
  scale: 1,
  mobile: false,
  easing: 'cubic-bezier(0.250, 0.100, 0.250, 1.000)',
  origin: 'bottom',
  delay: 1000,
  distance: "100px",
  reset: false,
  viewFactor: .2,
  cleanup: true
});

ScrollReveal().reveal(".front__btn", {
  duration: 1000,
  opacity: 0,
  scale: 1,
  mobile: false,
  easing: 'cubic-bezier(0.250, 0.100, 0.250, 1.000)',
  origin: 'bottom',
  delay: 1300,
  distance: "100px",
  reset: false,
  viewFactor: .2,
  cleanup: true
});

ScrollReveal().reveal(".front__sections-wrapper", {
  duration: 1000,
  opacity: 0,
  scale: 1,
  mobile: false,
  easing: 'cubic-bezier(0.250, 0.100, 0.250, 1.000)',
  origin: 'right',
  delay: 2000,
  distance: "20%",
  reset: false,
  viewFactor: .2,
  cleanup: true,
  interval: 100
});

ScrollReveal().reveal(".front__section", {
  duration: 1000,
  opacity: 0,
  scale: 1,
  mobile: false,
  easing: 'cubic-bezier(0.250, 0.100, 0.250, 1.000)',
  origin: 'right',
  delay: 2000,
  distance: "100%",
  reset: false,
  viewFactor: .2,
  cleanup: true,
  interval: 100
});

ScrollReveal().reveal(".header--main", {
  duration: 1000,
  opacity: 0,
  scale: 1,
  mobile: false,
  easing: 'cubic-bezier(0.250, 0.100, 0.250, 1.000)',
  origin: 'top',
  delay: 3000,
  distance: "100%",
  reset: false,
  viewFactor: .2,
  cleanup: true,
  interval: 100
});

$('.gallery').slick({
  dots: true,
  arrows: false,
  infinite: false,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 5000,
  variableWidth: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 1,
        fade: true,
        variableWidth: false,
        centerMode: false
      }
    },
  ]
});





$('.link').click(function(e) {
  e.preventDefault();
  var linkHref = $(this).attr('href');
  $('body').css('opacity', 0);
  setTimeout(function() {
    window.location.href = linkHref;
  }, 1000)
});

$(window).on('load', function() {
  $('.loader').fadeOut('fast');
});




if ($(window).width() >= 1200) {

  const magic = new ScrollMagic.Controller();

  const magicLength = $('.main__section').length;
  const magicDuration = `${(magicLength * 100).toString()}%`;

  new ScrollMagic.Scene({
    triggerElement: '.main__magic',
    triggerHook: '0',
    reverse: true,
    duration: magicDuration,
  }).on('progress', (event) => {
    if (event.scrollDirection === 'FORWARD') {
      for (let i = magicLength; i > 0; i--) {
        const sectionStep = 1 / magicLength;
        if (event.progress > sectionStep * i && event.progress <= sectionStep * (i + 1)) {
          $('.main__section').removeClass('main__section--active');
          $('.main__section').eq(i).addClass('main__section--active');
        };
        
//        if (event.progress > 0.375 * i && event.progress <= 0.5) {
//          $('.feature__animation-item').addClass('deanimate');
//        }
      }
    } else if (event.scrollDirection === 'REVERSE') {
      for (let i = magicLength - 1; i >= 0; i--) {
        const sectionStep = 1 / magicLength;
        if (event.progress > sectionStep * i && event.progress <= sectionStep * (i + 1)) {
          $('.main__section').removeClass('main__section--active');
          $('.main__section').eq(i).addClass('main__section--active');
        };
        
//        if (event.progress > 0.375 * i && event.progress <= 0.5) {
//          $('.feature__animation-item').removeClass('deanimate');
//        }
      }
    }
  }).setPin('.main__magic').addTo(magic);
}

if ($('#map').length) {
  function initMap() {
    var myMap = new ymaps.Map('map', {
        center: [59.884307, 30.389350],
        controls: ['zoomControl'],
        zoom: 14
      }, {
        searchControlProvider: 'yandex#search'
      }),

      // РЎРѕР·РґР°С‘Рј РјР°РєРµС‚ СЃРѕРґРµСЂР¶РёРјРѕРіРѕ.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),
      myPlacemark1 = new ymaps.Placemark([59.884307, 30.389350], {
        hintContent: ''
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-placemark.svg',
        iconImageSize: [48, 48],
        iconImageOffset: [-24, -48],
        balloonCloseButton: false,
        hideIconOnBalloonOpen: false,
        balloonOffset: [0, -15],
        balloonPanelMaxMapArea: 0
      });

    myMap.geoObjects
      .add(myPlacemark1);
  }
}
$('.menu__btn').click(function (e) {
  e.preventDefault();
  setTimeout(function() {
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.menu__content').toggleClass('menu__content--active');
    if ($(window).width() < 1200) {
      $('.header').toggleClass('header--menu');
      $('body').toggleClass('fixed');
    }
  }, 100);
});

$(document).click(function (event) {
  var $target = $(event.target);
  if (!$target.closest('.menu').length &&
    $('.menu__content').hasClass("menu__content--active")) {
      $('.menu__btn').removeClass('menu__btn--active');
      $('.menu__content').removeClass('menu__content--active');
      $('.header').removeClass('header--menu');
  }
});

Fancybox.bind("[data-fancybox]", {
  dragToClose: false,
  afterShow: function (instance, current) {
    $(document).on('submit', '.needs-validation', function (e) {
      var form = $(this);
      if (!form[0].checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
        $(this).addClass('was-validated');
      } else if (formIsValid($(this).attr('id'))) {
        sendData($(this).attr('id'));
        e.preventDefault();
        $(this).closest('.modal').find('.modal__content').hide();
        $(this).closest('.modal').find('.modal__result').fadeIn();
      }
    });
  }
});


$(document).on('submit', '.needs-validation', function (e) {
  var form = $(this);
  if (!form[0].checkValidity()) {
    e.preventDefault();
    e.stopPropagation();
    $(this).addClass('was-validated');
  }
});
/* РџСЂРёРјРµСЂ РїРѕРґРіСЂСѓР·РєРё РЅРѕРІРѕСЃС‚РµР№ РїРѕ РєРЅРѕРїРєРµ */

$('.js-more-news-btn').click(function(e) {
  e.preventDefault();
  $('.js-more-news-wrapper').clone().removeClass('js-more-news-wrapper').insertBefore($('.js-more-news-btn-wrapper'));
});
if ($(window).width() < 1200 && $(window).width() > 767) {
  
  $('.news-slider__content').slick({
    slidesToShow: 2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true
  })
}

$('.photos').slick({
  dots: true,
  arrows: false,
  infinite: false,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        fade: true,
      }
    },
  ]
});

 $('.pictures__big').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
   infinite: false,
   asNavFor: '.pictures__small'
 });

 $('.pictures__small').slick({
   slidesToShow: 2,
   slidesToScroll: 1,
   asNavFor: '.pictures__big',
   infinite: false,
   arrows: false,
   centerMode: true,
   focusOnSelect: true
 }).on('afterChange', function (slick, currentSlide) {
   $('.product__right-content').hide();
   $('.product__right-content').eq(currentSlide.currentSlide).fadeIn('slow');
   $('.product__mobile-top').hide();
   $('.product__mobile-top').eq(currentSlide.currentSlide).fadeIn('slow');
   $('.photos').slick('unslick');
   $('.photos').not('.slick-initialized').slick({
    dots: true,
    arrows: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          fade: true,
        }
      },
    ]
  });
 });

ScrollReveal().reveal(".product__right-content--front > *", {
  duration: 1000,
  opacity: 0,
  scale: 1,
  mobile: false,
  easing: 'cubic-bezier(0.250, 0.100, 0.250, 1.000)',
  origin: 'bottom',
  distance: "100px",
  reset: false,
  viewFactor: .2,
  cleanup: true,
  interval: 50
});



ScrollReveal().reveal(".reveal", {
  duration: 1000,
  opacity: 0,
  scale: 1,
  mobile: false,
  easing: 'cubic-bezier(0.250, 0.100, 0.250, 1.000)',
  origin: 'bottom',
  distance: "100px",
  reset: false,
  viewFactor: .2,
  cleanup: true,
  interval: 50
});

$('.search__btn').click(function(e) {
  e.preventDefault();
  $('.search__content').addClass('search__content--active');
  $('.wrapper').addClass('wrapper--search');
  $('.header').addClass('header--search');
  $('body').addClass('fixed');
  $('.search__input').focus();
});

$('.search__close').click(function(e) {
  e.preventDefault();
  $('.search__content').removeClass('search__content--active');
  $('.search__results').removeClass('search__results--active');
  $('.wrapper').removeClass('wrapper--search');
  $('.header').removeClass('header--search');
  $('body').removeClass('fixed');
  $('.search__input').val('');
});

$('.search__results').click(function() {
  if (!$(this).hasClass('search__results--active')) {
    $('.search__content').removeClass('search__content--active');
    $('.wrapper').removeClass('wrapper--search');
    $('.header').removeClass('header--search');
    $('body').removeClass('fixed');
  }
})


/* РЎРєСЂРёРїС‚s РґР»СЏ РґРµРјРѕРЅСЃС‚СЂР°С†РёРё СЂР°Р±РѕС‚С‹ РїРѕРёСЃРєР° */

$('.search__input').on('input', function(e) {
  if ($(this).val) {
    $('.search__results').addClass('search__results--active');
    $('.search__content').addClass('search__content--results');
  }
  else {
    $('.search__results').removeClass('search__results--active');
    $('.search__content').removeClass('search__content--results');
  }
});
$('.search__input').keydown(function(event){
    if(event.keyCode == 13) {
        event.preventDefault();
        return false;
    }
});

$('.js-more-btn').click(function(e) {
  e.preventDefault();
  $(this).fadeOut('fast');
  $('.js-more-wrapper').find('.js-more-item').fadeIn('fast');
});

if ($('.select__input').length) {
    
  $('.select--country .select__input').change(function() {
    var countryVal = $(this).val();
    
    selectFilling = function(country) {
      $('.select--city').find('option').remove();
      for (var i = 0; i < country.length; i++) {
        $('.select--city').find('.select__input').append('<option value="' + country[i][1] + '">' + country[i][0] + '</option>')
      }
    }
    
    var citiesRu = [['РЎР°РЅРєС‚-РџРµС‚РµСЂР±СѓСЂРі', 'spb'], ['РњРѕСЃРєРІР°', 'msk'], ['Р•РєР°С‚РµСЂРёРЅР±СѓСЂРі', 'ekb'], ['РќРёР¶РЅРёР№ РќРѕРІРіРѕСЂРѕРґ', 'nn'], ['Р’Р»Р°РґРёРІРѕСЃС‚РѕРє', 'vvo']];
    var citiesBy = [['РњРёРЅСЃРє', 'msq'], ['Р“СЂРѕРґРЅРѕ', 'gna'], ['Р‘СЂРµСЃС‚', 'bqt']];
    var citiesKz = [['РђР»РјР°С‚С‹', 'kz1'], ['Р–Р°РЅР°РѕР·РµРЅ', 'kz2'], ['РђРєС‚Р°Сѓ', 'kz3']];
    
    switch(countryVal) {
     case 'ru':
      selectFilling(citiesRu)
      break;
     case 'by':
      selectFilling(citiesBy)
      break;
     case 'kz':
      selectFilling(citiesKz)
      break;
     default:
    }
    
  });
  
  $('.select__input').each(function() {
    
    var container = $(this).closest('.select');

    $(this).select2({
      minimumResultsForSearch: -1,
      width: '100%',
      dropdownParent: container
    });
    $(this).on('select2:open', function (e) {
    
      setTimeout(function() {
        const ps = new PerfectScrollbar('.select2-results__options', {
          minScrollbarLength: 60,
          swipeEasing: true
        });
      }, 100);
    });
  })
};


/*
$('.location__content').each(function() {
  var locationContent = $(this);
  
  if ($(window).width() < 1200) {

    locationContent.on('init', function(slick) {
      locationContent.find('.slick-dots li:first-child').prepend('<div class="slick-dots__filler"></div>');
      setTimeout(function() {
        var dotOffset = locationContent.find('.slick-dots li.slick-active').position().left;
        locationContent.find('.slick-dots__filler').css('left', dotOffset);
      }, 500)
      setTimeout(function() {
        locationContent.find('.slick-dots__filler').addClass('slick-dots__filler--animated')
      }, 1000)
    });

    locationContent.on('afterChange', function(slick, currentSlide) {
      var dotOffset = locationContent.find('.slick-dots li.slick-active').position().left;
      locationContent.find('.slick-dots__filler').css('left', dotOffset);
    });
  }
  
  var locationSlides = 4;
  
  if (locationContent.closest('.location').hasClass('location--product')) {
    locationSlides = 2;
  }

  locationContent.slick({
    slidesToShow: locationSlides,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true
        }
      }
    ]
  });
});
*/

/* Р’СЂРµРјРµРЅРЅС‹Р№ СЃРєСЂРёРїС‚ РґР»СЏ РІРёР·СѓР°Р»РёР·Р°С†РёРё РїРѕРґРіСЂСѓР·РєРё РјР°РіР°Р·РёРЅРѕРІ */

$('.select--city .select__input').change(function() {
  $('.location__content').hide();
  $('.location__item').show();
  var itemsLength = $('.location__item').length;
  const rndInt = Math.floor(Math.random() * itemsLength+1) + 1;
  $('.location__item:nth-child(n+' + rndInt + ')').hide();
  $('.location__content').fadeIn('slow').slick({
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true
        }
      }
    ]
  });
});


if ($(window).width() >= 1200) {

  $('.showcase__wrapper').each(function () {
    var slider = $(this);
    var itemsNumber = slider.find('.showcase__item').length;
    slider.find('.showcase__item-container').css('min-width', $(window).width());
    if (itemsNumber > 1) {
      var prevArrow;
      var nextArrow;

      slider.on('init', function (slick) {
        prevArrow = slider.find('.slick-prev');
        nextArrow = slider.find('.slick-next');
        var nextSlideTitle = slider.find('.showcase__item').eq(1).find('.showcase__title').text();
        prevArrow.append('<div class="slick-arrow__title slick-arrow__title--prev"></div>');
        nextArrow.append('<div class="slick-arrow__title slick-arrow__title--next">' + nextSlideTitle + '</div>');
      });

      slider.slick({
        dots: true,
        fade: true,
        speed: 200,
        infinite: false,
        pauseOnHover: false,
        autoplay: true,
        autoplaySpeed: 4000,
        adaptiveHeight: true,
        slidesToShow: 1,
        easing: 'cubic-bezier(0.250, 0.100, 0.250, 1.000)'
      });

      slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {

        slider.find('.showcase__item').removeClass('showcase__item--prev showcase__item--next showcase__item--old');

        if (nextSlide > currentSlide) {
          slider.find('.showcase__item').eq(currentSlide).addClass('showcase__item--prev');
        }
        else if (nextSlide < currentSlide) {
          slider.find('.showcase__item').eq(currentSlide-1).addClass('showcase__item--old');
          slider.find('.showcase__item').eq(currentSlide).addClass('showcase__item--next');
        }
      });


      slider.on('afterChange', function (slick, currentSlide) {
        var slideIndex = currentSlide.currentSlide;
        var prevSlideTitle = slider.find('.showcase__item').eq(slideIndex - 1).find('.showcase__title').text();
        var nextSlideTitle = slider.find('.showcase__item').eq(slideIndex + 1).find('.showcase__title').text();
        nextArrow.find('.slick-arrow__title').hide().fadeIn(1000);
        prevArrow.find('.slick-arrow__title').hide().fadeIn(1000);
        prevArrow.find('.slick-arrow__title').text(prevSlideTitle);
        nextArrow.find('.slick-arrow__title').text(nextSlideTitle);
        slider.find('.showcase__item').css('transform', 'translateX(0px)');
      });
    }
  });
}

else {

  $('.showcase__wrapper').each(function () {
    var slider = $(this);
    var itemsNumber = slider.find('.showcase__item').length;
    if (itemsNumber > 1) {
  
      slider.slick({
        dots: true,
        infinite: false,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 4000,
        adaptiveHeight: true,
        slidesToShow: 1,
        easing: 'cubic-bezier(0.250, 0.100, 0.250, 1.000)'
      });
    }
  })
}