// Get the Start and Stop buttons
let startBtn = document.querySelector('[data-start]');
let stopBtn = document.querySelector('[data-stop]');

// Set up the interval
let intervalID;

// Set up the event listeners
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);

// Set up the timer function
function startTimer() {
  startBtn.disabled = true;
  intervalID = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

// Set up the stop timer function
function stopTimer() {
  startBtn.disabled = false;
  clearInterval(intervalID);
}

// Function to generate a random hex color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
  
