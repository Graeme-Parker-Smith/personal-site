
const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function () {
	console.log('open hamburger');
	if (header.classList.contains('open')) {
		// Close Hamburger Menu
		body.classList.remove("noscroll")

		header.classList.remove('open');
		fadeElems.forEach(function (element) {
			element.classList.remove('fade-in');
			element.classList.add('fade-out');
		});
		overlay.classList.remove('fade-in');
		overlay.classList.add('fade-out');
    
		// click overlay to close menu too
		overlay.addEventListener('click', function () {
			if (header.classList.contains('open')) {
				// Close Hamburger Menu
				body.classList.remove('noscroll');
		
				header.classList.remove('open');
				fadeElems.forEach(function (element) {
					element.classList.remove('fade-in');
					element.classList.add('fade-out');
				});
				overlay.classList.remove('fade-in');
				overlay.classList.add('fade-out');
			}
			overlay.removeEventListener('click');
		});

	} else {
		//Open Hamburger Menu
		body.classList.add("noscroll")
		header.classList.add('open');
		fadeElems.forEach(function (element) {
			element.classList.remove('fade-out');
			element.classList.add('fade-in');
		});
		overlay.classList.remove('fade-out');
		overlay.classList.add('fade-in');
	}
});