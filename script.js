'use strict';

let score = 20;
let highScore = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1; 
console.log(secretNumber);

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value); 
    console.log(guess);
    
    if (!guess) {
        displayMessage("You didn't guess a number");
    } else if (guess === secretNumber) {
        displayMessage("Correct!");
        document.querySelector('.number').textContent = secretNumber; 
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    } else if (guess !== secretNumber){
        if (score > 1) {
            displayMessage(guess > secretNumber ? "Too high..." : "Too low..."); // ternary operator
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
    console.log("clicked the 'Again' button")
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);

    displayMessage('start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';

});
