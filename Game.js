// A Typing Speed Game
let __author__ = 'Michael Khoshahang';

window.addEventListener('load', init);

// Global variables

// Available Levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 1
};

// getting random level
const currentLevel = Object.values(levels)[Math.floor(Math.random() * Object.keys(levels).length)];

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const highscoreDisplay = document.querySelector('#highscore');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
];

// Initializing game
function init() {
    // Show number of seconds in UI
    seconds.innerHTML = currentLevel;
    // Loading random word from array
    showWord(words);
    // Start match when a word is inputed
    wordInput.addEventListener('input', startMatch);
    // Call countdown every second
    setInterval(countdown, 1000);
    // Checking the status of the game
    setInterval(checkStatus, 50)
}

// Start match
function startMatch() {
    if(matchWords()){
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    // if the score is -1, display 0
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    }
    else {
        scoreDisplay.innerHTML = score;
    }
}

// Match the current word to the inputed word
function matchWords() {
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!';
        return true;
    }
    else {
        message.innerHTML = '';
        return false;
    }
}

// The function shows the random word from the array
function showWord(array) {
    currentWord.innerHTML = array[Math.floor(Math.random() * array.length)]
}

// Countdown timer
function countdown() {
    // Make sure time is not run out
    if (time > 0) {
        // Decrement
        time--;
    } else if (time === 0) {
        // Game is over
        isPlaying = false;
    }
    // Show time
    timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!!!';
        score = -1;
    }
}
