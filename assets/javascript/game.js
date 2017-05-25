$(document).ready(function() {
  // $(document).keypress()
var newWord = ""
var newWordCount = 0
var guessesCount = 0
var handicap = 0
var totalGuess
var letterPicked
var ansArray
var correct
var placeholder = newWord.split("");
    for (var i = 0; i < placeholder.length; i++) {
      placeholder[i] = " _";
    };
var blankArray = []

// console.log(newWord.val(length))

var newWordFunc = function(){
      $("#result").empty();
      newWord = "";

      while(newWord.length < 3) {
      newWord = prompt("Player 1, please enter a word atleast 3 characters long.");
      // console.log(newWord)
      }
      ansArray = newWord.toUpperCase().split("");
      console.log(ansArray);
      newWordCount = newWord.length;
      // console.log(newWordCount)
      // function(){
      for( i=0; i < ansArray.length; i++){
      blankArray.push("_ ")
      }
      $("#result").append(blankArray)

      guessesCount = 0;
      $("#lettersGuessed").empty();
      handicap = parseInt(prompt("How many extra guesses should player 2 get?"));
      
      totalGuess = handicap+newWordCount-guessesCount;

      $("#Guess").empty();
      $("#Guess").append("You have "+(totalGuess)+" guesses.");
}
console.log(blankArray)



var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  for(i=0; i<letters.length; i++) {
        var letterBtn = $("<button>")
        letterBtn.addClass("letter-button letter letter-button-color");
        letterBtn.attr("data-letter", letters[i]);
        // console.log("data-letter")
        letterBtn.text(letters[i]);
        $("#buttons").append(letterBtn)
      }

var checkGuess = function (x){
    if(ansArray.includes(x)) {
      // for loop thru the array to check every index
     var y = ansArray.indexOf(x)
     blankArray[y] = x
     $("#result").empty()
     $("#result").append(blankArray)
    }
    else{correct = false}
}

$(".letter-button").click(function() {
          if(newWordCount<2){
            alert("Pick a word first, silly.")
          }
          else if(newWordCount>guessesCount-handicap){

            

          var hangLetter = $("<div>")
          hangLetter.addClass("letter fridge-color")
          hangLetter.text($(this).attr("data-letter"))
          console.log(this)
          console.log($(this).attr("data-letter"))
          var data = $(this).attr("data-letter")
          checkGuess(data)
          totalGuess = handicap+newWordCount-guessesCount;
          if(correct == false){
            $("#Guess").empty();
            $("#Guess").append("You have "+(totalGuess-1)+" guesses.");
          }
          if(correct == true){

// Need to fill in the _ with correct letter//



            $("#Guess").empty();
            $("#Guess").append("You have "+(totalGuess-1)+" guesses.");
          }
          $("#lettersGuessed").append(hangLetter);
          guessesCount++
          }
          else{alert("Buy more guesses")}
})

$("#enterWord").click(newWordFunc);


console.log(newWordCount)
console.log("HI")






});