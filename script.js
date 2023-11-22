(function() {
    const gameboard = {
    board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
};
return gameboard;
})();

const createPlayer = () => {
    handle = prompt('Enter handle');
    symbol = prompt('Enter symbol');
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
    const playerOne = createPlayer();
    playerOne.alertSelection();
    const playerTwo = createPlayer();
    playerTwo.alertSelection();
})();