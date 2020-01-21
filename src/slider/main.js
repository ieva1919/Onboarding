import style from './main.scss'
import { DOMSlider } from './Slider'
import { createPublicKey } from 'crypto';

window.addEventListener('DOMContentLoaded', () => {
    new DOMSlider(document.getElementById('main-slider'))
})


let slideIndex = 0;

function showslide(index) {
    const slides = document.getElementsByClassName('slide')
    slideIndex = index;
    for (let i = 0; i < slides.length; i++) {
        if (i === index) {
            slides[i].style.display = 'block'
        }
        else {
            slides[i].style.display = 'none'
        }
    }
}
showslide(0); 

const thumbnails = document.getElementsByClassName('slider__thumbnail')

for (let i=0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', function() {
        showslide(i)
        showthumbnail(i)
    })
}

function showthumbnail(index) {
    for (let i = 0; i < thumbnails.length; i++) {
        if (i === index) {
            thumbnails[i].classList.add('slider__thumbnails--active')
        }
        else {
            thumbnails[i].classList.remove('slider__thumbnails--active')
        }
    }
}
showthumbnail(0); 

const previousButton = document.getElementsByClassName('slider__button--previous')[0]

previousButton.addEventListener('click', function() {
    let previousSlideIndex = slideIndex - 1;
    if (slideIndex === 0) {
        previousSlideIndex = 2;
    }
    showslide(previousSlideIndex)
    showthumbnail(previousSlideIndex)
})

const nextButton = document.getElementsByClassName('slider__button--next')[0]

nextButton.addEventListener('click', function() {
    let nextSlideIndex = slideIndex + 1;
    if (slideIndex === 2) {
        nextSlideIndex = 0;
    }
    showslide(nextSlideIndex)
    showthumbnail(nextSlideIndex)
})