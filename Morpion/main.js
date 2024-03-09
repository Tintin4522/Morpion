const cells = document.querySelectorAll('[data-cell]');
const gameStatus = document.getElementById('gameStatus');
const endGameStatus = document.getElementById('endGameStatus');
const playerOne = 'X';
const playerTwo = 'O';

let playerTurn = playerOne;

function playGame(e) {
    e.target.innerHTML = playerTurn;

    playerTurn == playerOne ? playerTurn = playerTwo : playerTurn = playerOne;
}

function updateGameStatus(status) {
    let statusText;
    
    switch (status){
        case 'X':
            statusText = 'Au tour du joueur 2 (O)';
            break;
        case '0':
            statusText = 'Au tour du joueur 1 (X)';
            break;
        case 'winsX':
            statusText = 'Le joueur 1 (X) a gagné !!';
            break;
        case 'winsO':
            statusText = 'Le joueur 2 (O) a gagner !!';
            break;
        case 'draw':
            statusText = 'Egalité !! Personne ne gagne !!';
            break;
    }

    gameStatus.innerHTML = statusText;
    endGameStatus.innerHTML = statusText;
}

cells.forEach(cell => {
    cell.addEventListener('click', playGame, { once: true});
});

