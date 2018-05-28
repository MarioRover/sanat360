
$(document).ready(function() {
	var input = $('#contact-page .contact-wrp .write-wrp form').find(':input');
	input.each(function() {
	$(this).val('');
	});
	$('#contact-page .contact-wrp .write-wrp form .input-wrp textarea').val('');
});
// var input = document.querySelectorAll('#contact-page .contact-wrp .write-wrp form input');
// var textArea = document.querySelector('#contact-page .contact-wrp .write-wrp form .input-wrp textarea');
// window.addEventListener('load' , function(){
// 	input.forEach(function(item , index){
// 		item.value = '';
// 	})
// 	textArea.value = '';
// })
