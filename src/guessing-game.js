class GuessingGame {
    constructor() { }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return Math.round(this.max);
    }

    lower() {
        this.max = this.max - (this.max - this.min) / 2;
    }

    greater() {
        this.min = this.min + (this.max - this.min) / 2;
    }
}

module.exports = GuessingGame;
