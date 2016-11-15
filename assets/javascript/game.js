// pseudocode
// 1.Computer thinks of a letter
// 2. User chooses a letter
// 3. letter is correct: Wins value goes up by 1, "guesses" lines reset.
// 4. letter is incorrect: guess is displayed on "Your Guesses so far" and "Guesses Left" goes down by 1
// 5. After 9 incorrect guesses, losses value does up by 1, "guesses" lines reset.

var options = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var display = document.querySelector("#displayResults");
// var guesses = [];
var wins = 0;
var losses = 0;
var guesses = 9;
var winsSpan = document.getElementById("wins");
winsSpan.innerHTML = wins;
var lossesSpan = document.getElementById("losses");
lossesSpan.innerHTML = losses;
var guessesSpan = document.getElementById("guesses");
guessesSpan.innerHTML = guesses;
// From RPS game: (usable?)
      // function displayResults(whoWon, k, c){
      //   var display = document.querySelector("#displayResults");
      //   var string = '<p>' + whoWon + '</p>';
      //   string += '<p>Wins: ' + wins; + '</p>';
      //   string += '<p>Losses: ' + losses; + '</p>';
      //   string += '<p>Your Guesses: ' + guesses ; + '</p>';

      //   display.innerHTML = string;
      // }

document.onkeyup = function(event){
        var key = event.key.toLowerCase();
        if (options.indexOf(key) === -1) {
          // alert("Cant do that");
          return;
        }
        left--;
        console.log(left);
        // Not sure if this will do anything) yet...
        // guesses.push(key);
        
        var computerChoice = options[Math.floor(Math.random() * options.length)];
        console.log(computerChoice);
        console.log(key);

if (computerChoice === key){
  wins++;
  winsSpan.innerHTML = wins;
  guesses = 9;
  guessesSpan.innerHTML = guesses;
}else {
  guesses--;
  guessesSpan.innerHTML = guesses;
}
// else if (computerChoice !== key)


}