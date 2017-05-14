$(document).ready(function() {

    // objects, arrays, variables
    // ------------------------------------------------------------------------------
    var correct = 0;
    var wrong = 0;
    var unanswered = 0;
    var shotClock = 30;
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
            gif: "assets/images/coyote_giphy.gif",
        },

        {
            question: "What place is Timmy on the All-Time Blocks List?",
            answers: ["4th", "7th", "6th", "5th"],
            correctAnswer: "5th",
            gif: "assets/images/duncan_giphy.gif",
        },

        {
            question: "Where was Coach Pop's first head coaching job?",
            answers: ["Pomona College", "UMass", "Pepperdine", "SMU"],
            correctAnswer: "Pomona College",
            gif: "assets/images/pop_giphy.gif",
        },

        {
            question: "Where did Kawhi play in college?",
            answers: ["Michigan State", "Duke", "UCLA", "San Diego State"],
            correctAnswer: "San Diego State",
            gif: "assets/images/kawhi_giphy.gif",
        },

        {
            question: "How many PPG did Robinson average his rookie year?",
            answers: ["25.2", "24.7", "24.3", "23.8"],
            correctAnswer: "24.3",
            gif: "assets/images/david_giphy.gif",
        },

        {
            question: "Who is Tony Parker's ex-wife?",
            answers: ["Eva Longoria", "Victoria Beckham", "Halle Berry", "Jessica Alba"],
            correctAnswer: "Eva Longoria",
            gif: "assets/images/tony_giphy.gif",
        },

         {
            question: "What were the Spurs called before moving to San Antonio?",
            answers: ["Braves", "Chaparrals", "Voyagers", "Corporals"],
            correctAnswer: "Chaparrals",
            gif: "assets/images/pump_giphy.gif",
        },

         {
            question: "Out of these ex-Spurs, who never coached in the NBA??",
            answers: ["Avery Johnson", "Steve Kerr", "Monty Williams", "Stephen Jackson"],
            correctAnswer: "Stephen Jackson",
            gif: "assets/images/hug_giphy.gif",
        },

    ];

    var button = $("<button>");
    var div = $("<div>");
    var intervalId;

    // var game = {
    //     roundOne: setGame(), 
    //     roundTwo: setGame2(), 
    //     roundThree: setGame3(),
    //     roundFour: setGame4(),
    //     roundFive: setGame5(),
    //     correct: 0,
    //     wrong: 0,
    //     unanswered: 0,
    //     // timer: intervalId,
    //     shotClock: 10,
    //     gameOver: endGame(),
    // };

    // functions
    // ------------------------------------------------------------------------------

    function setGame() {

    	shotClock = 30;
    	$("#timerContainer").html("<div><p>Shot Clock: " + shotClock + "</p></div>");

        intervalId = setInterval(function() {
        	shotClock--;
        	$("#timerContainer").html("<div><p>Shot Clock: " + shotClock + "</p></div>");   
            console.log("Shot Clock: " + shotClock);
            clockCheck();
        }, 1000);

        $("#gameContainer").html("<div><p>" + questions[0].question + "</p></div>");

            for (var i = 0; i < 4; i++) {
                button = $("<button>");
                button.addClass("gameTimeAnswers");
                button.attr("data-name", questions[0].answers[i]);
                button.text(questions[0].answers[i]);
                $("#gameContainer").append(button);
            };

        $(".gameTimeAnswers").on("click", function checkAnswer() {
            if ($(this).attr("data-name") === questions[0].correctAnswer) {
                correct++;
                console.log("Wins: " + correct);
                clearInterval(intervalId);
              
                $("#gameContainer").html("<div><p>NOW THAT'S A SLAM DUNK!!!</p></div>");
                $("#gameContainer").append("<img src=" + questions[0].gif + ">");
                setTimeout(setGame2, 4000);

            } else {
                wrong++;
                console.log("Losses: " + wrong);
                clearInterval(intervalId);
              
                $("#gameContainer").html("<div><p>We call that an AIRBALL!!!</p></div>");
                $("#gameContainer").append("<div><p>The correct answer is: " + questions[0].correctAnswer + "</p></div>");
                $("#gameContainer").append("<img src=" + questions[0].gif + ">");
                setTimeout(setGame2, 4000);
            };
        });


    function clockCheck() {
        if (shotClock === 0) {
            unanswered += 1;
            console.log("Unanswered: " + unanswered);
            clearInterval(intervalId);
          
            $("#gameContainer").html("<div><p>LOOKS LIKE THE SHOT CLOCK EXPIRED!!!</p></div>");
            $("#gameContainer").append("<img src=" + questions[0].gif + ">");
            setTimeout(setGame2, 4000);
        }
    };
};

 function setGame2() {

    	shotClock = 30;
    	$("#timerContainer").html("<div><p>Shot Clock: " + shotClock + "</p></div>");

        intervalId = setInterval(function() {
       
        	shotClock--;
       
        	$("#timerContainer").html("<div><p>Shot Clock: " + shotClock + "</p></div>");
          
            console.log("Shot Clock: " + shotClock);
            clockCheck();
        }, 1000);

        $("#gameContainer").html("<div><p>" + questions[1].question + "</p></div>");

            for (var i = 0; i < 4; i++) {
                button = $("<button>");
                button.addClass("gameTimeAnswers");
                button.attr("data-name", questions[1].answers[i]);
                button.text(questions[1].answers[i]);
                $("#gameContainer").append(button);
            };

        $(".gameTimeAnswers").on("click", function checkAnswer() {
            if ($(this).attr("data-name") === questions[1].correctAnswer) {
                correct++;
                console.log("Wins: " + correct);
                clearInterval(intervalId);
              
                $("#gameContainer").html("<div><p>NOW THAT'S A SLAM DUNK!!!</p></div>");
                $("#gameContainer").append("<img src=" + questions[1].gif + ">");
                setTimeout(setGame3, 4000);

            } else {
                wrong++;
                console.log("Losses: " + wrong);
                clearInterval(intervalId);
              
                $("#gameContainer").html("<div><p>We call that an AIRBALL!!!</p></div>");
                 $("#gameContainer").append("<div><p>The correct answer is: " + questions[1].correctAnswer + "</p></div>");
                $("#gameContainer").append("<img src=" + questions[1].gif + ">");
                setTimeout(setGame3, 4000);
            };
        });


    function clockCheck() {
        if (shotClock === 0) {
            unanswered += 1;
            console.log("Unanswered: " + unanswered);
            clearInterval(intervalId);
            // $("#timerContainer").html("<div><p>Shot Clock: " + shotClock + "</p></div>");
            $("#gameContainer").html("<div><p>LOOKS LIKE THE SHOT CLOCK EXPIRED!!!</p></div>");
            $("#gameContainer").append("<img src=" + questions[1].gif + ">");
            setTimeout(setGame3, 4000);
        }
    };
};

 function setGame3() {

    	shotClock = 30;
    	$("#timerContainer").html("<div><p>Shot Clock: " + shotClock + "</p></div>");

        intervalId = setInterval(function() {
        	
        	shotClock--;
        	
        	$("#timerContainer").html("<div><p>Shot Clock: " + shotClock + "</p></div>");
            
            console.log("Shot Clock: " + shotClock);
            clockCheck();
        }, 1000);

        $("#gameContainer").html("<div><p>" + questions[2].question + "</p></div>");

            for (var i = 0; i < 4; i++) {
                button = $("<button>");
                button.addClass("gameTimeAnswers");
                button.attr("data-name", questions[2].answers[i]);
                button.text(questions[2].answers[i]);
                $("#gameContainer").append(button);
            };

        $(".gameTimeAnswers").on("click", function checkAnswer() {
            if ($(this).attr("data-name") === questions[2].correctAnswer) {
                correct++;
                console.log("Wins: " + correct);
                clearInterval(intervalId);
                
                $("#gameContainer").html("<div><p>NOW THAT'S A SLAM DUNK!!!</p></div>");
                $("#gameContainer").append("<img src=" + questions[2].gif + ">");
                setTimeout(setGame4, 4000);

            } else {
                wrong++;
                console.log("Losses: " + wrong);
                clearInterval(intervalId);
                
                $("#gameContainer").html("<div><p>We call that an AIRBALL!!!</p></div>");
                 $("#gameContainer").append("<div><p>The correct answer is: " + questions[2].correctAnswer + "</p></div>");
                $("#gameContainer").append("<img src=" + questions[2].gif + ">");
                setTimeout(setGame4, 4000);
            };
        });


    function clockCheck() {
        if (shotClock === 0) {
            unanswered += 1;
            console.log("Unanswered: " + unanswered);
            clearInterval(intervalId);
            
            $("#gameContainer").html("<div><p>LOOKS LIKE THE SHOT CLOCK EXPIRED!!!</p></div>");
            $("#gameContainer").append("<img src=" + questions[2].gif + ">");
            setTimeout(setGame4, 4000);
        }
    };
};

 function setGame4() {

    	shotClock = 30;
    	$("#timerContainer").html("<div><p>Shot Clock: " + shotClock + "</p></div>");

        intervalId = setInterval(function() {
        	
        	shotClock--;
        	
        	$("#timerContainer").html("<div><p>Shot Clock: " + shotClock + "</p></div>");
            
            console.log("Shot Clock: " + shotClock);
            clockCheck();
        }, 1000);

        $("#gameContainer").html("<div><p>" + questions[3].question + "</p></div>");

            for (var i = 0; i < 4; i++) {
                button = $("<button>");
                button.addClass("gameTimeAnswers");
                button.attr("data-name", questions[3].answers[i]);
                button.text(questions[3].answers[i]);
                $("#gameContainer").append(button);
            };

        $(".gameTimeAnswers").on("click", function checkAnswer() {
            if ($(this).attr("data-name") === questions[3].correctAnswer) {
                correct++;
                console.log("Wins: " + correct);
                clearInterval(intervalId);
              
                $("#gameContainer").html("<div><p>NOW THAT'S A SLAM DUNK!!!</p></div>");
                $("#gameContainer").append("<img src=" + questions[3].gif + ">");
                setTimeout(setGame5, 4000);

            } else {
                wrong++;
                console.log("Losses: " + wrong);
                clearInterval(intervalId);
               
                $("#gameContainer").html("<div><p>We call that an AIRBALL!!!</p></div>");
                 $("#gameContainer").append("<div><p>The correct answer is: " + questions[3].correctAnswer + "</p></div>");
                $("#gameContainer").append("<img src=" + questions[3].gif + ">");
                setTimeout(setGame5, 4000);
            };
        });


    function clockCheck() {
        if (shotClock === 0) {
            unanswered += 1;
            console.log("Unanswered: " + unanswered);
            clearInterval(intervalId);
            // $("#timerContainer").html("<div><p>Shot Clock: " + shotClock + "</p></div>");
            $("#gameContainer").html("<div><p>LOOKS LIKE THE SHOT CLOCK EXPIRED!!!</p></div>");
            $("#gameContainer").append("<img src=" + questions[3].gif + ">");
            setTimeout(setGame5, 4000);
        }
    };
};

