const Board = require('./board');
const Ship = require('./ship');

const NewPlayer = class Player {
    constructor(name) {
        this.name = name;
    }

    initialize() {
        this.board = new Board;
        this.board.createBoard();
        this.battleship = new Ship(4);
        this.destroyer = new Ship(3);
        this.submarine = new Ship(3);
        this.patrolboat = new Ship(2);
    }
}

module.exports = NewPlayer;
