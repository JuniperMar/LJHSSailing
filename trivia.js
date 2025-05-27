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
const answerButton = document.getElementById("answerButtons");
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
  let currentQuestion = questions[currentQuestionIndex];
  let questionNum = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNum + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("quizButton");
    answerButton.appendChild(button);
  })
}

startQuiz();