function setGame5() {

    	shotClock = 30;
    	$("#timerContainer").html("<div><p>Shot Clock: " + shotClock + "</p></div>");

        intervalId = setInterval(function() {
        
        	shotClock--;
     
        	$("#timerContainer").html("<div><p>Shot Clock: " + shotClock + "</p></div>");
        
            console.log("Shot Clock: " + shotClock);
            clockCheck();
        }, 1000);

        $("#gameContainer").html("<div><p>" + questions[4].question + "</p></div>");

            for (var i = 0; i < 4; i++) {
                button = $("<button>");
                button.addClass("gameTimeAnswers");
                button.attr("data-name", questions[4].answers[i]);
                button.text(questions[4].answers[i]);
                $("#gameContainer").append(button);
            };

        $(".gameTimeAnswers").on("click", function checkAnswer() {
            if ($(this).attr("data-name") === questions[4].correctAnswer) {
                correct++;
                console.log("Wins: " + correct);
                clearInterval(intervalId);
               
                $("#gameContainer").html("<div><p>NOW THAT'S A SLAM DUNK!!!</p></div>");
                $("#gameContainer").append("<img src=" + questions[4].gif + ">");
                setTimeout(setGame6, 4000);

            } else {
                wrong++;
                console.log("Losses: " + wrong);
                clearInterval(intervalId);
              
                $("#gameContainer").html("<div><p>We call that an AIRBALL!!!</p></div>");
                 $("#gameContainer").append("<div><p>The correct answer is: " + questions[4].correctAnswer + "</p></div>");
                $("#gameContainer").append("<img src=" + questions[4].gif + ">");
                setTimeout(setGame6, 4000);
            };
        });


    function clockCheck() {
        if (shotClock === 0) {
            unanswered += 1;
            console.log("Unanswered: " + unanswered);
            clearInterval(intervalId);
           
            $("#gameContainer").html("<div><p>LOOKS LIKE THE SHOT CLOCK EXPIRED!!!</p></div>");
            $("#gameContainer").append("<img src=" + questions[4].gif + ">");
            setTimeout(setGame6, 4000);
        }
    };
};

