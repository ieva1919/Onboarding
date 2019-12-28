import style from './main.scss'
import { Menu } from './Menu'

window.addEventListener('DOMContentLoaded', () => {
    new Menu(document.getElementById('main-menu'))
})

const burger = document.getElementsByClassName('tlsft-menu--burger')[0];
burger.addEventListener('click', function() {
 
})