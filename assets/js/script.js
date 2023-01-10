// Defines variables for main content, buttons, timer, and high score list elements
var main = document.querySelector("main");
var buttons = document.querySelectorAll("button");
var timer = document.querySelector("#timer");
var highScoreList = document.querySelector("ol");

// Defines Start Quiz button element
var startButton = document.querySelector("main").querySelector("button");
startButton.textContent = "Start Quiz";

// Defines Question elements
var questionCard = document.createElement("div");
questionCard.setAttribute("class", "questionCard");
var questionHeader = document.createElement("h2");
var questionDivider = document.createElement("hr");
var questionChoice1 = document.createElement("button");
var questionChoice2 = document.createElement("button");
var questionChoice3 = document.createElement("button");
var questionChoice4 = document.createElement("button");

// Defines enableChoices function
var enableChoices = function() {
  questionChoice1.addEventListener("click", function() {
    choice = questionChoice1;
    choiceFunction(choice);
    nextPart();
  });
  questionChoice2.addEventListener("click", function() {
    choice = questionChoice2;
    choiceFunction(choice);
    nextPart();
  });
  questionChoice3.addEventListener("click", function() {
    choice = questionChoice3;
    choiceFunction(choice);
    nextPart();
  });
  questionChoice4.addEventListener("click", function() {
    choice = questionChoice4;
    choiceFunction(choice);
    nextPart();
  });
  return;
}

// Defines choiceFunction function
var choiceFunction = function(choice) {
  if (choice.classList.contains("right")) {
    main.appendChild(rightIndicator);
    rightIndicator.classList.add("fadeOut");
    return;
  }
  else {
    timeLeft = timeLeft - 10;
    main.appendChild(wrongIndicator);
    wrongIndicator.classList.add("fadeOut");
    if (timeLeft <= 0) {
      // Clears time interval, removes current question and displays Retry Quiz button when time is up
      timer.textContent = "Time's up! Reload the page to try again";
      clearInterval(timeInterval);
      questionCard.remove();
      questionNumber = 0;
      return;
    }
  }
  choice = 0;
  return;
}

// Defines nextPart function
var nextPart = function() {
  if (questionNumber == 1) {
    question2();
  }
  else if (questionNumber == 2) {
    question3();
  }
  else if (questionNumber == 3) {
    question4();
  }
  else if (questionNumber == 4) {
    question5();
  }
  else if (questionNumber == 5) {
    question6();
  }
  else if (questionNumber == 6) {
    submitScore();
  }
  return;
}

// Defines wrong answer indicator and right answer indicator elements
var wrongIndicator = document.createElement("div");
wrongIndicator.setAttribute("class", "wrongIndicator");
wrongIndicator.textContent = "X Wrong! -10 seconds";

var rightIndicator = document.createElement("div");
rightIndicator.setAttribute("class", "rightIndicator");
rightIndicator.textContent = "✓ Correct!";
  
// Defines High Score Submission elements
var submitScoreForm = document.createElement("form");
var submitScoreMessage = document.createElement("div");
var submitScoreLineBreak = document.createElement("br");
var submitScoreMessage2 = document.createElement("div");
var submitScoreInput = document.createElement("input");
var submitScoreButton = document.createElement("button");
submitScoreButton.textContent = "Submit";

// Defines quiz function
function quiz() {
  // Removes Start Quiz button, Retry Quiz Button, and Score Submission form
  startButton.remove();
  submitScoreForm.remove();

  // Starts timer
  timeLeft = 60;
  timer.textContent = timeLeft + " seconds remaining";
  timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timer.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timer.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      // Removes current question, stops time interval and displays Retry Quiz button when time is up
      timer.textContent = "Time's up! Reload the page to try again";
      questionCard.remove();
      questionNumber = 0;
      clearInterval(timeInterval);
    }
  }, 1000);

  // Appends question elements
  main.appendChild(questionCard);
  questionCard.appendChild(questionHeader);
  questionCard.appendChild(questionDivider);
  questionCard.appendChild(questionChoice1);
  questionCard.appendChild(questionChoice2);
  questionCard.appendChild(questionChoice3);
  questionCard.appendChild(questionChoice4);

  enableChoices();

  // Shows first question
  question1();
}

// Defines function that resets which button is the right answer
var resetRightChoice = function() {
  var buttons = document.querySelectorAll("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("right");
  }
  return;
}

var questionNumber;

