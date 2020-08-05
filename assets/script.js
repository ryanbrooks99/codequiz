


var quizQuestions = [{
    question: "How do you copy a repository in Git Bash/Terminal?",
    choiceA: "git add",
    choiceB: "git commit",
    choiceC: "git clone",
    choiceD: "git push",
    correctAnswer: "git clone"},
  {
    question: "Which of the following are contained in the Box Model?",
    choiceA: "content",
    choiceB: "padding",
    choiceC: "border",
    choiceD: "All of the Above",
    correctAnswer: "All of the Above"},
   {
    question: "What does CSS stand for?",
    choiceA: "cascading style sheets",
    choiceB: "correct simpler syntax",
    choiceC: "computer sheet styles",
    choiceD: "call system syntax",
    correctAnswer: "cascading syle sheets"},
    {
    question: "What position is a box in when it is 'nailed' to a computer screen?",
    choiceA: "static",
    choiceB: "fixed",
    choiceC: "absolute",
    choiceD: "relative",
    correctAnswer: "fixed"},
    {
    question: "What is the golden ratio for line-height?",
    choiceA: "2.0em",
    choiceB: "3.0em",
    choiceC: "1.0em",
    choiceD: "1.5em",
    correctAnswer: "1.5em"},  
    ];
var questionIndex = 0
var startbuttonEl = document.getElementById("startbutton")
var startQuizEl = document.getElementById("startquiz")
var quizQuestionsEl = document.getElementById("quizquestions")
var quizEndEl = document.getElementById("quizend")
var questionTitleEl = document.getElementById("questiontitle")
var choice1El = document.getElementById("choice1")
var choice2El = document.getElementById("choice2")
var choice3El = document.getElementById("choice3")
var choice4El = document.getElementById("choice4")


startbuttonEl.addEventListener("click", startQuiz)

function startQuiz() {
  console.log("startQuiz")
  quizQuestionsEl.removeAttribute("class")
  quizQuestionsEl.setAttribute("class", "row")
  startQuizEl.removeAttribute("class")
  startQuizEl.setAttribute("class", "hide")
  getQuestions()
  startTimer()
}

function getQuestions() {
  var questionTitle = quizQuestions[questionIndex].question;
  questionTitleEl.textContent=questionTitle;
  var choice1 = quizQuestions[questionIndex].choiceA;
  choice1El.textContent=choice1;
  var choice2 = quizQuestions[questionIndex].choiceB;
  choice2El.textContent=choice2;
  var choice3 = quizQuestions[questionIndex].choiceC;
  choice3El.textContent=choice3;
  var choice4 = quizQuestions[questionIndex].choiceD;
  choice4El.textContent=choice4;
  getAnswer()
}

function startTimer() {

}