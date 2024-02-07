$(document).ready(function() {
    $('select').niceSelect();

    $( "#catalog-title__filter_price" ).slider({
        animate: false,
        range: true,    
        max: 1000,
        min: 1,
        values: [1, 1000],
        slide : function(event, ui) {	
			$(".catalog-title__filter_price p").text( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		}
    });
    $( "#catalog-title__filter_duration" ).slider({
        animate: false,
        range: true,    
        max: 30,
        min: 1,
        values: [1, 30],
        slide : function(event, ui) {	
			$(".catalog-title__filter_duration p").text( ui.values[ 0 ] + " - " + ui.values[ 1 ] + " year" );
		}
    });
    $( "#catalog-title__filter_yearly" ).slider({
        animate: false,
        range: true,    
        max: 1000,
        min: 1,
        values: [1, 1000],
        slide : function(event, ui) {	
			$(".catalog-title__filter_yearly p").text( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		}
    });
    $( "#catalog-title__filter_buyback" ).slider({
        animate: false,
        range: true,    
        max: 100,
        min: 1,
        values: [1, 100],
        slide : function(event, ui) {	
			$(".catalog-title__filter_buyback p").text( ui.values[ 0 ] + "% - " + ui.values[ 1 ] + "%" );
		}
    });

    $('.offers__img_slider_1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.offers__img_sidebar_1'
    });
    $('.offers__img_sidebar_1').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.offers__img_slider_1',
        arrows: false,
        focusOnSelect: true
    });
    $('.offers__img_slider_2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.offers__img_sidebar_2'
    });
    $('.offers__img_sidebar_2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.offers__img_slider_2',
        arrows: false,
        focusOnSelect: true
    });
    $('.offers__img_slider_3').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.offers__img_sidebar_3'
    });
    $('.offers__img_sidebar_3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.offers__img_slider_3',
        arrows: false,
        focusOnSelect: true
    });
    $('.offers__img_slider_4').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.offers__img_sidebar_4'
    });
    $('.offers__img_sidebar_4').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.offers__img_slider_4',
        arrows: false,
        focusOnSelect: true
    });
    $('.offers__img_slider_5').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.offers__img_sidebar_5'
    });
    $('.offers__img_sidebar_5').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.offers__img_slider_5',
        arrows: false,
        focusOnSelect: true
    });
    $('.offers__img_slider_6').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.offers__img_sidebar_6'
    });
    $('.offers__img_sidebar_6').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.offers__img_slider_6',
        arrows: false,
        focusOnSelect: true
    });
    $('.offers__img_slider_7').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.offers__img_sidebar_7'
    });
    $('.offers__img_sidebar_7').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.offers__img_slider_7',
        arrows: false,
        focusOnSelect: true
    });
    $('.offers__img_slider_8').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.offers__img_sidebar_8'
    });
    $('.offers__img_sidebar_8').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.offers__img_slider_8',
        arrows: false,
        focusOnSelect: true
    });

    $('.header__collage_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.header__collage_sidebar'
    });
    $('.header__collage_sidebar').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.header__collage_slider',
        arrows: false,
        focusOnSelect: true,
        verticalSwiping: true,
        vertical: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    asNavFor: '.header__collage_slider',
                    arrows: false,
                    focusOnSelect: true,
                    verticalSwiping: false,
                    vertical: false,
                }
            },
            {
                breakpoint: 501,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    asNavFor: '.header__collage_slider',
                    arrows: false,
                    focusOnSelect: true,
                    verticalSwiping: false,
                    vertical: false,
                }
            }
        ]
    });
});

var datepicker = new Datepicker('.datepicker');

let streamsTab = document.querySelector('.streams__tab'),
    streamsPoint = document.querySelectorAll('.streams__tab_point'),
    streamsWrapper = document.querySelectorAll('.streams__wrapper');

function streamsHide (e) {
    for (let i = e; i < streamsWrapper.length; i++) {
        streamsWrapper[i].classList.remove('streams__wrapper_active');
        streamsPoint[i].classList.remove('streams__tab_point_active');
    }
}

function streamsShow (b) {
    if (!streamsPoint[b].classList.contains('streams__tab_point_active')) {
        streamsWrapper[b].classList.add('streams__wrapper_active');
        streamsPoint[b].classList.add('streams__tab_point_active');
    }
}

if (streamsTab !== null) {
    streamsHide(1);

    streamsTab.addEventListener('click', (e)=>{
        let target = e.target;
        if(target && target.classList.contains('streams__tab_point')) {
            for (let i = 0; i < streamsPoint.length; i++) {
                if(target == streamsPoint[i]) {
                    streamsHide(0);
                    streamsShow(i);
                    break;
                }
            }
        }
    });
} 

let humburger = document.querySelector('.nav__humburger'),
    nav = document.querySelector('.nav');

if(nav !== null) {
    humburger.addEventListener('click', ()=>{
        nav.classList.toggle('nav__active');
    });
}

let password = document.querySelectorAll('.dashboard-setting__password_wrapper a'),
    passwordInput = document.querySelectorAll('.dashboard-setting__password_wrapper input');

