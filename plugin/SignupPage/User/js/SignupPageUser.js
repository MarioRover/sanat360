$(document).ready(function() {
	var input = $('#signup-user-page .signup-wrp form').find(':input');
	input.each(function() {
		$(this).val('');
	});
});