class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }

    hit() {
        if (this.sunk){
            return 'Error';
        }
        this.hits += 1;
        if (this.hits === this.length) {
            this.sunk = true;
        }
    }
}

const newShip = new Ship(2);

it('returns ship object', () => {
    expect(newShip).toEqual({ "hits": 0, "length": 2, "sunk": false });
})

it('increases hit count', () => {
    expect(newShip.hit()).toBeUndefined;
    expect(newShip).toEqual({ "hits": 1, "length": 2, "sunk": false });
})

it('ship is sunk', () => {
    expect(newShip.hit()).toBeUndefined;
    expect(newShip).toEqual({ "hits": 2, "length": 2, "sunk": true });
})

it('hit a sunken ship returns error', () => {
    expect(newShip.hit()).toBe('Error');
    expect(newShip).toEqual({ "hits": 2, "length": 2, "sunk": true });
})



