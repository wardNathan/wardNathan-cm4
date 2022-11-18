const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const timerElement = document.getElementById('timer');
const startButton = document.getElementById('start');
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const inputButton = document.getElementById("options");
const hide = document.getElementsByClassName('hide');
const intro = document.getElementById('intro');
var timer;
var timerCount = 80;
var index = 0;

function startTimer() {
    console.log(timerCount)
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
    }, 1000);
}


const myQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: {
            a: "strings",
            b: "booleans",
            c: "alerts",
            d: "numbers"
        },
        correctAnswer: "alerts" 
    },
    {
        question: "The  condition in an if / else statement is enclosed with _____.",
        answers: {
            a: "quotes",
            b: "curly brackets",
            c: "parenthesis",
            d: "square brackets"
        },
        correctAnswer: "curly brackets"
    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        answers: {
            a: "numbers and strings",
            b: "other arrays",
            c: "booleans",
            d: "all of the above"
        },
        correctAnswer: "all of the above"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: {
            a: "commas",
            b: "curly brackets",
            c: "quotes",
            d: "parenthesis"
        },
        correctAnswer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            a: "console.log",
            b: "terminal/bash",
            c: "for loops",
            d: "JavaScript"
        },
        correctAnswer: "console.log"
    }
];

function startQuiz() {
    startTimer()
    loadQuestions()
    submitAnswer()
}

start.addEventListener('click', (document) => {
    start.style.display = 'none';
    intro.style.display = 'none';
});

function loadQuestions() {
    quizContainer.innerText = myQuestions[index].question
    option1.innerText = myQuestions[index].answers.a
    option2.innerText = myQuestions[index].answers.b
    option3.innerText = myQuestions[index].answers.c
    option4.innerText = myQuestions[index].answers.d
}

function submitAnswer(event) {
    if (event.target.innerText === myQuestions[index].correctAnswer) {
        timerCount += 5;
    } else {
        timerCount -= 10;
    }
        index++;
        loadQuestions()
    if (event.target.innerText === myQuestions[index].correctAnswer) {
        timerCount += 5;
    } else {
        timerCount -= 10;
    }
        index++;
        loadQuestions()
    // if ([index = 4]) {
    //     clearInterval(timerCount);
    // }

    console.log
}

function checkResults() {
}

startButton.addEventListener("click", startQuiz);
inputButton.addEventListener('click', submitAnswer);