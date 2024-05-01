class Player {
    constructor(name) {
        this.name = name;
    }

    assignBoard() {
        const board = new Board;
        board.createBoard()
        this.board = board;
    }
}
