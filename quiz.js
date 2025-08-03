const answersContainer = document.getElementById("answers");

const answers = answersContainer.querySelectorAll("input");

const submitAnswer = document.getElementById("submit-answer");

const feedback = document.getElementById("feedback");

function checkAnswer() {
  const correctAnswer = "4";
  let userAnswer;
  answers.forEach((ele) => {
    if (ele.checked) {
      userAnswer = ele.value;
    }
  });
  if (userAnswer === correctAnswer) {
    feedback.innerHTML = "Correct! Well done.";
  } else {
    feedback.innerHTML = "That's incorrect. Try again!";
  }
}

submitAnswer.addEventListener("click", checkAnswer);
