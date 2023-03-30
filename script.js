'use strict';

// Selecting elemets
const DOMscore0 = document.querySelector('#score--0');
const DOMscore1 = document.getElementById('score--1');
const DOMcurrent0 = document.getElementById('current--0');
const DOMcurrent1 = document.getElementById('current--1');

const DOMdiceEl = document.querySelector('.dice');
const DOMbtnNew = document.querySelector('.btn--new');
const DOMbtnRoll = document.querySelector('.btn--roll');
const DOMbtnHold = document.querySelector('.btn--hold');

const DOMplayer0 = document.querySelector('.player--0');
const DOMplayer1 = document.querySelector('.player--1');



//Starting content
DOMscore0.textContent = 0;
DOMscore1.textContent = 0;
DOMdiceEl.classList.add('hidden');

const scores = [0, 0];

let currentScore = 0;
let activePlayer = 0;

// Rolling dice funcionality
DOMbtnRoll.addEventListener('click', function () {
  // 1. Generating random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display the dice
  DOMdiceEl.classList.remove('hidden');
  DOMdiceEl.src = `dice-${dice}.png`;

  // 3. Check for rolled 1: if true 
  if (dice !== 1) {
    // Add to the current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    // Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    DOMplayer0.classList.toggle('player--active');
    DOMplayer1.classList.toggle('player--active');
  }


});


