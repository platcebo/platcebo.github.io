$(document).ready(function(){
    $('.price-slider__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: true,
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 601,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            },
        ]        
    });
    $('.work-slider__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: true,
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 601,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            },
        ]        
    });
    $('.comment__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                    centerMode: true,
                    variableWidth: true
                }
            },
            {
                breakpoint: 601,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                    centerMode: false,
                    variableWidth: false
                }
            },
        ]        
    });
    if (window.innerWidth <= 601) {
        $('.stage__wrapper').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,       
        });
    }
    $('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
    $(function(){
        $("input#phone").mask("8(999) 999-9999");
    });
});

let questBtn = document.querySelectorAll('.quest__name'),
    questBlock = document.querySelectorAll('.quest__block');

if(questBlock !== null) {
    questBtn.forEach((item, i)=>{
        item.addEventListener('click', ()=>{
            questBlock[i].classList.toggle('active')
        })
    })
}

let nav = document.querySelector('.nav'),
    navHumburger = document.querySelector('.nav__humburger');

if(nav !== null) {
    navHumburger.addEventListener('click', ()=>{
        nav.classList.toggle('active')
    })
}

let modal = document.querySelector('.modal'),
    modalBtn = document.querySelectorAll('.modal__btn'),
    modalclose = document.querySelector('.modal__close'),
    modalOverflow = document.querySelector('.modal__overflow');

if(modalBtn !== null) {
    modalBtn.forEach((item)=>{
        item.addEventListener('click', ()=>{
            modal.classList.add('modal__active')
        })
    })
    modalOverflow.addEventListener('click', ()=>{
        modal.classList.remove('modal__active')
    })
    modalclose.addEventListener('click', ()=>{
        modal.classList.remove('modal__active')
    })
}

let pageArrow = document.querySelector('.page-arrow');

if(pageArrow !== null) {
    window.addEventListener('scroll', ()=>{
        let scroll = window.pageYOffset;

        if(scroll > 1000) {
            pageArrow.classList.add('active')
        } else {
            pageArrow.classList.remove('active')
        }
    })
    function scrollToTop () {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -100); 
            setTimeout(scrollToTop, 0); 
        }
    }
    pageArrow.addEventListener("click", scrollToTop)
}

let needBtn = document.querySelector('.need__btn'),
    needWrapper = document.querySelector('.need__info');

if(needWrapper !== null) {
    needBtn.addEventListener('click', ()=>{
        if(needWrapper.classList.contains('active')) {
            needBtn.innerHTML = 'Развернуть'
            needWrapper.classList.remove('active')
        } else {
            needBtn.innerHTML = 'Свернуть'
            needWrapper.classList.add('active')
        }
    })
    if (window.innerWidth > 1024) {
        if(needWrapper.clientHeight >= 605) {
            needBtn.classList.add('active')
        } else {
            needBtn.classList.remove('active')
        }
    } else {
        if(needWrapper.clientHeight >= 290) {
            needBtn.classList.add('active')
        } else {
            needBtn.classList.remove('active')
        }
    }
} 

var fileWrap = document.querySelectorAll('.input__file_label input'),
    filePrev = document.querySelectorAll('.input__file_result');

if(fileWrap !== null) {
    let files = [];
    fileWrap.forEach((item)=>{
        item.addEventListener('change', (event)=>{
            if(!event.target.files.length) {
                return
            } 

            files = Array.from(event.target.files);

            filePrev.forEach((item)=>item.innerHTML = '')

            files.forEach(file =>{
                let reader = new FileReader();
            
                reader.onload = ev =>{
                    filePrev.forEach((item)=>{
                        item.insertAdjacentHTML('afterbegin', `
                            <p class="input__file_item">${file.name}<span data-name="${file.name}"></span></p>
                        `)
                    })
                }

                reader.readAsDataURL(file)
            })


        })
    })

    filePrev.forEach((item)=>{
        item.addEventListener('click', function (event){
            if(!event.target.dataset.name) {
                return
            }
    
            var {name} = event.target.dataset
            files = files.filter(file => file.name !== name) 
    
            const block = item
            .querySelector(`[data-name="${name}"]`)
            .closest('.input__file_item');
    
            filePrev.forEach((item)=>item.innerHTML = '')

            files.forEach(file =>{
                let reader = new FileReader();
            
                reader.onload = ev =>{
                    filePrev.forEach((item)=>{
                        item.insertAdjacentHTML('afterbegin', `
                            <p class="input__file_item">${file.name}<span data-name="${file.name}"></span></p>
                        `)
                        console.log(file)
                    })
                }

                reader.readAsDataURL(file)
            })
        })
    })
}