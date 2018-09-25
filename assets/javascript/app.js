$(document).ready(function() {
	

var correct = 0;
var wrong = 0;
var q1 = {
	question : 'What is the capital of California?',
	possibleAnswers : ['a. Albany',
				 'b. Fresno',
				 'c. Sacramento',
				 'd. Salem'],
	flags : [false, false, true, false],
	answer : 'c. Sacramento'
};

var q2 = {
	question: 'Which baseball team has won the most World Series titles?',
	possibleAnswers: ['a. San Francisco Giants',
				 'b. New York Yankees',
				 'c. Boston Red Sox',
				 'd. Oakland Athletics'],
	flags : [false, true, false, false],
	answer : 'b. New York Yankees'
};

var q3 = {
	question : 'What city do the Beatles come from?',
	possibleAnswers : ['a. London',
				 'b. Birmingham',
				 'c. Manchester',
				 'd. Liverpool'],
	flags : [false, false, false, true],
	answer : 'd. Liverpool'
};

var q4 = {
	question : 'What TV show features the character George Costanza?',
	possibleAnswers : ['a. Sienfeld',
				 'b. Friends',
				 'c. Survivor',
				 'd. Breaking Bad'],
	flags : [true, false, false, false],
	answer : 'a. Seinfeld'
};



var questionArray = [q1, q2, q3, q4];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();


function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	});
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}
		for (var i=0; i<questionArray.length; i++) {
			$('.question').append('<p>'+questionArray[i].question+'</p>');
			for (var j=0; j<questionArray[i].possibleAnswers.length; j++) {
				$('.answers').append('<span><button id="possibleAnswer">' + questionArray[i].possibleAnswers[j]+ '</button></span>');
			}
			$('#possibleAnswers').on('click', function() {


		console.log("click");
		countdownTimer.start();
		for (var i = 0; i < questionArray.length; i++) {
			console.log(i);

			$('.timer').html('<h3>'+countdownTimer.time + ' seconds remaining</h3>');
			$('.question').html(questionArray[i].question);
			while (countdownTimer != 0) {

			}
		
        
	$('#startButton').click(countdownTimer.start);


setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});