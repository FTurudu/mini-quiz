const correctAnswer = ["A", "B", "B", "A"];
const form = document.querySelector(".quiz-form");

form.addEventListener("submit", e => {
  e.preventDefault();
  let score = 0;
  let userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  //check answer
  userAnswer.forEach((result, i) => {
    console.log(result, i);
    if (result === correctAnswer[i]) {
      score += 25;
    }
  });
  console.log(score);

  //show result on page
  scrollTo(0, 0);

  let showScore = document.querySelector(".result");
  showScore.classList.remove("d-none");

  //animating score
  let counter = 0;
  const timer = setInterval(() => {
    let updateScore = document.querySelector("span");
    updateScore.textContent = `${counter}%`;
    if (counter === score) {
      clearInterval(timer);
    } else {
      counter++;
    }
  }, 10);
});
