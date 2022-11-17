const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const timerElement = document.getElementById('timer');
const startButton = document.getElementById('start');
const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const option3 = document.getElementById("option3")
const option4 = document.getElementById("option4")

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
        correctAnswer: "b"
    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        answers: {
            a: "numbers and strings",
            b: "other arrays",
            c: "booleans",
            d: "all of the above"
        },
        correctAnswer: "d"
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

//why doesn't this work like myQuestions?
// was trying to consolidate so I didnt have to write out functions like loadQuestion2
/*
const buttonPress = [
    {
        option1
    },
    {
        option2
    },
    {
        option3
    },
    {
        option4
    }
];
*/

function startQuiz() {
    startTimer()
    loadQuestions()

}
start.addEventListener('click', () => {
    start.style.display = 'none';
});

function loadQuestions() {
    quizContainer.innerText = myQuestions[index].question
    option1.innerText = myQuestions[index].answers.a
    option2.innerText = myQuestions[index].answers.b
    option3.innerText = myQuestions[index].answers.c
    option4.innerText = myQuestions[index].answers.d
}

// trying to cycle through array
/*
function question2() {
    quizContainer.innerText = myQuestions[index + 1].question
    option1.innerText = myQuestions[index + 1].answers.a
    option2.innerText = myQuestions[index + 1].answers.b
    option3.innerText = myQuestions[index + 1].answers.c
    option4.innerText = myQuestions[index + 1].answers.d
}

function question3() {
    quizContainer.innerText = myQuestions[index + 2].question
    option1.innerText = myQuestions[index + 2].answers.a
    option2.innerText = myQuestions[index + 2].answers.b
    option3.innerText = myQuestions[index + 2].answers.c
    option4.innerText = myQuestions[index + 2].answers.d
}
*/
function recordResponse() {
    if (answers === correctAnswer) {
        loadQuestions()
    }
    else if (answers !== correctAnswer) {
        loadQuestions
    }
}

// was trying to cycle through the index but it would keep skipping to #2 in the index
/*
function loadQuestion2() {
    option1.addEventListener("click", question2);
    option2.addEventListener("click",  question2);
    option3.addEventListener("click", question2);
    option4.addEventListener("click", question2);
}

function loadQuestion3() {
    option1.addEventListener("click", question3);
    option2.addEventListener("click",  question3);
    option3.addEventListener("click", question3);
    option4.addEventListener("click", question3);
}
*/
function checkResults() {
}

// function endQuiz() {
//     if (timer = 0)
// }

startButton.addEventListener("click", startQuiz);