let navPoint = document.querySelector('.nav-list__point'),
    navList = document.querySelector('.nav-list__dropdown');

navPoint.addEventListener('click', ()=>{
    navPoint.classList.toggle('nav-list__point_active');
    navList.classList.toggle('nav-list__dropdown_active');
});

function closeNavList(Event) {
    if (!navPoint.contains(Event.target)) {
        navPoint.classList.remove('nav-list__point_active');
        navList.classList.remove('nav-list__dropdown_active');
    }
}
document.addEventListener('click', closeNavList);

$(document).ready(function() {
    $('select').niceSelect();

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val();

            $('form').trigger('reset');
        });
        return false;
    });
});