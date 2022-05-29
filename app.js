const game = {
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuess: [],
  title: 'Guess the Number!',
  getGuess: window.prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`),
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    }

  }
