'use strict';

// Selecting elemets
const DOMscore0El = document.querySelector('#score--0');
const DOMscore1El = document.getElementById('score--1');
const DOMcurrent0 = document.getElementById('current--0');
const DOMcurrent1 = document.getElementById('current--1');

const DOMdiceEl = document.querySelector('.dice');
const DOMbtnNew = document.querySelector('.btn--new');
const DOMbtnRoll = document.querySelector('.btn--roll');
const DOMbtnHold = document.querySelector('.btn--hold');


//Starting content
DOMscore0El.textContent = 0;
DOMscore1El.textContent = 0;
DOMdiceEl.classList.add('hidden');

let currentScore = 0;

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
    DOMcurrent0.textContent = currentScore; // CHANGE LATER

  } else {
    // Switch to next player

  }

});


