$(document).ready(function() {
	var acc = $('#footer-site .footer-wrp .top .col-4 .accordion');
	var i;
	var acc1 = $(acc[0]);
	var acc2 = $(acc[1]);

	acc1.click(function () {
		$(this).toggleClass('active');
		$(this).next().slideToggle(200);
		$(this).find('i').toggleClass('rotate');
	});
	acc2.click(function () {
		$(this).toggleClass('active');
		$(this).next().slideToggle(200);
		$(this).find('i').toggleClass('rotate');
	});
});