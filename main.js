const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.images img');
const opacity = 0.5;

// add opacity to the first img
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', clickedImg));	


function clickedImg(e){
	// reset opacity
	imgs.forEach(img => img.style.opacity = 1);

	// change image on click 
	current.src = e.target.src;

	// change opacity of the cliked img
	e.target.style.opacity = opacity;
}