
//Generate a list of questions and answers

    //timeTime is just a test variable to help delay the 'counter++' code
var timeTime
var counter = 0;
var timer = 15



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
];







$(document).ready(function () {

    //TODO: function to begin the game when clicked
    $("#startButton").on("click", function () {
        $("#startButton").fadeOut("slow", function () {
        });

        //runs the questionLooper function to display the first question
        questionLooper();
    })





    //DONE:  This question will loop thru depending on the 'counter' variable
    function questionLooper() {

        console.log("The current counter is: ", counter);
        let question = questionList[counter].question;
        let answer1 = questionList[counter].answers[0].answer
        let answer2 = questionList[counter].answers[1].answer
        let answer3 = questionList[counter].answers[2].answer
        let answer4 = questionList[counter].answers[3].answer
        let correctAnswer = questionList[counter].correctanswer

        console.log("the correct answer is: ", correctAnswer);
        $("#result").empty();
        $("#question-text").text(question);
        $("#answer1").text(answer1);
        $("#answer2").text(answer2);
        $("#answer3").text(answer3);
        $("#answer4").text(answer4);

    };

    $(".answer-button").on("click", function(){
        // $("#result").text("THE ANSWER IS CORRECT")
        console.log("the button clicked was: ", this);
        //TODO: Extract the value of 'this'

        //TODO: compare the value of 'this' to correctAnswer


        nextQuestion();
        })



    //TODO: Create clickable buttons for all of the options! We did this in class in week 6 ajax. 

    //TODO: Create a Jumbotron that will hold everything

    
    //TODO: When Clicked, the button will .hide and begin the program and show the first question and all of its answers. 


    function nextQuestion (){
        counter++
        setTimeout(questionLooper, 2000);
       
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