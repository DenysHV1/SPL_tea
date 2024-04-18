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


