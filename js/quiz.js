var counter = 0;
var right = 0;
var questions = [
    ["What was our first conversation ever about?", "A trip to Poland - cliché, we know.", "Life in Toronto, obviously!", "Support Vector Machines - You know who we are and what we are working on ;)", "The NeurIPS Conference - Yes, you guessed it - we're total geeks ... ", "1"],
    ["Where did we meet in person for the first time?", "Nicolas’ apartment during his birthday celebration. We do not use Keras!", "Queen’s Park on the Franzi’s welcome party!", "Stephan’s and Mohammad’s apartment during a game night.", "Vector Institute - yes we do work super hard.", "2"],
    ["Who took our first-ever photo together (if we want to publish the photo we need to blur out everyone else)?", "Mohammad at Vector.", "Stephan during the trip to the Bruce Peninsula.", "Sierra at the lab retreat.", "Nicolas during the picnic in Queen’s Park.", "4"],
    ["What was our first date?", "A half marathon along the waterfront of Lake Ontario. Adam, you do this workout but that much!", "Ice skating at the Bentway Skate Trail. Franzi wanted to show off.", "Aquarium in Toronto. This is a lovely place.", "Dinner at the George restaurant in Toronto. Highly recommended place!", "1"],
    ["Who was the first to find out officially (that we know of) about us as a couple?", "Roy on his first day on the way to Vector in Queens Park.", "Nicolas in his office at Vector.", "Patty at Metro in College Park.", "Nick on the UofT Campus.", "2"],
    ["Over which book did we realize and confess to each other that we’re in love? Which book triggered us to confess to each other that we’re in love?", "Harry Potter and the sorcerer’s stone.", "Getting things done!", "Obsessive Genius (The inner world of Marie Curie).", "Deep Learning by Ian Goodfellow.", "3"],
    ["Why were Adam and Franzi called to a court together?", "Adam drove too fast in Mexico and caused an accident.", "They jaywalked near Eaton Center while trying to take photos for Nicolas’ calendar.", "Eating lunch by the river in the Niagara Glen Park.", "On the Australian border, they forgot to throw away some bananas brought from Canada.", "3"]
];
nr_questions = questions.length

