const {
	addNav,
	addModal,
	addSlideshow
} = require('../js/dom.js')


describe('ShowNav', () => {
	const navButton = document.createElement('button')
	navButton.classList.add('nav-button')
	const navList = document.createElement('ul')
	navList.classList.add('nav-list')
	const navItem = document.createElement('li')
	navItem.innerHTML = 'List Item'
	navList.appendChild(navItem)
	addNav(navButton, navList)

	test('show nav when nav button is clicked', () => {
	})

	test('hide shown nav when button clicked', () => {
		navList.style.display = 'block'
		navButton.click()
		expect(navList.style.display).toBe('none')
	})
})

describe('showModal', () => {
	const main = document.createElement('main')
	const button = document.createElement('button')
	button.id = 'skills-button'
	const modal = document.createElement('div')
	modal.classList.add('modal')
	modal.id = ('skills-modal')
	main.appendChild(modal)
	const closeButton = document.createElement('span')
	closeButton.classList.add('close')
	const content = document.createElement('div')
	content.classList.add('modal-content')
	const list = document.createElement('ul')
	list.id = 'skills-list'
	addModal(button, modal, closeButton)

	test('show modal when clicked', ()=>{
		modal.style.display = 'none'
		button.click()
		expect(modal.style.display).toBe('block')
	})

	test('close modal when X clicked', () => {
		modal.style.display = 'block'
		closeButton.click()
		expect(modal.style.display).toBe('none')
	})

	// test('WHY IS THIS FAILING?close modal when widow clicked', () => {
	// 	modal.style.display = 'block'
	// 	main.click()
	// 	expect(modal.style.display).toBe('none')
	// })
})

describe('projectsSlideshow', () => {
	const container = document.createElement('section')
	container.classList.add('slideshow-container')
	const backArrow = document.createElement('a')
	backArrow.classList.add('prev')
	const forwardArrow = document.createElement('a')
	forwardArrow.classList.add('next')
	const item1 = document.createElement('a')
	item1.classList.add('mySlides')
	// item1.style.display = 'block'
	const item2 = document.createElement('a')
	item2.classList.add('mySlides')
	const item3 = document.createElement('a')
	item3.classList.add('mySlides')
	// item2.style.display = 'none'

	addSlideshow([item1, item2], backArrow, forwardArrow)

	test('should go from slide 1 to slide 2 on next button', () => {
		forwardArrow.click()
		expect(item2.style.display).toBe('block')
	})

	test('should go back', () => {
		forwardArrow.click()
		forwardArrow.click()
		backArrow.click()
		expect(item1.style.display).toBe('block')

	})

})