// Creating the array of questions and the corresponding answers
const questions = [
  { question: "Who has the right-of-way?",
    image: "images/rules/portstarboard.png",
    answers: [
      {text: "Boat A", correct: false},
      {text: "Boat B", correct: true}
    ]},
  { question: "Does Franklin or Lucy have the right-of way?",
    image: "images/rules/sailing-rules-different-legs.jpg",
    answers: [
      {text: "Lucy", correct: true},
      {text: "Franklin", correct: false}
    ]},
  { question: "Assuming Franklin established overlap before entering the 3-boat-length circle, must Lucy give room to Franklin?",
    image: "images/rules/sailing-rules-different-legs.jpg",
    answers: [
      {text: "Yes", correct: true},
      {text: "No", correct: false}
    ]},
  { question: "If on a coliding course, does Lucy or Snoopy have the right-of-way?",
    image: "images/rules/sailing-rules-different-legs.jpg",
    answers: [
      {text: "Lucy", correct: false},
      {text: "Snoopy", correct: true}
    ]},
  { question: "Was Charlie required to avoid Sally?",
    image: "images/rules/sailing-rules-different-legs.jpg",
    answers: [
      {text: "Yes", correct: true},
      {text: "No", correct: false}
    ]},
  { question: "If on a coliding course, does Sally or Peppermint Patty have the right-of-way?",
    image: "images/rules/sailing-rules-different-legs.jpg",
    answers: [
      {text: "Sally", correct: true},
      {text: "Peppermint Patty", correct: false}
    ]},
  { question: "Must Mary change course or can she continue sailing on starboard at her current angle?",
    image: "images/rules/finishroom.jpg",
    answers: [
      {text: "Yes", correct: true},
      {text: "No", correct: false}
    ]},
  { question: "Who must avoid the other?",
    image: "images/rules/finishroom.jpg",
    answers: [
      {text: "Peter", correct: false},
      {text: "Paul", correct: true}
    ]},
  { question: "Who has the right-of-way?",
    image: "images/rules/windwardleeward.jpg",
    answers: [
      {text: "Boat A", correct: false},
      {text: "Boat B", correct: true}
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

  // Add image if it exists
  if (currentQuestion.image) {
    const imageElement = document.createElement("img");
    imageElement.src = currentQuestion.image;
    imageElement.classList.add("questionImage");
    imageElement.alt = "Question " + questionNum + " image";
    questionElement.appendChild(imageElement);
  }

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