if (password !== null) {
    for(let i = 0; i < password.length; i++) {
        password[i].addEventListener('click', (e)=>{
            e.preventDefault();
            if (password[i].classList.contains('active')) {
                password[i].classList.remove('active');
                passwordInput[i].setAttribute('type', 'password');
            } else {
                password[i].classList.add('active');
                passwordInput[i].setAttribute('type', 'text');
            }
        });
    }
}

let dashboardBtn = document.querySelector('.dashboard-modal__btn'),
    dashboardClose = document.querySelectorAll('.dashboard-modal__close'),
    dashboardOverflow = document.querySelectorAll('.dashboard-modal__overflow'),
    dashboardButton = document.querySelector('.dashboard-modal__body .btn__red'),
    dashboardModal = document.querySelectorAll('.dashboard-modal'),
    verBtn = document.querySelector('.dashboard-modal__ver_btn'),
    verModal = document.querySelector('.dashboard-modal__ver'),
    sucBtn = document.querySelector('.dashboard-modal__suc_btn'),
    sucModal = document.querySelector('.dashboard-modal__suc'),
    sucClose = document.querySelector('.dashboard-modal__suc_close');

if (dashboardBtn !== null) {
    for(let i = 0; i < dashboardModal.length; i++) {
        dashboardBtn.addEventListener('click', ()=>{
            dashboardModal[i].classList.add('dashboard-modal__active');
        });
        dashboardClose[i].addEventListener('click', ()=>{
            dashboardModal[i].classList.remove('dashboard-modal__active');
        });
        dashboardOverflow[i].addEventListener('click', ()=>{
            dashboardModal[i].classList.remove('dashboard-modal__active');
        });
        dashboardButton.addEventListener('click', ()=>{
            dashboardModal[i].classList.remove('dashboard-modal__active');
        });
    }
}

if (verModal !== null) {
    for(let i = 0; i < dashboardModal.length; i++) {
        dashboardClose[i].addEventListener('click', ()=>{
            dashboardModal[i].classList.remove('dashboard-modal__active');
        });
        dashboardOverflow[i].addEventListener('click', ()=>{
            dashboardModal[i].classList.remove('dashboard-modal__active');
        });
        verBtn.addEventListener('click', ()=>{
            verModal.classList.add('dashboard-modal__active');
        });
        sucBtn.addEventListener('click', ()=>{
            sucModal.classList.add('dashboard-modal__active');
            verModal.classList.remove('dashboard-modal__active');
        });
        sucClose.addEventListener('click', ()=>{
            sucModal.classList.remove('dashboard-modal__active');
        });
    }
}

let mainNav = document.querySelector('.main-nav'),
    mainNavHumburger = document.querySelector('.main-nav__humburger');

if(mainNav !== null) {
    mainNavHumburger.addEventListener('click', ()=>{
        mainNav.classList.toggle('main-nav__active');
    });
}

let catalogDrop = document.querySelectorAll('.catalog-title__dropdown');

if(catalogDrop !== null) {
    let catalogSort = document.querySelector('.catalog-title__sort span'),
        catalogSortList = document.querySelectorAll('.catalog-title__sort li'),
        catalogShow = document.querySelector('.catalog-title__show span'),
        catalogShowList = document.querySelectorAll('.catalog-title__show li'),
        catalogBtn = document.querySelector('.catalog-title__filter_button .btn__red'),
        catalogFilter = document.querySelector('.catalog-title__filter');

    for(let i = 0; i < catalogDrop.length; i++) {
        catalogDrop[i].addEventListener('click', (event)=>{
            let target = event.target;
            if (!target.classList.contains('catalog-title__dropdown_list') && !target.matches('li')) {
                catalogDrop[i].classList.toggle('active');
                if (catalogDrop[i].classList.contains('catalog-title__filter_btn')) {
                    catalogFilter.classList.toggle('catalog-title__filter_active');
                }
            }
        });
    }

    for (let i = 0; i < catalogSortList.length; i++) {
        catalogSortList[i].addEventListener('click', ()=>{
            catalogSort.innerHTML = catalogSortList[i].innerHTML;
            catalogDrop[1].classList.remove('active');
        });
    }

    for (let i = 0; i < catalogShowList.length; i++) {
        catalogShowList[i].addEventListener('click', ()=>{
            catalogShow.innerHTML = catalogShowList[i].innerHTML;
            catalogDrop[2].classList.remove('active');
        });
    }

    if(catalogBtn !== null) {
        catalogBtn.addEventListener('click', ()=>{
            catalogFilter.classList.remove('catalog-title__filter_active');
            catalogDrop[0].classList.remove('active');
        });
    }
}

let catalogType = document.querySelectorAll('.catalog-title__type a'),
    catalogWrapper = document.querySelector('.catalog-wrapper__wrapper');

if (catalogWrapper !== null) {
    for(let i = 0; i < catalogType.length; i++) {
        catalogType[i].addEventListener('click', (event)=>{
            event.preventDefault();
            catalogType.forEach(item => {
                item.classList.remove('active');
            });
            catalogType[i].classList.add('active');
            if (i == 0) {
                catalogWrapper.classList.add('catalog-wrapper__wrapper_grid');
                catalogWrapper.classList.remove('catalog-wrapper__wrapper_line');
            } else if (i == 1) {
                catalogWrapper.classList.remove('catalog-wrapper__wrapper_grid');
                catalogWrapper.classList.add('catalog-wrapper__wrapper_line');
            }
        });
    }
}

