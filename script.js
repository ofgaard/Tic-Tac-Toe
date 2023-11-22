const gameboard = (function() {
    let makeMove = (player, position) => {
        gameboard.board.splice((position - 1), 1, player.symbol);
    };
    const board = {
    board: ['','','','','','','','',''],
    makeMove,
};
return board;
})();

const createPlayer = (handle, symbol) => {
    const player = {
        handle,
        symbol,
    };
    player.alertSelection = () => {
        console.log(`${handle}'s symbol is ${symbol}.`);
    };
    return player;
};

const game = (() => {
    const playerOne = createPlayer('Oliver', 'X');
    playerOne.alertSelection();
    const playerTwo = createPlayer('Ilse', 'O');
    playerTwo.alertSelection();
    gameboard.makeMove(playerOne, 3);
})();
