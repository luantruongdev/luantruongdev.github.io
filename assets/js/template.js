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


	// // This part is for smooth scroll function
	// // Add smooth scrolling to all links
	// $("a").on('click', function (event) {

	// 	// Make sure this.hash has a value before overriding default behavior
	// 	if (this.hash !== "") {
	// 		// Prevent default anchor click behavior
	// 		event.preventDefault();

	// 		// Store hash
	// 		var hash = this.hash;

	// 		// Using jQuery's animate() method to add smooth page scroll
	// 		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	// 		$('html, body').animate({
	// 			scrollTop: $(hash).offset().top
	// 		}, 1000, function () {

	// 			// Add hash (#) to URL when done scrolling (default click behavior)
	// 			window.location.hash = hash;
	// 		});
	// 		return false;
	// 	} // End if
	// });


	// // This part is for smooth scroll function
	// // Add smooth scrolling to all links
	// $("a").on('click', function (event) {

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
	//Smooth scroll
	$('.smooth-goto').on('click', function () {
		$('html, body').animate({ scrollTop: $(this.hash).offset().top - 50 },
			Math.abs(window.scrollY - $(this.hash).offset().top) * 0.7);
		return false;
	});

	// $('#carousel-example-generic').carousel();
	// $('#carousel-example-2').carousel();
	// 4s for new slide in carousel
	// $('.carousel').carousel({
	// 	interval: 4000
	// })

	//Navigation bar headroom
	$(".headroom").headroom({
		"tolerance": 20,
		"offset": 50,
		"classes": {
			"initial": "animated",
			"pinned": "slideDown",
			"unpinned": "slideUp"
		}
	});
});