function setGame6() {

    	shotClock = 30;
    	$("#timerContainer").html("<div><p>Shot Clock: " + shotClock + "</p></div>");

        intervalId = setInterval(function() {
        
        	shotClock--;
     
        	$("#timerContainer").html("<div><p>Shot Clock: " + shotClock + "</p></div>");
        
            console.log("Shot Clock: " + shotClock);
            clockCheck();
        }, 1000);

        $("#gameContainer").html("<div><p>" + questions[5].question + "</p></div>");

            for (var i = 0; i < 4; i++) {
                button = $("<button>");
                button.addClass("gameTimeAnswers");
                button.attr("data-name", questions[5].answers[i]);
                button.text(questions[5].answers[i]);
                $("#gameContainer").append(button);
            };

        $(".gameTimeAnswers").on("click", function checkAnswer() {
            if ($(this).attr("data-name") === questions[5].correctAnswer) {
                correct++;
                console.log("Wins: " + correct);
                clearInterval(intervalId);
               
                $("#gameContainer").html("<div><p>NOW THAT'S A SLAM DUNK!!!</p></div>");
                $("#gameContainer").append("<img src=" + questions[5].gif + ">");
                setTimeout(setGame7, 4000);

            } else {
                wrong++;
                console.log("Losses: " + wrong);
                clearInterval(intervalId);
              
                $("#gameContainer").html("<div><p>We call that an AIRBALL!!!</p></div>");
                 $("#gameContainer").append("<div><p>The correct answer is: " + questions[5].correctAnswer + "</p></div>");
                $("#gameContainer").append("<img src=" + questions[5].gif + ">");
                setTimeout(setGame7, 4000);
            };
        });


    function clockCheck() {
        if (shotClock === 0) {
            unanswered += 1;
            console.log("Unanswered: " + unanswered);
            clearInterval(intervalId);
           
            $("#gameContainer").html("<div><p>LOOKS LIKE THE SHOT CLOCK EXPIRED!!!</p></div>");
            $("#gameContainer").append("<img src=" + questions[5].gif + ">");
            setTimeout(setGame7, 4000);
        }
    };
};

