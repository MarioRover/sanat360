$(document).ready(function() {

	var slide = $('.slideshow .slide');
	var slideIndex = 0;
	showSlides();

	function showSlides() {
		var i;
		for(i = 0; i < slide.length; i++) {
			slide[i].className =  slide[i].className.replace(" show" , "");
		}
		slideIndex++;
		if(slideIndex > slide.length) {
			slideIndex = 1;
		}
		slide[slideIndex -1].className += " show";
		setTimeout(showSlides , 10000);
	}
});
$(document).ready(function() {
	var input = $('#main-site').find(':input');
	var input2 = $('#footer-site').find(':input');
	input.val('');
	input2.val('');
});
