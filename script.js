const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const playerer = document.getElementById('players')
const computerscore = document.getElementById('Ai')

const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result
let playerscore = 0;
let compscore = 0;
let victory = 5;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length

  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!'
    alert('Its a Draw!')
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    result = 'you win!'
    alert('Rock vs Paper = You Win!')
    playerscore++;
    console.log(playerscore)
    playerer.innerHTML = playerscore
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    result = 'you lost!'
    alert('Rock vs Scissors = You lost!')
    compscore++;
    computerscore.innerHTML = compscore
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'you win!'
    alert('Paper vs Scissors = You Win!')
    playerscore++;
    console.log(playerscore)
    playerer.innerHTML = playerscore
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'you lose!'
    alert('Paper vs Rock = You lost!')
    compscore++;
    computerscore.innerHTML = compscore
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 'you win!'
    alert('Scissors vs Rock = You Win!')
    playerscore++;
    console.log(playerscore)
    playerer.innerHTML = playerscore
    
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'you lose!'
    alert('Scissors vs Paper = You lost!')
    compscore++;
    computerscore.innerHTML = compscore
  }
  if (playerscore == 5){
    alert('Congratulations you Win the Game!')

}
if  (compscore == 5){
    alert('Sorry  you Lost the Game!')

}
  resultDisplay.innerHTML = result
}
