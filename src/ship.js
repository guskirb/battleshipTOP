class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }

    hit() {
        if (this.isSunk()){
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
