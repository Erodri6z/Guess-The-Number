const game = {
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuess: [],
  title: 'Guess the Number!',
  
  play: function() {

    this.secretNum = Math.floor(Math.random() * 
    (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    console.log(this.prevGuess[this.prevGuess.length - 1])
    console.log(this.secretNum)
    
    while (this.prevGuess[this.prevGuess.length - 1] !== this.secretNum ){
      this.getGuess()
      this.render()
    }
    },
    getGuess: function(){
    let curGuess
     do {
       curGuess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
        this.prevGuess.push(curGuess)
        return curGuess
       }while 
       (!curGuess || this.prevGuess[this.prevGuess.length - 1] < this.biggestNum ||
       this.prevGuess[this.prevGuess.length - 1] > this.smallestNum)
      },
  render: function(){
    if(this.prevGuess[this.prevGuess.length - 1] === this.secretNum ){
      alert(`Congrats! You guessed the number in only ${this.prevGuess.length} tries!`)
      return
    }else if(this.prevGuess[this.prevGuess.length - 1] > this.secretNum ){
      alert(`Your guess is too high, Previous guesses: ${this.prevGuess.join(', ')}`)
    }else if(this.prevGuess[this.prevGuess.length - 1] < this.secretNum ){
      alert(`Your guess is too low, Previous guesses: ${this.prevGuess.join(', ')}`)
    }
  }

}
game.play()

