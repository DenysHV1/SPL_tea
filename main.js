const menuBtn = document.querySelector('.menu-media');
const menuClose = document.querySelector('.menu-close');
const menuList = document.querySelector('.menu-list');
const mobileBg = document.querySelector('.mobile-menu-bg-close');

menuBtn.addEventListener('click', ()=>{
menuList.classList.toggle('menu-list-open');
mobileBg.classList.toggle('.mobile-menu-bg-open');
});

menuClose.addEventListener('click', ()=>{
menuList.classList.remove('menu-list-open');
mobileBg.classList.remove('.mobile-menu-bg-open');
});

const darkBtn = document.querySelector('.dark');
const whiteBtn = document.querySelector('.white');
const body = document.querySelector('.body');
const footer = document.querySelector('.footer');
const coment = document.querySelector('.section-coment');
darkBtn.addEventListener('click', () => {
	body.classList.add('dark-theme');
	darkBtn.classList.add('is-close');
	whiteBtn.classList.add('is-open');
	coment.classList.add('dark-theme')
	footer.classList.add('dark-theme')
});


whiteBtn.addEventListener('click', () => {
	body.classList.remove('dark-theme');
	darkBtn.classList.remove('is-close');
	whiteBtn.classList.remove('is-open');
	coment.classList.remove('dark-theme')
	footer.classList.remove('dark-theme')
});

