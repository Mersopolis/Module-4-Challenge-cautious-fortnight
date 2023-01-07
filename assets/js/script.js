// Define buttons and timer variables
var buttons = document.querySelectorAll("button");
var timer = document.querySelector("#timer");

// Activates buttons
function activateButtons() {
    for (var i = 0; i < buttons.length; i++) {
    buttons[i].setAttribute("class", "activeButton");
    }
}

// Defines Start button
var startButton = document.querySelector("main").querySelector("button");
startButton.textContent = "Start Quiz";

// Removes Start button and starts timer
function startQuiz() {
    startButton.remove();
    timeLeft = 60;
    var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timer.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      timer.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timer.textContent = "Time's up!";
      clearInterval(timeInterval);
    }
  }, 1000);
}

startButton.addEventListener("click", startQuiz);

// Activates Buttons on page load
activateButtons();