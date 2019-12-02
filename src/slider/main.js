import style from './main.scss'
import { DOMSlider } from './Slider'

window.addEventListener('DOMContentLoaded', () => {
    new DOMSlider(document.getElementById('main-slider'))
})
