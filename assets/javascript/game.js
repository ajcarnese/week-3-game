// pseudocode
// 1.Computer thinks of a letter
// 2. User chooses a letter
// 3. letter is correct: Wins value goes up by 1, "guesses" lines reset.
// 4. letter is incorrect: guess is displayed on "Your Guesses so far" and "Guesses Left" goes down by 1
// 5. After 9 incorrect guesses, losses value does up by 1, "guesses" lines reset.

// setting up variables
var options = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var display = document.querySelector("#displayResults");
var wins = 0;
var losses = 0;
var guesses = 9;
var winsSpan = document.getElementById("wins");
winsSpan.innerHTML = wins;
var lossesSpan = document.getElementById("losses");
lossesSpan.innerHTML = losses;
var guessesSpan = document.getElementById("left");
guessesSpan.innerHTML = guesses;
var soFarDiv = document.createElement("div");
var computerChoice = options[Math.floor(Math.random() * options.length)];
   var computerArray = [];
   var playerChoice = [];   
        

document.onkeyup = function(event){
        var key = event.key.toLowerCase();
        if (options.indexOf(key) === -1) {
           return;
        }
      computerArray.push(computerChoice);
      playerChoice.push(key);
        // console.log(left);
          
        // var computerChoice = options[Math.floor(Math.random() * options.length)];
          // console.log(computerChoice);
          // console.log(key);

        var keyLog = document.getElementById("displayResults");
           keyLog.innerHTML = ("You Chose:" + key);
            keyLog.appendChild(soFarDiv);
             

if (computerChoice === key){
  wins++;
  winsSpan.innerHTML = wins;
  guesses = 9;
  guessesSpan.innerHTML = guesses;
  soFarDiv.innerHTML = ("Computer Chose:" + computerChoice);
  alert("You are psychic!");
  computerChoice = options[Math.floor(Math.random() * options.length)];

}else {
  guesses--;
  guessesSpan.innerHTML = guesses;
}

if (guesses < 1){
          losses--;
          lossesSpan.innerHTML = losses;
          guesses = 9;
          guessesSpan.innerHTML = guesses;
          soFarDiv.innerHTML = ("Computer Chose:" + computerChoice);
          computerChoice = options[Math.floor(Math.random() * options.length)];
          alert("You're not psychic, but I already knew that! Try Again!");
}

}