function setGame7() {

    	shotClock = 30;
    	$("#timerContainer").html("<div><p>Shot Clock: " + shotClock + "</p></div>");

        intervalId = setInterval(function() {
        
        	shotClock--;
     
        	$("#timerContainer").html("<div><p>Shot Clock: " + shotClock + "</p></div>");
        
            console.log("Shot Clock: " + shotClock);
            clockCheck();
        }, 1000);

        $("#gameContainer").html("<div><p>" + questions[6].question + "</p></div>");

            for (var i = 0; i < 4; i++) {
                button = $("<button>");
                button.addClass("gameTimeAnswers");
                button.attr("data-name", questions[6].answers[i]);
                button.text(questions[6].answers[i]);
                $("#gameContainer").append(button);
            };

        $(".gameTimeAnswers").on("click", function checkAnswer() {
            if ($(this).attr("data-name") === questions[6].correctAnswer) {
                correct++;
                console.log("Wins: " + correct);
                clearInterval(intervalId);
               
                $("#gameContainer").html("<div><p>NOW THAT'S A SLAM DUNK!!!</p></div>");
                $("#gameContainer").append("<img src=" + questions[6].gif + ">");
                setTimeout(setGame8, 4000);

            } else {
                wrong++;
                console.log("Losses: " + wrong);
                clearInterval(intervalId);
              
                $("#gameContainer").html("<div><p>We call that an AIRBALL!!!</p></div>");
                 $("#gameContainer").append("<div><p>The correct answer is: " + questions[6].correctAnswer + "</p></div>");
                $("#gameContainer").append("<img src=" + questions[6].gif + ">");
                setTimeout(setGame8, 4000);
            };
        });


    function clockCheck() {
        if (shotClock === 0) {
            unanswered += 1;
            console.log("Unanswered: " + unanswered);
            clearInterval(intervalId);
           
            $("#gameContainer").html("<div><p>LOOKS LIKE THE SHOT CLOCK EXPIRED!!!</p></div>");
            $("#gameContainer").append("<img src=" + questions[6].gif + ">");
            setTimeout(setGame8, 4000);
        }
    };
};

