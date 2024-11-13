"use strict";
/* 
Assignment: Project 4 , Tic-Tac-Toe game
Programmer: Nurzida Toigombaeva
Date: 11/11/2024
*/

// Player CSS classes and winning combinations
const PLAYER_X_CLASS = 'x'
const PLAYER_O_CLASS = 'circle'
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

// Variables for elements for Tic-Tac-Toe game
const cellElements = document.querySelectorAll('[data-cell]')
const boardElement = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.getElementById('winningMessageText')
let isPlayer_O_Turn = false

// Initialization of the board - Tic-Tac-Toe
startGame()
updateTurnMessage() // Set initial turn message to Player X

restartButton.addEventListener('click', startGame)

function startGame() {
  isPlayer_O_Turn = false
  cellElements.forEach(cell => {
    cell.classList.remove(PLAYER_X_CLASS)
    cell.classList.remove(PLAYER_O_CLASS)
    cell.removeEventListener('click', handleCellClick)
    cell.addEventListener('click', handleCellClick, { once: true })
  })
  setBoardHoverClass()
  winningMessageElement.classList.remove('show')
  updateTurnMessage() // Reset turn message at the start of the game
}

// Handling clicks for the game Tic-Tac-Toe
function handleCellClick(e) {
  const cell = e.target
  const currentClass = isPlayer_O_Turn ? PLAYER_O_CLASS : PLAYER_X_CLASS
  placeMark(cell, currentClass)
  if (checkWin(currentClass)) {
    endGame(false)
  } else if (isDraw()) {
    endGame(true)
  } else {
    swapTurns()
    setBoardHoverClass()
  }
}

// Function to update turn message
function updateTurnMessage() {
  const turnMessageElement = document.getElementById('turnMessage');
  turnMessageElement.innerText = `Player ${isPlayer_O_Turn ? "O" : "X"}'s turn`;
}

// When does the game end
function endGame(draw) {
  if (draw) {
    winningMessageTextElement.innerText = "It's a draw!"
  } else {
    winningMessageTextElement.innerText = `Player with ${isPlayer_O_Turn ? "O's" : "X's"} wins!`
  }
  winningMessageElement.classList.add('show')
}

// Returning if it's a draw
function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(PLAYER_X_CLASS) || cell.classList.contains(PLAYER_O_CLASS)
  })
}

// Making a turn in the game
function placeMark(cell, currentClass) {
  cell.classList.add(currentClass)
}

// Modify swapTurns function to update turn message after each turn change
function swapTurns() {
  isPlayer_O_Turn = !isPlayer_O_Turn;
  updateTurnMessage();
}

// Effects for the game
function setBoardHoverClass() {
  boardElement.classList.remove(PLAYER_X_CLASS)
  boardElement.classList.remove(PLAYER_O_CLASS)
  if (isPlayer_O_Turn) {
    boardElement.classList.add(PLAYER_O_CLASS)
  } else {
    boardElement.classList.add(PLAYER_X_CLASS)
  }
}

// Winning message
function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })

}

window.alert("Welcome to Tic-Tac-Toe Game");