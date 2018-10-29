function addNav(navButton, navList) {
	navButton.addEventListener('click', () =>{
		if (navList.style.display === 'block'){
			navList.style.display = 'none'			
		} else {
		navList.style.display = 'block'
		}
	})
}

function addModal(button, modal, closeButton) {
	button.addEventListener('click', () =>{
		modal.style.display = 'block'
	})
	closeButton.addEventListener('click', () =>{
		modal.style.display = 'none'
	})
	window.addEventListener('click', (event) => {
		if (event.target == modal) {
			modal.style.display = 'none';
		}
	})
}


// function addSlideshow(slides, prev, next) {
// 	let slideIndex = 1
// 	showSlides(slideIndex, slides)
// 	prev.addEventListener('click', () => {
// 		showSlides((slideIndex-1), slides)
// 	})
// 	next.addEventListener('click', () => {
// 		showSlides((slideIndex+1), slides)
// 	})
// }

// function showSlides(slideIndex, slides){
// 	if (slideIndex > slides.length) {slideIndex = 1}
// 	if (slideIndex < 1) {slideIndex = slides.length}
// 	let i
// 	for (i = 0; i < slides.length; i++) {
// 		slides[i].style.display = "none"
// 	}
// 	slides[slideIndex-1].style.display = "block"
// 	console.log(slideIndex)
// }

// function plusSlides(n, slides, slideIndex) {
// 	showSlides(slideIndex += n, slides)
// }

let slideIndex

function addSlideshow(slides, prev, next) {
	slideIndex = 1
	showSlides(slideIndex, slides)
	prev.addEventListener('click', () => {
		plusSlides((-1), slides)
	})
	next.addEventListener('click', () => {
		plusSlides(1, slides)
	})
}

function showSlides(n, slides){
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none'
	}
	slides[slideIndex-1].style.display = 'block'
}

function plusSlides(n, slides) {
	showSlides(slideIndex += n, slides)
}


function addCollapsibles(buttons, texts) {
	let i
	for (i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', (event) => {
			const text = event.target.nextElementSibling
			if (text.style.display === 'flex'){
				text.style.display = 'none'
			} else {
				text.style.display = 'flex'
			}
		})
	}
}

module.exports = {
	addNav,
	addModal,
	addSlideshow,
	addCollapsibles
}