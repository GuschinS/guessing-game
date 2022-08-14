class GuessingGame {
    constructor() {

    }

    setRange(min, max) {
        this.min = min
        this.max = max
    }

    guess() {
        this.minmax = Math.ceil((this.min +this.max) / 2)
        return this.minmax
    }

    lower() {
        this.max = this.minmax
    }

    greater() {
        this.min = this.minmax
    }
}

module.exports = GuessingGame;
