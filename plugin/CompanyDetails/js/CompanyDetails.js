
$("#about").click(function () {
  console.log(`about`);
  $('html, body').animate({
    scrollTop: $("#company-details .wrp .wrp2 .content-details .image").offset().top
  }, 1000);
});

$("#product").click(function () {
  console.log(`about`);
  $('html, body').animate({
    scrollTop: $("#company-details .wrp .wrp2 .content-details .about p").offset().top
  }, 1000);
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
