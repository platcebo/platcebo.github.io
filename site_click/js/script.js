let catalogBtn = document.querySelector('.new-nav__catalog'),
    catalog = document.querySelector('.menu-tab');

catalogBtn.addEventListener('click', ()=>{
    catalogBtn.classList.toggle('new-nav__catalog_active');
    catalog.classList.toggle('menu-tab__active');
});

let tab = document.querySelectorAll('.menu-tab__point_overflow'),
    tabContainer = document.querySelectorAll('.menu-tab__point'),
    info = document.querySelector('.menu-tab'),
    tabContent = document.querySelectorAll('.menu-tab__wrapper');

function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('menu-tab__wrapper_active');
        tabContainer[i].classList.remove('menu-tab__point_active');
    }
}

hideTabContent(1);

function showTabContent(b) {
    if (!tabContent[b].classList.contains('menu-tab__wrapper_active')) {
        tabContent[b].classList.add('menu-tab__wrapper_active');
        tabContainer[b].classList.add('menu-tab__point_active');
    }
}

info.addEventListener('click', function(event) {
    let target = event.target;
    if (target && target.classList.contains('menu-tab__point_overflow')) {
        for(let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                hideTabContent(0);
                showTabContent(i);
                break;
            }
        }
    }

});

// let menuPoint = document.querySelectorAll('.menu-tab__point'),
//     menuWrapper = document.querySelectorAll('.menu-tab__wrapper');

// function hideMenuWrapper (a) {
//     for (let i = a; i < menuPoint.length; i++) {
//         menuPoint[i].classList.remove('menu-tab__point_active');
//         menuWrapper[i].classList.remove('menu-tab__wrapper_active');
//     }
// }

// hideMenuWrapper(1);

// for (let i = 0; i < menuPoint.length; i++) {
//     menuPoint[i].addEventListener('mouseover', ()=>{
//         hideMenuWrapper(0);
//         menuPoint[i].classList.add('menu-tab__point_active');
//         menuWrapper[i].classList.add('menu-tab__wrapper_active');
//     });
// }

let accordWrapper = document.querySelectorAll('.mob-accord__wrapper'),
    accordBtn = document.querySelectorAll('.mob-accord__btn');

for (let i = 0; i < accordBtn.length; i++) {
    accordBtn[i].addEventListener('click', ()=>{
        accordBtn[i].classList.toggle('mob-accord__btn_active');
        accordWrapper[i].classList.toggle('mob-accord__wrapper_active');
    });
}

let feedbackCall = document.querySelectorAll('.new-nav__phone'),
    feedback = document.querySelector('.feedback-2022'),
    feedbackForm = document.querySelector('.feedback-2022__form'),
    feedbackThanks = document.querySelector('.feedback-2022__thanks'),
    feedbackBtn = document.querySelector('.feedback-2022__btn'),
    feedbackClose = document.querySelectorAll('.feedback-2022__close'),
    feedbackOverflow = document.querySelector('.feedback-2022__overflow');

for (let i = 0; i < feedbackCall.length; i++) {
    feedbackCall[i].addEventListener('click', ()=>{
        feedbackForm.classList.add('feedback-2022__form_active');
        feedbackThanks.classList.remove('feedback-2022__thanks_active');
        feedback.classList.add('feedback-2022__active');
    });
    feedbackClose[i].addEventListener('click', ()=>{
        feedbackForm.classList.remove('feedback-2022__form_active');
        feedbackThanks.classList.remove('feedback-2022__thanks_active');
        feedback.classList.remove('feedback-2022__active');
    });
    feedbackOverflow.addEventListener('click', ()=>{
        feedbackForm.classList.remove('feedback-2022__form_active');
        feedbackThanks.classList.remove('feedback-2022__thanks_active');
        feedback.classList.remove('feedback-2022__active');
    });
    feedbackBtn.addEventListener('click', ()=>{
        feedbackForm.classList.remove('feedback-2022__form_active');
        feedbackThanks.classList.add('feedback-2022__thanks_active');
    });
}