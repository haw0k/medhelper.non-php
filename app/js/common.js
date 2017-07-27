$(function() {

	// Custom JS

// header menu toggle begin
	$(".header .menu-toggle").click(function() {
	  $(this).toggleClass("on");
	  $(".header .menu-main--hidden").slideToggle();
	  return false;
	});
// footer menu toggle begin
	$(".footer .menu-toggle").click(function() {
	  $(this).toggleClass("on");
	  $(".footer .menu-main--hidden").slideToggle();
	  return false;
	});
// menu toggle end

//E-mail Ajax Send
//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			th.find(".success").addClass("active");
			setTimeout(function() {
				// Done Functions
				th.find(".success").removeClass("active");
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});


	// input form begin
	$("a[href='#callback']").magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline',
	});

	$("a[href='#callback']").click(function() {
		var dataForm = $(this).data("form");
		var dataText = $(this).data("text");
		$(".contact-form h4").text(dataText);
		$(".contact-form [name=admin-data]").val(dataForm);
	});
	// input form end

// top scroller start
	$("body").append('<div class="top"><i class="fa fa-angle-double-up">');

	$("body").on("click", ".top", function() {
		$("html, body").animate({scrollTop: 0}, "slow");
	});

	$(window).scroll(function() {
		if($(this).scrollTop() > $(this).height()) {
			$(".top").addClass("active");
		} else {
			$(".top").removeClass("active");
		}
	});
// top scroller end

});