function setGame8() {

    	shotClock = 30;
    	$("#timerContainer").html("<div><p>Shot Clock: " + shotClock + "</p></div>");

        intervalId = setInterval(function() {
        
        	shotClock--;
     
        	$("#timerContainer").html("<div><p>Shot Clock: " + shotClock + "</p></div>");
        
            console.log("Shot Clock: " + shotClock);
            clockCheck();
        }, 1000);

        $("#gameContainer").html("<div><p>" + questions[7].question + "</p></div>");

            for (var i = 0; i < 4; i++) {
                button = $("<button>");
                button.addClass("gameTimeAnswers");
                button.attr("data-name", questions[7].answers[i]);
                button.text(questions[7].answers[i]);
                $("#gameContainer").append(button);
            };

        $(".gameTimeAnswers").on("click", function checkAnswer() {
            if ($(this).attr("data-name") === questions[7].correctAnswer) {
                correct++;
                console.log("Wins: " + correct);
                clearInterval(intervalId);
               
                $("#gameContainer").html("<div><p>NOW THAT'S A SLAM DUNK!!!</p></div>");
                $("#gameContainer").append("<img src=" + questions[7].gif + ">");
                setTimeout(setGame9, 4000);

            } else {
                wrong++;
                console.log("Losses: " + wrong);
                clearInterval(intervalId);
                $("#gameContainer").html("<div><p>We call that an AIRBALL!!!</p></div>");
                 $("#gameContainer").append("<div><p>The correct answer is: " + questions[7].correctAnswer + "</p></div>");
                $("#gameContainer").append("<img src=" + questions[7].gif + ">");
                setTimeout(setGame9, 4000);
            };
        });


    function clockCheck() {
        if (shotClock === 0) {
            unanswered += 1;
            console.log("Unanswered: " + unanswered);
            clearInterval(intervalId);
            $("#gameContainer").html("<div><p>LOOKS LIKE THE SHOT CLOCK EXPIRED!!!</p></div>");
            $("#gameContainer").append("<img src=" + questions[8].gif + ">");
            setTimeout(setGame9, 4000);
        }
    };
};

