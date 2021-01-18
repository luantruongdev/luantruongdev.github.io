// 	jQuery script
jQuery(document).ready(function ($) {

	var my_nav = $('.navbar-sticky');
	// grab the initial top offset of the navigation 
	var sticky_navigation_offset_top = my_nav.offset().top;

	// our function that decides weather the navigation bar should have "fixed" css position or not.
	var sticky_navigation = function () {
		var scroll_top = $(window).scrollTop(); // our current vertical position from the top

		// if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
		if (scroll_top > sticky_navigation_offset_top) {
			my_nav.addClass('stick');
		} else {
			my_nav.removeClass('stick');
		}
	};

	var initio_parallax_animation = function () {
		$('.parallax').each(function (i, obj) {
			var speed = $(this).attr('parallax-speed');
			if (speed) {
				var background_pos = '-' + (window.pageYOffset / speed) + "px";
				$(this).css('background-position', 'center ' + background_pos);
			}
		});
	}

	// run our function on load
	sticky_navigation();

	// and run it again every time you scroll
	$(window).scroll(function () {
		sticky_navigation();
		initio_parallax_animation();
	});


	// This part is for smooth scroll function
	// Add smooth scrolling to all div that has .smooth-goto
	$('.smooth-goto').on('click', function (event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top - 70
			}, 500, function () {

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
			return false;
		} // End if
	});


	// // This part is for smooth scroll function
	// $('.smooth-goto').on('click', function (event) {

	// 	// Make sure this.hash has a value before overriding default behavior
	// 	if (this.hash !== "") {
	// 		// Prevent default anchor click behavior
	// 		event.preventDefault();

	// 		// Store hash
	// 		var hash = this.hash;

	// 		// Using jQuery's animate() method to add smooth page scroll
	// 		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	// 		$('html, body').animate({
	// 			scrollTop: $(hash).offset().top - 50
	// 		}, Math.abs(window.scrollY - $(this.hash).offset().top) * 0.7, function () {

	// 			// Add hash (#) to URL when done scrolling (default click behavior)
	// 			window.location.hash = hash;
	// 		});
	// 		return false;
	// 	} // End if
	// });



	// $('.smooth-goto').on('click', function () {
	// 	$('html, body').animate({ scrollTop: $(this.hash).offset().top - 50 }, 500);
	// 	return false;
	// });

	// //Smooth scroll
	// $('.smooth-goto').on('click', function () {
	// 	$('html, body').animate({ scrollTop: $(this.hash).offset().top - 50 },
	// 		Math.abs(window.scrollY - $(this.hash).offset().top) * 0.7);
	// 	return false;
	// });


	// $('#carousel-example-2').carousel();
	$('#carousel-example-generic').carousel();
	//4s for new slide in carousel
	$('.carousel').carousel({
		interval: 4000
	})

	// $("#btnShowHide").click(function () {
	// 	$("#divShowHide").toggle();
	// });

	// $("#btnPassport").click(function () {
	// 	if ($(this).val() == "Yes") {
	// 		$("#dvPassport").show();
	// 		$(this).val("No");
	// 	} else {
	// 		$("#dvPassport").hide();
	// 		$(this).val("Yes");
	// 	}
	// });


});

// js script
// button show hide
function btnShowHide(btnID, divID, msg) {
	var divID_rcv = document.getElementById(divID);
	var btnID_rcv = document.getElementById(btnID);
	if (divID_rcv.style.display == "none") {
		divID_rcv.style.display = "block";
		btnID_rcv.innerHTML = "Hide " + msg;
	} else {
		divID_rcv.style.display = "none";
		btnID_rcv.innerHTML = "Show " + msg;
	}
}


// button scroll to top
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
	if (window.pageYOffset > 300) { // Show backToTopButton
		if (!backToTopButton.classList.contains("btnEntrance")) {
			backToTopButton.classList.remove("btnExit");
			backToTopButton.classList.add("btnEntrance");
			backToTopButton.style.display = "block";
		}
	}
	else { // Hide backToTopButton
		if (backToTopButton.classList.contains("btnEntrance")) {
			backToTopButton.classList.remove("btnEntrance");
			backToTopButton.classList.add("btnExit");
			setTimeout(function () {
				backToTopButton.style.display = "none";
			}, 250);
		}
	}
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

function smoothScrollBackToTop() {
	const targetPosition = 0;
	const startPosition = window.pageYOffset;
	const distance = targetPosition - startPosition;
	const duration = 750;
	let start = null;

	window.requestAnimationFrame(step);

	function step(timestamp) {
		if (!start) start = timestamp;
		const progress = timestamp - start;
		window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
		if (progress < duration) window.requestAnimationFrame(step);
	}
}

function easeInOutCubic(t, b, c, d) {
	t /= d / 2;
	if (t < 1) return c / 2 * t * t * t + b;
	t -= 2;
	return c / 2 * (t * t * t + 2) + b;
};
// end button scroll top

// smooth scroll to anchor with pure js
// Vanilla JavaScript Scroll to Anchor, every div that has smooth-scroll class
// @ https://perishablepress.com/vanilla-javascript-scroll-anchor/
// (function () {
// 	scrollTo();
// })();

// function scrollTo() {
// 	const links = document.querySelectorAll('.smooth-scroll');
// 	links.forEach(each => (each.onclick = scrollAnchors));
// }

// function scrollAnchors(e, respond = null) {
// 	const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
// 	e.preventDefault();
// 	var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
// 	const targetAnchor = document.querySelector(targetID);
// 	if (!targetAnchor) return;
// 	const originalTop = distanceToTop(targetAnchor);
// 	window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
// 	const checkIfDone = setInterval(function () {
// 		const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
// 		if (distanceToTop(targetAnchor) === 0 || atBottom) {
// 			targetAnchor.tabIndex = '-1';
// 			targetAnchor.focus();
// 			window.history.pushState('', '', targetID);
// 			clearInterval(checkIfDone);
// 		}
// 	}, 100);
// }
// end smooth scroll to anchor with pure js

// progress bar with pure js
$(function () {
	var $animation_elements = $('.progressAnimation');

	$(window).on('scroll resize', function () {
		var viewportHeight = document.documentElement.clientHeight;

		$animation_elements.each(function () {
			var $el = $(this);
			var position = this.getBoundingClientRect();

			if (position.top > viewportHeight || position.bottom < 0) {
				this.inView && $el.css({ width: 0 });
				this.inView = false;
			} else {
				//3 for progressbar's width = 300px, 4 for progressbar's width = 400px ...
				!this.inView && $el.css({ width: 2.5 * $el.data("percent") });
				this.inView = true;
			}
		});
	});
});