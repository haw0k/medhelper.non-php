$(function() {

	// Custom JS

// slider begin
	$("#owl-demo").owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 3000,
		// nav: true,
		pagination: true,
		loop: true,
	});
// slider end

//advantages section animation begin
	$(".section--advantages").waypoint(function () {
		$(".section--advantages__item h3 span").each(function() {
			var tcount = $(this).data("count");
			$(this).animateNumber({ number: tcount,
				easing: 'easeInQuad',
				"font-size": "40px",},
				900);
		});
		this.destroy();

	}, {
		offset: '80%'
	});
//advantages section animation end

// area map animation begin
	$.fn.maphilight.defaults = {
    fill: true,
    fillColor: 'ff0000',
    fillOpacity: 0.3,
    stroke: false,
    strokeColor: 'ff0000',
    strokeOpacity: 1,
    strokeWidth: 1,
    fade: true,
    alwaysOn: false,
    neverOn: false,
    groupBy: false,
    wrapClass: true,
    shadow: false,
    shadowX: 0,
    shadowY: 0,
    shadowRadius: 6,
    shadowColor: '000000',
    shadowOpacity: 0.8,
    shadowPosition: 'outside',
    shadowFrom: false
  }
  $(function() {
      $('.map').maphilight();
      $('#squidheadlink').mouseover(function(e) {
          $('#squidhead').mouseover();
      }).mouseout(function(e) {
          $('#squidhead').mouseout();
      }).click(function(e) { e.preventDefault(); });
  });
// area map animation end

});
