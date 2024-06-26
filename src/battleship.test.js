/* eslint-disable no-loop-func */
// eslint-disable-next-line max-classes-per-file
class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
    }

    hit() {
        if (this.isSunk()) {
            return 'Error';
        }
        this.hits += 1;
        return this.hits;
    }

    isSunk() {
        if (this.hits === this.length) {
            return true;
        }
        return false;
    }
}

class Board {
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


const newShip = new Ship(2);
const newBoard = new Board;
const newPlayer = new Player('Gus');

it('returns ship object', () => {
    expect(newShip).toEqual({ "hits": 0, "length": 2 });
})

// it('increases hit count', () => {
//     expect(newShip.hit()).toBe(1);
//     expect(newShip).toEqual({ "hits": 1, "length": 2 });
// })

// it('ship is sunk', () => {
//     expect(newShip.hit()).toBe(2);
//     expect(newShip.isSunk()).toBeTruthy;
// })

// it('hit a sunken ship returns error', () => {
//     expect(newShip.hit()).toBe('Error');
//     expect(newShip).toEqual({ "hits": 2, "length": 2 });
// })

it('creates gameboard', () => {
    expect(newBoard.createBoard());
    expect(newBoard.board);
})

it('place ship', () => {
    expect(newBoard.place(newShip, [1, 1])).toBeTruthy();
    expect(newBoard.board);
})

it('place ship off board', () => {
    expect(newBoard.place(newShip, [1, 9])).toBeFalsy();
    expect(newBoard.board);
})

it('place ship in occupied space', () => {
    expect(newBoard.place(newShip, [1, 2])).toBeFalsy();
    expect(newBoard.board);
})

it('receive an attack', () => {
    expect(newBoard.receiveAttack([1, 2])).toBeTruthy();
    expect(newBoard.board);
})

it('receive an attack', () => {
    expect(newBoard.receiveAttack([1, 1])).toBeTruthy();
    expect(newBoard.board);
})

it('check if ships remain', () => {
    expect(newBoard.checkShip()).toBeFalsy();
})

it('assign board to player', () => {
    expect(newPlayer.assignBoard());
    expect(newPlayer.board);
})




