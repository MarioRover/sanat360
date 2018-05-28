$(document).ready(function() {
	var header = $('#header-site');
	var li = $('#header-site .header-wrp ul li');
	$(window).scroll(function(){
		var scro = $(window).scrollTop();

		if(scro == 0) {
			console.log(`scro = ${scro}`);
			header.css(`position`, `absolute`);
		} else {
			header.css(`position`, `fixed`);
		}

		if(scro >= 100) {
			header.css("background-color" , "rgba(0,0,0,1)");
			li.each(function() {
				$(this).addClass('height-nav');
			})
		} else {
			header.css("background-color" , "transparent");
			li.each(function() {
				$(this).removeClass('height-nav');
			})
		}
	});
});


