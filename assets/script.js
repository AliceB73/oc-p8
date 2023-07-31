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


	/*const selectedDot = document.querySelector(".id-" + [counter]);
	selectedDot.classList.add("dot_selected");
	const previousDot = document.querySelector(".id-" + [counter] - 1);
	console.log(previousDot); */

	const selectedDot = document.querySelectorAll('.dot');
	//console.log(selectedDot.classList.contains("dot"));
	//const list = document.getElementsByClassName('dot').classList;
	//console.log(list);
	//list.remove("dot");
	//selectedDot.classList.add("dot_selected");
	//selectedDot[counter].className =

	//selectedDot.className = selectedDot.className.replace("dot_selected", "");
	//selectedDot.className = "dot";
	//selectedDot.classList.remove("dot_selected");
	//selectedDot.classList.add("anotherclass");
	//selectedDot[counter].classList.add("dot_selected");

	/* let dots = document.getElementsByClassName('.dot');
	console.log(dots.length);
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace("dot_selected", "");
	} */

	/*selectedDot.className = "dot dot_selected";
	if (selectedDot.className = "dot id-" + [counter]) {
		selectedDot.className = "dot dot_selected";
	} else {
		selectedDot.className = "dot id-";
	};*/
};

arrowLeft.addEventListener('click', function () {
	counter--;
	if (counter < 0) {
		counter = slides.length - 1;
	};
	updateSliderPosition();
	/*
	const selectedDot = document.querySelector(".id-" + [counter]);
	selectedDot.className = "dot dot_selected"; */
});

arrowRight.addEventListener('click', function () {
	counter++;
	if (counter > slides.length - 1) {
		counter = 0;
	};
	updateSliderPosition();
});