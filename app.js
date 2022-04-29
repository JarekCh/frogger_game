// app.js

const timeLeft = document.querySelector('#time-left');
const resultDisplay = document.querySelector('#result');
const StartPauseButton = document.querySelector('#start-pause-button');

const squares = document.querySelectorAll('.grid div');

let currentIndex = 76;
const width = 9;

function moveFrog(e) {    
   squares[currentIndex].classList.remove('frog')
   switch(e.key) {
       case 'ArrowLeft' :
           console.log('move left');
           currentIndex -= 1;
           break;
        case 'ArrowRight' :
            console.log('move r');
            currentIndex += 1;
            break;
        case 'ArrowUp' :
            console.log('move u');
            currentIndex -= width;
            break;
        case 'ArrowDown' :
            console.log('move d');
            currentIndex += width;
            break;   
   }

    squares[currentIndex].classList.add('frog');
}

document.addEventListener('keyup', moveFrog)