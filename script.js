var totalGold = 0;
var attempts = 20;
var maxGold = 250;
var locations = ["Cave", "Casino", "House", "Goldmine"];

function generateGold(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function updateattempts() {
  attempts--;
  $('#attempts').text(attempts);
}

function updatetotalGold(value) {
    totalGold += value;
    $('#totalGold').text(totalGold);
  
    if (totalGold >= 250 && attempts > 0) {
      Message('Congratulations! You completed the game!', 'green');
    } else if (attempts === 0 && totalGold < 250) {
      Message('Game over! You ran out of attempts.', 'red');
    }
  }

function Message(message, color) {
    console.log($('#message'));
    $('#message').text(message);
    $('#message').css('color', color);
}

function addToLog(date, time, location, gold) {
  let logEntry = `<p>${date} ${time} - ${location}: ${gold} gold</p>`;
  $('#log-container').prepend(logEntry);
}

function Message(message, color) {
    $('#message').text(message);
    $('#message').css('color', color);
  }

function resetGame() {
  attempts = 20;
  totalGold = 0;
  $('#attempts').text(attempts);
  $('#totalGold').text(totalGold);
  $('#log-container').empty();
  $('#message').empty();
}

$('#cave').click(function() {
  if (attempts > 0) {
    let gold = 5;
    updateattempts();
    updatetotalGold(gold);
    addToLog(new Date().toLocaleDateString(), new Date().toLocaleTimeString(), 'Cave', gold);
    Message(`You gained ${gold} gold from the Cave.`, 'green');
  } else {
    Message(`You ran out of attempts.`, 'red');
  }
});

$('#casino').click(function() {
  if (attempts > 0) {
    let gold = Math.random() < 0.5 ? generateGold(-50, -40) : generateGold(40, 50);
    updateattempts();
    updatetotalGold(gold);
    if (gold < 0) {
      addToLog(new Date().toLocaleDateString(), new Date().toLocaleTimeString(), 'Casino', gold);
      Message(`You lost ${Math.abs(gold)} gold at the Casino.`, 'red');
    } else {
      addToLog(new Date().toLocaleDateString(), new Date().toLocaleTimeString(), 'Casino', gold);
      Message(`You gained ${gold} gold from the Casino.`, 'green');
    }
  } else {
    Message(`You ran out of attempts.`, 'red');
  }
});

$('#house').click(function() {
  if (attempts > 0) {
    let gold = Math.random() < 0.8 ? 10 : 0;
    updateattempts();
    updatetotalGold(gold);
    addToLog(new Date().toLocaleDateString(), new Date().toLocaleTimeString(), 'House', gold);
    Message(`You gained ${gold} gold from the House.`, 'green');
  } else {
    Message('You ran out of attempts.', 'red');
  }
});

$('#goldmine').click(function() {
  if (attempts > 0) {
    let gold = Math.random() < 0.8 ? generateGold(1, 25) : 0;
    updateattempts();
    updatetotalGold(gold);
    addToLog(new Date().toLocaleDateString(), new Date().toLocaleTimeString(), 'Goldmine', gold);
    Message(`You gained ${gold} gold from the Goldmine.`, 'green');
  } else {
    Message(`You ran out of attempts.`, 'red');
  }
});

$(document).ready(function() {
  startGame();

function resetGame() {
  totalGold = 0;
  attempts = 20;
  maxGold = 250;
  locations = ["Cave", "Casino", "House", "Goldmine"];
  updateAttempts();
  updateTotalGold();
}
window.resetGame = resetGame;

});