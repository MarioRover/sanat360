let cards = document.querySelectorAll(`.product-card`);

cards.forEach(function(card , key) {
  card.addEventListener(`click`, function() {
    location.href = `product-details.html`;
  })
})