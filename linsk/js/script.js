let pickupModal = document.querySelector('.pickup__modal'),
    pickupBtn = document.querySelector('.pickup__time_interval'),
    pickupOverflow = document.querySelector('.pickup__modal_overflow'),
    pickupClock = document.querySelectorAll('.pickup__modal_grid a'),
    pickupClose = document.querySelector('.pickup__modal_close');

if (pickupModal !== null) {
    pickupOverflow.addEventListener('click', ()=>{
        pickupModal.classList.remove('pickup__modal_active');
    });
    pickupClose.addEventListener('click', ()=>{
        pickupModal.classList.remove('pickup__modal_active');
    });
    pickupBtn.addEventListener('click', ()=>{
        pickupModal.classList.add('pickup__modal_active');
    });
    for (let i = 0; i < pickupClock.length; i++) {
        pickupClock[i].addEventListener('click', (e)=>{
            e.preventDefault();
            pickupBtn.value = pickupClock[i].innerHTML;
            pickupModal.classList.remove('pickup__modal_active');
        });
    }
}

let tab = document.querySelectorAll('.acc__tab_point'),
    info = document.querySelector('.acc__tab'),
    tabContent = document.querySelectorAll('.acc__block');

function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('acc__block_active');
        tab[i].classList.remove('acc__tab_point_active');
    }
}

// hideTabContent(1);

function showTabContent(b) {
    if (!tabContent[b].classList.contains('acc__block_active')) {
        tabContent[b].classList.add('acc__block_active');
        tab[b].classList.add('acc__tab_point_active');
    }
}

info.addEventListener('click', function(event) {
    let target = event.target;
    if (target && target.classList.contains('acc__tab_point')) {
        for(let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                hideTabContent(0);
                showTabContent(i);
                break;
            }
        }
    }

});

let trackModal = document.querySelectorAll('.acc-track'),
    trackBtn = document.querySelectorAll('.acc-history__track'),
    trackOverflow = document.querySelectorAll('.acc-track__overflow'),
    trackClose = document.querySelectorAll('.acc-track__close');

if (trackBtn !== null) {
    for (let i = 0; i < trackBtn.length; i++) {
        trackBtn[i].addEventListener('click', ()=>{
            trackModal[i].classList.add('acc-track__active');
        });
        trackOverflow[i].addEventListener('click', ()=>{
            trackModal[i].classList.remove('acc-track__active');
        });
        trackClose[i].addEventListener('click', ()=>{
            trackModal[i].classList.remove('acc-track__active');
        });
    }
}

let restartModal = document.querySelectorAll('.acc-restart'),
    restartBtn = document.querySelectorAll('.acc-restart__btn'),
    restartOverflow = document.querySelectorAll('.acc-restart__overflow'),
    restartClose = document.querySelectorAll('.acc-restart__close');

if (restartBtn !== null) {
    for (let i = 0; i < restartBtn.length; i++) {
        restartBtn[i].addEventListener('click', ()=>{
            restartModal[i].classList.add('acc-restart__active');
        });
        restartOverflow[i].addEventListener('click', ()=>{
            restartModal[i].classList.remove('acc-restart__active');
        });
        restartClose[i].addEventListener('click', ()=>{
            restartModal[i].classList.remove('acc-restart__active');
        });
    }
}