
//Generate a list of questions and answers
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


        startGame();
    })



    function startGame() {


        //     console.log(questionList[0].question);
        //     console.log(questionList[0].answers[2]);
        //     console.log(questionList[0].correctanswer);








    }





    // TODO: Have the questions and answers populate when the game is started

    // TODO: Find a way to extract what's clicked. And let that be stored in a variable to be compared against
    // TODO: the correct answer

    //TODO: Create clickable buttons for all of the options! We did this in class in week 6 ajax. 

    //TODO: Create a Jumbotron that will hold everything

    //TODO: Create a "Welcome to Bulls Trivia" with a "Click here to begin"
    //TODO: When Clicked, the button will .hide and begin the program and show the first question and all of its answers. 







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