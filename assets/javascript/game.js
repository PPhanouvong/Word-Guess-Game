
var name = prompt("Players name is ");
console.log("Hello " + name);

var wins = 0;
var losses = 0;

var game = {
    answerArr: ["deviljho", "odogaron", "kirin", "nergigante", "legiana"],
    randomWord: answerArr[Math.floor(Math.random() * answerArr.length)],
    guessesRemain: 20,
    userGuesses: [],
    userGuess: "",
    compWord: "",
    matchLetters: "",
    compWordlength: 0,
    matchLetterscount: 0,
    gameOver: false,
    winLoss: false,

    set: function () {
        this.guessesRemain = 8;
        this.compWord = this.compPick();
        this.compWordLength = this.wordLength();
        this.userGuesses = "";
        this.userGuess = [];
        this.gameOver = false;
        this.winLoss = false;

        var dashes = this.printDashes();
        this.printWord(dashes);

        document.querySelector("#loadnew").innerHTML = "";
        document.querySelector("#message-win").innerHTML = "";
        document.querySelector("#message-loss").innerHTML = "";
        document.querySelector("#guessesRemain").innerHTML = this.guessesRemain;
        document.querySelector("#wins").innerHTML = wins;
        document.querySelector("#losses").innerHTML = losses;
    },

    startGame: function () {
        if (this.gameOver === false && this.isLetter()) {
            this.rules();
        }
    },
}
