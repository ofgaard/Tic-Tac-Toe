const gameboard = (function() {
    let checkForWinner = (player) => {
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
        }
    };
    let makeMove = (player, position) => {
        gameboard.board.splice(position, 1, player.symbol);
        console.log(gameboard.board);
        console.log(`${player.handle} made their move`);
        checkForWinner(player);
    };
    const board = {
    board: ['','','','','','','','',''],
    makeMove,
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
    const playerOneButton = document.querySelector('.submit-one');
    const playerTwoButton = document.querySelector('.submit-two');
    let playerOne, playerTwo;

    playerOneButton.addEventListener('click', () => {
        const handle = document.getElementById('player-one').value;
        playerOne = player(handle, 'X');
        const playerOneBoard = document.querySelector('.playerone');
        const playerOneName = document.querySelector('.playerone-name');
        playerOneName.textContent = handle;
        playerOneBoard.appendChild(playerOneName);

    });
    
    playerTwoButton.addEventListener('click', () => {
        const handle = document.getElementById('player-two').value;
        playerTwo = player(handle, 'O');
        const playerTwoBoard = document.querySelector('.playertwo');
        const playerTwoName = document.querySelector('.playertwo-name');
        playerTwoName.textContent = handle;
        playerTwoBoard.appendChild(playerTwoName);

    });

    let currentPlayer = playerOne;
    let board = document.querySelector('.board');
    boardCells = board.querySelectorAll('div'); 

    const switchPlayer = () => {
        currentPlayer = (currentPlayer === playerOne) ? playerTwo : playerOne;
    };

    boardCells.forEach((cell, index) => {
        cell.addEventListener('click', () => {
            if (gameboard.board[index] === '') {
                gameboard.makeMove(currentPlayer, index);
                cell.textContent = currentPlayer.symbol;
            }
        });
    });

    boardCells.forEach(element => {
        element.addEventListener('click', switchPlayer);
    });
})();


