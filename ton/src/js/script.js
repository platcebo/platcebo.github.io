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
            top: 50, 
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

}, false);