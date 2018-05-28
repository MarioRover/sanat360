let treeView = document.querySelectorAll(`.siderbar-menu .treeview`);

// treeView.forEach(function(tree , key) {
//   tree.addEventListener(`click` , function() {
    
//     for(let i = 0 ; i < treeView.length ; i++) {
//       if(treeView[i].classList.contains(`active`)) {
//         treeView[i].classList.remove(`active`);
//       }
//     }
//     tree.classList.add(`active`);
//   })
// })
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