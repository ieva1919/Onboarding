import style from './main.scss'
import { Menu } from './Menu'

window.addEventListener('DOMContentLoaded', () => {
    new Menu(document.getElementById('main-menu'))
})

const burger = document.getElementsByClassName('tlsft-menu--burger')[0];
burger.addEventListener('click', function() {
    document.getElementsByClassName('tlsft-menuformobile-black')[0].classList.add('open')
})

const close = document.getElementsByClassName('tlsft-menu--close')[0];
close.addEventListener('click', function() {
    document.getElementsByClassName('tlsft-menuformobile-black')[0].classList.remove('open')
})

const group1 = document.getElementsByClassName('tlsft-menu__group1')[0];
group1.addEventListener('click', function() {
    document.getElementsByClassName('tlsft-menuformobile-form')[0].classList.add('open')
})

const menuform = document.getElementsByClassName('tlsft-menuform--close')[0];
menuform.addEventListener('click', function() {
    document.getElementsByClassName('tlsft-menuformobile-form')[0].classList.remove('open')
})