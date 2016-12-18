$(document).ready(function(){

	var  scrollTop = $('.to-top');
	// hide #back-top first
	scrollTop.hide();

	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
                scrollTop.fadeIn();
			} else {
                scrollTop.fadeOut();
			}
		});

		// scroll body to 0px on click
		scrollTop.click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

});