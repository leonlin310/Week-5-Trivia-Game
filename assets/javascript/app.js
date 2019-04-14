
//Generate a list of questions and answers

//timeTime is just a test variable to help delay the 'counter++' code
var timeTime
var counter = 0;
var timer = 10

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
        // $("#result").text("THE ANSWER IS CORRECT")
        console.log("the correct answer is: ", correctAnswer);
        //DONE: Extract the value of 'this'
        var buttonClick = $(this).attr("data-name");
        console.log("The clicked button has value of: ", buttonClick);
        //DONE: compare the value of 'this' to correctAnswer
        if (buttonClick == correctAnswer) {
            rightAnswer++
            
            // updateScoreboard();
            console.log("YOU ARE CORRECT!");
        }
        else {
            wrongAnswer++
            console.log("HAHA YOU SUCK DAWG!");
            // updateScoreboard();
        }


        nextQuestion();
    })


    //TODO: Have the next question loop after 5 seconds
    function nextQuestion() {
        counter++
        console.log("The current timer is: ", counter);

        //TODO: if questions are at the max number stop the program and initiate finalScore function
        if (counter >= 4) {
            finalScore();
        }

        else {
            setTimeout(questionLooper, 1000);

        }


    }

    // function updateScoreboard() {
    //     $("#correct").text("# of questions Right:" + rightAnswer);
    //     $("#wrong").text("# of questions Wrong: " + wrongAnswer);

    // }

    function finalScore() {
        
        $("#questionBoard").hide();
        $(".display-4").text("You got " + rightAnswer + " out of 4 questions right. You may or may not be a Bulls Fan.")


    }
    // THE LOGIC KIND OF works! now have a system to check user input vs answers
    //     console.log(questionList[0].question);
    //     console.log(questionList[0].answers[2]);
    //     console.log(questionList[0].correctanswer);

    //     let answerTest = questionList[0].answers[2].answer;
    //     console.log("Answer should be 6",answerTest);
    //     let correctanswerTest = questionList[0].correctanswer;
    //     console.log("Correct answer should be 6 as well", correctanswerTest);

    //     if (answerTest == correctanswerTest) {
    //     console.log("true")
    //     }
    //     else {
    //     console.log("false")
    //     }





    // var theCobWeb = {
    //     biggestWeb: {
    //       item: "comb",
    //       biggerWeb: {
    //         items: ["glasses", "paperclip", "bubblegum"],
    //         smallerWeb: {
    //           item: "toothbrush",
    //           tinyWeb: {
    //             items: ["toenails", "lint", "wrapper", "homework"]
    //           }
    //         }
    //       },
    //       otherBigWeb: {
    //         item: "headphones"
    //       }
    //     }
    //   };
});