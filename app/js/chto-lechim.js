$(function() {

	// Custom JS

	// slider begin
	$(".owl-carousel").owlCarousel({
		loop: false,
		margin:30,
		nav: false,
		responsive:{
				0:{
						items:1,
						dots: true
				},
				480:{
						items:2,
						dots: true
				},
				768:{
						items:3,
						dots: true
				},
				992:{
						items:4,
						dots: false
				},
				1200:{
						items:4,
						dots: false
				}
		}
	});
	// slider end

	// carousel text equalHeight begin
	$('.carousel-item__text').matchHeight();
	// carousel text equalHeight end

});
