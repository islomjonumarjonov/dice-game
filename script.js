const diceEl = document.querySelector(".dice");
const rollDice = document.querySelector(".btn--roll");
const hold = document.querySelector(".btn--hold");
const res = document.querySelector(".btn--new");

let currentScore = 0;
let activePlayer = 0;
let totalScore = [0, 0];

let gameOver = true;

diceEl.style.display = "none";

rollDice.addEventListener("click", () => {
  if (gameOver) {
    diceEl.style.display = "block";
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    currentScore += randomNumber;
    diceEl.src = `dice-${randomNumber}.png`;

    if (randomNumber != 1) {
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      activePlayer = activePlayer == 0 ? 1 : 0;
      currentScore = 0;

      document.querySelector(".player--0").classList.toggle("player--active");
      document.querySelector(".player--1").classList.toggle("player--active");
    }
  }
});

hold.addEventListener("click", () => {
  if (gameOver) {
    totalScore[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[activePlayer];

    if (totalScore[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      gameOver = false;
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      activePlayer = activePlayer == 0 ? 1 : 0;
      currentScore = 0;

      document.querySelector(".player--0").classList.toggle("player--active");
      document.querySelector(".player--1").classList.toggle("player--active");
    }
  }
});

res.addEventListener("click", () => {
  window.location.reload();
});
