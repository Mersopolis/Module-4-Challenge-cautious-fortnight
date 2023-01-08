// Defines main content, buttons, and timer variables
var main = document.querySelector("main");
var buttons = document.querySelectorAll("button");
var timer = document.querySelector("#timer");

// Enables buttons when run
function enableButtons() {
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].removeAttribute("class");
  }
}

// Defines Start Quiz button
var startButton = document.querySelector("main").querySelector("button");
startButton.textContent = "Start Quiz";

// Defines Question elements
var questionCard = document.createElement("div");
questionCard.setAttribute("class","questionCard");
var questionHeader = document.createElement("h2");
questionHeader.textContent = "What is the first thing that should be in an html file?";
var questionDivider = document.createElement("hr");
var questionChoice1 = document.createElement("button");
questionChoice1.textContent = "<html>";
var questionChoice2 = document.createElement("button");
questionChoice2.textContent = "<head>";
var questionChoice3 = document.createElement("button");
questionChoice3.textContent = "<!DOCTYPE html>";
var questionChoice4 = document.createElement("button");
questionChoice4.textContent = "<!--html-->";

// Defines Retry Quiz button
var restartButton = document.createElement("button");
restartButton.textContent = "Retry Quiz";

// Defines indicators for wrong answers and right answers
var wrongIndicator = document.createElement("div");
  wrongIndicator.setAttribute("class", "wrongIndicator");
  wrongIndicator.textContent = "X Wrong! -10 seconds";
var rightIndicator = document.createElement("div");
  rightIndicator.setAttribute("class", "rightIndicator");
  rightIndicator.textContent = "✓ Correct!";

// Causes respective indicator to appear and fade out when run
wrongChoice = function() {
  timeLeft = timeLeft - 10;
  main.appendChild(wrongIndicator);
  wrongIndicator.classList.add("fadeOut");

}
rightChoice = function() {
  main.appendChild(rightIndicator);
  rightIndicator.classList.add("fadeOut");
}

// Quiz Function 
function Quiz() {
  // Removes Start Quiz button and Retry Quiz Button
  startButton.remove();
  restartButton.remove();


  // Starts timer
  timeLeft = 60;
  timer.textContent = timeLeft + " seconds remaining";
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timer.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timer.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      // Removes current question and displays Restry Quiz button when time is up
      timer.textContent = "Time's up!";
      questionCard.remove();
      clearInterval(timeInterval);
      main.appendChild(restartButton);
    }
  }, 1000);

  // Displays question
  main.appendChild(questionCard);
  questionCard.appendChild(questionHeader);
  questionCard.appendChild(questionDivider);
  questionCard.appendChild(questionChoice1);
  questionCard.appendChild(questionChoice2);
  questionCard.appendChild(questionChoice3);
  questionCard.appendChild(questionChoice4);

  questionChoice1.addEventListener("click", wrongChoice);
  questionChoice2.addEventListener("click", wrongChoice);
  questionChoice3.addEventListener("click", rightChoice);
  questionChoice4.addEventListener("click", wrongChoice);
}

// Start Quiz button and Retry Quiz button run Quiz function
startButton.addEventListener("click", Quiz);
restartButton.addEventListener("click", Quiz);

// Enables buttons on page load
enableButtons();