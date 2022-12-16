
let randomNumber = 0;
const btnGuess = document.querySelector(".btn-guess");
const btnStart = document.querySelector(".btn-start");
const numEl = document.querySelector("#txtNumber");
const labelEl = document.querySelector("#lblResult");

const minRandomNumber = 1;
const maxRAndomNumber = 100;
const totalShot = 5;


const start = () => {
    randomNumber = generateRandomNumber(minRandomNumber,maxRAndomNumber);
    btnGuess.style.display = "inline";
    btnStart.innerHTML = "Reset Game";
    labelEl.innerHTML = "";
    numEl.removeAttribute("disabled");
    numEl.focus();
}

const reset = () => {
    btnGuess.style.display = "none";
    btnStart.innerHTML = "Start Game";
    numEl.setAttribute("disabled","true");
}

const guess = () =>{
    let num = Number(numEl.value);
    num = num || 0;
    /*
    if(!num){
        num = 0;
    }
    */

    if(num === randomNumber){
        labelEl.innerHTML = "Congrats! You guessed the number";
        reset();
    }
    else if(num > randomNumber){
        labelEl.innerHTML = "Your number is greater than the random number";
    }
    else{
        labelEl.innerHTML = "Your number is lesser than the random number";
    }

    numEl.value="";
    numEl.focus();
}


const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}