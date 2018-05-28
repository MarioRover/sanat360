$(document).ready(function() {
	var input = $('#signin-page .form-wrp form').find(':input');
	input.val('');
	input.prop('checked' , false);	
	
	var radio1 = $('#ember01');
	var radio2 = $('#ember02');
	
	radio1.click(function() {
		radio1.prop('checked', true);
		radio2.prop('checked', false);
	})
	radio2.click(function() {
		radio2.prop('checked', true);
		radio1.prop('checked', false);
	})
});