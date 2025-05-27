// Creating the array of questions and the corresponding answers
const questions = [
  { question: "Sailing is an Olympic sport. When was the first time it was included on the Olympic program?",
    answers: [
      {text: "1896", correct: true},
      {text: "1900", correct: false},
      {text: "1892", correct: false},
      {text: "1904", correct: false}
    ]},
  { question: "On May 15, 2010, who became the youngest person to circumnavigate the globe solo and unassisted sailing?",
    answers: [
      {text: "Jessica Watson", correct: true},
      {text: "John Anedrson", correct: false},
      {text: "Amelia Johnson", correct: false},
      {text: "Jackie Miller", correct: false}
    ]}
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answerButtons");
const nextButton = document.getElementById("nextButton");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetQuestion();
  
  let currentQuestion = questions[currentQuestionIndex];
  let questionNum = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNum + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("quizButton");
    answerButtons.appendChild(button);
    if (answer.correct) {
      // add the true or false to correct
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  })
}

function resetQuestion() {
  nextButton.style.display = "none";
  while(answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";
  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetQuestion();
  questionElement.innerHTML = "You scored " + score + " out of " + questions.length + "!";
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if(currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();