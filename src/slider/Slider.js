export class Slider {
	constructor(count) {
		throw new Error('Not implemented')
	}

	setActiveSlide(index) {
		throw new Error('Not implemented')
	}

	nextSlide = () => {
		throw new Error('Not implemented')
	}

	previousSlide = () => {
		throw new Error('Not implemented')
	}

	cycleSlides() {
		throw new Error('Not implemented')
	}
}

export class DOMSlider extends Slider {
	constructor(container) {
		const slides = container.getElementsByClassName('slide')
		super(slides.length)
	}
}
