window.onload = function() {
    $(document).ready(function() {
        $('select').niceSelect();
    });
    
    var swiper = new Swiper(".slider-top__slider", {
        slidesPerView: "auto",
        spaceBetween: 28,
        navigation: {
            nextEl: ".swiper-button-next-top",
            prevEl: ".swiper-button-prev-top",
            hide: false,
        },
        breakpoints: {
            1441: {
                spaceBetween: 40,
            },
        },
    });
    if(document.documentElement.clientWidth > 600) {
        var swiper = new Swiper(".slider__slider", {
            slidesPerView: "auto",
            spaceBetween: 28,
            navigation: {
                nextEl: ".swiper-button-next-slider",
                prevEl: ".swiper-button-prev-slider",
                hide: false,
            },
            scrollbar: {
                el: ".swiper-scrollbar",
                hide: false,
            },
            breakpoints: {
                1441: {
                    spaceBetween: 40,
                },
            },
        });
        var swiper = new Swiper(".slider-product__slider", {
            slidesPerView: "auto",
            spaceBetween: 28,
            navigation: {
                nextEl: ".swiper-button-next-slider",
                prevEl: ".swiper-button-prev-slider",
                hide: false,
            },
            scrollbar: {
                el: ".swiper-scrollbar",
                hide: false,
            },
            breakpoints: {
                1441: {
                    spaceBetween: 48,
                },
            },
        });
        var swiper = new Swiper(".slider-cart__slider", {
            slidesPerView: 2,
            spaceBetween: 28,
            navigation: {
                nextEl: ".swiper-button-next-cart",
                prevEl: ".swiper-button-prev-cart",
                hide: false,
            },
            scrollbar: {
                el: ".swiper-scrollbar",
                hide: false,
            },
            breakpoints: {
                1441: {
                    spaceBetween: 40,
                    slidesPerView: 4,
                },
                951: {
                    slidesPerView: 4,
                    spaceBetween: 28,
                },
            },
        });
    } 
    var swiper = new Swiper(".add-cart__swiper", {
        slidesPerView: "auto",
        spaceBetween: 16,
        navigation: {
            nextEl: ".swiper-button-next-add",
            prevEl: ".swiper-button-prev-add",
            hide: false,
        },
        breakpoints: {
            1441: {
                spaceBetween: 31,
            },
            601: {
                spaceBetween: 28,
            },
        },
    });
    var swiper = new Swiper(".nav__history_swiper", {
        slidesPerView: 2,
        spaceBetween: 16,
        navigation: {
            nextEl: ".swiper-button-next-history",
            prevEl: ".swiper-button-prev-history",
            hide: false,
        },
        breakpoints: {
            1441: {
                spaceBetween: 40,
                slidesPerView: 3,
            },
            701: {
                slidesPerView: 3,
                spaceBetween: 28,
            },
        },
    });
    var swiper = new Swiper(".modal-features__slider", {
        slidesPerView: 1,
        spaceBetween: 48,
        navigation: {
            nextEl: ".swiper-button-next-modal",
            prevEl: ".swiper-button-prev-modal",
            hide: false,
        },
    });
    if(document.documentElement.clientWidth > 900) {
        var swiper = new Swiper(".modal-preview__slider", {
            slidesPerView: "auto",
            spaceBetween: 40,
            centeredSlides: true,
            navigation: {
                nextEl: ".swiper-button-next-prev",
                prevEl: ".swiper-button-prev-prev",
                hide: false,
            },
            breakpoints: {
                1441: {
                    spaceBetween: 64,
                },
            },
        });
    }
    
    let nav = document.querySelector('.nav'),
        navHumburger = document.querySelector('.nav__humburger');
    
    if(nav !== null) {
        navHumburger.addEventListener('click', ()=>{
            nav.classList.toggle('active');
        })
    }
    
    let navDel = document.querySelector('.nav__delivery'),
        navAdvant = document.querySelector('.nav__advantages');
    
    if(navAdvant !== null) {
        navDel.addEventListener('click', ()=>{
            navAdvant.classList.toggle('active');
            navDel.classList.toggle('active');
            if(navDel.classList.contains('active')) {
                for(let i = 0; i< navDrop.length; i++) {
                    navDrop[i].classList.remove('active')
                }
                nav.classList.remove('nav__search_active')
                navSearchOverflow.classList.remove('active')
                cartAdd.classList.remove('add-cart__active');
                cartHover.classList.remove('active');
            }
        })
    }
    
    let navMenu = document.querySelector('.nav__menu'),
        navDropBtn = document.querySelectorAll('.nav__drop_btn'),
        navDrop = document.querySelectorAll('.nav__drop');
    
    if(navMenu !== null) {
        for(let i = 0; i< navDrop.length; i++) {
            navDropBtn[i].addEventListener('mouseover', ()=>{
                // change
                if(navAdvant.classList.contains('active')) {
                    return
                } else {
                    navDrop[i].classList.add('active')
                    navAdvant.classList.remove('active');
                    navDel.classList.remove('active');
                    nav.classList.remove('nav__search_active')
                    navSearchOverflow.classList.remove('active')
                    cartAdd.classList.remove('add-cart__active');
                    cartHover.classList.remove('active');
                }
                // end
            })
        }
        for(let i = 0; i< navDrop.length; i++) {
            navDropBtn[i].addEventListener('mouseleave', ()=>{
                navDrop[i].classList.remove('active')
            })
        }
    }
    
    let navSearch = document.querySelector('.nav__search'),
        navSearchOverflow = document.querySelector('.nav__history_overflow'),
        navSearchInput = document.querySelector('.nav__search_input input'),
        navSearchHistory = document.querySelector('.nav__history'),
        footer = document.querySelector('.footer'),
        navSearchClose = document.querySelector('.nav__search_close');
    
    if(navSearch !== null) {
        // console.log(document.documentElement.scrollHeight)
        // console.log(footer.getBoundingClientRect().y + footer.getBoundingClientRect().height)
        navSearchOverflow.style.height = document.documentElement.scrollHeight + 'px'
        navSearch.addEventListener('click',()=>{
            nav.classList.add('nav__search_active')
            navSearchOverflow.classList.add('active')
            for(let i = 0; i< navDrop.length; i++) {
                navDrop[i].classList.remove('active')
            }
            navAdvant.classList.remove('active');
            navDel.classList.remove('active');
            cartAdd.classList.remove('add-cart__active');
            cartHover.classList.remove('active');
        })
        navSearchOverflow.addEventListener('click',()=>{
            nav.classList.remove('nav__search_active')
            navSearchOverflow.classList.remove('active')
            navSearchHistory.classList.remove('active')
            navSearchInput.value = ''
        })
        navSearchClose.addEventListener('click', ()=>{
            navSearchInput.value = ''
            navSearchHistory.classList.remove('active')
        })
        navSearchInput.addEventListener('input', ()=>{
            if(navSearchInput.value !== '') {
                navSearchHistory.classList.add('active')
            } else if (navSearchInput.value == '') {
                navSearchHistory.classList.remove('active')
            }
        })
    }
    
    let filterOpen = document.querySelector('.categories__filter_open'),
        filterClose = document.querySelector('.categories__filter_close'),
        filter = document.querySelector('.categories__filter_wrapper')
    
    if(filter !==null) {
        filterOpen.addEventListener('click',()=>{
            filter.classList.add('active');
        })
        filterClose.addEventListener('click',()=>{
            filter.classList.remove('active');
        })
    }
    
    let cartAddOpen = document.querySelectorAll('.add-cart__open'),
        cartAddClose = document.querySelector('.add-cart__close'),
        cartAdd = document.querySelector('.add-cart');
    
    if(cartAddOpen !== null) {
        cartAddOpen.forEach((item)=>{
            item.addEventListener('click',(event)=>{
                event.preventDefault()
                cartAdd.classList.add('add-cart__active');
                // setInterval(()=>{cartAdd.classList.remove('add-cart__active')}, 5000)
                for(let i = 0; i< navDrop.length; i++) {
                    navDrop[i].classList.remove('active')
                }
                navAdvant.classList.remove('active');
                navDel.classList.remove('active');
                cartHover.classList.remove('active');
                nav.classList.remove('nav__search_active')
                navSearchOverflow.classList.remove('active')
            })
        })
        cartAddClose.addEventListener('click',()=>{
            cartAdd.classList.remove('add-cart__active');
        })
    };
    
    let productTab = document.querySelectorAll('.product__tab_btn');
    
    if(productTab !== null) {
        productTab.forEach((item)=>{
            item.addEventListener('click',()=>{
                item.classList.toggle('active')
            })
        })
    }
    
    let productSlider = document.querySelector('.product__slider'),
        productPrev = document.querySelector('.product__prev'),
        productSlide = document.querySelectorAll('.product__slider_slide');
    
    if(productSlider !== null && document.documentElement.clientWidth < 601) {
        productSlider.classList.remove('product__slider_desc')
        productPrev.classList.add('swiper')
        productPrev.classList.add('mySwiper')
        productSlider.classList.add('swiper-wrapper')
        productSlide.forEach((item)=>{item.classList.add('swiper-slide')})
        var swiper = new Swiper(".product__prev", {
            slidesPerView: 1,
            spaceBetween: 28,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                hide: false,
            },
        });
    }
    
    let productSizeBtn = document.querySelector('.product-size__btn'),
        productSizeClose = document.querySelector('.product-size__close'),
        productSize = document.querySelector('.product-size'),
        productSizeOverflow = document.querySelector('.product-size__overflow');
    
    if(productSize !== null) {
        productSizeBtn.addEventListener('click', (e)=>{
            e.preventDefault()
            productSize.classList.add('active')
        })
        productSizeClose.addEventListener('click', ()=>{
            productSize.classList.remove('active')
        })
        productSizeOverflow.addEventListener('click', ()=>{
            productSize.classList.remove('active')
        })
    }
    
    let featuresBtn = document.querySelectorAll('.modal-features__btn'),
        featuresClose = document.querySelector('.modal-features__close'),
        features = document.querySelector('.modal-features'),
        featuresOverflow = document.querySelector('.modal-features__overflow');
    
    if(features !== null) {
        featuresBtn.forEach((item)=>{
            item.addEventListener('click', (e)=>{
                e.preventDefault()
                features.classList.add('active')
            })
        })
        featuresClose.addEventListener('click', ()=>{
            features.classList.remove('active')
        })
        featuresOverflow.addEventListener('click', ()=>{
            features.classList.remove('active')
        })
    }
    
    let navCartOverflow = document.querySelector('.nav__cart_overflow'),
        navContainer = document.querySelector('.nav__container');
    
    if(navCartOverflow !== null) {
        navCartOverflow.style.height = navContainer.clientHeight + 'px'
    }
    
    let cartHoverOpen = document.querySelector('.nav__cart'),
        cartHover = document.querySelector('.cart-hover');
    
    if(cartHover !== null) {
        // change
        let navHight = nav.clientHeight;
    
        cartHover.style.top = navHight + 'px';

        isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        };

        if (isMobile.any()) {
            nav.addEventListener('click',()=>{
                if(cartHover.classList.contains('active')){
                    cartHover.classList.remove('active');
                    navCartOverflow.classList.remove('active')
                } else {
                    cartHover.classList.add('active');
                    for(let i = 0; i< navDrop.length; i++) {
                        navDrop[i].classList.remove('active')
                    }
                    navAdvant.classList.remove('active');
                    navDel.classList.remove('active');
                    cartAdd.classList.remove('add-cart__active');
                    nav.classList.remove('nav__search_active')
                    navSearchOverflow.classList.remove('active')
                    navCartOverflow.classList.add('active')
                }
            })
        }  else {
            cartHoverOpen.addEventListener('mouseenter',()=>{
                cartHover.classList.add('active');
                for(let i = 0; i< navDrop.length; i++) {
                    navDrop[i].classList.remove('active')
                }
                navAdvant.classList.remove('active');
                navDel.classList.remove('active');
                cartAdd.classList.remove('add-cart__active');
                nav.classList.remove('nav__search_active')
                navSearchOverflow.classList.remove('active')
                navCartOverflow.classList.add('active')
            })
            nav.addEventListener('mouseleave',()=>{
                cartHover.classList.remove('active');
                navCartOverflow.classList.remove('active')
            })
        }   
        //    
    }
    
    let productInput = document.querySelectorAll('.product__size input'),
        productBtn = document.querySelector('.product__price_btn');
    
    if(productInput !== null) {
        productInput.forEach((item)=>{
            item.addEventListener('input', ()=>{
                if(item.checked) {
                    productBtn.classList.remove('product__price_dis')
                } else {
                    productBtn.classList.add('product__price_dis')
                }
            })
        })
    }
    
    let checkoutInput = document.querySelectorAll('.checkout__method_label input'),
        // checkoutGoogle = document.querySelectorAll('.checkout__google'),
        checkoutBtn = document.querySelector('.checkout__btn');
    
    if(checkoutInput !== null) {
        checkoutInput.forEach((item)=>{
            item.addEventListener('input', ()=>{
                if(item.classList.contains('checkout__stripe')) {
                    checkoutBtn.classList.add('checkout__btn_stripe')
                } else {
                    checkoutBtn.classList.remove('checkout__btn_stripe')
                }
                if(item.classList.contains('checkout__google')) {
                    checkoutBtn.classList.add('checkout__btn_google')
                } else {
                    checkoutBtn.classList.remove('checkout__btn_google')
                }
            })
        })
    }
    
    // let productBlock = document.querySelector('.product__block'),
    //     productContainer = document.querySelector('.product__block_fixed');
    
    // if(productBlock !== null && document.documentElement.clientWidth > 600) {
    //     productContainer.style.minHeight = productBlock.clientHeight + 'px'
    //     productBlock.style.width = productContainer.clientWidth + 'px'
    //     if(productContainer.getBoundingClientRect().top <= 20 &&
    //     productContainer.clientHeight - productBlock.clientHeight + productContainer.getBoundingClientRect().top >= 20) {
    //         productBlock.style.top = 20 + 'px'
    //     } else if (productContainer.getBoundingClientRect().top > 20) {
    //         productBlock.style.top = productContainer.getBoundingClientRect().top + 'px'
    //     } else if (productContainer.clientHeight - productBlock.clientHeight + productContainer.getBoundingClientRect().top < 20 ) {
    //         productBlock.style.top = productContainer.getBoundingClientRect().bottom - productBlock.clientHeight  + 'px'
    //     }
    //     window.addEventListener('scroll', ()=>{
    //         console.log(productContainer.clientHeight - productBlock.clientHeight + productContainer.getBoundingClientRect().top)
    //         if(productContainer.getBoundingClientRect().top <= 20 &&
    //         productContainer.clientHeight - productBlock.clientHeight + productContainer.getBoundingClientRect().top >= 20) {
    //             productBlock.style.top = 20 + 'px'
    //             productTab.forEach((item)=>{item.classList.remove('active')})
    //         } else if (productContainer.getBoundingClientRect().top > 20) {
    //             productBlock.style.top = productContainer.getBoundingClientRect().top + 'px'
    //         } else if (productContainer.clientHeight - productBlock.clientHeight + productContainer.getBoundingClientRect().top < 20 ) {
    //             productBlock.style.top = productContainer.getBoundingClientRect().bottom - productBlock.clientHeight  + 'px'
    //         }
    //     })
    // }
    
    let modalPrev = document.querySelector('.modal-preview'),
        modalPrevBtn = document.querySelectorAll('.modal-preview__btn'),
        modalPrevClose = document.querySelector('.modal-preview__close');
    
    if(modalPrev !== null) {
        modalPrevBtn.forEach((item)=>{
            item.addEventListener('click',()=>{
                modalPrev.classList.add('active')
            })
        })
        modalPrevClose.addEventListener('click',()=>{
            modalPrev.classList.remove('active')
        })
    }
    
    let openBtn = document.querySelectorAll('.open__btn'),
        open = document.querySelectorAll('.open');
    
    if(open !== null) {
        openBtn.forEach((item, i)=>{
            item.addEventListener('click',()=>{
                open[i].classList.toggle('open__active')
            })
        })
    }
    
    let inputWrapper = document.querySelectorAll('.checkout__input_req'),
        inputVal = document.querySelectorAll('.checkout__val'),
        inputForm = document.querySelector('.checkout__container');
    
    // change
    if(inputForm !== null) {
    // 
        function inputClear() {
            for(let i = 0; i < inputVal.length; i++) {
                inputVal[i].classList.remove('error')
                inputWrapper[i].classList.remove('checkout__input_req_error')
            }
        }
        function inputError(a) {
            inputVal[a].classList.add('error')
            inputWrapper[a].classList.add('checkout__input_req_error')
        }
        inputForm.addEventListener('submit', (e)=>{
            e.preventDefault()
            inputClear()
            for(let i = 0; i < inputVal.length; i++) {
                if(inputVal[i].value == '') {
                    inputError(i)
                }
            }
        })
    }

    let checkButton = document.querySelector('.checkout__more_btn span.another_plus'),
        checkBtnMore = document.querySelector('.checkout__more_btn');

    if (checkBtnMore !== null) {
        checkButton.addEventListener('click', ()=>{
            checkBtnMore.classList.toggle('checkout__more_active')
        })
    }

    // new

    let productPng = document.querySelectorAll('.product__png div'),
        productHover = document.querySelectorAll('.product__img_hover');

    if(productPng !== null) {
        productPng.forEach((item, i)=>{
            item.addEventListener('click', ()=>{
                productHover.forEach(item => item.classList.remove('active'))
                productHover[i].classList.add('active')
            })
        })
    }
    // 
}