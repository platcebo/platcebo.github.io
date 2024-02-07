
$(document).ready(function() {
  new Swiper('.preview-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 1000,
    },
    disableOnInteraction: true,
  });
  var mySwiper = document.querySelector('.preview-slider').swiper

  $(".preview-btn").mouseenter(function() {
    mySwiper.autoplay.stop();
    $(this).parents(".preview-item").addClass("hovered")
  });

  $(".preview-btn").mouseleave(function() {
    mySwiper.autoplay.start();
    $(this).parents(".preview-item").removeClass("hovered")
  });
});


if(window.innerWidth > 991){
  (function(){
    var a = document.querySelector('#catalogue-text'), b = null, P = 120; 
    window.addEventListener('scroll', Ascroll, false);
    document.body.addEventListener('scroll', Ascroll, false);
    function Ascroll() {
      if (b == null) {
        var Sa = getComputedStyle(a, ''), s = '';
        for (var i = 0; i < Sa.length; i++) {
          if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
            s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
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
          R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('.stoper').getBoundingClientRect().top + 0);
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
        a.children[0].style.width = getComputedStyle(a, '').width
      }, false);
    }
    })()
}


new Swiper(".categories-slider", {
  slidesPerView: 1,
  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      spaceBetween: 38,
      slidesPerView: 2,
    },
    1400: {
      spaceBetween: 64,
      slidesPerView: 2,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$('.btn-menu').click(function(e){
  $('body').toggleClass('overflow-none');
  $('.navbar').toggleClass('show');
})


if(window.innerWidth > 767){
  const animItems = document.querySelectorAll('.anim-items');

  if (animItems.length > 0) {
      window.addEventListener('scroll', animOnScroll);
      function animOnScroll(params) {
          for (let index = 0; index < animItems.length; index++) {
              const animItem = animItems[index];
              const animItemHeight = animItem.offsetHeight;
              const animItemOffset = offset(animItem).top;
              const animStart = 4;
              let animItemPoint = window.innerHeight - animItemHeight / animStart;
              if (animItemHeight > window.innerHeight) {
                  animItemPoint = window.innerHeight - window.innerHeight / animStart;
              }
              if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                  animItem.classList.add('_active');
              }
          }
      }
      function offset(e) {
          const rect = e.getBoundingClientRect(),
              scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
              scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          return { top: rect.top + scrollTop, left: rect.left + screenLeft }
      }
      animOnScroll();
  }
}