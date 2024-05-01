class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }

    hit() {
        this.hits += 1;
    }
}
  
const newShip = new Ship(2);

it('returns ship object', () => {
    expect(newShip).toEqual({ "hits": 0, "length": 2, "sunk": false });
})

it('increases hit count', () => {
    expect(newShip.hit()).toBeUndefined;
    expect
})

