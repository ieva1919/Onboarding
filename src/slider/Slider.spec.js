import { Slider } from './Slider'

describe('Slider', () => {
	test('Slider shows first slide by default', () => {
		const slider = new Slider(5)
		expect(slider.activeSlide).toBe(0)
	})
	test('Slider switches to specified slide', () => {
		const slider = new Slider(5)
		slider.setActiveSlide(2)
		expect(slider.activeSlide).toBe(2)
	})
	test('Slider switches to next slide', () => {
		const slider = new Slider(5)
		slider.setActiveSlide(2)
		slider.nextSlide()
		expect(slider.activeSlide).toBe(3)
	})
	test('Slider switches to previous slide', () => {
		const slider = new Slider(5)
		slider.setActiveSlide(2)
		slider.previousSlide()
		expect(slider.activeSlide).toBe(1)
	})
	test('Slider switches to first slide after going to next slide while on last slide', () => {
		const slider = new Slider(5)
		slider.setActiveSlide(4)
		slider.nextSlide()
		expect(slider.activeSlide).toBe(0)
	})
	test('Slider switches to last slide after going to previous slide while on first slide', () => {
		const slider = new Slider(5)
		slider.setActiveSlide(0)
		slider.previousSlide()
		expect(slider.activeSlide).toBe(4)
	})

	jest.useFakeTimers()
	test('Slider switches after specified time', () => {
		const slider = new Slider(5)
		expect(setTimeout).toHaveBeenLastCalledWith(slider.nextSlide, 1000)
	})
	test('Slider constantly cycles slides', () => {
		const slider = new Slider(5)
		slider.nextSlide = jest.fn(slider.nextSlide)
		expect(slider.nextSlide).not.toBeCalled()
		jest.advanceTimersByTime(10000)
		expect(slider.nextSlide).toHaveBeenCalledTimes(9)
	})
})
