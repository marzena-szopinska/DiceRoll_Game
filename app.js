/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
// select the element that holds the current score and manipulate its text
//document.querySelector('#current-' + activePlayer).textContent = dice;

// DO THESE AT THE BEGGINING OF THE PROGRAM
var scores, roundScore, activePlayer;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;
// hide the dice right from the biggining
document.querySelector('.dice').style.display = "none";
// reset scores to 0
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
// reset current scores to 0
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
// .......................................

// event handler
// when someone click od the button...
document.querySelector('.btn-roll').addEventListener('click', function() {
  // ...generate a random number between 1 and 6
  var dice = Math.floor(Math.random() * 6) + 1;
  // ...display the result
  var diceDOM = document.querySelector('.dice');
  // show the dice
  diceDOM.style.display = 'block';
  // manipulate the src attribute to addjust images to the rolled number
  diceDOM.src = 'dice-' + dice + '.png';

  // ..update the round score if the rolled number was not 1

});
