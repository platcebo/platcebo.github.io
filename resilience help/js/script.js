var sj;
$(document).ready(function() {
    $('.trening-slider__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        appendArrows: $('.trening-slider__nav'),
        appendDots: $('.trening-slider__nav')
    });
    $('.psih__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        appendArrows: $('.psih__nav'),
        appendDots: $('.psih__nav')
    });

    $('select').niceSelect();
    var SJ_setiings = {
    options: {
        hlw: true, // Height as width
        wlh: true, // Width as height
        hlt: true, // Width of the target element (target id is the same as for height)
        wlt: true, // Height of the target element (target id is the same as for width)
        alo: true, // All elements as one (height)
    },
    settings: {
        windowResize: true, 
        writeHystory: true 
    }
}
sj = new SJ(SJ_setiings);
});

let slideIndex = 1,
    slides = document.querySelectorAll('.header__slide'),
    dotsWrap = document.querySelector('.header__dots'),
    dots = document.querySelectorAll('.header__dots span'),
    molecule = document.querySelector('.header__molecule');

if(molecule !== null ) {
    function showSlide(a) {
        if ( a > slides.length) {
            slideIndex = 1
        } else if (a < 0) {
            slideIndex = slides.length;
        }
    
        slides.forEach((item)=> item.classList.remove('header__slide_active'))
        dots.forEach((item)=> item.classList.remove('active'))
    
    
        slides[slideIndex - 1].classList.add('header__slide_show');
        slides[slideIndex - 1].classList.add('header__slide_active');
        dots[slideIndex - 1].classList.add('active');
        setTimeout(()=>{
            slides[slideIndex - 1].classList.remove('header__slide_show');
        }, 1000)
    }
    
    molecule.classList.add('header__molecule_first')
    
    function deliteSlide(a) {
        slides[a].classList.add('header__slide_delite');
        setTimeout(()=> slides[a].classList.remove('header__slide_delite'), 3000,);
    }
    
    function plusSlide(n) {
        deliteSlide(slideIndex - 1)
        setTimeout(showSlide, 3000, slideIndex += n);
        if (slideIndex == 1 || slideIndex == 5) {
            molecule.classList.add('header__molecule_first')
            molecule.classList.remove('header__molecule_therd')
            molecule.classList.remove('header__molecule_second')
            molecule.classList.remove('header__molecule_four')
        } else if (slideIndex == 2) {
            molecule.classList.add('header__molecule_second')
            molecule.classList.remove('header__molecule_first')
            molecule.classList.remove('header__molecule_therd')
            molecule.classList.remove('header__molecule_four')
        } else if (slideIndex == 3) {
            molecule.classList.add('header__molecule_therd')
            molecule.classList.remove('header__molecule_second')
            molecule.classList.remove('header__molecule_first')
            molecule.classList.remove('header__molecule_four')
        }
        else if (slideIndex == 4) {
            molecule.classList.add('header__molecule_four')
            molecule.classList.remove('header__molecule_therd')
            molecule.classList.remove('header__molecule_second')
            molecule.classList.remove('header__molecule_first')
        }
    }
    
    function currentSlide(a) {
        deliteSlide(slideIndex - 1)
        setTimeout(showSlide, 3000, slideIndex = a);
    }
    
    showSlide(slideIndex);
      
    setInterval(plusSlide, 7000, 1);
    
    dotsWrap.addEventListener('click', function(Event) {
        for(let i = 0; i < dots.length + 1; i++) {
            if (Event.target.classList.contains('dot') && Event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    })
}

let c = 27,
    s = 0,
    t = 31,
    koef1 = 1,
    koef2 = 1,
    koef3 = 1,
    first = document.querySelector('.run-line__first'),
    second = document.querySelector('.run-line__second'),
    therd = document.querySelector('.run-line__therd');

if(first !== null) {
    let run = () =>{
        if (c < 65 && c > -20) {
            first.style.right = c + '%';
            c -= koef1 *0.5;
        } else if (c <= -20 || c >=65) {
            koef1*=-1;
            c -= koef1 *0.5;
        }
    } 
    let runS = () =>{
        if (s < 65 && s > -20) {
            second.style.right = s + '%';
            s -= koef2 *0.3;
        } else if (s <= -20 || s >=65) {
             koef2*=-1;
            s -= koef2 *0.3;
        }
    } 
    let runt = () =>{
        if (t < 65 && t > -20) {
            therd.style.right = t + '%';
            t -= koef3 *0.4;
        } else if (t <= -20 || t >=65) {
             koef3*=-1;
            t -= koef3 *0.4;
        }
    } 
    
    let runwrapper = document.querySelector('.run-line__wrapper');

    sliderWord = setInterval(()=> {
        runt();
        runS();
        run();
    }, 30) ;
    
    runwrapper.addEventListener('mouseover', ()=>{
        runt();
        runS();
        run();
        c = 27;
        s = 0;
        t = 31;
        clearInterval(sliderWord);
    })
    runwrapper.addEventListener('mouseout', ()=>{
        sliderWord = setInterval(()=> {
            runt();
            runS();
            run();
        }, 30) ;
    })
}

let targetCircle = document.querySelector('.result__pie');
    
if (targetCircle !== null) {
    let piespan = document.querySelector('.result__pie_name span'),
        PieNum = parseInt(piespan.innerHTML);

    let pieSum = ()=>{
            let n = 1;
            if(PieNum < 94 ) {
                PieNum += 1;
                piespan.innerHTML = PieNum;
            } else if (PieNum >= 94) {
                clearInterval(pieValue);
            }
        };
        
    let optionsCircle = {
        root: null,
        threshold: 0.5
    }
    let callbackCircle = function(entries, observerCircle){
        entries.forEach(entry => {  
            if (entry.isIntersecting) {
                document.querySelector('.result__pie').classList.add('active')
                pieValue = setInterval(()=> {
                    pieSum()
                }, 20) ;
            }
        })
    }
    let observerCircle = new IntersectionObserver(callbackCircle, optionsCircle)

    observerCircle.observe(targetCircle);
}

let targetFocus = document.querySelector('.result__focus');

if (targetFocus !== null) {
    let focusspan = document.querySelector('.result__focus_name span'),
        focusNum = parseInt(focusspan.innerHTML);

    let focusSum = ()=>{
            if(focusNum < 28 ) {
                focusNum += 1;
                focusspan.innerHTML = focusNum;
            } else if (focusNum >= 28) {
                clearInterval(focusValue);
            }
        };
        
    let optionsFocus = {
        root: null,
        threshold: 1
    }
    let callbackFocus = function(entries, observerFocus){
        entries.forEach(entry => {  
            if (entry.isIntersecting) {
                document.querySelector('.result__focus').classList.add('active')
                focusValue = setInterval(()=> {
                    focusSum()
                }, 40) ;
            }
        })
    }
    let observerFocus = new IntersectionObserver(callbackFocus, optionsFocus)

    observerFocus.observe(targetFocus);
}

let targetStress = document.querySelector('.result__stress');

if (targetStress !== null) {
    let stressspan = document.querySelector('.result__stress_name span'),
        stressNum = Number(stressspan.innerHTML);

    let stressSum = ()=>{
            if(stressNum < 28 ) {
                stressNum += 1;
                stressspan.innerHTML = stressNum / 10;
            } else if (stressNum >= 28) {
                clearInterval(stressValue);
            }
        };
        
    let optionsStress = {
        root: null,
        threshold: 1
    }
    let callbackStress = function(entries, observerStress){
        entries.forEach(entry => {  
            if (entry.isIntersecting) {
                document.querySelector('.result__stress').classList.add('active')
                stressValue = setInterval(()=> {
                    stressSum()
                }, 40) ;
            }
        })
    }
    let observerStress = new IntersectionObserver(callbackStress, optionsStress)

    observerStress.observe(targetStress);
}

let resourcesBtn = document.querySelector('.all-resources__tab_btn'),
    resources = document.querySelector('.all-resources__tab_wrapper');

if(resources !== null) {
    resourcesBtn.addEventListener('click', ()=>{
        resources.classList.toggle('active');
    })
}

let filterBtn = document.querySelector('.all-resources__filter_btn'),
    filter = document.querySelector('.all-resources__filter'),
    filterClose = document.querySelector('.all-resources__filter_close');

if(filter !== null) {
    filterBtn.addEventListener('click', ()=>{
        filter.classList.add('active');
    })
    filterClose.addEventListener('click', ()=>{
        filter.classList.remove('active');
    })
    filterClose.addEventListener('click', ()=>{
        filter.classList.remove('active');
    })
}

let modalEnter = document.querySelector('.modal-enter'),
    modalEnterBtn = document.querySelectorAll('.modal-enter__btn'),
    modalEnterClose = document.querySelector('.modal-enter__close');

if(modalEnter !== null) {
    modalEnterBtn.forEach((item)=>{
        item.addEventListener('click', (event)=>{
            event.preventDefault();
            modalEnter.classList.add('modal__active');
        })
    })
    modalEnterClose.addEventListener('click', ()=>{
        modalEnter.classList.remove('modal__active');
    })
}

let modalReg = document.querySelector('.modal-reg'),
    modalRegBtn = document.querySelectorAll('.modal-reg__btn'),
    modalRegClose = document.querySelector('.modal-reg__close');

if(modalReg !== null) {
    for(let i = 0; i < modalRegBtn.length; i++) {
        modalRegBtn[i].addEventListener('click', (event)=>{
            event.preventDefault();
            modalReg.classList.add('modal__active');
            modalEnter.classList.remove('modal__active')
        })
    }
    modalRegClose.addEventListener('click', ()=>{
        modalReg.classList.remove('modal__active');
    })
}

let catalogWrapper = document.querySelector('.modal-catalog'),
    catalogWaite = document.querySelector('.modal-catalog__btn_waite'),
    catalogdel = document.querySelector('.modal-catalog__btn_del');

if(catalogWaite !== null) {
    catalogWaite.addEventListener('mouseover', ()=>{
        catalogWrapper.classList.add('modal-catalog__waite')
    })
    catalogWaite.addEventListener('mouseout', ()=>{
        catalogWrapper.classList.remove('modal-catalog__waite')
    })
    catalogdel.addEventListener('mouseover', ()=>{
        catalogWrapper.classList.add('modal-catalog__del')
    })
    catalogdel.addEventListener('mouseout', ()=>{
        catalogWrapper.classList.remove('modal-catalog__del')
    })
}

let tab = document.querySelector('.all-blogs__tab'),
    tabLink = document.querySelectorAll('.all-blogs__tab_item'),
    tabWrapper = document.querySelectorAll('.all-blogs__article');

if(tab !== null) {
    function tabHide(n) {
        for(let i = n; i < tabWrapper.length; i++) {
            tabWrapper[i].classList.remove('all-blogs__article_active');
            tabLink[i].classList.remove('active');
        }
    }
    tabHide(1) 
    function tabShow(a) {
        if(!tabWrapper[a].classList.contains('active')) {
            tabWrapper[a].classList.add('all-blogs__article_active');
            tabLink[a].classList.add('active');
        }
    }
    tabShow(0)
    tab.addEventListener('click', (event)=>{
        let target = event.target;
        if (target && target.classList.contains('all-blogs__tab_item')) {
            for(let i = 0; i < tabLink.length; i++) {
                if (target == tabLink[i]) {
                    tabHide(0);
                    tabShow(i);
                    break;
                }
            }
        }
    })
}

let askBtn = document.querySelectorAll('.ask__button'),
    askWrapper = document.querySelectorAll('.ask__block');

if(askBtn !== null) {
    for(let i = 0; i < askBtn.length; i++) {
        askBtn[i].addEventListener('click', ()=>{
            askWrapper[i].classList.toggle('active');
        })
    }
}

let account = document.querySelector('.account__tab'),
    accountLink = document.querySelectorAll('.account__tab_link'),
    accountWrapper = document.querySelectorAll('.account__wrapper');

if(account !== null) {
    function accountHide(n) {
        for(let i = n; i < accountLink.length; i++) {
            accountWrapper[i].classList.remove('account__wrapper_active');
            accountLink[i].classList.remove('active');
        }
    }
    accountHide(1) 
    function accountShow(a) {
        if(!accountLink[a].classList.contains('active')) {
            accountWrapper[a].classList.add('account__wrapper_active');
            accountLink[a].classList.add('active');
        }
    }
    accountShow(0)
    account.addEventListener('click', (event)=>{
        let target = event.target;
        if (target && target.classList.contains('account__tab_link')) {
            for(let i = 0; i < accountLink.length; i++) {
                if (target == accountLink[i]) {
                    accountHide(0);
                    accountShow(i);
                    break;
                }
            }
        }
    })
}

let search = document.querySelector('.search__tab'),
    searchLink = document.querySelectorAll('.search__tab_link'),
    searchWrapper = document.querySelectorAll('.search__wrapper');

if(search !== null) {
    function searchHide(n) {
        for(let i = n; i < searchLink.length; i++) {
            searchWrapper[i].classList.remove('search__wrapper_active');
            searchLink[i].classList.remove('active');
        }
    }
    searchHide(1) 
    function searchShow(a) {
        if(!searchLink[a].classList.contains('active')) {
            searchWrapper[a].classList.add('search__wrapper_active');
            searchLink[a].classList.add('active');
        }
    }
    searchShow(0)
    search.addEventListener('click', (event)=>{
        let target = event.target;
        if (target && target.classList.contains('search__tab_link')) {
            for(let i = 0; i < searchLink.length; i++) {
                if (target == searchLink[i]) {
                    searchHide(0);
                    searchShow(i);
                    break;
                }
            }
        }
    })
}
let donate = document.querySelector('.donate-finance__tab'),
    donateLink = document.querySelectorAll('.donate-finance__tab_link'),
    donateWrapper = document.querySelectorAll('.donate-finance__container'),
    donateFinance = document.querySelector('.donate-finance');

if(donateFinance !== null) {
    if (donateWrapper[0].classList.contains('donate-finance__container_violet')) {
        donateFinance.classList.remove('donate-finance__ask')
    } else {
        donateFinance.classList.add('donate-finance__ask')
    }
    function donateHide(n) {
        for(let i = n; i < donateLink.length; i++) {
            donateWrapper[i].classList.remove('donate-finance__container_active');
            donateLink[i].classList.remove('active');
        }
    }
    donateHide(1) 
    function donateShow(a) {
        if(!donateLink[a].classList.contains('active')) {
            donateWrapper[a].classList.add('donate-finance__container_active');
            donateLink[a].classList.add('active');
            if (donateWrapper[a].classList.contains('donate-finance__container_violet')) {
                donateFinance.classList.remove('donate-finance__ask')
            } else {
                donateFinance.classList.add('donate-finance__ask')
            }
        }
    }
    donateShow(0)
    donate.addEventListener('click', (event)=>{
        let target = event.target;
        if (target && target.classList.contains('donate-finance__tab_link')) {
            for(let i = 0; i < donateLink.length; i++) {
                if (target == donateLink[i]) {
                    donateHide(0);
                    donateShow(i);
                    break;
                }
            }
        }
    })
}

let modalCatalog = document.querySelector('.modal-catalog'),
    modalCatalogBtn = document.querySelectorAll('.modal-catalog__btn'),
    modalCatalogClose = document.querySelector('.modal-catalog__close');

if(modalCatalog !== null) {
    for(let i = 0; i < modalCatalogBtn.length; i++) {
        modalCatalogBtn[i].addEventListener('click', (event)=>{
            event.preventDefault();
            modalCatalog.classList.add('modal__active');
        })
    }
    modalCatalogClose.addEventListener('click', ()=>{
        modalCatalog.classList.remove('modal__active');
    })
}

let modalconfirmation = document.querySelector('.modal-confirmation'),
    modalconfirmationBtn = document.querySelectorAll('.modal-confirmation__btn'),
    modalconfirmationClose = document.querySelector('.modal-confirmation__close');

if(modalconfirmation !== null) {
    for(let i = 0; i < modalconfirmationBtn.length; i++) {
        modalconfirmationBtn[i].addEventListener('click', (event)=>{
            event.preventDefault();
            modalconfirmation.classList.add('modal__active');
        })
    }
    modalconfirmationClose.addEventListener('click', ()=>{
        modalconfirmation.classList.remove('modal__active');
    })
}

let modaltrainingcond = document.querySelector('.modal-trainingcond'),
    modaltrainingcondBtn = document.querySelectorAll('.modal-trainingcond__btn'),
    modaltrainingcondClose = document.querySelector('.modal-trainingcond__close');

if(modaltrainingcond !== null) {
    for(let i = 0; i < modaltrainingcondBtn.length; i++) {
        modaltrainingcondBtn[i].addEventListener('click', (event)=>{
            event.preventDefault();
            modaltrainingcond.classList.add('modal__active');
        })
    }
    modaltrainingcondClose.addEventListener('click', ()=>{
        modaltrainingcond.classList.remove('modal__active');
    })
}


let modalconf = document.querySelector('.modal-conf'),
    modalconfBtn = document.querySelectorAll('.modal-conf__btn'),
    modalconfClose = document.querySelector('.modal-conf__close');

if(modalconf !== null) {
    for(let i = 0; i < modalconfBtn.length; i++) {
        modalconfBtn[i].addEventListener('click', (event)=>{
            event.preventDefault();
            modalconf.classList.add('modal__active');
        })
    }
    modalconfClose.addEventListener('click', ()=>{
        modalconf.classList.remove('modal__active');
    })
}
let modaldelite = document.querySelector('.modal-delite'),
    modaldeliteBtn = document.querySelectorAll('.modal-delite__btn'),
    modaldeliteClose = document.querySelector('.modal-delite__close');

if(modaldelite !== null) {
    for(let i = 0; i < modaldeliteBtn.length; i++) {
        modaldeliteBtn[i].addEventListener('click', (event)=>{
            event.preventDefault();
            modaldelite.classList.add('modal__active');
        })
    }
    modaldeliteClose.addEventListener('click', ()=>{
        modaldelite.classList.remove('modal__active');
    })
}
let modalcatalog = document.querySelector('.modal-catalog'),
    modalcatalogBtn = document.querySelectorAll('.modal-catalog__btn'),
    modalcatalogClose = document.querySelector('.modal-catalog__close');

if(modalcatalog !== null) {
    for(let i = 0; i < modalcatalogBtn.length; i++) {
        modalcatalogBtn[i].addEventListener('click', (event)=>{
            event.preventDefault();
            modalcatalog.classList.add('modal__active');
        })
    }
    modalcatalogClose.addEventListener('click', ()=>{
        modalcatalog.classList.remove('modal__active');
    })
}
let modalorder = document.querySelector('.modal-order'),
    modalorderBtn = document.querySelectorAll('.modal-order__btn'),
    modalorderClose = document.querySelector('.modal-order__close');

if(modalorder !== null) {
    for(let i = 0; i < modalorderBtn.length; i++) {
        modalorderBtn[i].addEventListener('click', (event)=>{
            event.preventDefault();
            modalorder.classList.add('modal__active');
        })
    }
    modalorderClose.addEventListener('click', ()=>{
        modalorder.classList.remove('modal__active');
    })
}
let modaldonate = document.querySelector('.modal-donate'),
    modaldonateBtn = document.querySelectorAll('.modal-donate__btn'),
    modaldonateClose = document.querySelector('.modal-donate__close');

if(modaldonate !== null) {
    for(let i = 0; i < modaldonateBtn.length; i++) {
        modaldonateBtn[i].addEventListener('click', (event)=>{
            event.preventDefault();
            modaldonate.classList.add('modal__active');
        })
    }
    modaldonateClose.addEventListener('click', ()=>{
        modaldonate.classList.remove('modal__active');
    })
}
let modalrequest = document.querySelector('.modal-request'),
    modalrequestBtn = document.querySelectorAll('.modal-request__btn'),
    modalrequestClose = document.querySelector('.modal-request__close');

if(modalrequest !== null) {
    for(let i = 0; i < modalrequestBtn.length; i++) {
        modalrequestBtn[i].addEventListener('click', (event)=>{
            event.preventDefault();
            modalrequest.classList.add('modal__active');
        })
    }
    modalrequestClose.addEventListener('click', ()=>{
        modalrequest.classList.remove('modal__active');
    })
}

let navMob = document.querySelector('.nav-mobile');

if(navMob !== null) {
    window.addEventListener('scroll', function() {
        if(window.scrollY > 300) {
            navMob.classList.add('active')
        } else {
            navMob.classList.remove('active')
        }
    });      
}

let savePoint = document.querySelectorAll('.donate-finance__save_item'),
    saveMessege = document.querySelector('.window-save'),
    saveText = document.querySelectorAll('.donate-finance__save_text');

if(savePoint !== null) {
    for(let i = 0; i < savePoint.length; i++) {
        savePoint[i].addEventListener('click', ()=>{
            navigator.clipboard.writeText(saveText[i].innerHTML)
            saveMessege.classList.add('active')
            setTimeout(()=>{saveMessege.classList.remove('active')}, 2000)
        })
    }
}


// new

let navBtn = document.querySelector('.nav__button');

if(navBtn !== null) {
    setInterval(()=>{
        navBtn.classList.add('move');
        setTimeout(()=>{
            navBtn.classList.remove('move');
        }, 2000);
    }, 10000)
}




jQuery(document).ready(function(){
    jQuery(".nice-select span.current").each(function(){
    if( jQuery(this).text() =='Оберіть'){jQuery(this).addClass('nice-select_empty-select')}
    else{jQuery(this).removeClass('nice-select_empty-select')}
});

jQuery("select").each(function(){
    jQuery(this).on('change',function(){
        jQuery(this).next().find("span.current").removeClass('nice-select_empty-select');
    });
});
});

function eyeFunction() {
  var x = document.getElementById("reg_password");
  var y = document.getElementById("password-eye");
  if (x.type === "password") {
    x.type = "text";
    jQuery(y).addClass('password-eye__vis');
  } else {
    x.type = "password";
    jQuery(y).removeClass('password-eye__vis');
  }
}

function eyeconfFunction() {
  var x = document.getElementById("reg_password2");
  var y = document.getElementById("password-eye2");
  if (x.type === "password") {
    x.type = "text";
    jQuery(y).addClass('password-eye__vis2');
  } else {
    x.type = "password";
    jQuery(y).removeClass('password-eye__vis2');
  }
}
function eyeenterFunction() {
  var x = document.getElementById("password");
  var y = document.getElementById("password-eye3");
  if (x.type === "password") {
    x.type = "text";
    jQuery(y).addClass('password-eye__vis3');
  } else {
    x.type = "password";
    jQuery(y).removeClass('password-eye__vis3');
  }
}


let reportBtn = document.querySelectorAll('.activity-report__info'),
    reportItem = document.querySelectorAll('.activity-report__item');

if(reportItem !== null) {
    reportBtn.forEach((item, i)=>{
        item.addEventListener('click', ()=>{
            for(let b = 0; b < reportBtn.length; b++) {
                reportItem[b].classList.remove('active')
            }
            reportItem[i].classList.add('active')
        })
    })
}

// Perform AJAX login/register on form submit
	jQuery('form#loginform').on('submit', function (e) {
        //if (!jQuery(this).valid()) return false;
        //$('p.status', this).show().text(ajax_auth_object.loadingmessage);
		
		action = 'ajaxlogin';
		username = 	jQuery('form#loginform #username').val();
		password = jQuery('form#loginform #password').val();
		email = '';
		security = jQuery('form#loginform #ajax-login-nonce').val();
		
		
		ctrl = jQuery(this);
		jQuery.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_auth_object.ajaxurl,
            data: {
                'action': action,
                'username': username,
                'password': password,
				'email': email,
                'security': security
            },
            success: function (data) {
				if (data.loggedin == true) {
                    document.location.href = ajax_auth_object.redirecturl;
                }else{
                    jQuery('div#errormessage', ctrl).text(data.message);
                    e.preventDefault();
                }
            }
        });
        e.preventDefault();
    });
    
    // Perform AJAX login/register on form submit
	jQuery('form#registerform').on('submit', function (e) {
		if ($(this).attr('id') == 'registerform') {
			action = 'ajaxregister';
			username = jQuery('#registerform #reg_email').val();
			password = jQuery('#registerform #reg_password').val();
			password2 = jQuery('#registerform #reg_password2').val();
        	email = jQuery('#registerform #reg_email').val();
        	security = jQuery('#signonsecurity').val();	
		}  
		ctrl = jQuery(this);
		jQuery.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_auth_object.ajaxurl,
            data: {
                'action': action,
                'username': username,
                'password': password,
                'password2': password2,
				'email': email,
                'security': security
            },
            success: function (data) {
				if (data.loggedin == true) {
                    document.location.href = ajax_auth_object.redirecturl;
                }else{
                    jQuery('div#errormessage', ctrl).text(data.message);
                    e.preventDefault();
                }
            }
        });
        e.preventDefault();
    });
    
    
let favBtn = document.querySelectorAll('.is_user_logged_in'),
    favAdd = document.querySelector('.fav-message__add'),
    favRemove = document.querySelector('.fav-message__remove');

if(favBtn !== null) {
    favBtn.forEach((item)=>{
        item.addEventListener('click', ()=>{
            if(item.classList.contains('active')) {
                favRemove.classList.add('active')
                setTimeout(()=>{favRemove.classList.remove('active')}, 2000)
            } else {
                favAdd.classList.add('active')
                setTimeout(()=>{favAdd.classList.remove('active')}, 2000)
            }
        })
    })
}   


