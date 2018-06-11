
function showDescrib(post) {
  $(post).addClass(`show`);
  $(post).find('.description').slideDown(300);
}
function hiddenDescrib(post) {
  $(post).removeClass(`show`);
  $(post).find('.description').slideUp(300);
}

$(document).ready(function () {
  let posts = document.querySelectorAll(`.post-module`);

  $(posts).each(function (index, post) {
    // Click Event
    $(post).on(`click`, function () {
      if (!$(this).hasClass(`show`)) {
        // Show Description
       showDescrib(post);
      } else if ($(this).hasClass(`show`)) {
        // Hidden Description
        hiddenDescrib(post);
      }
    });
    // Mouse Event
    $(post).on(`mouseenter`, function () {
      showDescrib(post);
    });
    $(post).on(`mouseleave`, function () {
      hiddenDescrib(post);
    });
  });
});
