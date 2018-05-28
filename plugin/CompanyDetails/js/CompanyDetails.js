
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






