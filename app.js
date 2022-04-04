// All of the DOM elements I'm grabbing
let squares = document.querySelectorAll('.square')
console.log(squares);
let start = document.querySelector('.start')
// console.log(start)
let reset = document.querySelector('.reset')
let illegal = document.querySelector('.illegal')
let winningDiv = document.querySelector('.winner')

// Global variables that I am setting
let moves = 0;
let activeGame = false;
let player = 'X'
let winners = [
    [squares[0], squares[1], squares[2]],
    [squares[3], squares[4], squares[5]],
    [squares[6], squares[7], squares[8]],
    [squares[0], squares[3], squares[6]],
    [squares[1], squares[4], squares[7]],
    [squares[2], squares[5], squares[8]],
    [squares[0], squares[4], squares[8]],
    [squares[2], squares[4], squares[6]],
]
// console.log(winners);

// for(let i = 0; i < squares.length; i++) {
//     squares[i].addEventListener('click', () => {
//         squares[i].innerText = player;
//         changePlayer();
//         console.log("I hope this worked")
//     })
// }

function anyWinnerYet() {
    for(let i = 0; i < winners.length; i++) {
        console.log(winners[i]);
        // let myNewVar = "This is something new"
        if(winners[i][0].innerHTML === 'X' && winners[i][1].innerHTML === 'X' && winners[i][2].innerHTML === 'X') {
            winningDiv.innerHTML = "X is the winner!!"
            activeGame = false;
        } else if (winners[i][0].innerHTML === 'O' && winners[i][1].innerHTML === 'O' && winners[i][2].innerHTML === 'O') {
            winningDiv.innerHTML = "O is the winner!!"
            activeGame = false;
        } else {
            console.log("No winners yet!")
        }
    }
    // console.log(myNewVar)
}

// function isATie() {
//     if(moves === 9) winningDiv.innerHTML = "The game is a tie";
// }

start.addEventListener('click', () => {
    // for(let i = 0; i < squares.length; i++) {
    //     squares[i].classList.remove('hidden');
    // }
    illegal.innerHTML = ''
    activeGame = true;
})



reset.addEventListener('click', () => {
    squares.forEach(square => {
        square.innerHTML = '';
        square.classList.remove('blue');
        square.classList.remove('red');
        activeGame = true;
        winningDiv.innerHTML = '';
        moves = 0;
        player = 'X'
    })
})

function changePlayer () {
    if(player === 'X') {
        // console.log(`Player before the change is ${player}`)
        player = 'O'
        // console.log(`Player after the change is ${player}`)
    }
    else if(player === 'O') {
        player = 'X';
    }
    // else {
    //     console.log("I have no clue whatsoever where I went wrong");
    // }
}

squares.forEach(square => {
    square.addEventListener('click', () => {
        if(square.innerHTML === '' && activeGame === true) {
            illegal.innerHTML = ''
            square.innerHTML = player;
            if(player === 'X') {
                square.classList.add('red')
            } else {
                square.classList.add('blue');
            }
            anyWinnerYet();
            changePlayer();
            moves++;
            if(moves === 9) {
                winningDiv.innerHTML = "The game is a tie and it's over"
                activeGame = false;
            }
            // console.log("I hope this worked");
        } else if(square.innerHTML) {
            illegal.innerHTML = 'YOU ARE A CHEATER!'
        } else {
            illegal.innerHTML = "Someone already won! Stop playing now!!!"
        }
    })
})