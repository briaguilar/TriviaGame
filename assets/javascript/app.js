$(document).ready(function () {
    $("#start").show()
    $("#gamePage").hide()
    $("#scoreContainer").hide()



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
        },
        {
            quest: "Novelty children shows were also a big hit. Which 90s TV show features characters with the name Tommy, Zack, Kimberly, Billy, Trini?",
            choiceA: "Barney",
            choiceB: "Rugrats",
            choiceC: "The Mighty Morphin Power Rangers",
            correct: "C"
        },
        {
            quest: "In 1992, the Toronto Blue Jays became the first Canadian professional sports team to win what?",
            choiceA: "World Series",
            choiceB: "Stanley Cup",
            choiceC: "NBA Finals",
            correct: "A"
        },
        {
            quest: "Which famous girl group of the 90s sung the theme song to the hit sketch comedy TV show, 'All That'?",
            choiceA: "Spice Girls",
            choiceB: "Destiny's Child",
            choiceC: "TLC",
            correct: "C"
        },
        {
            quest: "What film won the Oscar for the Best Picture in 1995?",
            choiceA: "Pulp Fiction",
            choiceB: "Titanic",
            choiceC: "Forrest Gump",
            correct: "C"
        },
        {
            quest: "What show won the Emmy for Best Comedy Series in 1994?",
            choiceA: "Frasier",
            choiceB: "Friends",
            choiceC: "The Fresh Prince of Bel-Air",
            correct: "A"
        },
        {
            quest: "The toy was a gizmo rip-off that would annoy the heck out of you at night.",
            choiceA: "Pogs",
            choiceB: "Furby",
            choiceC: "Cabbage Patch Kids",
            correct: "B"
        },
        {
            quest: "In 1994, music fans mourned the loss of Kurt Cobain, the lead singer of the band Nirvana. How did Cobain die?",
            choiceA: "Car crash",
            choiceB: "Suicide",
            choiceC: "Plane crash",
            correct: "B"
        },
        {
            quest: "What was the worldwide best-selling single of 1998?",
            choiceA: "Britney Spears' 'Baby One More Time'",
            choiceB: "Whitney Houston's 'I Will Always Love You'",
            choiceC: "Celine Dion's 'My Heart Will Go On'",
            correct: "C"
        },
        {
            quest: "Teenybopper pop was big inthe late 90s. Which teen pop idol was NOT in the 'Mickey Mouse Club'?",
            choiceA: "Jessica Simpson",
            choiceB: "Britney Spears",
            choiceC: "Justin Timberlake",
            correct: "A"
        },
        {
            quest: "This horror 'documentary' gained much anticipation when it came out into theaters, which eventually spawned a sequel.",
            choiceA: "Anaconda",
            choiceB: "Texas Chainsaw Massacre",
            choiceC: "The Blair Witch Project",
            correct: "C"
        },
        {
            quest: "Who won the Oscar in 1995 for Best Actor?",
            choiceA: "Brad Pitt",
            choiceB: "Tom Hanks",
            choiceC: "Julia Roberts",
            correct: "A"
        },
        {
            quest: "What year was JonBenet Ramsey murdered?",
            choiceA: "1994",
            choiceB: "1996",
            choiceC: "1998",
            correct: "B"
        },
        {
            quest: "In 1998, television watchers mourned as they watched the final episode of which sitcome, one that starred Julia Louis-Dreyfus, Michael Richards, and a guy named Jerry?",
            choiceA: "Seinfeld",
            choiceB: "Frasier",
            choiceC: "Friends",
            correct: "A"
        },
        {
            quest: "Which 1997 film, about a tragedy at sea in 1912, received 11 Academy Awards?",
            choiceA: "Jaws",
            choiceB: "Free Willy",
            choiceC: "Titanic",
            correct: "C"
        },
        {
            quest: "On April 18, 1999, arguably the best player in National Hockey League history, Wayne Gretzky retired. With which Origin Six team was Gretzky with when he played his final game?",
            choiceA: "Dallas Stars",
            choiceB: "New York Rangers",
            choiceC: "Chicago Blackhawks",
            correct: "B"
        },
        {
            quest: "These two best friends came together to write the Oscar winning movie, 'Good Will Hunting'.",
            choiceA: "Ben Affleck and Matt Damon",
            choiceB: "Robin Williams and Ben Affleck",
            choiceC: "Matt Damon and Robin Williams",
            correct: "A"
        },
        {
            quest: "What movie won the 1995 People's Choice Award for Favorite Movie?",
            choiceA: "Toy Story",
            choiceB: "Forrest Gump",
            choiceC: "Apollo 13",
            correct: "B"
        }
    ]




    // QUESTIONS section    
    var lastQuestion = questions.length - 1;
    var runningQuestion = 0;


    // Creating a renderQuestion function
    function renderQuestion() {
        $("#question").append(questions[runningQuestion].quest);
        $("#A").append(questions[runningQuestion].choiceA);
        $("#B").append(questions[runningQuestion].choiceB);
        $("#C").append(questions[runningQuestion].choiceC);

        console.log("The correct answer is: " + questions[runningQuestion].correct);
    }




    // TIMER section
    var timer = $("#counter")
    var counter = 0;
    var timeLeft = 10;


    // "START" button click section
    // "onclick" of the start button
    $("#starter").on("click", function startQuiz() {
        // Display only "trivia page" on click
        $("#start").hide();
        $("#gamePage").show();
        $("#scoreContainer").hide();
        setInterval(timeIt, 1000);
        renderQuestion();
        $("#questionNumber").append(runningQuestion + 1)

        function timeIt() {
            counter++;
            $("#timer").html("Time left: " + (timeLeft - counter));

            if (timeLeft - counter === 0) {
                $("#start").hide();
                $("#gamePage").hide();
                $("#scoreContainer").show();
            }
        }
    });







    // Radio buttons for checking user answers
    // Setting variables for radio button function
    var correctAnswers = 0;
    var incorrectAnswers = 0;



    // Checking answers function
    $("input[type='radio']").on("click", function () {
  


        var radioValue = $("input[name='radio']:checked").val();
        console.log("User Answer: " + radioValue);
        if (radioValue === questions[runningQuestion].correct) {
            correctAnswers+=1;
        } else {
            incorrectAnswers++;
        }

        console.log("Correct: " + correctAnswers);
        $("#correctAnswers").text("You got " + correctAnswers + " right out of 20!");
        console.log("Incorrect: " + incorrectAnswers);
        $("#incorrectAnswers").text("You got " + incorrectAnswers + " wrong.")
        $("#scorePercent").text((correctAnswers*5) + "%");
            $("#question").empty();
            $("#A").empty();
            $("#B").empty();
            $("#C").empty();
            runningQuestion++;
            renderQuestion();
            $("#questionNumber").empty();
            $("#questionNumber").append(runningQuestion + 1);
            


        if (runningQuestion === lastQuestion) {
            $("#start").hide();
            $("#gamePage").hide();
            $("#scoreContainer").show();
            
        }


    });


})