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


function addSlideshow(slides, prev, next) {
	let slideIndex = 1
	showSlides(slideIndex, slides, slideIndex)
	prev.addEventListener('click', () => {plusSlides(-1, slides, slideIndex)})
	next.addEventListener('click', () => {plusSlides(1, slides, slideIndex)})
}

function showSlides(n, slides, slideIndex){
	let i
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none"
	}
	slides[slideIndex-1].style.display = "block"
}

function plusSlides(n, slides, slideIndex) {
	showSlides(slideIndex += n, slides, slideIndex)
}



module.exports = {
	addNav,
	addModal,
	addSlideshow
}