let navLangblock = document.querySelector('.main-nav__lang div'),
    navLang = document.querySelector('.main-nav__lang');

if (navLang !== null) {
    navLangblock.addEventListener('click', ()=>{
        navLang.classList.toggle('active');
    });
}

let transactionTab = document.querySelector('.transaction__tab'),
    transactionPoint = document.querySelectorAll('.transaction__tab_point'),
    transactionWrapper = document.querySelectorAll('.transaction__wrapper');

function transactionHide (e) {
    for (let i = e; i < transactionWrapper.length; i++) {
        transactionWrapper[i].classList.remove('transaction__wrapper_active');
        transactionPoint[i].classList.remove('transaction__tab_point_active');
    }
}

function transactionShow (b) {
    if (!transactionPoint[b].classList.contains('transaction__tab_point_active')) {
        transactionWrapper[b].classList.add('transaction__wrapper_active');
        transactionPoint[b].classList.add('transaction__tab_point_active');
    }
}

if (transactionTab !== null) {
    transactionHide(1);

    transactionTab.addEventListener('click', (e)=>{
        let target = e.target;
        if(target && target.classList.contains('transaction__tab_point')) {
            for (let i = 0; i < transactionPoint.length; i++) {
                if(target == transactionPoint[i]) {
                    transactionHide(0);
                    transactionShow(i);
                    break;
                }
            }
        }
    });
} 

let depositTab = document.querySelector('.deposit__tab'),
    depositPoint = document.querySelectorAll('.deposit__tab_point'),
    depositWrapper = document.querySelectorAll('.deposit__wrapper');

function depositHide (e) {
    for (let i = e; i < depositWrapper.length; i++) {
        depositWrapper[i].classList.remove('deposit__wrapper_active');
        depositPoint[i].classList.remove('deposit__tab_point_active');
    }
}

function depositShow (b) {
    if (!depositPoint[b].classList.contains('deposit__tab_point_active')) {
        depositWrapper[b].classList.add('deposit__wrapper_active');
        depositPoint[b].classList.add('deposit__tab_point_active');
    }
}

if (depositTab !== null) {
    depositHide(1);

    depositTab.addEventListener('click', (e)=>{
        let target = e.target;
        if(target && target.classList.contains('deposit__tab_point')) {
            for (let i = 0; i < depositPoint.length; i++) {
                if(target == depositPoint[i]) {
                    depositHide(0);
                    depositShow(i);
                    break;
                }
            }
        }
    });
} 

let deposPoint = document.querySelectorAll('.deposit__tab_change .deposit__tab_point'),
    deposList = document.querySelectorAll('.deposit__list'),
    deposAdress = document.querySelector('.wallet-adress');

if(deposPoint !== null) {
    for(let i = 0; i < deposPoint.length; i++) {
        deposPoint[i].addEventListener('click', ()=>{
            if(i == 1) {
                deposAdress.classList.add('wallet-adress__active');
                deposList[0].classList.remove('deposit__list_active');
                deposList[0].classList.add('deposit__list_unactive');
                deposList[1].classList.add('deposit__list_active');
                deposList[1].classList.remove('deposit__list_unactive');
            } else if(i == 0) {
                deposAdress.classList.remove('wallet-adress__active');
                deposList[0].classList.add('deposit__list_active');
                deposList[0].classList.remove('deposit__list_unactive');
                deposList[1].classList.remove('deposit__list_active');
                deposList[1].classList.add('deposit__list_unactive');
            }
        });
    }
}


var dom = document.getElementById('container');
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;

    var datas = [
  ////////////////////////////////////////
  [
    { name: 'Praha-Dum 1', value: 42.9 },
    { name: 'Bali cotege', value: 7.1 },
    { name: 'Italy house', value: 17.9 },
    { name: 'Brno byt 2', value: 32.1 },
  ],
];
option = {
  series: datas.map(function (data, idx) {
    var top = idx * 33.3;
    return {
      type: 'pie',
      radius: [80, 140],
      top: top + '%',
      height: '100%',
      left: 'center',
      width: '100%',
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 0
      },
      label: {
        alignTo: 'edge',
        formatter: '{name|{b}}\n{time|{c} %}',
        minMargin: 5,
        edgeDistance: 10,
        lineHeight: 19,
        rich: {
          time: {
            fontSize: 15,
            color: '#999'
          }
        }
      },
      labelLine: {
        length: 15,
        length2: 0,
        maxSurfaceAngle: 80
      },
      labelLayout: function (params) {
        const isLeft = params.labelRect.x < myChart.getWidth() / 2;
        const points = params.labelLinePoints;
        // Update the end point.
        points[2][0] = isLeft
          ? params.labelRect.x
          : params.labelRect.x + params.labelRect.width;
        return {
          labelLinePoints: points
        };
      },
      data: data
    };
  })
};


if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);