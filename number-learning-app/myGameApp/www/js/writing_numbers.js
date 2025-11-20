const availableNumbers = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
  40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
  59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
  78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,
  97, 98, 99, 100
];

const numbersInGerman = {
  1: 'eins',
  2: 'zwei',
  3: 'drei',
  4: 'vier',
  5: 'fünf',
  6: 'sechs',
  7: 'sieben',
  8: 'acht',
  9: 'neun',
  10: 'zehn',
  11: 'elf',
  12: 'zwölf',
  13: 'dreizehn',
  14: 'vierzehn',
  15: 'fünfzehn',
  16: 'sechzehn',
  17: 'siebzehn',
  18: 'achtzehn',
  19: 'neunzehn',
  20: 'zwanzig',
  21: 'einundzwanzig',
  22: 'zweiundzwanzig',
  23: 'dreiundzwanzig',
  24: 'vierundzwanzig',
  25: 'fünfundzwanzig',
  26: 'sechsundzwanzig',
  27: 'siebenundzwanzig',
  28: 'achtundzwanzig',
  29: 'neunundzwanzig',
  30: 'dreißig',
  31: 'einunddreißig',
  32: 'zweiunddreißig',
  33: 'dreiunddreißig',
  34: 'vierunddreißig',
  35: 'fünfunddreißig',
  36: 'sechsunddreißig',
  37: 'siebenunddreißig',
  38: 'achtunddreißig',
  39: 'neununddreißig',
  40: 'vierzig',
  41: 'einundvierzig',
  42: 'zweiundvierzig',
  43: 'dreiundvierzig',
  44: 'vierundvierzig',
  45: 'fünfundvierzig',
  46: 'sechsundvierzig',
  47: 'siebenundvierzig',
  48: 'achtundvierzig',
  49: 'neunundvierzig',
  50: 'fünfzig',
  51: 'einundfünfzig',
  52: 'zweiundfünfzig',
  53: 'dreiundfünfzig',
  54: 'vierundfünfzig',
  55: 'fünfundfünfzig',
  56: 'sechsundfünfzig',
  57: 'siebenundfünfzig',
  58: 'achtundfünfzig',
  59: 'neunundfünfzig',
  60: 'sechzig',
  61: 'einundsechzig',
  62: 'zweiundsechzig',
  63: 'dreiundsechzig',
  64: 'vierundsechzig',
  65: 'fünfundsechzig',
  66: 'sechsundsechzig',
  67: 'siebenundsechzig',
  68: 'achtundsechzig',
  69: 'neunundsechzig',
  70: 'siebzig',
  71: 'einundsiebzig',
  72: 'zweiundsiebzig',
  73: 'dreiundsiebzig',
  74: 'vierundsiebzig',
  75: 'fünfundsiebzig',
  76: 'sechsundsiebzig',
  77: 'siebenundsiebzig',
  78: 'achtundsiebzig',
  79: 'neunundsiebzig',
  80: 'achtzig',
  81: 'einundachtzig',
  82: 'zweiundachtzig',
  83: 'dreiundachtzig',
  84: 'vierundachtzig',
  85: 'fünfundachtzig',
  86: 'sechsundachtzig',
  87: 'siebenundachtzig',
  88: 'achtundachtzig',
  89: 'neunundachtzig',
  90: 'neunzig',
  91: 'einundneunzig',
  92: 'zweiundneunzig',
  93: 'dreiundneunzig',
  94: 'vierundneunzig',
  95: 'fünfundneunzig',
  96: 'sechsundneunzig',
  97: 'siebenundneunzig',
  98: 'achtundneunzig',
  99: 'neunundneunzig',
  100: 'hundert'
};

let currentNumber = 0;
let score = 0;
let wins = 0;
let losses = 0;
let timeLeft = 75; // in seconds

const numberText = document.getElementById('number-text');
const playAudioButton = document.getElementById('play-audio');
const userInput = document.getElementById('user-input');
const submitAnswerButton = document.getElementById('submit-answer');
const feedback = document.getElementById('feedback');
const scoreDisplay = document.getElementById('score');
const lossesDisplay = document.getElementById('losses');

function getRandomNumber() {
  return Math.floor(Math.random() * availableNumbers.length);
}
console.log(currentNumber);
/*
function getFirstDigit(number) {
  let numStr = number.toString();
  let firstChar = numStr[0];
  let firstDigit = parseInt(firstChar, 10);
  return firstDigit;
}

function getLastDigit(number) {
    let numStr = number.toString();
    let lastChar = numStr[1];
    let lastDigit = parseInt(lastChar, 10);
    return lastDigit;
}
*/
function playAudio(number) {
  const audio = new Audio(`audio/${number}.mp3`);
    audio.play();
}
/*
  console.log(number)
  decimal = getFirstDigit(number);
  unidad = getLastDigit(number);

  if (number < 21  || unidad === 0) {
    const audio = new Audio(`audio/${number}.mp3`);
    audio.play();
  } else {
    if (number === 100) {
      const audio = new Audio(`audio/100.mp3`);
   } else {
    const audioOnes = new Audio(`audio/${unidad}.mp3`);
    const und = new Audio(`audio/und.mp3`);
    const audioTens = new Audio(`audio/${decimal}0.mp3`);

    audioOnes.play();
    audioOnes.onended = function() {
      und.play();
    }
    und.onended = function() {
      audioTens.play();
    }
  }
  }
}
*/
function updateNumber() {
  const randomNumberIndex = getRandomNumber();
  const randomNumber = Object.keys(numbersInGerman)[randomNumberIndex];
  numberText.textContent = randomNumber;
  playAudio(randomNumber);

  // Focus on the input box
  userInput.focus();
}

submitAnswerButton.addEventListener('click', () => {
  submitAnswer();
});

// Submit the answer when Enter key is pressed
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    submitAnswer();
  }
});

function submitAnswer() {
  const userAnswer = userInput.value.trim().toLowerCase();
  const currentNumber = numberText.textContent;
  
  if (!userAnswer) {
    feedback.textContent = 'Please enter your answer.';
    feedback.style.color = 'red';
    return;
  }

  if (userAnswer === numbersInGerman[currentNumber]) {
    feedback.textContent = 'Correct!';
    feedback.style.color = 'green';
    score++;
    const audioCorrect = new Audio(`audio/correct.mp3`);
    audioCorrect.play();
  } else {
    feedback.textContent = `Incorrect! The correct answer is ${numbersInGerman[currentNumber]}.`;
    feedback.style.color = 'red';
    losses++;
    const audioWrong = new Audio(`audio/wrong.mp3`);
    audioWrong.play();
  }
  
  scoreDisplay.textContent = score;
  lossesDisplay.textContent = losses;
  userInput.value = '';
  updateNumber();
}

window.onload = () => {
  updateNumber();
};
// Add event listener to go back button
document.getElementById('go-back').addEventListener('click', () => {
  window.location.href = 'learning_options.html';
});
