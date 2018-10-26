const slides = document.querySelectAll('.mySlides')
const dots = document.querySelectAll('.dot')

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n, slides, dots) {
	let i;
	if (n > slides.length){slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i=0; 1 < dots.length; i++){
		dots[i].className = dots[i].className.replace('active', '');
	}
	slides[slideIndex-1].style.display = 'block';
	dots[slideIndex-1].className += 'active';
}