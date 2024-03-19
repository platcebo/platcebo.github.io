document.addEventListener('DOMContentLoaded', function() {
    const isTablet = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) || document.documentElement.clientWidth < 1025;
    if(!isTablet) {
        var mainSlider = new Swiper(".header__slider", {
            loop: false,
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 900,
            autoplay: {
                delay: 3000,
            },
            navigation: {
                nextEl: ".header__next",
                prevEl: ".header__back",
            },
            pagination: {
                el: ".header__pag",
                type: "bullets",
            },
        });
    } 
    var headerSlider = new Swiper(".header-slider__slider", {
        navigation: {
            nextEl: ".header-slider__next",
            prevEl: ".header-slider__back",
        },
        pagination: {
            el: ".header-slider__pag",
            type: "progressbar",
        },
        speed: 900,
        spaceBetween: 300,
        loop: true,
        breakpoints: {
            1025: {
                navigation: {
                    nextEl: ".header-slider__next",
                    prevEl: ".header-slider__back",
                },
                pagination: {
                    el: ".header-slider__pag",
                    type: "progressbar",
                },
            },
        }
    });
    var aboutSlider = new Swiper(".about-brand__slider", {
        loop: false,
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 900,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: ".about-brand__next",
            prevEl: ".about-brand__back",
        },
        pagination: {
            el: ".about-brand__pag",
            type: "bullets",
        },
    });
    var articleSlider = new Swiper(".article__row", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: ".article__pag",
            type: "progressbar",
        },
        breakpoints: {
            601: {
                enabled: false
            }
        }
    });
    var blogSlider = new Swiper(".article__blog", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        enabled: true,
        pagination: {
            el: ".article__blog_pag",
            type: "progressbar",
        },
        breakpoints: {
            1025: {
                enabled: false,
                slidesPerView: 4,
                spaceBetween: 30,
            },
            601: {
                slidesPerView: 2,
                spaceBetween: 20,
            }
        }
    });
    var cartThumbs = new Swiper(".cart__thumbs", {
        loop: false,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        spaceBetween: 30,
        breakpoints: {
            1551: {
                slidesPerView: 6,
            },
        }
    });
    var cartSlider = new Swiper(".cart__slider", {
        loop: false,
        spaceBetween: 30,
        speed: 500,
        navigation: {
            nextEl: ".cart__next",
            prevEl: ".cart__back",
        },
        thumbs: {
            swiper: cartThumbs,
        },
        pagination: {
            el: ".cart__pag",
            type: "progressbar",
        },
    });
    var recSlider = new Swiper(".rec__slider", {
        loop: false,
        spaceBetween: 20,
        speed: 500,
        slidesPerView: 1,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: ".rec__next",
            prevEl: ".rec__back",
        },
        pagination: {
            el: ".rec__pag",
            type: "progressbar",
        },
        breakpoints: {
            1025: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            601: {
                slidesPerView: 2,
            },
            1921: {
                slidesPerView: 3,
                spaceBetween: 80,
            }
        }
    });
    var modalGallerySlider = new Swiper(".modal-gallery__slider", {
        loop: false,
        spaceBetween: 30,
        speed: 500,
        slidesPerView: 1,
        navigation: {
            nextEl: ".modal-gallery__slider_next",
            prevEl: ".modal-gallery__slider_back",
        },
        pagination: {
            el: ".modal-gallery__pag",
            type: "progressbar",
        },
    });
    
    let pageArrow = document.querySelector('.footer__up');
    
    if(pageArrow !== null) {
        function scrollToTop () {
            if (window.scrollY > 0) {
                window.scrollBy(0, -70); 
                setTimeout(scrollToTop, 0); 
            }
        }
        pageArrow.addEventListener("click", scrollToTop)
    }
    
    let nav = document.querySelector('.nav'),
        navHamburger = document.querySelector('.nav__hamburger');
    
    if(nav !== null) {
        navHamburger.addEventListener('click', ()=>{
            nav.classList.toggle('active');
            document.body.classList.toggle('fix')
        })
    }
    
    let tab = document.querySelector('.buy__tab'),
        tabItem = document.querySelectorAll('.buy__tab_item'),
        tabWrapper = document.querySelectorAll('.buy__tab_wrapper');
    
    if(tab !== null) {
        function tabHide(a) {
            for(let i = a; i < tabItem.length; i++) {
                tabItem[i].classList.remove('active')
                if(tabWrapper !== null) {
                    tabWrapper[i].classList.remove('active')
                }
            }
        }
        function tabShow(b) {
            tabItem[b].classList.add('active')
            if(tabWrapper !== null) {
                tabWrapper[b].classList.add('active')
            }
        }
        tab.addEventListener('click', (Event)=>{
            // Event.preventDefault()
            let target = Event.target;
            if(target.classList.contains('buy__tab_item')) {
                for(let i = 0; i < tabItem.length; i++) {
                    if(target == tabItem[i]) {
                        tabHide(0)
                        tabShow(i)
                    }
                }
            }
        })
    }
    
    let tabSlider = document.querySelector('.header-slider__prev'),
        tabSliderItem = document.querySelectorAll('.header-slider__prev_slide'),
        tabSliderWrapper = document.querySelectorAll('.header-slider__slider');
    
    if(tabSlider !== null) {
        function tabSliderHide(a) {
            for(let i = a; i < tabSliderItem.length; i++) {
                tabSliderItem[i].classList.remove('active')
                tabSliderWrapper[i].classList.remove('active')
            }
        }
        tabSliderHide(1)
        function tabSliderShow(b) {
            tabSliderItem[b].classList.add('active')
            tabSliderWrapper[b].classList.add('active')
        }
        tabSlider.addEventListener('click', (Event)=>{
            Event.preventDefault()
            let target = Event.target.closest('div.header-slider__prev_slide');
            if(target && target.classList.contains('header-slider__prev_slide')) {
                for(let i = 0; i < tabSliderItem.length; i++) {
                    if(target == tabSliderItem[i]) {
                        tabSliderHide(0)
                        tabSliderShow(i)
                    }
                }
            }
        })
    }
    
    let modal = document.querySelector('.modal-thanks'),
        modalBtn = document.querySelectorAll('.modal-thanks__btn'),
        modalOverflow = document.querySelector('.modal-thanks__overflow'),
        modalClose = document.querySelector('.modal-thanks__close');
    
    if(modal !== null) {
        modalBtn.forEach((item)=>{
            item.addEventListener('click', ()=>{
                modal.classList.add('active')
                document.body.classList.add('fix')
            })
        })
        modalOverflow.addEventListener('click', ()=>{
            modal.classList.remove('active')
            document.body.classList.remove('fix')
        })
        modalClose.addEventListener('click', ()=>{
            modal.classList.remove('active')
            document.body.classList.remove('fix')
        })
    }
    
    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show');
            }
        });
      }
    let options = { threshold: [0.2] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-animation');
    for (let elm of elements) {
        observer.observe(elm);
    }
      
    let headerSliderImage = document.querySelectorAll('.header-slider__image'),
        headerSliderBtn = document.querySelectorAll('.header-slider__btn');
    
    if(document.documentElement.clientWidth < 1025 && headerSliderBtn !== null) {
        headerSliderBtn.forEach((item)=>{
            item.style.top = headerSliderImage[1].offsetHeight / 2 + "px"
        })
    }
    
    let modalGallery = document.querySelector('.modal-gallery'),
        modalGalleryBtn = document.querySelectorAll('.modal-gallery__btn'),
        modalGalleryClose = document.querySelector('.modal-gallery__close');
    
    if(modalGallery !== null) {
        modalGalleryBtn.forEach((item)=>{
            item.addEventListener('click', ()=>{
                modalGallery.classList.add('active')
                document.body.classList.add('fix')
            })
        })
        modalGalleryClose.addEventListener('click', ()=>{
            modalGallery.classList.remove('active')
            document.body.classList.remove('fix')
        })
    }
    
    var mySVGsToInject = document.querySelectorAll('img.svg');
    
    if(mySVGsToInject !== null) {
        SVGInjector(mySVGsToInject);
    }
    
    var sliders = document.querySelectorAll(".js-slider");
    sliders.forEach(function (slider) {
      var slides = slider.querySelectorAll(".swiper-slide");
      slides.forEach(function (slide) {
        var allowed = slide.querySelector("picture").dataset.allowed ? slide.querySelector("picture").dataset.allowed.split(','): null;
        if (allowed) {
            allowed.forEach(function(mediaQuery) {
                slide.classList.add(`media-allowed-${mediaQuery}`);
            })
        }
      });
      mainSlider.updateSlides();
    });

    if(nav !== null) {
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 550) {
                if(nav.classList.contains('fix')) {
                    return
                } else {
                    nav.classList.add('fix')
                    nav.classList.add('fix-in')
                    setTimeout(()=>{nav.classList.remove('fix-in')}, 500)
                }
            } else {
                if(nav.classList.contains('fix')) {
                    nav.classList.add('fix-out')
                    setTimeout(()=>{nav.classList.remove('fix')}, 500)
                    setTimeout(()=>{nav.classList.remove('fix-out')}, 500)
                } else {
                    return
                }
            }
        })
    }

    window.addEventListener("DOMContentLoaded", function() {
        [].forEach.call( document.querySelectorAll('[data-phone-pattern]'), function(input) {
          var keyCode;
          function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (9__) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
              this.value = new_value;
            }
            if (event.type == "blur" && this.value.length < 5) {
              this.value = "";
            }
          }
      
          input.addEventListener("input", mask, false);
          input.addEventListener("focus", mask, false);
          input.addEventListener("blur", mask, false);
          input.addEventListener("keydown", mask, false);
      
        });
      
    });
}, false);