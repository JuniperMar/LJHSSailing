// Creating the array of questions and the corresponding answers
const questions = [
  { question: "Sailing is an Olympic sport. When was the first time it was included on the Olympic program?",
    image: "images/sailingPhotos/start.png",
    answers: [
      {text: "1896", correct: true},
      {text: "1900", correct: false},
      {text: "1892", correct: false},
      {text: "1904", correct: false}
    ]},
  { question: "On May 15, 2010, who became the youngest person to circumnavigate the globe solo and unassisted sailing?",
    image: "images/sailingPhotos/vastDownwind.png",
    answers: [
      {text: "John Anedrson", correct: false},
      {text: "Amelia Johnson", correct: false},
      {text: "Jessica Watson", correct: true},
      {text: "Jackie Miller", correct: false}
    ]},
  { question: "How many nautical miles did Jessica Watson sail during her circumnavigation?",
    image: "images/sailingPhotos/downwindFocused.png",
    answers: [
      {text: "19,000", correct: false},
      {text: "23,000", correct: true},
      {text: "27,000", correct: false},
      {text: "31,000", correct: false}
    ]},
  { question: "How long did Jessica Watson's circumnavigation take?",
    image: "images/sailingPhotos/jibe.png",
    answers: [
      {text: "180 days", correct: false},
      {text: "200 days", correct: false},
      {text: "210 days", correct: true},
      {text: "250 days", correct: false}
    ]},
  { question: "Ben Ainslie won five Olympic medals in sailing, four gold and one silver before announcing his retirement in 2013. What country is he from?",
    image: "images/sailingPhotos/preStart.png",
    answers: [
      {text: "The United States", correct: false},
      {text: "Australia", correct: false},
      {text: "Germany", correct: false},
      {text: "Great Britain", correct: true}
    ]},
  { question: "How long is an a Flying Junior (FJ) sailboat?",
    image: "images/sailboats/fj.png",
    answers: [
      {text: "12 feet 2 inches", correct: false},
      {text: "13 feet 3 inches ", correct: true},
      {text: "14 feet 4 inches", correct: false},
      {text: "15 feet 5 inches", correct: false}
    ]},
  { question: "What is the name of the two pieces of metal and fiberglass on a 420 sailboat that surrounds and supports the mast?",
    image: "images/sailboats/420.png",
    answers: [
      {text: "Parchers", correct: false},
      {text: "Packers", correct: false},
      {text: "Supporters", correct: false},
      {text: "Partners", correct: true}
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