const availableNumbers = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
  40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
  59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
  78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,
  97, 98, 99, 100
];

  //https://media.thegermanproject.com/de/audio/lessons/14/01.mp3

const numbersInGerman = {
  // Your numbersInGerman object here...
};

let currentNumber = 0;
let score = 0;
let wins = 0;
let losses = 0;
let timeLeft = 75; // in seconds

const playAudioButton = document.getElementById('play-audio');
const feedback = document.getElementById('feedback');
const scoreDisplay = document.getElementById('score');
const buttons = [...document.getElementsByClassName('number-button')];
const chronometer = document.getElementById('chronometer');
const popup = document.getElementById('popup');
const result = document.getElementById('result');
const winsDisplay = document.getElementById('wins');
const lossesDisplay = document.getElementById('losses');

function getRandomNumber() {
  const index = Math.floor(Math.random() * availableNumbers.length);
  return availableNumbers[index];
}
console.log(currentNumber)
function playAudio(number) {
      const audio = new Audio(`audio/${number}.mp3`);
      audio.play();
}

function updateButtons() {
  const correctButtonIndex = Math.floor(Math.random() * 4);
  buttons.forEach((button, index) => {
      if (index === correctButtonIndex) {
          button.textContent = currentNumber;
          button.dataset.correct = true;
      } else {
          let wrongNumber;
          do {
              wrongNumber = getRandomNumber();
          } while (wrongNumber === currentNumber);
          button.textContent = wrongNumber;
          button.dataset.correct = false;
      }
  });
}

function updateNumber() {
  currentNumber = getRandomNumber();
  updateButtons();
  playAudio(currentNumber);  // Play audio at the beginning of each round
}

function startChronometer() {
  const interval = setInterval(() => {
    timeLeft--;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    chronometer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    if (timeLeft === 0) {
      clearInterval(interval);
      showPopup();
    }
  }, 1000);
}

function showPopup() {
  popup.style.display = 'flex';
  if (score >= 15) {
    wins++;
    result.textContent = 'Correct!';
  } else {
    losses++;
    result.textContent = 'Try again!';
  }
  winsDisplay.textContent = `Wins: ${wins}`;
  lossesDisplay.textContent = `Losses: ${losses}`;
}

playAudioButton.addEventListener('click', () => {
  playAudio(currentNumber);
});

buttons.forEach(button => {
  button.addEventListener('click', () => {
      const isCorrect = button.dataset.correct === "true";
      if (isCorrect) {
          feedback.textContent = 'Correct!';
          feedback.style.color = 'green';
          score++;
          const audioCorrect1 = new Audio(`audio/correct.mp3`);
          audioCorrect1.play();
      } else {
          feedback.textContent = `Incorrect! The correct answer is ${currentNumber}.`;
          feedback.style.color = 'red';
          losses++;
          const audioWrong = new Audio(`audio/wrong.mp3`);
          audioWrong.play();
      }
      scoreDisplay.textContent = score;
      lossesDisplay.textContent = losses;
      updateNumber();
  });
});

window.onload = () => {
  updateNumber();
  startChronometer();
};
// Add event listener to go back button
document.getElementById('go-back').addEventListener('click', () => {
  window.location.href = 'learning_options.html';
});