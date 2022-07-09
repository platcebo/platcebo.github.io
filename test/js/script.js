let btnGreen = document.querySelector('.btn__green');

btnGreen.addEventListener('click', function () {
    if (btnGreen.classList.contains('btn__pink')) {
        btnGreen.classList.add('btn__blue');
        btnGreen.classList.remove('btn__pink');
    } else if (btnGreen.classList.contains('btn__blue')) {
        btnGreen.classList.add('btn__pink');
        btnGreen.classList.remove('btn__blue');
    } else {
        btnGreen.classList.add('btn__pink');
    }
});