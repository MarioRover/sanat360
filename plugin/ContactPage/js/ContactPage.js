
$(document).ready(function() {
	var input = $('#contact-page .contact-wrp .write-wrp form').find(':input');
	input.each(function() {
	$(this).val('');
	});
	$('#contact-page .contact-wrp .write-wrp form .input-wrp textarea').val('');
});

// Company Map
function initMap() {
	// The location of Uluru
	var uluru = { lat: -25.344, lng: 131.036 };
	// The map, centered at Uluru
	var map = new google.maps.Map(
		document.getElementById('map'), { zoom: 4, center: uluru });
	// The marker, positioned at Uluru
	var marker = new google.maps.Marker({ position: uluru, map: map });
}