import style from './main.scss'
import { Menu } from './Menu'

window.addEventListener('DOMContentLoaded', () => {
    new Menu(document.getElementById('main-menu'))
})

const burgerButton = document.getElementsByClassName('tlsft-menu__burger')[0]
const menuContent = document.getElementsByClassName('tlsft-menu-content')[0]
const closeButton = document.getElementsByClassName('tlsft-menu__close')[0]

burgerButton.addEventListener('click', function() {
    menuContent.classList.add('tlsft-menu__black')
})

closeButton.addEventListener('click', function() {
    menuContent.classList.remove('tlsft-menu__black')
})


const loginButton = document.getElementsByClassName('menu-login-button')[0]
const loginForm = document.getElementsByClassName('tlsft-menuformobile-form')[0]
const closeMenuForm = document.getElementsByClassName('tlsft-menuform--close')[0]

loginButton.addEventListener('click', function() {
    loginForm.classList.add('open')
})

closeMenuForm.addEventListener('click', function() {
    loginForm.classList.remove('open')
})
