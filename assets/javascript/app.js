$(document).ready(function() {

    // objects, arrays, variables
    // ------------------------------------------------------------------------------
    var correct = 0;
    var wrong = 0;
    var unanswered = 0;
    var shotClock = 10;
    var questions = [

        {
            question: "What pick was Manu Ginolbili in the 1999 draft?",
            answers: ["57", "59", "41", "48"],
            correctAnswer: "57",
            gif: "assets/images/ginobili_giphy.gif",
        },

        {
            question: "Who has the highest scoring average in Spurs history?",
            answers: ["Tim Duncan", "George Gervin", "David Robinson", "Kahwi Leonard"],
            correctAnswer: "George Gervin",
            gif: "assets/images/george_giphy.gif",
        }, 

        {
            question: "What year was the Spurs franchise founded?",
            answers: ["1971", "1978", "1967", "1966"],
            correctAnswer: "1967",
            gif: "assets/images/spurs_giphy.gif",
        }, 

        {
            question: "What place is Timmy on the All-Time NBA Blocks List?",
            answers: ["4th", "7th", "6th", "5th"],
            correctAnswer: "5th",
            gif: "assets/images/duncan_giphy.gif",
        }, 

        {
            question: "Where was Coach Pop's first head coaching job?",
            answers: ["Pomona College", "UMass", "Pepperdine University", "SMU"],
            correctAnswer: "Pomona College",
            gif: "assets/images/pop_giphy.gif",
        },

    ];

    var button = $("<button>");
    var div = $("<div>");
    var intervalId;

    //    var game = {
    //    questions: setGame(),
    //  	correct: 0,
    //    wrong: 0,
    //    unanswered: 0,
    //    // timer: intervalId,
    //    shotClock: 10,
    //  //   endGame: function() {
    //  //    	$("#gameContainer").html(this.wrong)
    // 	// $("#gameContainer").text(this.unanswered);
    // 	// $("#gameContainer").text(this.wins);
    // };

    // functions
    // ------------------------------------------------------------------------------

    function setGame() {

        intervalId = setInterval(function() {
            shotClock--;
            console.log(shotClock);
            $("#gameContainer").html("<div><p>Shot Clock: " + shotClock + "</p></div>");
            $("#gameContainer").append("<div><p>" + questions[0].question + "</p></div>");
            // clockCheck();

            for (var i = 0; i < 4; i++) {
                button = $("<button>");
                button.addClass("gameTimeAs");
                button.attr("data-name", questions[0].answers[i]);
                button.text(questions[0].answers[i]);
                $("#gameContainer").append(button);
                clockCheck();
                
				   $(button).on("click", ".gameTimeAs", function(){
				    	console.log("HELLO");
				    });
            };

        }, 1000);

};





    function clockCheck() {
        if (shotClock === 0) {
            unanswered += 1;
            console.log("Unanswered: " + unanswered);
            clearInterval(intervalId);
            $("#gameContainer").html("<div><p>Shot Clock: " + shotClock + "</p></div>");
            $("#gameContainer").append("<div><p>We call that an AIRBALL!!!</p></div>");
            $("#gameContainer").append("<img src=" + questions[0].gif + ">");
        }
    };

    function checkAnswer() {
        if ($(".gameTimeAs").data("name") === questions[0].correctAnswer) {
            correct++;
            console.log("Wins: " + correct);
            clearInterval(intervalId);
            $("#gameContainer").html("<div><p>Shot Clock: " + shotClock + "</p></div>");
            $("#gameContainer").append("<div><p>NOW THAT'S A SLAM DUNK!!!</p></div>");
            $("#gameContainer").append("<img src=" + questions[0].gif + ">");
        }

        else {
        	wrong++;
        	console.log("Losses: " + wrong);
        	clearInterval(intervalId);
            $("#gameContainer").html("<div><p>Shot Clock: " + shotClock + "</p></div>");
            $("#gameContainer").append("<div><p>We call that an AIRBALL!!!</p></div>");
            $("#gameContainer").append("<img src=" + questions[0].gif + ">");
        };
    };

    // $(".gameTimeAs").on("click", function checkAnswer() {
    //     if ($(".gameTimeAs").data("name") === questions[0].correctAnswer) {
    //         correct++;
    //         console.log("Wins: " + correct);
    //         clearInterval(intervalId);
    //         $("#gameContainer").html("<div><p>Shot Clock: " + shotClock + "</p></div>");
    //         $("#gameContainer").append("<div><p>NOW THAT'S A SLAM DUNK!!!</p></div>");
    //         $("#gameContainer").append("<img src=" + questions[0].gif + ">");
    //     }

    //     else {
    //     	wrong++;
    //     	console.log("Losses: " + wrong);
    //     	clearInterval(intervalId);
    //         $("#gameContainer").html("<div><p>Shot Clock: " + shotClock + "</p></div>");
    //         $("#gameContainer").append("<div><p>We call that an AIRBALL!!!</p></div>");
    //         $("#gameContainer").append("<img src=" + questions[0].gif + ">");
    //     }
    // });


    // main process
    // ------------------------------------------------------------------------------

    button.addClass("begin");
    button.text("TipOff");
    $("#startButton").html(button);

    $(".begin").click(function() {
        $(".begin").hide("slow");
        setGame();
    });

    // $(".gameTimeAs").click(function(){
    // 	console.log("HELLO");
    // });

});
