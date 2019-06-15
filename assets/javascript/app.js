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
    var q = questions[runningQuestionIndex]

    // Creating a renderQuestion function
    function renderQuestion() {
        $("#question").append("<p>" + q.quest + "</p>");
        $("#A").append(q.choiceA);
        $("#B").append(q.choiceB);
        $("#C").append(q.choiceC);

        console.log(q.correct);
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
    var correct = (q.correct);

    
    // Checking answers function
    $("input[type='radio']").on("click", function() {
        var radioValue = $("input[name='radio']:checked").val();
        console.log("User Answer: " + radioValue);
        if (radioValue === correct) {
            correctAnswers++;
        } else {
            incorrectAnswers++;
        }

        console.log(correctAnswers);
        console.log(incorrectAnswers);
    });


    // When the "next" button is clicked
    $("#next").on("click", function() {
        runningQuestionIndex++;
        $("#gamePage").empty();
        
    });
        
        

})