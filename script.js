'use strict';

// define initial score; decreased through incorrect guesses
let score = 20;

// define a secret number for the game; multiply by 20 for 1-20 
//       Math.trunc to remove decimals 
//       +1 because decimals after 19 will default to 19 i.e. 19.9999 will truncate to 19 so t20 is impossible
let secretNumber = Math.trunc(Math.random() * 20) + 1; 
console.log(secretNumber);

 // adds a 'click' Event Listener to the check button, with a corresponding EventHandler function
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value); // convert to number as input is a String
    console.log(guess);
    
    if (!guess) {
        document.querySelector('.message').textContent = "You didn't guess a number";
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "Correct!";
        document.querySelector('.number').textContent = secretNumber; 
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "Too high...";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "Game Over";
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "Too low...";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "Game Over";
            document.querySelector('.score').textContent = 0;
        }
    }

});

// implement Reset button functionality
document.querySelector('.again').addEventListener('click', function() {
    console.log("cliked the 'Again' button")
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);

    document.querySelector('.message').textContent = 'start guessing...'
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';

});
