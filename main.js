document.querySelector('.comments-btn').addEventListener('click', ()=> {
	let msgInp = document.querySelector('.comments__input')
	if(msgInp.value != '') {
		msgInp.value = ''
		document.querySelector('.comments-bottom').classList.add('isactive')
	}
});

const showComments = () => {
	let coms = document.querySelectorAll('.comments-item')
	coms.forEach((el, i) => {
		setTimeout(function() {
			let date = new Date();
			el.querySelector('.comments-time').textContent = 'Сегодня ' + date.getHours() + ':' + date.getMinutes()
			el.classList.add('isvisible') 
		}, i * 4000);
	})
};

showComments();



// Date.prototype.nextsecondFriday = function (){
// 	var target = new Date(this.getFullYear(), this.getMonth(), 1, 0, 0, 0);
// 	var today = new Date();

// 	var isFriday = (target.getDay() == 1);

// 	var targetDate = 12 - (target.getDay() - 1);

// 	if (isFriday) targetDate -= 4;

// 	target.setDate(targetDate);

// 	if (today > target) {
// 			target.setMonth(target.getMonth() + 1);

// 			return target.nextsecondFriday();
// 	}
// 	let options = { year: 'numeric', month: 'long', day: 'numeric' };

// 	return new Intl.DateTimeFormat('ru-RU', options).format(target);
// }

// var secondFridayDateString = new Date().nextsecondFriday();

// document.addEventListener('DOMContentLoaded', function() {
// 	document.querySelector(".pr-date").innerHTML = secondFridayDateString;
// });


function countdown() {
	var d = parseInt(document.getElementById("imins").innerHTML),
		c = parseInt(document.getElementById("hsecs").innerHTML),
		b = 0,
		a = 0;
	0 !== d && 0 === c ? (b = d - 1, a = 59) : 0 !== d || 0 !== c ? (b = d, a = c - 1) : 0 === d && 0 === c && (b = d,
		a = c), a < 10 && (a = "0" + a), 
		document.getElementById("imins").textContent = b, 
		document.getElementById("hsecs").textContent = a
};

document.querySelector('.comments-links span').addEventListener('click', () => {
	document.querySelector('.comments__input').focus()
});

const swiper = new Swiper('.swiper', {
	spaceBetween: 10,
	allowTouchMove: false,
	pauseOnMouseEnter: false,
	disableOnInteraction: true,
	allowSlidePrev: false,
	slidesPerView: 1.1,
	oneWayMovement: true,
	loop: true,
	speed: 300,
	centeredSlides: true,
	autoplay: {
		delay: 0,
		enabled: false,
	},
	freeMode: {
		enabled: true,
		sticky: true,
	},
});


const startSpin = () => {
	document.documentElement.classList.add('js-spin')
	swiper.autoplay.start()
};

const showModal = (el) => {
	document.documentElement.classList.add('js-modal')
	document.getElementById(el).classList.add('isactive')
};

const closeModal = () => {
	document.documentElement.classList.remove('js-modal', 'js-spin')
	document.querySelectorAll('.modal').forEach(el => el.classList.remove('isactive'))
};

const firstSpin = () => {
	closeModal()
	startSpin()
	setTimeout(function() {
		swiper.autoplay.stop()
		swiper.slideToLoop('5', '1500', 
		setTimeout(function() {
			showModal('modal-retry')
		}, 2000))
	}, 4000)
};

const secondSpin = () => {
	closeModal()
	startSpin()
	setTimeout(function() {
		swiper.autoplay.stop()
		swiper.slideToLoop('0', '1500', 
			setTimeout(function() {
				showModal('modal-finish')
				setInterval("countdown()", 1000)
			}, 2000)
		)
	}, 4000)
};