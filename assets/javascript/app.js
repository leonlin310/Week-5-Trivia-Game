
//Generate a list of questions and answers

//timeTime is just a test variable to help delay the 'counter++' code

var counter = 0;

var timerAlert

//Store how many correct/wrong
let rightAnswer = ""
let wrongAnswer = ""

//Store the answers based off of the array
let question = ""
let answer1 = ""
let answer2 = ""
let answer3 = ""
let answer4 = ""
let correctAnswer = ""

var questionList = [
    {
        question: "How many championships do the Chicago Bulls have?",
        answers: [
            { answer: "A. 1" },
            { answer: "B. 3" },
            { answer: "C. 6" },
            { answer: "D. 7" }
        ],
        correctanswer: "C. 6"
    },

    {
        question: "Which Chicago Bull has knees made out of chalk?",
        answers: [
            { answer: "A. Derrick Rose" },
            { answer: "B. Joakim Noah" },
            { answer: "C. Jabari Parker" },
            { answer: "D. All of the Above" }
        ],
        correctanswer: "D. All of the Above"
    },

    {
        question: "Who was not a teammate of Toni Kukoc?",
        answers: [
            { answer: "A. Michael Jordan" },
            { answer: "B. Scottie Pippen" },
            { answer: "C. Dennis Rodman" },
            { answer: "D. Joakim Noah" }
        ],
        correctanswer: "D. Joakim Noah"
    },

    {
        question: "Who is not a GOAT?",
        answers: [
            { answer: "A. Roger Federer" },
            { answer: "B. Michael Jordan" },
            { answer: "C. Kobe" },
            { answer: "D. Billy the Goat" }
        ],
        correctanswer: "C. Kobe"
    },
];







$(document).ready(function () {

$("#questionBoard").hide();

    //TODO: function to begin the game when clicked
    $("#startButton").on("click", function () {
        $("#startButton").fadeOut("slow", function () {
        });

        //runs the questionLooper function to display the first question
        questionLooper();
    })





    //DONE:  This question will loop thru depending on the 'counter' variable
    function questionLooper() {
        $(".answer-button").show();
        //TODO: Set a timeout for 15 seconds to count a question wrong
        setTimeout(nineSeconds, 1);
        //TODO: set a timeout warning for 5 seconds
        setTimeout(fiveSeconds, 1000 * 15);
        //TODO: set a timeout for You Ran out of Time
        timerAlert = setTimeout(timeUp, 1000 * 20);
        // setTimeout(timeUp, 1000 * 15);
        //DONE: Give each ID an attr with data name so that we can grab it later with 'This'
        $("#questionBoard").show();
        
        // console.log("The current counter is: ", counter);
        question = questionList[counter].question;
        answer1 = questionList[counter].answers[0].answer
        answer2 = questionList[counter].answers[1].answer
        answer3 = questionList[counter].answers[2].answer
        answer4 = questionList[counter].answers[3].answer
        correctAnswer = questionList[counter].correctanswer


        $("#result").empty();
        $("#question-text").text(question);
        $("#answer1").attr("data-name", answer1).text(answer1);
        $("#answer2").attr("data-name", answer2).text(answer2);
        $("#answer3").attr("data-name", answer3).text(answer3);
        $("#answer4").attr("data-name", answer4).text(answer4);



    };

    $(".answer-button").on("click", function () {

        //TODO: Create a clear timeout for function timeUp
        clearTimeout(timerAlert);

        //DONE: Extract the value of 'this'
        var buttonClick = $(this).attr("data-name");
        //DONE: compare the value of 'this' to correctAnswer
        if (buttonClick == correctAnswer) {
            rightAnswer++
            $("#result").text("Swish! You should consider trying out for the Bulls!");
            // updateScoreboard();
            console.log("YOU ARE CORRECT!");
        }
        else {
            wrongAnswer++
            $("#result").text("You're wrong! The correct answer is: " + correctAnswer);
            console.log("HAHA YOU SUCK DAWG!");
            // updateScoreboard();
        }


        nextQuestion();
    })


    //TODO: Have the next question loop after 4 seconds
    function nextQuestion() {
        counter++
        console.log("The current timer is: ", counter);

     //TODO: if questions are at the max number stop the program and initiate finalScore function
        if (counter >= 4) {
            finalScore();
        }

        else {
            setTimeout(questionLooper, 4000);

        }


    }


    function finalScore() {
        
        $("#questionBoard").hide();
        $(".display-4").text("You got " + rightAnswer + " out of " + counter +  " questions right. You may or may not be a Bulls Fan.")


    }

    //TODO: Timeout functions
    function nineSeconds(){
        $("#timer-text").text("you have 15 seconds left on the shot clock!").css("color", "black");
        console.log("timer set");

    }

    function fiveSeconds(){
        $("#timer-text").text("YOU HAVE 5 SECONDS LEFT ON THE SHOT CLOCK!!").css("color", "red");
        console.log("second timer set");
    }

    function timeUp(){
        $(".answer-button").hide();
        $("#timer-text").text("You ran out of time. The correct answer was: "+ correctAnswer);
        setTimeout(nextQuestion, 1000);
    }

});