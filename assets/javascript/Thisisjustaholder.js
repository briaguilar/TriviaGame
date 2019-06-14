$(document).ready(function(){

var start = document.getElementById("start");
var trivia = document.getElementById("gamePage");
var question = document.getElementById("question");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var scoreContainer = document.getElementById("scoreContainer");
var TIMER;


// Questions variable
var questions = [
    {
        quest: "Who is the lead singer of Third Eye Blind?",
        choiceA: "Kurt Cobain",
        choiceB: "Stephen Jenkins",
        choiceC: "Dave Grohl",
        correct: "B"
    },
    {
        quest: "What does HTML stand for?",
        choiceA: "Correct",
        choiceB: "Wrong",
        choiceC: "Wrong",
        correct: "A"
    }
]

var lastQuestionIndex = questions.length - 1;
var runningQuestionIndex = 0;




// renderQuestion function
function renderQuestion() {
    let q = questions[runningQuestionIndex];

    question.innerHTML = "<p>" + q.quest + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}




// Counter Render
var questionTime = 15;
var gaugeWidth = 150;
var count = 0;
var gaugeUnit = gaugeWidth / questionTime;

function counterRender() {
    if (count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = gaugeUnit * count + "px";
        count++;
    } else {
        count = 0;
        answerIsWrong();
        if (runningQuestionIndex < lastQuestionIndex) {
            runningQuestionIndex++;
            renderQuestion();
        } else {
            clearInterval(TIMER);
            scoreRender();
        }
    }
}




// Checking answers
function checkAnswer(answer) {
    if (questions[runningQuestionIndex].correct === answer) {
        // answer is correct
        score++;
        answerIsCorrect();
    } else {
        // answer is wrong
        answerIsWrong();
    }
    count = 0;
    if (runningQuestionIndex < lastQuestionIndex) {
        runningQuestionIndex++;
        renderQuestion();
    } else {
        clearInterval(TIMER);
        scoreRender();
    }
}




// Starting Quiz
$(document).on("click", startQuiz());


 function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    trivia.style.display = "block";
    counterRender();
    TIMER = setInterval(counterRender, 1000)
    scoreContainer.style.display = "none";
}





var score = 0;

// Score Render
function scoreRender() {
    scoreContainer.style.display = "block";

    // Calculate the amount of question Percent answered by the user
    var scorePercent = Math.round(100 * score / questions.length);

    // Choose an image to show for the score the user got
    var img = (scorePercent >= 90) ? "assets/images/pTqrkzj6c.png" :
        (scorePercent >= 80) ? "assets/images/856550aa773911d00b76b24aaa4bc467.png" :
        (scorePercent >= 70) ? "assets/images/119-1192333_iphone-sad-emoji-png.png" :
        "assets/images/kisspng-iphone-emoji-sadness-smiley-emoticon-emoji-face-5ac2d694140311.551231571522718356082.jpg";

    scoreContainer.innerHTML = "<img src=" + img + ">";
    scoreContainer.innerHTML = "<p>" + scorePercent + "%</p>";
}
});