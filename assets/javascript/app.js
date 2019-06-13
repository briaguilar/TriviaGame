var start = document.getElementById("start");
var trivia = document.getElementById("game-page");
var question = document.getElementById("question");
var counter = document.getElementById("counter");
var timeGauge = document.getElementsByTagName("timeGuage");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");

var questions = [
    {
        question: "Who is the lead singer of Third Eye Blind?";
        choiceA: "Kurt Cobain",
        choiceB: "Stephen Jenkins",
        choiceC: "Dave Grohl",
        correct: "B"
    }
]

var lastQuestionIndex = questions.length -1;
var runningQuestionIndex = 0;

function renderQuestion() {
    let q = questions[runningquestionIndex];
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceA.innerHTML = q.choiceC;
}

renderQuestion()
runningQuestionIndex++;
renderQuestion();



// Counter Render
var questionTime = 20;
var gaugeWidth = 150;
var count = 0;
var guageProgressUnit = gaugeWidth/questionTime;

function counterRender() {
    if (count <= questionTime) {

    } else {

    }
}