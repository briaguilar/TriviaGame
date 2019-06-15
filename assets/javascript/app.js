$(document).ready(function () {
    $("#start").show()
    $("#gamePage").hide()
    $("#score").hide()


    // Setting global variables
    var trivia = $("#gamePage")


    // Setting questions variable
    var questions = [
        {
            quest: "Who is the lead singer of Third Eye Blind?",
            choiceA: "Stephen Jenkins",
            choiceB: "Dave Grohl",
            choiceC: "Kurt Cobain",
            correct: "A"
        },
        {
            quest: "Who is the lead singer of the Foo Fighters?",
            choiceA: "Stephen Jenkins",
            choiceB: "Dave Grohl",
            choiceC: "Kurt Cobain",
            correct: "B"
        },
        {
            quest: "Rap was just becoming well known in 90s. Which artist had the first number one rap single?",
            choiceA: "Vanilla Ice",
            choiceB: "Ice Cube",
            choiceC: "Tupac",
            correct: "A"
        }
    ]




    var lastQuestion = questions.length - 1;
    var runningQuestion = 0;


    // Creating a renderQuestion function
    function renderQuestion() {
        $("#question").append(questions[runningQuestion].quest);
        $("#A").append(questions[runningQuestion].choiceA);
        $("#B").append(questions[runningQuestion].choiceB);
        $("#C").append(questions[runningQuestion].choiceC);

        console.log(questions[runningQuestion].correct);
    }








    // "onclick" of the start button
    $("#starter").on("click", function startQuiz() {
        // Display only "trivia page" on click
        $("#start").hide();
        $("#gamePage").show();
        $("#score").hide();

        renderQuestion();
    });



    // Setting variables for radio button function
    var correctAnswers = 0;
    var incorrectAnswers = 0;


    // Checking answers function
    $("input[type='radio']").on("click", function () {
        var radioValue = $("input[name='radio']:checked").val();
        console.log("User Answer: " + radioValue);
        if (radioValue === questions[runningQuestion].correct) {
            correctAnswers++;
        } else {
            incorrectAnswers++;
        }

        console.log(correctAnswers);
        console.log(incorrectAnswers);

        $("#question").empty();
        $("#A").empty();
        $("#B").empty();
        $("#C").empty();
        runningQuestion++;
        renderQuestion();
    });
    

})