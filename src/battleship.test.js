class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
    }

    hit() {
        if (this.isSunk()){
            return 'Error';
        }
        this.hits += 1;
    }

    isSunk() {
        if (this.hits === this.length) {
            return true;
        }
        return false;
    }
}

const newShip = new Ship(2);

it('returns ship object', () => {
    expect(newShip).toEqual({ "hits": 0, "length": 2});
})

it('increases hit count', () => {
    expect(newShip.hit()).toBeUndefined;
    expect(newShip).toEqual({ "hits": 1, "length": 2});
})

it('ship is sunk', () => {
    expect(newShip.hit()).toBeUndefined;
    expect(newShip.isSunk()).toBeTruthy;
})

it('hit a sunken ship returns error', () => {
    expect(newShip.hit()).toBe('Error');
    expect(newShip).toEqual({ "hits": 2, "length": 2});
})





