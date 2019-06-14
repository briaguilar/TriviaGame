$(document).ready(function () {
    $("#start").show()
    $("#gamePage").hide()
    $("#score").hide()


    // Setting global variables
    var trivia = $("#gamePage")

    // Setting choice variables
    var choiceA = $("#A")
    var choiceB = $("#B")
    var choiceC = $("#C")




    // Setting questions variable


    var questions = [
        {   quest: "Who is the lead singer of Third Eye Blind?",
            choiceA: "Stephen Jenkins",
            choiceB: "Dave Grohl",
            choiceC: "Kurt Cobain",
            correct: "A"
        },
        { quest: "Who is the lead singer of the Foo Fighters?",
          choiceA: "Stephen Jenkins",
          choiceB: "Dave Grohl",
          choiceC: "Kurt Cobain",
          correct: "B"
        }
    ]

    var lastQuestionIndex = questions.length - 1;
    var runningQuestionIndex = 0;

    // Creating a renderQuestion function
    function renderQuestion() {
        var q = questions[runningQuestionIndex]

        $("#question").append("<p>" + q.quest + "</p>");
        $("#A").append("<input type='radio' name='radio'>" + q.choiceA + "</input>");
        $("#B").append("<input type='radio' name='radio'>" + q.choiceB + "</input>");
        $("#C").append("<input type='radio' name='radio'>" + q.choiceC + "</input>");
    }


    // "onclick" of the start button
    $("#starter").on("click", function startQuiz() {
        // Display only "trivia page" on click
        $("#start").hide();
        $("#gamePage").show();
        $("#score").hide();

        renderQuestion();
    });


        
        

})