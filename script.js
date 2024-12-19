let startBtn = document.getElementById('startBtn');
let clickBtn = document.getElementById('clickBtn');
let stopBtn = document.getElementById('stopBtn');
let timerDisplay = document.getElementById('timer');
let clickCountDisplay = document.getElementById('clickCountDisplay');

let clickCount = 0;
let timer;
let timeLeft = 10;

function startTimer() {
    timeLeft = 10;
    clickCount = 0;
    clickCountDisplay.innerText = `Clicks: ${clickCount}`;
    clickBtn.disabled = false;
    stopBtn.disabled = false;
    startBtn.disabled = true;
    
    timer = setInterval(function() {
        timeLeft--;
        timerDisplay.innerText = `Time Left: ${timeLeft}`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            clickBtn.disabled = true;
            stopBtn.disabled = true;
            startBtn.disabled = false;
            alert(`Time's up! You clicked ${clickCount} times.`);
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    clickBtn.disabled = true;
    alert(`You stopped the timer! You clicked ${clickCount} times.`);
}

function handleClick() {
    clickCount++;
    clickCountDisplay.innerText = `Clicks: ${clickCount}`;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
clickBtn.addEventListener('click', handleClick);
