const cardBoard = document.querySelector("#cardboard");
const imgs = [
  "angular.svg",
  "aurelia.svg",
  "vue.svg",
  "react.svg",
  "backbone.svg",
  "ember.svg"
  
];

let cardHTML = "";

imgs.forEach(img => {
  cardHTML +=  `<div class="memory-card" data-cards="${img}">
    <img class="front-face" src="img/${img}"/>
      <img class="back-face" src="img/js.badge.svg">
  </div>`;
});

cardBoard.innerHTML = cardHTML + cardHTML;