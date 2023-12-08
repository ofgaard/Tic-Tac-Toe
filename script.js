const gameboard = (function() {
   
    const board = {
    board: ['','','','','','','','',''],
};
return board;
})(); 

const player = (handle, symbol) => {
    return {
        handle,
        symbol,
        alertSelection: function () {
            console.log(`${this.handle}'s symbol is ${this.symbol}.`);
        },
    };
};

const game = (() => {
    let scoreboard = document.querySelector('.scoreboard');
    let scoreboardPlayerOne = document.querySelector('.score-one')
    let scoreboardPlayerTwo = document.querySelector('.score-two')
    const playerOneButton = document.querySelector('.submit-one');
    const playerTwoButton = document.querySelector('.submit-two');
    let board = document.querySelector('.board');
    boardCells = board.querySelectorAll('div');
    let playerOne, playerTwo;
    let currentPlayer = playerOne;

    const checkForWinner = (player) => {
        if (
            (gameboard.board[0] === player.symbol && gameboard.board[1] === player.symbol && gameboard.board[2] === player.symbol) ||
            (gameboard.board[3] === player.symbol && gameboard.board[4] === player.symbol && gameboard.board[5] === player.symbol) ||
            (gameboard.board[6] === player.symbol && gameboard.board[7] === player.symbol && gameboard.board[8] === player.symbol) ||
            (gameboard.board[0] === player.symbol && gameboard.board[3] === player.symbol && gameboard.board[6] === player.symbol) ||
            (gameboard.board[1] === player.symbol && gameboard.board[4] === player.symbol && gameboard.board[7] === player.symbol) ||
            (gameboard.board[2] === player.symbol && gameboard.board[5] === player.symbol && gameboard.board[8] === player.symbol) ||
            (gameboard.board[0] === player.symbol && gameboard.board[4] === player.symbol && gameboard.board[8] === player.symbol) ||
            (gameboard.board[2] === player.symbol && gameboard.board[4] === player.symbol && gameboard.board[6] === player.symbol)
        ) {
            alert(`${player.handle} wins this round`);
            if (player === playerOne) {
                scoreboardPlayerOne.textContent = parseInt(scoreboardPlayerOne.textContent) + 1;
            } else if (player === playerTwo) {
                scoreboardPlayerTwo.textContent = parseInt(scoreboardPlayerTwo.textContent) + 1;
            }
        }
    };

    const makeMove = (player, position) => {
        gameboard.board.splice(position, 1, player.symbol);
        console.log(gameboard.board);
        console.log(`${player.handle} made their move`);
        checkForWinner(player);
    };

    playerOneButton.addEventListener('click', () => {
        const handle = document.getElementById('player-one').value;
        playerOne = player(handle, 'X');
        const playerOneBoard = document.querySelector('.playerone');
        const playerOneName = document.querySelector('.playerone-name');
        playerOneName.textContent = handle;
        playerOneBoard.appendChild(playerOneName);
        document.getElementById('player-one').value = '';
    });

    playerTwoButton.addEventListener('click', () => {
        const handle = document.getElementById('player-two').value;
        playerTwo = player(handle, 'O');
        const playerTwoBoard = document.querySelector('.playertwo');
        const playerTwoName = document.querySelector('.playertwo-name');
        playerTwoName.textContent = handle;
        playerTwoBoard.appendChild(playerTwoName);
        document.getElementById('player-two').value = '';
    });


    const switchPlayer = () => {
        currentPlayer = (currentPlayer === playerOne) ? playerTwo : playerOne;
    };

    boardCells.forEach((cell, index) => {
        cell.addEventListener('click', () => {
            if (gameboard.board[index] === '') {
                makeMove(currentPlayer, index);
                cell.textContent = currentPlayer.symbol;
            }
        });
    });

    boardCells.forEach(element => {
        element.addEventListener('click', switchPlayer);
    });

    resetButton = document.querySelector('.reset');


    resetButton.addEventListener('click', () => {
        // Clear the content of each cell in the gameboard
        boardCells.forEach(cell => {
            cell.textContent = '';
        });
    
        // Reset the gameboard array
        gameboard.board.fill('');
    
        // Reset any other relevant variables
        currentPlayer = playerOne;
    
        // Add any other reset logic if needed
    
        console.log('Game reset');
    });
})();



