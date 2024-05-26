let randomNum = parseInt(Math.random()*10 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let numGuess = 1

let playGame = true

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number')
  } else if(guess<1 || guess>100){
    alert('Enter a number between 1 and 100')
  } else {
    if(numGuess==10){
      displayGuess(guess)
      displayMessage(`Game Over!Random number was ${randomNum}`)
      endGame()
    } else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === randomNum){
    displayMessage(`You guessed it right`)
    endGame()
  } else if(guess<randomNum){
    displayMessage('Number is TOOO low')
  } else {
    displayMessage('Number is TOOO high')
  }
}

function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess} `
  numGuess++
  remaining.innerHTML = `${11-numGuess}`

}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = '<h2 id="newGame">Start new game</h2>'
  startOver.appendChild(p);
  playGame = false
  newGame()
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click',function (e){
    e.preventDefault()
    randomNum = parseInt(Math.random()*10 + 1)
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11-numGuess}`
    userInput.removeAttribute('disabled')
    displayMessage('')
    startOver.removeChild(p)
    playGame = true
  })
}