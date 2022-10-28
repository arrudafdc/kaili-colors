const btn = document.querySelector('.header .btn')
const menu_hamb = document.querySelector('.menu-hamb')
const menu = document.querySelector('.menu')
const sobre = document.querySelector('.sobre')

btn.addEventListener('click', () => {
    sobre.classList.toggle('ativo');
    menu_hamb.classList.toggle('ativo');
    menu.classList.toggle('ativo');
})



