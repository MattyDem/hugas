function randomPhoto(){
		const photo = Math.random();
		let photoResult = '';
			if (photo < 1/3) {
				photoResult = "<img src='jomar.jpeg' alt='Jomar'>";
			} else if (photo < 2/3) {
				photoResult = "<img src='janner.jpeg' alt='Janner'>";
			} else {photoResult = "<img src='yvonne.PNG' alt='Yvonne'>";}
	document.querySelector('.js-person').innerHTML = photoResult;
			}
			
function photoReset(){
document.querySelector('.js-person').innerHTML = '';
}