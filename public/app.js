// Functionality
//     - Player must guess a number b / w min and max
//     - Player have certain amount of guesses
//     - Notify to player number of guesses
//     - Notify to player the correct answer
//     - Let player choose to play again


let min = 1,
    max = 10,
    winningNo = Math.floor((Math.random()*10)+1),
    guessesLeft = 3;

console.log(winningNo);
const game = document.getElementById('game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message'),
    playAgain = document.getElementById('play-again');

playAgain.style.display = 'none';


minNum.textContent = `${min} `;
maxNum.textContent = max;

guessBtn.addEventListener("click", function () {
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < min || guess > max) {
        showMessage(`Please Enter a number between ${min} and ${max}`, "red");
    } else {
    
        if (guess === winningNo) {
            guessInput.disabled = true;
            guessInput.style.borderColor = "green";
            showMessage(
                `Congratulations! You win. ${winningNo} is correct answer`,
                "green"
            );
            guessBtn.style.display = "none";
            playAgain.style.display = "";
        } else {
            guessesLeft -= 1;

            if (guessesLeft === 0) {
                guessInput.disabled = true;
                guessInput.style.borderColor = "red";
                showMessage(
                    `Sorry! You lose correct answer is ${winningNo}. Hit play again button to play it again`,
                    "red"
                );
                guessBtn.style.display = 'none';
                playAgain.style.display = '';

            } else {
                showMessage(
                    `${guessInput.value} is not correct. You ${guessesLeft === 1 ? "has" : "have"
                    } ${guessesLeft}  ${guessesLeft === 1 ? "guess" : "guesses"} left.`,
                    "blue"
                );
            }
        }
    }
});

playAgain.addEventListener('click', function () {
    window.location.reload();
});



function showMessage(msg,clr) {
    message.textContent = msg;
    message.style.color = clr;
}

