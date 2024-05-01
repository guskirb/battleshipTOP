const NewBoard = class Board {
    constructor() {
        this.board = [];
    }

    createBoard() {
        for (let x = 0; x < 10; x += 1) {
            this.board[x] = [];
            for (let y = 0; y < 10; y += 1) {
                this.board[x].push('o');
            }
        }
        return this.board
    }

    place(ship, position) {
        const { length } = ship;
        const row = this.board[position[0]]
        if ((length + row[position[1]]) >= 10) {
            return false;
        }

        for (let x = 0; x < length; x += 1) {
            if (row[position[1] + x] !== 'o') {
                return false;
            }
        }

        for (let x = 0; x < length; x += 1) {
            row[position[1] + x] = ship;
        }
        return true;
    }

    receiveAttack(position) {
        const row = this.board[position[0]];

        if (row[position[1]] === 'x') {
            return false;
        } if (row[position[1]] === 'o') {
            row[position[1]] = 'x';
            return false;
        }
        row[position[1]].hit();
        row[position[1]] = 'x';
        this.checkShip();
        return true;
    }

    checkShip() {
        let ship = false;
        for (let x = 0; x < 10; x += 1) {
            this.board[x].forEach(element => {
                if (!(element === 'x' || element === 'o')) {
                    ship = true;
                }
            })
        }
        return ship;
    }
}

export default NewBoard;