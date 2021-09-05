'use strict';



// document.querySelector('.check').addEventListener('click',function(){
//     document.querySelector('.curr').textContent = Number(document.querySelector('.curr').textContent) - 1;
// })
// let number = Math.trunc(Math.random()*20) + 1;  //math.random() genrates a number between 0 to 1
//                                                 //by * 20 we will get a no. between 0 to 19.9999999999
//                                                 //Math.trunc() converts 19.99999999 like no. to 19
//                                                 //as we are only going to get 19 so to get 20 , + 1 is done 

//settign the secret number
let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

const valCheck = function(n){
    if(n == 0){
        document.querySelector('.message').textContent = "Enter a valid input.";
        return;
    }
    if(n === secretNumber){
        document.querySelector('.noice').style.visibility = "visible";
        document.querySelector('h1').textContent = secretNumber;
        document.querySelector('.message').textContent = "Bingo!";
        document.querySelector('body').style.background="#DCEDC1";
        highscore = highscore<score?score:highscore;
        document.querySelector('.high').textContent = highscore;
    }
    else if(n > secretNumber){
        if(score > 1){
        document.querySelector('.message').textContent = "too high!";
        score--;
        document.querySelector('.curr').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = "You lost XD";
            score--;
            document.querySelector('.curr').textContent = score;
            document.querySelector('.snoop').style.visibility = "visible";
        }
    
    }
    else if(n < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = "too low!";
            score--;
            document.querySelector('.curr').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = "You lost XD";
            score--;
            document.querySelector('.curr').textContent = score;
            document.querySelector('.snoop').style.visibility = "visible";
        }
        
    }
}

const reset = function(){
    secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('h1').textContent = "?";
    document.querySelector('.message').textContent = "Start Guessing...";
    document.querySelector('body').style.background="black";
    document.querySelector('.curr').textContent = 20;
    score = 20;
    document.querySelector('.guess').value = '';
    document.querySelector('.snoop').style.visibility = "hidden";
    document.querySelector('.noice').style.visibility = "hidden";
};


document.querySelector('.check').addEventListener('click',function(){
let n = Number(document.querySelector('.guess').value );
valCheck(n);
});

document.querySelector('.btn2').addEventListener('click',function(){
reset();
});