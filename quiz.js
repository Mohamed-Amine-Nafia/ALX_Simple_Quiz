const answersContainer = document.getElementById("answers");

const answers = answersContainer.querySelectorAll("input");

const answerSubmit = document.getElementById("submit-answer");

const feedback = document.getElementById("feedback");

let answer;

answers.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    if (e.target.value == 4) {
      answer = true;
    } else {
      answer = false;
    }
  });
});

answerSubmit.addEventListener("click", () => {
  if (answer === true) {
    feedback.innerHTML = "That's Correct";
    feedback.style.color = "#37b24d";
  } else if (answer === false) {
    feedback.innerHTML = "Oops Wrong Answer";
    feedback.style.color = "#f03e3e";
  }
});
