class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.current = Math.round((this.max + this.min) / 2);
        return this.current;        
    }

    lower() {
        this.setRange(this.min, this.current);
    }

    greater() {
        this.setRange(this.current, this.max);
    }
}

module.exports = GuessingGame;
