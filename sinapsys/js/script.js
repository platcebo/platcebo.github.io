$(document).ready(function(){
    $('.header__slider').slick({
        dots: true,
        infinite: true,
        fade: true,
        arrows: false,
    });
    $('.sert__wrapper').slick({
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3
    });
});

let language = document.querySelector('.nav__language_overflow'),
    languageList = document.querySelector('.nav__language ul');

if(language !== null) {
    language.addEventListener('click', ()=>{
        languageList.classList.toggle('active');
    })
    window.addEventListener('click', (event)=>{
        let target = event.target

        // if( !target.classList.contains('nav__language_list') || !target.classList.contains('nav__language_point')) {
        //     languageList.classList.remove('active');
        // }
    })
    document.addEventListener('click', (e)=>{
        let target = e.target;
        let its_menu = target == languageList || languageList.contains(target);
        let its_hamburger = target == language;
        let menu_is_active = languageList.classList.contains('active');
        
        if (!its_menu && !its_hamburger && menu_is_active) {
            languageList.classList.remove('active');
        }
    })
}

let nav = document.querySelector('.nav'),
    navHumburger = document.querySelector('.nav__humburger');

if(nav !== null) {
    navHumburger.addEventListener('click', ()=>{
        nav.classList.toggle('nav__active')
    })
}

let cookie = document.querySelector('.cookie'),
    cookieClose = document.querySelectorAll('.cookie__remove');

if(cookie !==null) {
    setTimeout(()=>{
        cookie.classList.add('active');
    }, 3000)

    cookieClose.forEach((item)=>{
        item.addEventListener('click',()=>{
            cookie.classList.remove('active');
        })
    })
}

let modal = document.querySelector('.modal-form'),
    modalBtn = document.querySelector('.modal-form__btn'),
    modalOverflow = document.querySelector('.modal-form__overflow')
    modalClose = document.querySelector('.modal-form__close');

if(modal !== null) {
    modalBtn.addEventListener('click',()=>{
        modal.classList.add('modal-form__active')
    })
    modalClose.addEventListener('click',()=>{
        modal.classList.remove('modal-form__active')
    })
    modalOverflow.addEventListener('click',()=>{
        modal.classList.remove('modal-form__active')
    })
}

let modalSuc = document.querySelector('.modal-suc'),
    modalSucBtn = document.querySelector('.modal-suc__btn'),
    modalSucOverflow = document.querySelector('.modal-suc__overflow')
    modalSucClose = document.querySelector('.modal-suc__close');

if(modalSuc !== null) {
    modalSucBtn.addEventListener('click',()=>{
        modalSuc.classList.add('modal-suc__active')
        modal.classList.remove('modal-form__active')
    })
    modalSucClose.addEventListener('click',()=>{
        modalSuc.classList.remove('modal-suc__active')
    })
    modalSucOverflow.addEventListener('click',()=>{
        modalSuc.classList.remove('modal-suc__active')
    })
}

let sidebarDrop = document.querySelectorAll('.sidebar__list_drop');

if(sidebarDrop !== null) {
    sidebarDrop.forEach((item)=>{
        item.addEventListener('click', ()=>{
            item.classList.toggle('active')
        })
    })
}

let pagePoint = document.querySelectorAll('.page-nav__point'),
    pageItem = document.querySelectorAll('.page-nav__list a'),
    pageNav = document.querySelector('.page-nav');

if(pageNav !== null) {
    document.addEventListener('scroll', ()=>{
        for(let i = 0; i < pageItem.length; i++) {
            if(pagePoint[i].getBoundingClientRect().top <= 0) {
                pageItem.forEach((item)=>{
                    item.classList.remove('active');
                })
                pageItem[i].classList.add('active');
            }
        }
    })
}

(function(){
    var a = document.querySelector('.page-nav'), b = null, P = 24;  // если ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента. Может быть отрицательным числом
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
          R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('.form').getBoundingClientRect().top + 48);  // селектор блока, при достижении верхнего края которого нужно открепить прилипающий элемент;  Math.round() только для IE; если ноль заменить на число, то блок будет прилипать до того, как нижний край элемента дойдёт до футера
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