let squares = document.querySelectorAll('.square')
console.log(squares);
let player = 'X'
let illegal = document.querySelector('.illegal')
let start = document.querySelector('.start')
let reset = document.querySelector('.reset')

// for(let i = 0; i < squares.length; i++) {
//     squares[i].addEventListener('click', () => {
//         squares[i].innerText = player;
//         changePlayer();
//         console.log("I hope this worked")
//     })
// }

start.addEventListener('click', () => {
    squares.forEach(square => {
        square.classList.remove('hidden');
    })
})

reset.addEventListener('click', () => {
    squares.forEach(square => {
        square.innerHTML = '';
        square.classList.remove('blue');
        square.classList.remove('red');
    })
})

function changePlayer () {
    if(player === 'X') {
        console.log(`Player before the change is ${player}`)
        player = 'O'
        console.log(`Player after the change is ${player}`)
    }
    else if(player === 'O') {
        player = 'X';
    }
    else {
        console.log("I have no clue whatsoever where I went wrong");
    }
}

squares.forEach(square => {
    square.addEventListener('click', () => {
        if(square.innerHTML === '') {
            illegal.innerHTML = ''
            square.innerHTML = player;
            changePlayer();
            if(player === 'X') {
                square.classList.add('red')
            } else {
                square.classList.add('blue');
            }
            console.log("I hope this worked");
        } else {
            illegal.innerHTML = 'YOU ARE A CHEATER!'
        }
    })
})