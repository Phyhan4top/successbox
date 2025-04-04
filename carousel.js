const carousel = document.getElementById("carousel");
const container = document.getElementById("carousel-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let cards = document.querySelectorAll("#carousel .card");

const cardWidth = cards[0].offsetWidth + 16; // Includes margin
const visibleCards = 2; // Number of active cards in the center
const totalCards = cards.length;

// Clone two first and last elements for smooth looping
const firstClone1 = cards[0].cloneNode(true);
const firstClone2 = cards[1].cloneNode(true);
const lastClone1 = cards[totalCards - 1].cloneNode(true);
const lastClone2 = cards[totalCards - 2].cloneNode(true);

carousel.appendChild(firstClone1);
carousel.appendChild(firstClone2);
carousel.insertBefore(lastClone1, cards[0]);
carousel.insertBefore(lastClone2, cards[0]);

// Update the card list after cloning
cards = document.querySelectorAll("#carousel .card");

// Set initial position to center the first two real cards
let index = 2;
let position = -index * cardWidth;
carousel.style.transform = `translateX(${position}px)`;

function updateActiveCards() {
  cards.forEach((card, i) => {
    card.classList.remove("scale-100", "opacity-100", "active-card");
    card.classList.add("scale-90", "opacity-50");

    // Activate only the two center cards
    if (i === index || i === index + 1) {
      card.classList.add("scale-100", "opacity-100", "active-card");
    }
  });
}

function nextSlide() {
  if (index >= totalCards) {
    return;
  }
  index++;
  position -= cardWidth;
  carousel.style.transition = "transform 0.3s ease-in-out";
  carousel.style.transform = `translateX(${position}px)`;

  updateActiveCards();

  // Reset to loop seamlessly
  if (index >= totalCards - visibleCards) {
    setTimeout(() => {
      carousel.style.transition = "none";
      index = 2;
      position = -index * cardWidth;
      carousel.style.transform = `translateX(${position}px)`;
      updateActiveCards();
    }, 300);
  }
}

function prevSlide() {
  if (index <= 0) {
    return;
  }
  index--;
  position += cardWidth;
  carousel.style.transition = "transform 0.3s ease-in-out";
  carousel.style.transform = `translateX(${position}px)`;

  updateActiveCards();

  // Reset to loop seamlessly
  if (index <= 1) {
    setTimeout(() => {
      carousel.style.transition = "none";
      index = totalCards - 3;
      position = -index * cardWidth;
      carousel.style.transform = `translateX(${position}px)`;
      updateActiveCards();
    }, 300);
  }
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

updateActiveCards(); // Set initial active state
