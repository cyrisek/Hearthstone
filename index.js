const cards = document.querySelectorAll('.memory-card');
const modal = document.getElementById("modal");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
  
    return;
  } 
 

  secondCard = this;
  checkForMatch();
  
}

function isFlipped(card) {
	return card.classList.contains("flip");
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
  
  if (Array.from(cards).every(isFlipped)) {
	  modal.style.display = "flex";
  }
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
  }

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();
function resetGame() {
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    shuffle();
};
cards.forEach(card => card.addEventListener('click', flipCard));
getElementById("modal").addEventListener("click", resetGame);