'use strict'

document.addEventListener('DOMContentLoaded', function() {
    
    var swiper = new Swiper(".advant__slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: ".advant .swiper-pagination",
        },
        navigation: {
            nextEl: ".advant .swiper-button-next",
            prevEl: ".advant .swiper-button-prev",
        },
        breakpoints: {
            1025: {
				slidesPerView: 3,
				spaceBetween: 20
            },
			601: {
				slidesPerView: 2,
				spaceBetween: 20
			},
        }
    });

    var swiper = new Swiper(".stock__img", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
          	el: ".stock .swiper-pagination",
        },
        navigation: {
            nextEl: ".stock .swiper-button-next",
            prevEl: ".stock .swiper-button-prev",
        },
    });

    var swiper = new Swiper(".equip__slider", {
		slidesPerView: 'auto',
		spaceBetween: 16,
		pagination: {
			el: ".equip .swiper-pagination",
			type: "progressbar"
		},
		navigation: {
			nextEl: ".equip .swiper-button-next",
			prevEl: ".equip .swiper-button-prev",
		},
		breakpoints: {
			1025: {
				slidesPerView: 4,
				spaceBetween: 24
			},
			601: {
				slidesPerView: 3,
				spaceBetween: 16
			},
		}
	});

	let modal = document.querySelectorAll('.modal'),
		modalClose = document.querySelectorAll('.modal__close'),
		modalOverflow = document.querySelectorAll('.modal__overflow'),
		modalSuc = document.querySelector('.modal-suc'),
		modalErr = document.querySelector('.modal-err');

	if(modal !== null) {
		modalClose.forEach((item)=>{
			item.addEventListener('click', ()=>{
				for(let a = 0; a < modal.length; a++) {
					modal[a].classList.remove('active')
				}
			})
		})
		modalOverflow.forEach((item)=>{
			item.addEventListener('click', ()=>{
				for(let a = 0; a < modal.length; a++) {
					modal[a].classList.remove('active')
				}
			})
		})
	}

	let modalCall = document.querySelector('.modal-call'),
		modalCallBtn = document.querySelectorAll('.modal-call__call');

	if( modalCall !== null ) {
		modalCallBtn.forEach((item)=>{
			item.addEventListener('click', ()=>{
				modalCall.classList.add('active')
			})
		})
	}

	let modalVideo = document.querySelector('.modal-video'),
		modalVideoBtn = document.querySelectorAll('.modal-video__call');

	if( modalVideo !== null ) {
		modalVideoBtn.forEach((item)=>{
			item.addEventListener('click', ()=>{
				modalVideo.classList.add('active')
			})
		})
	}

	let modalPrice = document.querySelector('.modal-price'),
		modalPriceBtn = document.querySelectorAll('.modal-price__call');

	if( modalPrice !== null ) {
		modalPriceBtn.forEach((item)=>{
			item.addEventListener('click', ()=>{
				modalPrice.classList.add('active')
			})
		})
	}

	let modalTest = document.querySelector('.modal-test'),
		modalTestBtn = document.querySelectorAll('.modal-test__call');

	if( modalTest !== null ) {
		modalTestBtn.forEach((item)=>{
			item.addEventListener('click', ()=>{
				modalTest.classList.add('active')
			})
		})
	}

	let modalLeas = document.querySelector('.modal-leas'),
		modalLeasBtn = document.querySelectorAll('.modal-leas__call');

	if( modalLeas !== null ) {
		modalLeasBtn.forEach((item)=>{
			item.addEventListener('click', ()=>{
				modalLeas.classList.add('active')
			})
		})
	}

	let modalCond = document.querySelector('.modal-cond'),
		modalCondBtn = document.querySelectorAll('.modal-cond__call');

	if( modalCond !== null ) {
		modalCondBtn.forEach((item)=>{
			item.addEventListener('click', ()=>{
				modalCond.classList.add('active')
			})
		})
	}

	let modalEquip = document.querySelector('.modal-equip'),
		modalEquipBtn = document.querySelectorAll('.modal-equip__call');

	if( modalEquip !== null ) {
		modalEquipBtn.forEach((item)=>{
			item.addEventListener('click', ()=>{
				modalEquip.classList.add('active')
			})
		})
	}

	let modalAlso = document.querySelector('.modal-also'),
		modalAlsoBtn = document.querySelectorAll('.modal-also__call');

	if( modalAlso !== null ) {
		modalAlsoBtn.forEach((item)=>{
			item.addEventListener('click', ()=>{
				modalAlso.classList.add('active')
			})
		})
	}

	function getUrlParams(names) {
		const params = new URLSearchParams(window.location.search);
		const result = {};
		names.forEach(name => {
		  const value = params.get(name);
		  if (value) result[name] = value;
		});
		return result;
	}
	  
	// ID-шники AMOCRM полей
	const amoFieldIds = {
		number: '1387671',
		comment: '1451561',
		mail: '1387673',
		utm_source: '1453555',
		utm_medium: '1453551',
		utm_campaign: '1453553',
		utm_content: '1453549',
		utm_term: '1453557',
		type: '1453559',
		key: '1453561',
		device: '1453563',
		region_name: '1453565',
		retargeting_id: '1453615',
		client_id: '1453617'
	};
	  
	// Собираем данные из формы
	document.querySelectorAll('.amo-form').forEach((item)=>{
		item.addEventListener('submit', function (e) {
			e.preventDefault();
		  
			const form = e.target;
		  
			// Извлекаем значения
			const name = form.name.value.trim();
			const number = form.number.value.trim();
			const comment = form.comment?.value.trim();
		  
			// UTM и другие параметры из URL
			const extraParams = getUrlParams([
				'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term',
				'type', 'key', 'device', 'region_name', 'retargeting_id', 'client_id'
			]);
		  
			// Собираем данные в формате: id → значение
			const data = {
				name: name, // системное поле (не по ID)
				[amoFieldIds.number]: number
			};
		  
			if (comment) data[amoFieldIds.comment] = comment;
		  
			// Добавим все UTM-параметры и прочее, если есть
			for (const [param, id] of Object.entries(amoFieldIds)) {
				if (extraParams[param]) {
					data[id] = extraParams[param];
				}
			}
		  
			// Отправка
			fetch('https://example.amocrm.ru/api/form', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ВРЕМЕННЫЙ_КЛЮЧ_СЮДА'
				},
				body: JSON.stringify(data)
			})
			.then(response => response.json())
			.then(res => {
				// если в ответе есть confirm: true
				if (res.confirm) {
					ym(100953673, 'reachGoal', 'confirm');
				}
			
				for(let a = 0; a < modal.length; a++) {
					modal[a].classList.remove('active')
				}
				modalSuc.classList.add('active')
				form.reset();
			})
			.catch(err => {
				console.error('Ошибка отправки формы:', err);
				for(let a = 0; a < modal.length; a++) {
					modal[a].classList.remove('active')
				}
				modalErr.classList.add('active')
			});
		});	  
	})

}, false);