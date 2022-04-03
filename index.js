let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    navbar.classList.toggle('hide');

});

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}