$(document).ready(function () {
    $(document).on("click", ".true", function () {
        right = right + 1;
        $(".true").css("background-color", "#44D37E");
        $(".true").css("color", "white");
        $(".false").css("background-color", "#2F1C42");
        $(".false").css("color", "white");
        window.setTimeout(nextQuestion, 1200);
    });
    $(document).on("click", ".false", function () {
        $(".true").css("background-color", "#44D37E");
        $(".true").css("color", "white");
        $(".false").css("background-color", "#2F1C42");
        $(".false").css("color", "white");
        window.setTimeout(nextQuestion, 1200);
    });

    function nextQuestion() {
        document.getElementById("progress").value += (100 / nr_questions)
        counter = counter + 1;
        if (counter > (nr_questions - 1)) {
            $('#a1, #a2, #a3, #a4, #a5, #question').fadeOut("slow", function () {
                if (right == nr_questions){
                    var result = $("<div id='question' class='field is-size-4'><strong class='has-text-success'>You got all " + right +"/7 right.</strong></br><div class='is-size-5'> Wow! You got them all right! There's no way you're not a stalker. Not that you need it, but scroll down to read the full story!</div></div>").hide();
                }
                else if (right > (nr_questions / 2)){
                    var result = $("<div id='question' class='field is-size-4'><strong class='has-text-success'>You got " + right +"/7 right.</strong></br><div class='is-size-5'> Pretty good! You must be quite close to Adam and Franzi... or you're a stalker. Scroll down for the full story!</div></div>").hide();
                }
                else if (right <= (nr_questions / 2) && right >= 1){
                    var result = $("<div id='question' class='field is-size-4'><strong class='orange'>You got " + right +"/7 right.</strong></br><div class='is-size-5'> You've got some work to do! Scroll down and read up...</div></div>").hide();
                }
                else {
                    var result = $("<div id='question' class='field is-size-4'><strong class='has-text-danger'>You got " + right +"/7 right.</strong></br><div class='is-size-5'> Wow you did terribly! Do you even know Adam and Franzi!? Scroll down and take notes...</div></div>").hide();
                }
                $('#couple-20').replaceWith('<div id="couple-20" class="column is-4 is-offset-1"><p class="title is-2 "><span class="rsvp-label">Your Results</span></p></div>');
                $('#question').replaceWith(result);
                $('#question').fadeIn("slow");
                $('#progress').replaceWith("<p style='line-height:0px;margin:-15px;'><br></p>");
            });
        }
        else {
            $(".true").css("background-color", "#FFFEFE");
            $(".true").css("color", "black");
            $(".false").css("background-color", "#FFFEFE");
            $(".false").css("color", "black");

            $('#question').fadeOut("slow", function () {
                var newQ = $("<div id='question' class='field'><strong>Question " + (counter + 1) + "/7</strong><label id='real-question' class='label is-size-5'>" + questions[counter][0] + "</label ></div >").hide();
                $(this).replaceWith(newQ);
                $('#question').fadeIn("slow");
            });

            var numAnswers = questions[counter].length - 2;
            var correctAnswer = questions[counter][numAnswers + 1];

            if (numAnswers == 4) {
                $('#a1').fadeOut("slow", function () {
                    var newa = $("<p id='a1' class='control'><a class='box " + (correctAnswer == 1) + "'>" + questions[counter][1] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a1').fadeIn("slow");
                });
                $('#a2').fadeOut("slow", function () {
                    newa = $("<p id='a2' class='control'><a class='box " + (correctAnswer == 2) + "'>" + questions[counter][2] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a2').fadeIn("slow");
                });
                $('#a3').fadeOut("slow", function () {
                    newa = $("<p id='a3' class='control'><a class='box " + (correctAnswer == 3) + "'>" + questions[counter][3] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a3').fadeIn("slow");
                });
                $('#a4').fadeOut("slow", function () {
                    newa = $("<p id='a4' class='control'><a class='box " + (correctAnswer == 4) + "'>" + questions[counter][4] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a4').fadeIn("slow");
                });
            }
            else if (numAnswers == 5) {
                $('#a1').fadeOut("slow", function () {
                    var newa = $("<p id='a1' class='control'><a class='box " + (correctAnswer == 2) + "'>" + questions[counter][2] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a1').fadeIn("slow");
                });
                $('#a2').fadeOut("slow", function () {
                    newa = $("<p id='a2' class='control'><a class='box " + (correctAnswer == 3) + "'>" + questions[counter][3] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a2').fadeIn("slow");
                });
                $('#a3').fadeOut("slow", function () {
                    newa = $("<p id='a3' class='control'><a class='box " + (correctAnswer == 4) + "'>" + questions[counter][4] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a3').fadeIn("slow");
                });
                $('#a4').fadeOut("slow", function () {
                    newa = $("<p id='a4' class='control'><a class='box " + (correctAnswer == 5) + "'>" + questions[counter][5] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a4').fadeIn("slow");
                });
                $('#a5').fadeOut("slow", function () {
                    newa = $("<p id='a5' class='control'><a class='box " + (correctAnswer == 6) + "'>" + questions[counter][1] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a5').fadeIn("slow");
                });
            }
            else {
                $('#a1').fadeOut("slow", function () {
                    var newa = $("<p id='a1' class='control'><a class='box " + (correctAnswer == 1) + "'>" + questions[counter][1] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a1').fadeIn("slow");
                });
                $('#a2').fadeOut("slow", function () {
                    newa = $("<p id='a2' class='control'><a class='box " + (correctAnswer == 2) + "'>" + questions[counter][2] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a2').fadeIn("slow");
                });
                $('#a3').fadeOut("slow", function () {
                    newa = $("<p id='a3' class='control'></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a3').fadeIn("slow");
                });
                $('#a4').fadeOut("slow", function () {
                    newa = $("<p id='a4' class='control'></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a4').fadeIn("slow");
                });
            }

        }
    }
});