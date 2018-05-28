let views = document.querySelectorAll('.hero3 .content .back .btn .btn-wrp');
let companyCard = document.querySelectorAll(`.company-card`);


views.forEach(function(view , index){
  view.addEventListener('click',function() {
    location.href = "robotics-company-category.html";
  })
})

companyCard.forEach(function(card,index){
  card.addEventListener(`click` , function() {
    location.href = `company-details.html`;
  })
})