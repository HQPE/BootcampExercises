var stringGuess = prompt("I'm thinking of a number! Can you guess it?");

magicNumber = 42

var guess = Number(stringGuess);

if(guess === magicNumber ){
    alert("correct");
}
else if(guess > magicNumber){
    alert("lover");
}
else{
    alert("try higher");
}