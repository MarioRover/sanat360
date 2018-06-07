
// Allow Only Numeric input
$(document).ready(function () {
  $(".allow-only-numeric").keydown(function (e) {
    // Allow: backspace, delete, tab, escape, enter and .
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
      // Allow: Ctrl/cmd+A
      (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
      // Allow: Ctrl/cmd+C
      (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
      // Allow: Ctrl/cmd+X
      (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  });
});
// Hidden & Show Sidebar 
$(document).ready(function() {
  let mobileIcon = $(`#mobile-icon`);
  let siderbarName = $(`.main-sidebar .user-panel .user-panel-wrap span`);
  let headerSidebar = $(`.siderbar-menu .header`);
  let sidebarSpan = $(`.siderbar-menu .treeview a span`);
  let activeTree = $(`.siderbar-menu .treeview.active`);
  let sidebar = $(`.main-sidebar`);
  let mainContent = $(`.main-content`);
  let treeView = $(`.siderbar-menu .treeview a`);
  let treeViewActive = $(`.siderbar-menu .treeview.active a`);

  $(mobileIcon).click(function () { 
// Show Sidebar    
    if($(mobileIcon).hasClass(`hidden-navbar`)){
      console.log(`have class`);
      $(siderbarName).css({ display: `block` });
      $(headerSidebar).css({ display: `block` });
      $(sidebarSpan).css({ display: `block` });
      $(mobileIcon).removeClass(`hidden-navbar`);
      $(sidebar).css('width', `185px`);
      $(mainContent).css(`margin-right`, `185px`);
      $(treeView).css(`justify-content`, `flex-end`);
      $(treeViewActive).css(`margin-right`, `10px`);
// Hidden Sidebar
    } else if (!$(mobileIcon).hasClass(`hidden-navbar`)){
      console.log(`not have class`);
      $(siderbarName).css({ display: `none` });
      $(headerSidebar).css({ display: `none` });
      $(sidebarSpan).css({ display: `none` });
      $(activeTree).css({ border: `none` });
      $(mobileIcon).addClass(`hidden-navbar`);
      $(sidebar).css('width', `50px`);
      $(mainContent).css(`margin-right`, `50px`);
      $(treeView).css(`justify-content`, `center`);
      $(treeViewActive).css(`margin-right`, `7px`);
    }
  });
})
// Hidden & Show Sidebar Responsive
$(document).ready(function () {
  let mobileIcon = $(`#mobile-icon-responsive`);
  let sidebar = $(`.main-sidebar`);
  let mainContent = $(`.main-content`);
  $(mobileIcon).addClass(`hidden-navbar-responsive`);

  $(mobileIcon).click(function() {
    console.log(`click`);
    // Show Sidebar
    if ($(mobileIcon).hasClass(`hidden-navbar-responsive`)) {
      console.log(`have class`);
      $(mainContent).css(`margin-right`, `185px`);
      $(sidebar).css('width', `185px`);
      $(mobileIcon).removeClass(`hidden-navbar-responsive`);
    } else if (!$(mobileIcon).hasClass(`hidden-navbar-responsive`)) {
      // Hidden Sidebar
      console.log(`not have class`);
      $(sidebar).css('width', `0px`);
      $(mainContent).css(`margin-right`, `0px`);
      $(mobileIcon).addClass(`hidden-navbar-responsive`);
    }
  })

});
// Add Product
$(`#step1`).click(function(){
  window.location.href = `CompanyPanel-AddProducts.html`;
})
$(`#step2`).click(function () {
  window.location.href = `CompanyPanel-AddProducts-Step2.html`;
})
$(`#step3`).click(function () {
  window.location.href = `CompanyPanel-AddProducts-Step3.html`;
})
// Add Product Slider
let slideIndex = 0;
let slides = $(".myslides");
let dots = document.querySelectorAll(`.demo`);
showSlides(slideIndex);
dots.forEach(function (dot, index) {
  dot.addEventListener(`click`, function () {
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
    dots[i].style.opacity = `0.5`;
  }
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
  dots[slideIndex].style.opacity = `1`;
}
// Delete Picture
dots.forEach(function(dot , index) {
  dot.addEventListener(`mouseover`,function() {
    dot.children[0].classList.add(`show`);
  })
  dot.addEventListener(`mouseout`, function () {
    dot.children[0].classList.remove(`show`);
  })
})