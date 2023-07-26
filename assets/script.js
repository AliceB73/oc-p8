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

let numberOfSlides = slides.length;
//console.log(numberOfSlides);

for (var i = 0; i < slides.length; i++) {
	//console.log(slides[i]);
};

for (let i = 0; i < slides.length; i++) {

	let addP = document.createElement('p');
	const divDots = document.querySelector('.dots');
	divDots.appendChild(addP);
	addP.className = "dot";

	/* let imgSlide = document.createElement('img');
	const divBanner = document.querySelector('.banner');
	divBanner.appendChild(imgSlide);
	imgSlide.src = "./assets/images/slideshow/" + slides[i]["image"];
	imgSlide.className = "banner-img";

	let txtSlide = document.createElement('p');
	divBanner.appendChild(txtSlide);
	txtSlide.innerHTML = slides[i]["tagLine"];
	*/
};

// Modification de la slide au clic sur le bouton

let counter = 0;

arrowLeft.addEventListener('click', function () {
	counter--;
	if (counter < 0) {
		counter = 3;
	};

	const bannerImg = document.querySelector(".banner");
	bannerImg.querySelector(".banner-img").src = "./assets/images/slideshow/" + slides[counter]["image"];
	bannerImg.querySelector("p").innerHTML = slides[counter]["tagLine"];
});

arrowRight.addEventListener('click', function () {
	counter++;
	if (counter > 3) {
		counter = 0;
	};
	console.log(slides[counter]["image"]);

	const bannerImg = document.querySelector(".banner");
	bannerImg.querySelector(".banner-img").src = "./assets/images/slideshow/" + slides[counter]["image"];
	bannerImg.querySelector("p").innerHTML = slides[counter]["tagLine"];
});

console.log(slides[counter]["image"]);

/*let x = document.getElementById("banner");
x.querySelector(".banner-img").innerHTML = slides[counter]["image"];
	const imgSlide = document.createElement('img');
	imgSlide.src = slides[counter]["image"];
*/

/* let imgSlide = document.createElement('img');
const divBanner = document.querySelector('.banner');
divBanner.appendChild(imgSlide);
imgSlide.innerHTML = slides[counter]["image"];
*/