
// DOM Manipulation Variables. 
const winCounter = document.getElementById('winCount');
const lossCounter = document.getElementById('lossCount');
const guessRemaining = document.getElementById('guessCount');
const guessesMade = document.getElementById('guessesSoFar');


// Functionality Variables
var input;
var losses = 0;
var wins = 0;
var totalWins;
var totalLosses;
var guessesArray = [];
var remainingGuesses;
var startingGuess = 10;
var guessedLetter = '';
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

console.log(guessedLetter);

function initializePsychicGame () {
  // winCounter.textContent = 0;
  // lossCounter.textContent = 0;
  // guessRemaining.textContent = startingGuess;
  guessesMade.textContent = '';
  // guessedLetter = letters[Math.floor(Math.random() * letters.length)];
  // console.log(guessedLetter);
};

function guessLetter() {
  guessedLetter = letters[Math.floor(Math.random() * letters.length)];
  console.log(guessedLetter);
};

window.onload = function () {
  // initializePsychicGame();
  winCounter.textContent = 0;
  lossCounter.textContent = 0;
  guessRemaining.textContent = startingGuess;
  guessesMade.textContent = '';
  guessedLetter = letters[Math.floor(Math.random() * letters.length)];
  console.log(guessedLetter);
};


document.onkeyup = function (event) {
// Grab the user input
input = event.key;
input = input.toLowerCase();
console.log(input);

// Next, I am going to store the input. If it has already been guessed, then I wont. 
if (guessesArray.includes(input)) {
  console.log('The user has already guessed this.');
} else {
  guessesArray.push(input);
  console.log('Item added to array.');
  console.log(guessesArray.length);
}
// I am seeing if the input is equal to the value guessed by the computer.
if (input === guessedLetter) {
  wins++;
  alert('You Won The Game!');
  winCounter.textContent = wins;
  guessLetter();
  startingGuess = 10;
  guessRemaining.textContent = startingGuess;
  guessesArray = [];
  guessesMade.textContent = guessesArray;
} else {
  startingGuess--;
  console.log(`Remaining Guesses: ${startingGuess}`);
  guessRemaining.textContent = startingGuess;
  if (startingGuess === 0) {
    alert(`You Have Lost The Game!`);
    startingGuess = 10;
    guessLetter();
    guessRemaining.textContent = startingGuess;
    losses++;
    lossCounter.textContent = losses;
    guessesArray = [];
    guessesMade.textContent = guessesArray;
    initializePsychicGame();
  }
}

// Displaying the user inputs as an array. 

for (var i = 0; i < guessesArray.length; i++) {
  if (guessesMade.textContent.includes(guessesArray[i])) {
  } else {
    guessesMade.textContent += guessesArray[i];
  }
}

  // for(var i = 0; i < guessesArray.length; i++) {
  //   console.log('Inside the for loop');
  //   if (guessesMade.textContent.includes(guessesArray[i])) {
  //     console.log('Duplicate Pieces inside the array');
  //   } else {
  //     guessesMade.textContent += guessesArray[i];
  //   }





// if (event.key === guessedLetter) {
//   wins++;
//   console.log(`Wins: ${wins}`)
//   guessLetter();
//   remainingGuesses = startingGuess - 1;
// } else {
//   console.log('Pleas Choose Another Key!');
//   remainingGuesses = startingGuess - 1;
//   if (remainingGuesses === 0) {
//     alert('You have lost the game.')
//     losses++;
//   }
// }

//     for (var i = 0; i < guessesArray.length; i++) {
      
//     }
};


// ---------------------------------------------------------------------------------------


// // Checking to see if the input is already in the array to display. if not, push it into the array. 
//   if (guessesArray.includes(input)) {
//     console.log('That letter already exists in the Guesses Array, Line 26.');
//     console.log(guessesArray);
//   } else {
//     guessesArray.push(input);
//     console.log(guessesArray);
//     remainingGuesses = startingGuess - guessesArray.length;
//     console.log(remainingGuesses);
//     guessRemaining.textContent = remainingGuesses;
//     if (remainingGuesses === 0) {
//       alert('You have lost the game!');
//       guessesArray = [];
//       totalLosses = losses + 1;
//       lossCounter.textContent = totalLosses;
//       guessLetter();
//       console.log(totalLosses);
//     };
//   };

//   if (input === guessedLetter) {
//     alert('You have won the game!');
//     guessesArray = [];
//      totalWins = wins + 1;
//      winCounter.textContent = totalWins;
//      guessLetter();
//      console.log(totalWins);
//   };

//   for(var i = 0; i < guessesArray.length; i++) {
//     console.log('Inside the for loop');
//     if (guessesMade.textContent.includes(guessesArray[i])) {
//       console.log('Duplicate Pieces inside the array');
//     } else {
//       guessesMade.textContent += guessesArray[i];
//     }
    
//   }; 