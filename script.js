const btn = document.querySelector('.header .btn')
const menu_hamb = document.querySelector('.menu-hamb')
const menu = document.querySelector('.menu')
const logo = document.querySelector('.logo')

btn.addEventListener('click', () => {
    menu_hamb.classList.toggle('ativo');
    menu.classList.toggle('ativo');
    logo.classList.toggle('ativo');
})
