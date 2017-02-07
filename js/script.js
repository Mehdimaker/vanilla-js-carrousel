const buttonSuivant = document.getElementById('suivant');
const buttonPrecedent = document.getElementById('precedent');

const carrousel = document.getElementById('carrousel');


let position = 0;
let newMargin = 0;


buttonSuivant.onclick = () => {

	if (position >= 3) {
		console.log('cest la fin du carrousel');
		position = -1;
	}

	position++;
	newMargin = position * -400;

	console.log('position: ',position);
	console.log('newMargin: ',newMargin);

	carrousel.style.marginLeft = newMargin + 'px';
}



buttonPrecedent.onclick = () => {

	if (position <=0) {
		console.log('cest le debut du carrousel');
		return false;
	}

	position--;
	newMargin = position * -400;

	console.log('position: ',position);
	console.log('newMargin: ',newMargin);

	carrousel.style.marginLeft = newMargin + 'px';
}