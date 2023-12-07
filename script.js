const gameboard = (function() {
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
    gameboard.makeMove(playerOne, prompt('make your move 0-8'));
    gameboard.makeMove(playerTwo, prompt('make your move 0-8'));
    gameboard.makeMove(playerOne, prompt('make your move 0-8'));
    gameboard.makeMove(playerTwo, prompt('make your move 0-8'));
    gameboard.makeMove(playerOne, prompt('make your move 0-8'));
})();

