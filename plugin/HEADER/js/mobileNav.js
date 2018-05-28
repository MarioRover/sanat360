$(document).on('click','.mobile-icon-wrp',function(){
	$(this).toggleClass('open');
	$(".mobile-nav").toggleClass('open');
});
$(document).ready(function() {
	var signWrp = $('.sign-mobile-wrp');
	var signIcon = $('.user-icon');
	var arrow = $('.arrow');

	signIcon.click(function() {
		signIcon.toggleClass('open');
		signWrp.slideToggle(300);
		setTimeout(open , 250);
		function open() {
			arrow.toggleClass('open');
		}
	})
	$(document).on('click','body',function(e){
	if(!$(e.target).hasClass('user-icon')) {
		signWrp.slideUp(300);
		arrow.removeClass('open');
		signIcon.removeClass('open');
	}
	})
});