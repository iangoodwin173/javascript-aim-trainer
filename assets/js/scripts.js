const targetImage = new Image();
targetImage.src = 'assets/img/rainbow-spiral.jpg';
targetImage.style.borderRadius = '25px';
targetImage.style.position = 'absolute';
targetImage.style.height = '45px';
targetImage.style.width = '45px';

const playArea = document.getElementById('playarea');

const howToPlay = document.getElementById('how-to-play');
const instruction = document.querySelector('.instruction-text');


function setInitialPosition() {
    targetImage.style.top = '50vh';
    targetImage.style.left = '50vw';
}
function setRandomPosition() {
    const maxX = playArea.clientWidth - targetImage.width;
    const maxY = playArea.clientHeight - targetImage.height;

    const randomX = Math.max(0, Math.floor(Math.random() * maxX));
    const randomY = Math.max(0, Math.floor(Math.random() * maxY));

    // Ensure the target doesn't exceed the boundaries
    targetImage.style.left = Math.min(randomX, maxX) + 'px';
    targetImage.style.top = Math.min(randomY, maxY) + 'px';
}

setInitialPosition();

playArea.appendChild(targetImage);

// setRandomPosition();

targetImage.addEventListener('click', function() {
    setRandomPosition();
    increaseScore(); // Call a function to increase the score after repositioning the target
});

targetImage.addEventListener('mouseover', function() {
    document.body.style.cursor = 'crosshair';
});

targetImage.addEventListener('mouseout', function() {
    document.body.style.cursor = 'default';
});

// Score-related code

const currentScoreElement = document.querySelector('.current-score');
let currentScore = 0;


function increaseScore() {
    currentScore++;
    updateScore();
}

function updateScore() {
    currentScoreElement.textContent = `Current Score: ${currentScore}`;
}


window.onload = function() {
    updateScore();
    
};


howToPlay.addEventListener('mouseover', function() {
    instruction.style.display = 'inline';
    document.body.style.cursor = 'default';
});

howToPlay.addEventListener('mouseout', function() {
    instruction.style.display = 'none';
});

let timeLeft = 60; // Initial time in seconds
let timerRunning = false;
const timerElement = document.querySelector('.timer-text');

function startTimer() {
    howToPlay.style.display = 'none';

    if (!timerRunning) {
        timerRunning = true;
        const timer = setInterval(function () {
            timeLeft--;
            timerElement.textContent = `Time left: ${timeLeft}s`;

            if (timeLeft === 0) {
                clearInterval(timer);
                timerRunning = false;
                alert(`Game Over! Your final score: ${currentScore}`);
                currentScore = 0; // Reset score
                updateScore(); // Update displayed score
                timeLeft = 60; // Reset timer
                timerElement.textContent = ''; // Clear timer display
            }
        }, 1000);
    }
}

targetImage.addEventListener('click', function () {
    startTimer(); // Start the timer on the first click
    setRandomPosition();
    // increaseScore(); // Only increase the score on clicking the target
});