
var name = prompt("Players name is ");
alert("Hello " + name);

var answerArr = ["deviljho", "odogaron", "kirin", "nergigante", "legiana"];
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var choosenWord = "";
var lettersInword = [];
var numDash = 0;
var dashAndletters = [];
var wrongLetters = [];
var winCount = 0;
var loseCount = 0;
var guessesRemain = 10;
var guessCounter = 0;

function reset() {
    choosenWord = answerArr[Math.floor(Math.random() * answerArr.length)];
    lettersInword = choosenWord.split("");
    numDash = lettersInword.length;
    letterGuessed = 0;
    guessCounter = 0;
    guessesRemain = 10;
    wrongLetters = [];
    dashAndletters = [];
    letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    test = false;
    startGame();
}

function startGame() {
    choosenWord = answerArr[Math.floor(Math.random() * answerArr.length)];
    lettersInword = choosenWord.split("");
    numDash = lettersInword.length;
    guessCounter = 0;
    guessesRemain = 10;
    wrongLetters = [];
    dashAndletters = [];
    letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    for (var i = 0; i < numDash; i++) {
        dashAndletters.push("_ ");
        document.getElementById("wordToGuess").innerHTML = dashAndletters;
    }

    document.getElementById("wordToGuess").innerHTML = dashAndletters.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesRemain;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = loseCount;
    document.getElementById("wrongGuesses").innerHTML = wrongLetters;
}

function compareLetters(userKey) {
    if (choosenWord.indexOf(userKey) > -1) {
        for (var i = 0; i < numDash; i++) {
            if (lettersInword[i] === userKey) {
                guessCounter++;
                dashAndletters[i] = userKey;
                document.getElementById("wordToGuess").innerHTML = dashAndletters.join(" ");
            }
        }
    }
    else {
        wrongLetters.push(userKey);
        guessesRemain--;
        document.getElementById("numGuesses").innerHTML = guessesRemain;
        document.getElementById("wrongGuesses").innerHTML = wrongLetters;
    }

}

function winLose() {
    if (guessCounter === numDash) {
        winCount++;
        document.getElementById("winCounter").innerHTML = winCount;
        alert("You Win");
        reset();
    }
    else if (guessesRemain === 0) {
        loseCount++;
        document.getElementById("lossCounter").innerHTML = loseCount;
        alert("You Lose");
        reset();
    }

}

startGame();

document.onkeyup = function (event) {
    test = true;
    var letterGuessed = event.key;
    for (var i = 0; i < letter.length; i++) {
        if (letterGuessed === letter[i] && test === true) {
            var spliceDword = letter.splice(i, 1);
            compareLetters(letterGuessed);
            winLose();
        }
    }
}

