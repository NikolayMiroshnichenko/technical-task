const button = document.querySelector('.main-btn');
const modal = document.querySelector('.js-overlay');
const buttonClose = document.querySelector('.close-btn');
const buttonMenu = document.querySelector('.menu-icon');
const menuList = document.querySelector('.navigation');
const buttonCloseMenu = document.querySelector('.navigation-close');

button.addEventListener('click', () => {
    openModal();
});
buttonClose.addEventListener('click', () => {
    closeModal();
});
buttonMenu.addEventListener('click', () =>  {
    openMenu();
});
buttonCloseMenu.addEventListener('click', () =>  {
    closeMenu();
});


function openModal() {
    modal.style.display = 'block';
};

function closeModal() {
    modal.style.display = 'none';
};

function openMenu() {
    menuList.style.display = 'block';
};
function closeMenu() {
    menuList.style.display = 'none';
};
