//

window.onload = init;

function init() {
    var button =  document.getElementById("checkButton");
    button.onclick = printAnswer;
}

function printAnswer() {
    var guess = document.getElementById("guess").value;
    var output = document.getElementById("output");
    
    if (guess == "") {
        output.textContent = "Please make a guess!";
    }
    else {
        output.textContent = checkGuess(guess);
    }
}

function checkGuess(guess) {
    var answers = ["red", "green", "blue"];
    var index = Math.floor(Math.random() * answers.length);
    
    if (guess == answers[index]) {
        answer = "You're right! I was thinking of " + answers[index];
    }
    else {
        answer = "Sorry, I was thinking of " + answers[index];
    }
    return answer;
}
