const modal = document.querySelector('#skills-modal');
const skillsButton = document.querySelector('#skills-button');
const span = document.querySelector('.close');

skillsButton.addEventListener('click', () => {
	modal.style.display = "block";
})

span.addEventListener('click', () =>{
	modal.style.display = 'none';
})

window.addEventListener('click', (event) => {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
})