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

const player = () => {
    const handle = prompt('Enter your name');
    const symbol = prompt('Choose your symbol (X or O)');
    
    return {
        handle,
        symbol,
        alertSelection: function () {
            console.log(`${this.handle}'s symbol is ${this.symbol}.`);
        },
    };
};

const game = (() => {
    const playerOne = player();
    playerOne.alertSelection();
    const playerTwo = player();
    playerTwo.alertSelection();
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
                checkForWinner(currentPlayer);
            }
        });
    });

    boardCells.forEach(element => {
        element.addEventListener('click', switchPlayer);
    });
})();

