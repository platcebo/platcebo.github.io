"use strict";

document.addEventListener('DOMContentLoaded', function() {

let btn = document.querySelectorAll('.btn__anim'),
    btnBox = document.querySelectorAll('.btn__anim i');

if(btn !== null) {
    function wrapChars(str, tmpl) {
        return str.replace(/\p{L}/gu, tmpl || "<span>$&</span>");
    }

    for(let a = 0; a < btn.length; a++) {
        var btnText = wrapChars(String(btnBox[a].innerHTML));

        btnBox[a].innerHTML = btnText; 

        let spans = btnBox[a].querySelectorAll("span");

        spans.forEach((span, i) => {
            span.style.transitionDelay = `${(i+0.2) * 0.01 }s`;
        });

        btn[a].innerHTML = '<b>' + btn[a].innerHTML + btn[a].innerHTML + '</b>'
    }

}

[].forEach.call( document.querySelectorAll('[data-phone-pattern]'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (9__) ___-__-__",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = new_value;
        }
        if (event.type == "blur" && this.value.length < 5) {
            this.value = "";
        }
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);

});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

}, false);