function setGame9() {

    	shotClock = 30;
    	$("#timerContainer").html("<div><p>Shot Clock: " + shotClock + "</p></div>");

        intervalId = setInterval(function() {
        
        	shotClock--;
     
        	$("#timerContainer").html("<div><p>Shot Clock: " + shotClock + "</p></div>");
        
            console.log("Shot Clock: " + shotClock);
            clockCheck();
        }, 1000);

        $("#gameContainer").html("<div><p>" + questions[8].question + "</p></div>");

            for (var i = 0; i < 4; i++) {
                button = $("<button>");
                button.addClass("gameTimeAnswers");
                button.attr("data-name", questions[8].answers[i]);
                button.text(questions[8].answers[i]);
                $("#gameContainer").append(button);
            };

        $(".gameTimeAnswers").on("click", function checkAnswer() {
            if ($(this).attr("data-name") === questions[8].correctAnswer) {
                correct++;
                console.log("Wins: " + correct);
                clearInterval(intervalId);
               
                $("#gameContainer").html("<div><p>NOW THAT'S A SLAM DUNK!!!</p></div>");
                $("#gameContainer").append("<img src=" + questions[8].gif + ">");
                setTimeout(setGame10, 4000);

            } else {
                wrong++;
                console.log("Losses: " + wrong);
                clearInterval(intervalId);
                $("#gameContainer").html("<div><p>We call that an AIRBALL!!!</p></div>");
                 $("#gameContainer").append("<div><p>The correct answer is: " + questions[8].correctAnswer + "</p></div>");
                $("#gameContainer").append("<img src=" + questions[8].gif + ">");
                setTimeout(setGame10, 4000);
            };
        });


    function clockCheck() {
        if (shotClock === 0) {
            unanswered += 1;
            console.log("Unanswered: " + unanswered);
            clearInterval(intervalId);
            $("#gameContainer").html("<div><p>LOOKS LIKE THE SHOT CLOCK EXPIRED!!!</p></div>");
            $("#gameContainer").append("<img src=" + questions[8].gif + ">");
            setTimeout(setGame10, 4000);
        }
    };
};

function setGame10() {

    	shotClock = 30;
    	$("#timerContainer").html("<div><p>Shot Clock: " + shotClock + "</p></div>");

        intervalId = setInterval(function() {
        
        	shotClock--;
     
        	$("#timerContainer").html("<div><p>Shot Clock: " + shotClock + "</p></div>");
        
            console.log("Shot Clock: " + shotClock);
            clockCheck();
        }, 1000);

        $("#gameContainer").html("<div><p>" + questions[9].question + "</p></div>");

            for (var i = 0; i < 4; i++) {
                button = $("<button>");
                button.addClass("gameTimeAnswers");
                button.attr("data-name", questions[9].answers[i]);
                button.text(questions[9].answers[i]);
                $("#gameContainer").append(button);
            };

        $(".gameTimeAnswers").on("click", function checkAnswer() {
            if ($(this).attr("data-name") === questions[9].correctAnswer) {
                correct++;
                console.log("Wins: " + correct);
                clearInterval(intervalId);
               
                $("#gameContainer").html("<div><p>NOW THAT'S A SLAM DUNK!!!</p></div>");
                $("#gameContainer").append("<img src=" + questions[9].gif + ">");
                setTimeout(endGame, 4000);

            } else {
                wrong++;
                console.log("Losses: " + wrong);
                clearInterval(intervalId);
                $("#gameContainer").html("<div><p>We call that an AIRBALL!!!</p></div>");
                 $("#gameContainer").append("<div><p>The correct answer is: " + questions[9].correctAnswer + "</p></div>");
                $("#gameContainer").append("<img src=" + questions[9].gif + ">");
                setTimeout(endGame, 4000);
            };
        });


    function clockCheck() {
        if (shotClock === 0) {
            unanswered += 1;
            console.log("Unanswered: " + unanswered);
            clearInterval(intervalId);
            $("#gameContainer").html("<div><p>LOOKS LIKE THE SHOT CLOCK EXPIRED!!!</p></div>");
            $("#gameContainer").append("<img src=" + questions[9].gif + ">");
            setTimeout(endGame, 4000);
        }
    };
};


function endGame() {
	button.addClass("startOver");
    button.text("Play Again?");
    button.text("Play Again?");
    $("#startButton").html(button);
    $("#timerContainer").empty();
	$("#gameContainer").html("<div><p>Dunks: " + correct + "</p></div>");	
    $("#gameContainer").append("<div><p>Airballs: " + wrong + "</p></div>");
    $("#gameContainer").append("<div><p>Ran Outta Time: " + unanswered + "</p></div>");
    $(".startOver").click(function() {
        $(".startOver").hide("slow");
        setGame();
        shotClock = 30;
        correct = 0;
        wrong = 0;
        unanswered = 0;
    });

}

    // main process
    // ------------------------------------------------------------------------------

    button.addClass("begin");
    button.text("TipOff");
    $("#startButton").html(button);

    $(".begin").click(function() {
        $(".begin").hide("slow");
        setGame();
    });
  

});
