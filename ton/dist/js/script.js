"use strict";

document.addEventListener('DOMContentLoaded', function() {

let questItem = document.querySelectorAll('.quest__item');

if(questItem !== null) {
    questItem.forEach((item)=>{
        item.addEventListener('click', ()=>{
            item.classList.toggle('active')
        })
    })
}

const ctx = document.getElementById('styledChart').getContext('2d');
const data = {
    labels: ['1 фев', '2 фев', '3 фев', '4 фев', '5 фев', '6 фев', '7 фев'],
    datasets: [{
        data: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1],
        backgroundColor: '#2196f3',
        borderRadius: 3,
        barPercentage: 0.6,
        categoryPercentage: 0.8,
    }]
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1.3,
    layout: {
        padding: {
            top: 30, 
        }
    },
    plugins: {
        tooltip: {
            enabled: false, // Отключаем стандартный tooltip
        },
        datalabels: {
            anchor: 'end',
            align: 'top',
            color: '#2196f3',
            backgroundColor: 'rgba(33, 150, 243, 0.1)',
            borderRadius: 6,
            padding: 4,
            font: {
                size: 12,
                weight: '400'
            },
            formatter: (value) => `${value}$`, // Форматирование значения
        },            
        legend: {
            display: false,
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
            ticks: {
                color: '#666',
            },
            offset: true,
        },
        y: {
            grid: {
                drawBorder: true,
                color: '#e3f2fd',
            },
            ticks: {
                display: false
            },
        },
    },     
};

new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options,
    plugins: [ChartDataLabels]
});

const textElement = document.getElementById('dynamic-text'); // Получаем элемент span
if(textElement !== null) {
    const words = ['creators', 'innovators', 'dreamers', 'developers']; // Список слов для анимации
    let wordIndex = 0; // Индекс текущего слова
    let charIndex = 0; // Индекс текущей буквы
    let isDeleting = false; // Флаг для определения, удаляем ли мы текст

    function typeText() {
    const currentWord = words[wordIndex]; // Текущее слово
    const speed = isDeleting ? 100 : 200; // Скорость печати или удаления

    // Если текст удаляется
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1); // Удаляем по одной букве
        charIndex--;
    } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1); // Добавляем по одной букве
        charIndex++;
    }

    // Если слово полностью напечатано
    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true; // Начинаем удаление
        setTimeout(typeText, 1000); // Пауза перед удалением
    }
    // Если слово полностью удалено
    else if (isDeleting && charIndex === 0) {
        isDeleting = false; // Перестаём удалять
        wordIndex = (wordIndex + 1) % words.length; // Переходим к следующему слову
        setTimeout(typeText, 500); // Пауза перед печатью нового слова
    } else {
        setTimeout(typeText, speed); // Продолжаем печать или удаление
    }
    }

    // Запускаем анимацию
    typeText();
}

let tabPoint = document.querySelectorAll('.stak__tab p'),
    tabWrapper = document.querySelectorAll('.stak__wrapper');

if(tabPoint !== null) {
    tabPoint.forEach((item,i)=>{
        item.addEventListener('click', ()=>{
            for(let a = 0; a < tabPoint.length; a++) {
                tabPoint[a].classList.remove('active')
                tabWrapper[a].classList.remove('active')
            }
            item.classList.add('active')
            tabWrapper[i].classList.add('active')
        })
    })
}

let langBtn = document.querySelector('.nav__lang_btn'),
    lang = document.querySelector('.nav__lang');

if(lang !== null) {
    langBtn.addEventListener('click', ()=>{
        lang.classList.toggle('active');
    })
}

}, false);