const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

function closeMobileMenu() {
	console.log('hamburger clicked.');
	console.log('triggered close menu event');
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

// clicking a link will close mobile menu
document.querySelectorAll('a').forEach((link) =>
	link.addEventListener('click', function () {
		if (header.classList.contains('open')) {
			closeMobileMenu();
		}
	})
);

btnHamburger.addEventListener('click', function () {
	console.log('hamburger clicked.');
	if (header.classList.contains('open')) {
		closeMobileMenu();
	} else {
		//Open Hamburger Menu
		body.classList.add('noscroll');
		header.classList.add('open');
		fadeElems.forEach(function (element) {
			element.classList.remove('fade-out');
			element.classList.add('fade-in');
		});
		overlay.classList.remove('fade-out');
		overlay.classList.add('fade-in');
	}
});

// click overlay to close menu too
overlay.addEventListener('click', function () {
	if (header.classList.contains('open')) {
		closeMobileMenu();
	}
});
