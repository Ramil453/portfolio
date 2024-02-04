let burger = document.getElementById('burger');
let burgerMenu = document.getElementById('burger-menu');
let me = document.getElementById('about-me');
let skill = document.getElementById('skill');
let skills = document.getElementById('skills')
let service = document.getElementById('service');
let services = document.getElementById('services');

document.getElementById('link').onclick = function () {
	me.scrollIntoView({ behavior: 'smooth' });
}



burger.onclick = function () {
	burger.classList.toggle('open');
	burgerMenu.classList.toggle('open-nav');
}

document.getElementById('me').onclick = function () {
	me.scrollIntoView({ behavior: "smooth" });
  burgerMenu.classList.toggle('open-nav');
  burger.classList.toggle('open');
}

skill.onclick = function() {
  skills.scrollIntoView({behavior: "smooth"});
  burgerMenu.classList.toggle('open-nav');
  burger.classList.toggle('open');
}

service.onclick = function () {
	services.scrollIntoView({ behavior: "smooth"});
  burgerMenu.classList.toggle('open-nav');
  burger.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function () {
	// Получаем текущее значение счетчика из localStorage
	let count = localStorage.getItem('visitCount')

	// Если значение не существует, устанавливаем счетчик в 0
	if (count === null) {
		count = 0
	}

	// Увеличиваем счетчик на 1
	count++

	// Обновляем значение счетчика в localStorage
	localStorage.setItem('visitCount', count)

	// Выводим значение счетчика на страницу
	console.log(document.getElementById('counter').length = count)
})
