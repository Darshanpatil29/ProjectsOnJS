const submit=document.querySelector('#subt');
let randomNumber=parseInt(Math.random()*100+1)

const userInput=document.querySelector('#guessField');
const guesses=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const message=document.querySelector('.lowOrHi')

let numGuess=1
let prevGuess=[]
let playGame=true

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        const guess=parseInt(userInput.value)
        console.log(guess)
        validateInput(guess)
    })
}
const validateInput=(guess)=>{
    if(isNaN(guess)){
        alert(`please enter valid number greater than 0`);
    }
    else if(guess>100){
        alert(`Please enter valid number less than 101`)
    }
    else if(guess<0){
        alert(`Please enter valid number`);
    }
    else{
        if(prevGuess.includes(guess)){
            alert(`Already guessed number!! Please try another number`)
        }
        else{
        prevGuess.push(guess)
        if(numGuess===10){
            displayGuess(guess)
            displayMessage(`Game Over. Random number is ${randomNumber}`)
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
    }
}

const checkGuess=(guess)=>{
    if(guess===randomNumber){
        displayMessage(`you are Genius !! the number is ${randomNumber}`)
        endGame()
    }
    else if(guess<randomNumber){ 
        displayMessage(`Geuessing is low`);
    }
    else{ 
        displayMessage(`Geuessing is high`);
    }
}

const displayGuess=(guess)=>{
    userInput.value=''
    guesses.innerHTML+=`${guess}, `;
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
}

const displayMessage=(msg)=>{
    message.innerText=`${msg}`
}

const endGame=()=>{
    playGame=false
    userInput.value=''
    userInput.setAttribute('disabled','')
    restartbutton=document.createElement('button')
    div=document.querySelector('.resultParas')
    restartbutton.textContent="Start New Game"
    div.appendChild(restartbutton)
    restartbutton.addEventListener('click',startGame)
}

const startGame=()=>{
    randomNumber=parseInt(Math.random()*100+1)
    numGuess=1
    prevGuess=[]
    guesses.innerHTML=''
    remaining.innerHTML=`${11-numGuess}`
    div.removeChild(div.lastChild)
    userInput.removeAttribute('disabled')
    playGame=true
}

