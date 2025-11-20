const availableNumbers = Array.from({ length: 101 }, (_, i) => i); // 0–100
let remainingNumbers = [...availableNumbers]; // copy for each dictation
let dictationCount = 0;
let dictationInterval = null;
let waitTime = 3000; // default: 3 seconds
let isRunning = false;
let playedNumbers = []; // store numbers as they are played

const waitTimeSelect = document.getElementById('wait-time');
const startButton = document.getElementById('start-dictation');
const progressDisplay = document.getElementById('progress');
const currentDisplay = document.getElementById('current-number-display');
const feedback = document.getElementById('feedback');

function getRandomNumber() {
  if (remainingNumbers.length === 0) {
    // refill if ever exhausted (shouldn't happen with 20/100)
    remainingNumbers = [...availableNumbers];
  }
  const index = Math.floor(Math.random() * remainingNumbers.length);
  const number = remainingNumbers[index];
  // remove that number so it doesn't repeat
  remainingNumbers.splice(index, 1);
  return number;
}

function playAudio(number) {
  const audio = new Audio(`audio/${number}.mp3`);
  audio.play();
}

function startDictation() {
  if (isRunning) return;
  isRunning = true;

  feedback.textContent = '';
  dictationCount = 0;
  playedNumbers = [];
  remainingNumbers = [...availableNumbers]; // reset unique pool
  progressDisplay.textContent = `Numbers played: 0 / 20`;
  currentDisplay.textContent = '';

  waitTime = parseInt(waitTimeSelect.value);

  dictationInterval = setInterval(() => {
    if (dictationCount >= 20) {
      clearInterval(dictationInterval);
      isRunning = false;
      showResults(); // ✅ show the answers
      return;
    }

    const number = getRandomNumber();
    playedNumbers.push(number);
    playAudio(number);

    dictationCount++;
    progressDisplay.textContent = `Numbers played: ${dictationCount} / 20`;
    currentDisplay.textContent = `Playing number ${dictationCount}...`;
  }, waitTime);
}

function showResults() {
  const list = playedNumbers.join(', ');
  feedback.innerHTML = `
    <h3>✅ Dictation finished!</h3>
    <p><strong>Numbers in order:</strong></p>
    <p>${list}</p>
  `;
  currentDisplay.textContent = '';
}

// Event listeners
startButton.addEventListener('click', startDictation);
document.getElementById('go-back').addEventListener('click', () => {
  //window.location.href = 'learning_options.html';
  window.location.href = 'index.html';
});
