$(document).ready(function() {

    // objects, arrays, variables
    // ------------------------------------------------------------------------------
    var correct = 0;
    var wrong = 0;
    var unanswered = 0;
    var shotClock = 10;
    var questions = {

        questionOne: {
            question: "What pick was Manu Ginolbili in the 1999 draft?",
            answers: ["57", "59", "41", "48"],
            // answer2: "59",
            // answer3: "41",
            // answer4: "48",
            gif: "assets/images/ginobili_giphy.gif",
        },

        questionTwo: {
            question: "Who has the highest scoring average in Spurs history?",
            answers: ["Tim Duncan", "George Gervin", "David Robinson", "Kahwi Leonard"],
            // answer2: "George Gervin",
            // answer3: "David Robinson",
            // answer4: "Kahwi Leonard",
            gif: "assets/images/george_giphy.gif",
        },
        questionThree: {
            question: "What year was the Spurs franchise founded?",
            answers: ["1971", "1978", "1967", "1966"],
            // answer2: "1978",
            // answer3: "1967",
            // answer4: "1966",
            gif: "assets/images/spurs_giphy.gif",
        },
        questionFour: {
            question: "What place is Timmy on the All-Time NBA Blocks List?",
            answers: ["4th", "7th", "6th", "5th"],
            // answer2: "7th",
            // answer3: "6th",
            // answer4: "5th",
            gif: "assets/images/duncan_giphy.gif",
        },
        questionFive: {
            question: "Where was Coach Pop's first head coaching job?",
            answers: ["Pomona College", "UMass", "Pepperdine University", "SMU"],
            // answer2: "UMass",
            // answer3: "Pepperdine University",
            // answer4: "SMU",
            gif: "assets/images/pop_giphy.gif",
        },

    };

    var button = $("<button>");
    var div = $("<div>");
    var intervalId;





    // functions
    // ------------------------------------------------------------------------------
    function setGame1() {

        intervalId = setInterval(function() {
            shotClock--;
            console.log(shotClock);
            $("#gameContainer").html("<div><p>Shot Clock: " + shotClock + "</p></div>");
            $("#gameContainer").append("<div><p>" + questions.questionOne.question + "</p></div>");

            for (var i = 0; i < 4; i++) {
                var button = $("<button>");
                button.addClass("gameTimeAs");
                button.attr("data-name", questions.questionOne.answers[i]);
                button.text(questions.questionOne.answers[i]);
                $("#gameContainer").append(button);
                clockCheck();

            }

        }, 1000);

        function clockCheck() {
            if (shotClock === 0) {
                unanswered++;
                clearInterval(intervalId);
                $("#gameContainer").html("<div><p>Shot Clock: " + shotClock + "</p></div>");
                $("#gameContainer").append("<div><p>We call that an AIRBALL!!!</p></div>");
                $("#gameContainer").append("<img src=" + questions.questionOne.gif + ">");

            }
        };

    };




    // main process
    // ------------------------------------------------------------------------------


    // var button = $("<button>");
    // button.attr("id", "begin");
    button.addClass("begin");
    button.text("TipOff");
    $("#startButton").html(button);

    $(".begin").click(function() {
        $(".begin").hide("slow");
        setGame1();
    });







});
