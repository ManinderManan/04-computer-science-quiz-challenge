
const questions = [
    { 
        question: "A very useful tool used during development and debugging for printing content to the debugger is?", 
       
        choices: [ "JavaScript","terminal/bash", "for loops","console.log"],
       
        answer: "terminal/bash",
    },
    { 
        question: "The condition in an if/else statement is encolsed within ____.", 
        
        choices: ["quotes", "curly brackets", "parentheses","square brackets"],
        
        answer: "parentheses",
    },
    { 
        question: "Commonly used data types DO NOT include?", 
        
        choices: ["Strings","booleans", "alerts","numbers"],
       
        answer: "alerts",
    },
    { 
        question: "Arrays in JavaScript can be used to store ____.", 

        choices: ["numbers and strings","other arrays","booleans","all of the above"],

        answer: "all of the above"
    },
    { 
        question: "String values must be enclosed within ___ when being assigned to variables.",
        answers: ["commas", "curly brackets", "quotes", "parentheses"],

        answer: "curly brackets"
    },
];

var timeLeft = 90; 
var score = 0;
var timerEl = document.getElementById("timer");
var startButton = document.getElementById("start-btn");
var questionindexEl = document.getElementById("question-index");
var startSelectorEl = document.getElementById("start-selector");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");
var checkAnswerEl = document.getElementById("check-answer");
var viewHighScore = document.getElementById("highscores");
var submitButton = document.getElementById("submit-btn");
var clearButton = document.getElementById("clear-btn");
var enterInitials = document.getElementById("initials-field");
var restartButton = document.getElementById("restart-btn");
var scoreInput = document.getElementById("your-score");
var scores = JSON.parse(localStorage.getItem("scores"));

var shuffledQuestions, currentQuestionIndex;

// This is the start button to tring the beginning of the quiz and continuing to the next question once an answer is selected.

startButton.addEventListener("click", startGame);
answerButtonsEl.forEach((element)=> {
    element.addEventListener("click", checkAnswer);
});

// Function Section 

function startQuiz(){

    shuffledQuestions = shuffle(questions);
    displayQuestion();
    changeView("questions");


let timerInterval = setInverval(function() {
    timeLeft -= 0.1;
    timeEl.textcontent = timeLeft.toFixed(1);


    if (timeLeft <= 0.1) {
        clearInterval(timerInterval);
        timeEl.textContent = 0; 
        changeView("scoreinput");
    }

        if (document.getElementById("questions").classList.contains("hide")){
            clearInterval(timerInterval);
        }

}, 
}




