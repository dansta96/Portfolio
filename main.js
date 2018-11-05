window.sr = ScrollReveal();
sr.reveal('.icon', {
	reset: true,
	delay: 300,
	distance: 0
});
sr.reveal('p', {
	reset: true,
	delay: 300
});

// Text Typing
document.addEventListener('DOMContentLoaded', function (event) {
	// array with texts to type in typewriter
	var dataText = ["Junior Frontend developer.", "I love programming.",
									"I want to create websites."];

	// type one text in the typwriter
	// keeps calling itself until the text is finished
	function typeWriter(text, i, fnCallback) {
		// chekc if text isn't finished yet
		if (i < (text.length)) {
			// add next character to h1
			document.querySelector(".text-typing").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

			// wait for a while and call this function again for next character
			setTimeout(function () {
				typeWriter(text, i + 1, fnCallback)
			}, 150);
		}
		// text finished, call callback if there is a callback function
		else if (typeof fnCallback == 'function') {
			// call callback after timeout
			setTimeout(fnCallback, 700);
		}
	}
	// start a typewriter animation for a text in the dataText array
	function StartTextAnimation(i) {
		if (typeof dataText[i] == 'undefined') {
			setTimeout(function () {
				StartTextAnimation(0);
			}, 5000);
		}
		// check if dataText[i] exists
		if (i < dataText[i].length) {
			// text exists! start typewriter animation
			typeWriter(dataText[i], 0, function () {
				// after callback (and whole text has been animated), start next text
				StartTextAnimation(i + 1);
			});
		}
	}
	// start the text animation
	StartTextAnimation(0);
});

/*Scroll Button*/
var scrollBtn = document.getElementById('scrollBtn');

scrollBtn.onclick = function () {
	window.scrollBy(0, -1 * window.pageYOffset);
}
