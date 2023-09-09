class GuessingGame {
    constructor() { }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        const sum = this.min + this.max;
        const avg = sum / 2;
        this.currentGuess = Math.ceil(avg);
        return this.currentGuess;
    }

    lower() { this.max = this.currentGuess; }

    greater() { this.min = this.currentGuess; }
}

module.exports = GuessingGame;