// Question 1
var question1 = function() {
  resetRightChoice();

  questionNumber = 1;

  questionHeader.textContent = "What is the first thing that should be in an html file?";
  questionChoice1.textContent = "<html>";
  questionChoice2.textContent = "<head>";
  questionChoice3.textContent = "<!DOCTYPE html>";
  questionChoice3.classList.add("right");
  questionChoice4.textContent = "<!--html-->";
  return;
}

// Question 2
var question2 = function() {
  resetRightChoice();

  questionNumber = 2;

  questionHeader.textContent = "What is the 'Wildcard' selector for CSS?";
  questionChoice1.textContent = "*";
  questionChoice1.classList.add("right");
  questionChoice2.textContent = "<wildcard>";
  questionChoice3.textContent = "/* */";
  questionChoice4.textContent = ":";
  return;
}

// Question 3
var question3 = function() {
  resetRightChoice();

  questionNumber = 3;

  questionHeader.textContent = "Which of the following is a function call?";
  questionChoice1.textContent = "var function;";
  questionChoice2.textContent = "function {}";
  questionChoice3.textContent = "<function>";
  questionChoice4.textContent = "function();";
  questionChoice4.classList.add("right");
  return;
}

// Question 4
var question4 = function() {
  resetRightChoice();

  questionNumber = 4;

  questionHeader.textContent = "Which of the following is a third-party API?";
  questionChoice1.textContent = "CSS";
  questionChoice2.textContent = "Microsoft";
  questionChoice3.textContent = "Apple Maps";
  questionChoice4.textContent = "JQuery";
  questionChoice4.classList.add("right");
  return;
}

// Question 5
var question5 = function() {
  resetRightChoice();

  questionNumber = 5;

  questionHeader.textContent = "What's the difference between JavaScript and Jquery?";
  questionChoice1.textContent = "None, they both refer to the same thing";
  questionChoice2.textContent = "One is a language, the other is an extension for it";
  questionChoice2.classList.add("right");
  questionChoice3.textContent = "They are different languages";
  questionChoice4.textContent = "One is a program, the other is an application";
  return;
}

// Question 6
var question6 = function() {
  resetRightChoice();

  questionNumber = 6;

  questionHeader.textContent = "What is the index of 'Apple' in the following array: ['Apple', 'Orange', 'Banana']";
  questionChoice1.textContent = "first";
  questionChoice2.textContent = "1";
  questionChoice3.textContent = "last";
  questionChoice4.textContent = "0";
  questionChoice4.classList.add("right");
  return;
}

// Score Submission
var submitScore = function() {
  var score = timeLeft;
  clearInterval(timeInterval);
  timer.textContent = "Well done!";
  questionCard.remove();

  submitScoreMessage.textContent = "Your score is " + timeLeft;
  submitScoreMessage2.textContent = "Submit a name for the High Score list";
  main.appendChild(submitScoreForm);
  submitScoreForm.appendChild(submitScoreMessage);
  submitScoreForm.appendChild(submitScoreLineBreak);
  submitScoreForm.appendChild(submitScoreMessage2);
  submitScoreForm.appendChild(submitScoreInput);
  submitScoreForm.appendChild(submitScoreButton);

  if (JSON.parse(localStorage.getItem("highScoresStorage")) !== null) {
  var highScores = JSON.parse(localStorage.getItem("highScoresStorage"));
  }
  else {
    var highScores = [];
  }
  
  submitScoreButton.addEventListener("click", function(event){
    event.preventDefault();
    var highScore = {
      score: score,
      name: submitScoreInput.value.trim()
    };
    JSON.stringify(highScore);
    highScores.push(highScore);

    localStorage.setItem("highScoresStorage", JSON.stringify(highScores));

    for (var i = 0; i < highScoreList.children.length; i++) {
      highScoreList.children[i].remove();
    }

    // Displays High Scores
    for (var i = 0; i < highScores.length; i++) {
      var highScore = highScores[i];  
      var li = document.createElement("li");
      li.textContent = highScore.score + " - " + highScore.name;
      highScoreList.appendChild(li);
    }
  submitScoreForm.remove();
  });
  return;
}

// Start Quiz button runs Quiz function
startButton.addEventListener("click", quiz);

// Enables buttons on page load
var enableButtons = function() {
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("disabled");
  }
  return;
}
enableButtons();

// Displays High Scores on page load
if (JSON.parse(localStorage.getItem("highScoresStorage")) !== null) {
var highScores = JSON.parse(localStorage.getItem("highScoresStorage"));
for (var i = 0; i < highScores.length; i++) {
  var highScore = highScores[i];  
  var li = document.createElement("li");
  li.textContent = highScore.score + " - " + highScore.name;
  highScoreList.appendChild(li);
}
}