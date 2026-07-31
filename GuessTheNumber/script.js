let random_number = parseInt(Math.random()*100+1);
const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guessslot = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess =[];
let numguess=1;

let playgame=true;

if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userinput.value);
        console.log(guess);
        validateguess(guess);
    });
}

function validateguess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }
    else if(guess < 1){
        alert('Please enter a number more than 1');
    }
     else if(guess > 100){
        alert('Please enter a number less than 100');
    }
    else{
        prevGuess.push(guess)
        if(numguess===11){
            displayGuess(guess);
            displaymessage(`game over . Random number was ${random_number}`);
            endgame();
        }else{
            displayGuess(guess);
            checkguess(guess);
        }
    }
}

function checkguess(guess){
    if(guess === random_number){
        displaymessage('You guessed it right');
        endgame()
    }else if(guess<random_number){
        displaymessage('number is too low !');
    }else if(guess > random_number){
        displaymessage('number is too high !');
    }
}

function displayGuess(guess){
    userinput.value='';
    guessslot.innerHTML += `${guess}, `;
    numguess ++;
    lastResult.innerHTML = `${11-numguess+1}`;
} 

function displaymessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`;
}

function newgame(){
   const newgamebutton =  document.querySelector('#newGame')
   newgamebutton.addEventListener('click',function(e){
    random_number = parseInt(Math.random()*100+1);
    prevGuess=[];
    numguess =1;
    guessslot.innerHTML='';
    lastResult.innerHTML = `${10-numguess}`;
    userinput.removeAttribute('disabled');
    startover.removeChild(p)
    playgame = true;
   })
}

function endgame(){
    userinput.value='';
    userinput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start new game</h2>`;
    startover.appendChild(p);
    playgame = false;
    newgame();
}