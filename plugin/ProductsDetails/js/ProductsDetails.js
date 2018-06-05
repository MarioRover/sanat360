// Slider
let slideIndex = 0;
let slides = $(".myslides");
let dots = document.querySelectorAll(`.demo`); 
showSlides(slideIndex);
$(function () {
  $(".fa-caret-left").click(function () {
    showSlides(slideIndex -= 1);
  });
  $(".fa-caret-right").click(function () {
    showSlides(slideIndex += 1);
  });
});
dots.forEach(function(dot , index){
  dot.addEventListener(`click`, function(){
    showSlides(slideIndex = index);
  })
})
function showSlides(slideNum) {
  var i;
  if (slideNum > (slides.length - 1)) {
    slideIndex = 0;
  }
  if (slideNum < 0) {
    slideIndex = (slides.length - 1);
  }
  for (i = 0; i < (slides.length); i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < (dots.length); i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}
// Heart Icon
let heart = document.querySelector(`.pro-content .content .btn .btn-wrap i.heart`);
heart.addEventListener(`click` , function() {
  if(heart.classList.contains(`active`)) {
    this.classList.remove(`active`);
  } else {
    this.classList.add(`active`);
  }
})
// Products-tab
let tabs = document.querySelectorAll(`.pro-wrap .tab-nav li`);
let sections = document.querySelectorAll(`.pro-wrap .tab-content section`);
$(tabs[0]).addClass(`active`);
$(sections[0]).addClass(`active`);

tabs.forEach(function(tab , tabIndex) {
  tab.addEventListener(`click`, function(){
    // Remove Active Class From Tabs
    tabs.forEach(function(tab , tabIndex){
      tab.classList.remove(`active`);
    })
    //Remove Active From Sections 
    sections.forEach(function(section , secIndex){
      section.classList.remove(`active`);
    })
    // Add Active Class To Tab & Section
    if(!tab.classList.contains(`active`)) {
      tab.classList.add(`active`);
      sections[tabIndex].classList.add(`active`);
    }
    // 
  })
})
// Clear Input
$(document).ready(function () {
 $(`input`).val(``); 
 $(`textarea`).val(``);
});