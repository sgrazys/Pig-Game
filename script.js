'use strict';

// Selecting elemets
const DOMscore0 = document.querySelector('#score--0');
const DOMscore1 = document.getElementById('score--1');
const DOMcurrent0 = document.getElementById('current--0');
const DOMcurrent1 = document.getElementById('current--1');

const DOMdice = document.querySelector('.dice');
const DOMbtnNew = document.querySelector('.btn--new');
const DOMbtnRoll = document.querySelector('.btn--roll');
const DOMbtnHold = document.querySelector('.btn--hold');

const DOMplayer0 = document.querySelector('.player--0');
const DOMplayer1 = document.querySelector('.player--1');


let scores, currentScore, activePlayer, playing;

//Starting content
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  DOMscore0.textContent = 0;
  DOMscore1.textContent = 0;
  DOMdice.classList.add('hidden');
  DOMcurrent0.textContent = 0;
  DOMcurrent1.textContent = 0;
  DOMplayer0.classList.remove('player--winner');
  DOMplayer1.classList.remove('player--winner');
  DOMplayer0.classList.add('player--active');
  DOMplayer1.classList.remove('player--active');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  DOMplayer0.classList.toggle('player--active');
  DOMplayer1.classList.toggle('player--active');
}

// Rolling dice funcionality
DOMbtnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display the dice
    DOMdice.classList.remove('hidden');
    DOMdice.src = `dice-${dice}.png`;

    // 3. Check for rolled 1: if true 
    if (dice !== 1) {
      // Add to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

DOMbtnHold.addEventListener('click', function () {
  // 1. Add currenct score to active player's score
  if (playing) {
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

      DOMdice.classList.add('hidden');

      playing = false;

    } else {
      // Switch to the next player
      switchPlayer();

    }
  }
});

DOMbtnNew.addEventListener('click', init)


  // // RELOAD GAME. MY SOLUTION:
  // window.location.reload();


