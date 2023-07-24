const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Ajout des event listener des flèches
const arrowLeft = document.querySelector('.arrow_left');


arrowLeft.addEventListener('click', function () {
alert('gauche');
});


const arrowRight = document.querySelector('.arrow_right');

arrowRight.addEventListener('click', function() {
alert('droite');
});

//

let numberOfSlides = slides.length;
console.log(numberOfSlides);

