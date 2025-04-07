const carousel = document.getElementById("carousel");
const container = document.getElementById("carousel-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// Original card data
const cardData = [
  {
    icon: "computer.svg",
    title: "UTME WAEC Past Questions",
    text: "Solve Past Question from WAEC and UTME  in preparation for your exams.",
  },
  {
    icon: "open-book.svg",
    title: "IGCSE Master Prep.",
    text: "Prepare adequately for IGCSE exams .",
  },
  {
    icon: "computer.svg",
    title: "E-Reader",
    text: "With Access to our E-Reader make reading easier.",
  },
  {
    icon: "open-book.svg",
    title: "Smart Reader Senior",
    text: "Download our SS Reader and get all your textbooks on  your device.",
  },
  {
    icon: "computer.svg",
    title: "UTME WAEC Past Questions",
    text: "Solve Past Question from WAEC and UTME  in preparation for your exams.",
  },
  {
    icon: "open-book.svg",
    title: "IGCSE Master Prep.",
    text: "Prepare adequately for IGCSE exams .",
  },
  {
    icon: "computer.svg",
    title: "E-Reader",
    text: "With Access to our E-Reader make reading easier.",
  },
  {
    icon: "open-book.svg",
    title: "Smart Reader Senior",
    text: "Download our SS Reader and get all your textbooks on  your device.",
  },
];

function createCard(icon, title, text) {
  const card = document.createElement("div");
  card.className =
    "card flex-shrink-0 mx-2 p-4 bg-white text-[#003f7d] rounded-lg text-center transition-all duration-300 scale-90 opacity-50 xl:w-1/4 w-full";
  card.innerHTML = `
    <div class="icon-container mx-auto mb-4 bg-[#fd7702] w-24 h-24 rounded-full flex items-center justify-center">
      <img src="./assests/icons/${icon}" alt="" />
    </div>
    <h2 class="font-bold text-2xl">${title}</h2>
    <p class="text-[20px] mt-2">${text}</p>
  `;
  return card;
}

// Populate the carousel with original + cloned elements
const originalCards = cardData.map((data) =>
  createCard(data.icon, data.title, data.text)
);
originalCards.forEach((card) => carousel.appendChild(card.cloneNode(true)));

// Clone first and last two for smooth looping
carousel.prepend(originalCards[originalCards.length - 2].cloneNode(true));
carousel.prepend(originalCards[originalCards.length - 1].cloneNode(true));
carousel.appendChild(originalCards[0].cloneNode(true));
carousel.appendChild(originalCards[1].cloneNode(true));

// Get all cards after cloning
let cards = document.querySelectorAll("#carousel .card");

let index = 2; // Start index (accounting for clones)
let cardWidth = cards[0].offsetWidth + 16; // Includes margin
let isMobile = window.innerWidth < 768;
let visibleCards = isMobile ? 1 : 2; // 1 on mobile, 2 on desktop

// Set initial position
let position = -index * cardWidth;
carousel.style.transform = `translateX(${position}px)`;
console.log(carousel.clientWidth / 2);
// Function to update active cards
function updateActiveCards() {
  cards.forEach((card, i) => {
    card.classList.remove("scale-100", "opacity-100", "active-card");
    card.classList.add("scale-90", "opacity-50");

    if (i === index || (visibleCards === 2 && i === index + 1)) {
      card.classList.add("scale-100", "opacity-100", "active-card");
    }
  });
}

// Function to move next
function nextSlide() {
  if (index >= cards.length - visibleCards) {
    return;
  }
  index += visibleCards;
  position -= cardWidth * visibleCards;
  carousel.style.transition = "transform 0.3s ease-in-out";
  carousel.style.transform = `translateX(${position}px)`;

  updateActiveCards();

  // Reset to loop seamlessly
  if (index >= cards.length - visibleCards - 1) {
    setTimeout(() => {
      carousel.style.transition = "none";
      index = 2;
      position = -index * cardWidth;
      carousel.style.transform = `translateX(${position}px)`;
      updateActiveCards();
    }, 300);
  }
}

// Function to move previous
function prevSlide() {
  if (index <= 1) {
    return;
  }
  index -= visibleCards;
  position += cardWidth * visibleCards;
  carousel.style.transition = "transform 0.3s ease-in-out";
  carousel.style.transform = `translateX(${position}px)`;

  updateActiveCards();

  // Reset to loop seamlessly
  if (index <= 1) {
    setTimeout(() => {
      carousel.style.transition = "none";
      index = cards.length - visibleCards - 3;
      position = -index * cardWidth;
      carousel.style.transform = `translateX(${position}px)`;
      updateActiveCards();
    }, 300);
  }
}

// Event listeners
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Handle resizing for responsiveness
window.addEventListener("resize", () => {
  isMobile = window.innerWidth < 768;
  visibleCards = isMobile ? 1 : 2;
  cardWidth = cards[0].offsetWidth + 16;
  index = 2;
  position = -index * cardWidth;
  carousel.style.transform = `translateX(${position}px)`;
  updateActiveCards();
});

// Initialize active cards
updateActiveCards();
