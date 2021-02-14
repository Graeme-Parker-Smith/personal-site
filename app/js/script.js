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

// contact form logic

// ================================================================
// moves focus to next input and prevents submit on enter key
// ================================================================

const name = document.getElementById('name');
name.addEventListener('keypress', function (e) {
	if (e.keyCode == 13) {
		e.preventDefault();
		email.focus();
		return;
	}
});
const email = document.getElementById('email');
email.addEventListener('keypress', function (e) {
	if (e.keyCode == 13) {
		e.preventDefault();
		sanAntonioCheck.focus();
		return;
	}
});

// ================================================================
// handle contact form submit
// ================================================================

const contactForm = document.getElementById('contact__form');
const submitMsgBtn = document.getElementById('submitMsgBtn');

contactForm.addEventListener('submit', async function (e) {
	e.preventDefault();
	submitMsgBtn.disabled = true;
	// select form inputs
	const email = document.getElementById('email');
	email.addEventListener('submit', function (e) {
		e.preventDefault();
	});
	const message = document.getElementById('message');
	message.addEventListener('submit', function (e) {
		e.preventDefault();
	});
	// check do all inputs have a value?
	const inputsAreFilled = name.value && email.value && message.value;

	// if all input fields in form are completed, do this
	let location = 'graeme';
	if (inputsAreFilled) {
		const url = 'https://specfithost.herokuapp.com/api/sendemail';
		const options = {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json;charset=UTF-8',
			},
			body: JSON.stringify({
				name: name.value,
				email: email.value,
				location: 'graeme',
				message: message.value,
			}),
		};

		// Clears inputs after submit

		name.value = null;
		email.value = null;
		message.value = null;

		// alert user if message send was successful or not

		fetch(url, options).then((response) => {
			if (response.status === 200) {
				submitMsgBtn.disabled = false;
				alert('Your message has been sent!');
			} else if (response.status && response.status !== 200) {
				alert('Sorry, we were unable to send your message.');
			}
		});
	} else {
		// if form is not completed, do this
		alert('Your message could not be sent because not all of the fields in the form are completed.');
		submitMsgBtn.disabled = false;
	}
});
