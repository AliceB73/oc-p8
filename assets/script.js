const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Ajout des event listener des flèches

const arrowLeft = document.querySelector('.arrow_left');

/*arrowLeft.addEventListener('click', function () {
alert('gauche');
});*/

const arrowRight = document.querySelector('.arrow_right');

/*arrowRight.addEventListener('click', function() {
alert('droite');
});*/

// Ajout des bullet points

for (let i = 0; i < slides.length; i++) {

	let addP = document.createElement('p');
	const divDots = document.querySelector('.dots');
	divDots.appendChild(addP);

	addP.className = "dot id-" + [i];
};

const firstDot = document.querySelector('.dot');
firstDot.classList.add('dot_selected');

// Modification de la slide au clic sur le bouton

let counter = 0;

function updateSliderPosition() {
	const bannerImg = document.querySelector(".banner");
	bannerImg.querySelector(".banner-img").src = "./assets/images/slideshow/" + slides[counter]["image"];
	bannerImg.querySelector("p").innerHTML = slides[counter]["tagLine"];

	const selectedDot = document.querySelectorAll('.dot');

	for (let index = 0; index < selectedDot.length; index++) {
		if (index == counter) {
			selectedDot[index].classList.add("dot_selected");
		} else {
			selectedDot[index].classList.remove("dot_selected");
		};
	};
};

arrowLeft.addEventListener('click', function () {
	counter--;
	if (counter < 0) {
		counter = slides.length - 1;
	};
	updateSliderPosition();
});

arrowRight.addEventListener('click', function () {
	counter++;
	if (counter > slides.length - 1) {
		counter = 0;
	};
	updateSliderPosition();
});