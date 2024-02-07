$(document).ready(function() {
    $('select').niceSelect();
});

let tab = document.querySelector('.profile-tab__header'),
    tabPoint = document.querySelectorAll('.profile-tab__point'),
    tabWrapper = document.querySelectorAll('.profile-tab__wrapper');

if(tab !== null) {
    function tabHidden (a) {
        for(let i = a; i < tabPoint.length; i++) {
            tabPoint[i].classList.remove('active'),
            tabWrapper[i].classList.remove('profile-tab__wrapper_active')
        }
    }
    function tabShow (b) {
        tabPoint[b].classList.add('active'),
        tabWrapper[b].classList.add('profile-tab__wrapper_active')
    }
    tabHidden(0)
    tabShow(0)
    tab.addEventListener('click', (event)=>{
        let target = event.target;
        if(target && target.classList.contains('profile-tab__point')) {
            for(let i = 0; i < tabPoint.length; i++) {
                if(target == tabPoint[i]) {
                    tabHidden(0)
                    tabShow(i)
                }
            }
        }
    })
}

let nav = document.querySelector('.nav'),
    navMenu = document.querySelector('.nav__menu');

if (nav !== null) {
    navMenu.addEventListener('click', (e)=>{
        e.preventDefault();
        nav.classList.toggle('nav__active');
    })
}

var educationBlock = document.querySelectorAll('.form-acc__education_block');

if(educationBlock !== null) {
    educationBlock.forEach((item)=>{
        item.addEventListener('click', (event)=>{
            var target = event.target,
                education = document.querySelectorAll('.form-acc__education_wrapper');

            if(target && target.classList.contains('form-acc__education_plus')) {
                education[education.length - 1].insertAdjacentHTML('afterend', education[0].outerHTML)
            }
            if(target && target.classList.contains('form-acc__education_min')) {
                if(education.length > 1) {
                    education[education.length - 1].remove()
                }
            }
        })
    })
}

var employmentBlock = document.querySelectorAll('.form-acc__employment_block');

if(employmentBlock !== null) {
    employmentBlock.forEach((item)=>{
        item.addEventListener('click', (event)=>{
            let target = event.target,
                employment = document.querySelectorAll('.form-acc__employment_wrapper');

            if(target && target.classList.contains('form-acc__employment_plus')) {
                employment[employment.length - 1].insertAdjacentHTML('afterend', employment[0].outerHTML)
            }
            if(target && target.classList.contains('form-acc__employment_min')) {
                if(employment.length > 1) {
                    employment[employment.length - 1].remove()
                }
            }
        })
    })
}

var intershipsBlock = document.querySelectorAll('.form-acc__interships_block');

if(intershipsBlock !== null) {
    intershipsBlock.forEach((item)=>{
        item.addEventListener('click', (event)=>{
            let target = event.target,
                interships = document.querySelectorAll('.form-acc__interships_wrapper');

            if(target && target.classList.contains('form-acc__interships_plus')) {
                interships[interships.length - 1].insertAdjacentHTML('afterend', interships[0].outerHTML)
            }
            if(target && target.classList.contains('form-acc__interships_min')) {
                if(interships.length > 1) {
                    interships[interships.length - 1].remove()
                }
            }
        })
    })
}