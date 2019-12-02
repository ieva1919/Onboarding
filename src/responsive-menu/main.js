import style from './main.scss'
import { Menu } from './Menu'

window.addEventListener('DOMContentLoaded', () => {
    new Menu(document.getElementById('main-menu'))
})