document.querySelectorAll('a[href^="#"]').forEach(item=> {
    item.addEventListener('click', function (e) {
        e.preventDefault();
 
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });

    console.log(document.querySelectorAll('.product__row').length)
});