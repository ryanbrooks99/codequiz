
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
    correctAnswer: "cascading style sheets"},
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
var messageEl = document.getElementById("message")
var initialsEl = document.getElementById("initials")
var saveScoreEl = document.getElementById("savescore")
var scoreEL = document.getElementById("score")

var timerEl = document.getElementById("timer")
var time = 0
var finalQuestionIndex = quizQuestions.length;
var timeLeft = 61;
var timerInterval;
var score = 0;
var correct;
var currentQuestionIndex = 0;

startbuttonEl.addEventListener("click", startQuiz)

function startQuiz() {
  console.log("startQuiz");
  quizQuestionsEl.removeAttribute("class");
  quizQuestionsEl.setAttribute("class", "row");
  startQuizEl.removeAttribute("class");
  startQuizEl.setAttribute("class", "hide");
  getQuestions();
  startTimer();
}

function getQuestions() {
  var questionTitle = quizQuestions[currentQuestionIndex].question;
  questionTitleEl.textContent=questionTitle;
  var choice1 = quizQuestions[currentQuestionIndex].choiceA;
  choice1El.textContent=choice1;
  var choice2 = quizQuestions[currentQuestionIndex].choiceB;
  choice2El.textContent=choice2;
  var choice3 = quizQuestions[currentQuestionIndex].choiceC;
  choice3El.textContent=choice3;
  var choice4 = quizQuestions[currentQuestionIndex].choiceD;
  choice4El.textContent=choice4;

}

function startTimer() {
  timerInterval = setInterval(function() {
    timeLeft--;
    timerEl.textContent = "Time left: " + timeLeft;

    if(timeLeft === 0) {
      clearInterval(timerInterval);
      showScore();
    }
  }, 1000);
}

choice1El.addEventListener("click", checkAnswer)
choice2El.addEventListener("click", checkAnswer)
choice3El.addEventListener("click", checkAnswer)
choice4El.addEventListener("click", checkAnswer)

function checkAnswer(event) {
  correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;
  console.log(event.target.outerText)
  if (event.target.outerText === correctAnswer) {
    alert("You are correct!");
    

  }else{
    alert("You are wrong!")
    timeLeft-=10;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    
    getQuestions();

  }else{
    showScore();
  }
}

function showScore() {
  clearInterval(timerInterval);
  quizQuestionsEl.removeAttribute("class");
  quizQuestionsEl.setAttribute("class", "hide");
  quizEndEl.removeAttribute("class");
  quizEndEl.setAttribute("class", "row");
  scoreEL.textContent = "Time Left: "+ timeLeft
}

saveScoreEl.addEventListener("click", saveScore)
function saveScore() {
  var highScores = JSON.parse(localStorage.getItem("highscores")) || []
  var initials = initialsEl.value
  var newScore = {initials:initials, score: timeLeft}
  highScores.push(newScore);
  localStorage.setItem("highscores", JSON.stringify(highScores))
  // window.location.href = "scores.html";
  loadScores()
}

function loadScores() {
  var highScores = JSON.parse(localStorage.getItem("highscores")) || []
  highScores.sort(function(a,b){
    return b.score - a.score;
  })
  var highscoreEL = document.getElementById("highscores");
  for (var i = 0; i < highScores.length; i++) {
    var liTag = document.createElement("li");
    liTag.textContent= highScores[i].score + " - " + highScores[i].initials;
    highscoreEL.appendChild(liTag)
  }

}