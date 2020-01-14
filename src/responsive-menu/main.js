import style from './main.scss'
import { Menu } from './Menu'

window.addEventListener('DOMContentLoaded', () => {
    new Menu(document.getElementById('main-menu'))
})

// const burgerButton = document.getElementsByClassName('tlsft-menu__burger')[0]
// const burgerMenu = document.getElementsByClassName('tlsft-menuformobile-black')[0]
// const closeButton = document.getElementsByClassName('tlsft-menu__close')[0]

// burgerButton.addEventListener('click', function() {
//     burgerMenu.classList.add('open')
// })

// closeButton.addEventListener('click', function() {
//     burgerMenu.classList.remove('open')
// })

// const loginButton = document.getElementsByClassName('tlsft-menu__group1')[0]
// const loginMenu = document.getElementsByClassName('tlsft-menuformobile-form')[0]
// const closeMenuForm = document.getElementsByClassName('tlsft-menuform--close')[0]

// loginButton.addEventListener('click', function() {
//     loginMenu.classList.add('open')
// })

// closeMenuForm.addEventListener('click', function() {
//     loginMenu.classList.remove('open')
// })

// const loginButtonMenu = document.getElementsByClassName('menu-login-button')[0]
// const loginMenu1 = document.getElementsByClassName('tlsft-menuformobile-form')[0]

// loginButtonMenu.addEventListener('click', function() {
//     loginMenu1.classList.add('open')
// })