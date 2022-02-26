'use strict';

// creates secret number
const secretNumber = Math.trunc(Math.random() * 21);
// sets score
let score = 20;
// Programs Check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // If no value is entered
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.highscore').textContent = score;
    // Turns background green on win
    document.querySelector('body').style.backgroundColor = '#60b347';
    // Makes Secret Number Wider
    document.querySelector('.number').style.width = '30rem';
    // Change H1
    document.querySelector('h1').textContent = 'CONGRATS!';

    // when guess is higher than the secret number
  } else if (guess > secretNumber) {
    // while the score is greater than 0
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score -= 1;
      document.querySelector('.score').textContent = score;

      // lose condition
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
    // when guess is less than the secret number
  } else if (guess < secretNumber) {
    // while score is greater than 0
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score -= 1;
      document.querySelector('.score').textContent = score;
      // lose condition
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// again button reloads the page
document.querySelector('.again').addEventListener('click', function () {
  window.location.reload();
});
