var currentQuestion = 0;
var questions = [
  {
    question: "What is the capital of France?",
    answer: "Paris"
  },
  {
    question: "What is the capital of Germany?",
    answer: "Berlin"
  },
  {
    question: "What is the capital of Italy?",
    answer: "Rome"
  }
];

$(document).ready(function() {
  $("#question").text(questions[currentQuestion].question);
  $("#submit").click(function() {
    if ($("#answer").val() === questions[currentQuestion].answer) {
      $("#result").text("Correct!");
    } else {
      $("#result").text("Incorrect.");
    }
    currentQuestion++;
    if (currentQuestion >= questions.length) {
      currentQuestion = 0;
    }
    $("#question").text(questions[currentQuestion].question);
    $("#answer").val("");
  });
});
