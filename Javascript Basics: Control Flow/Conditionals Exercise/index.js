var Age = prompt("How old are you?");

if(Age <= 0 ){
    alert("error");
}
else if(Age < 18){
    alert("can't enter");
}
else if(Age < 21){
    alert("Can enter but not drink.");
}
else if(Age == 21){
    alert("Happy Bday!");
}
else if ((Math.sqrt(yearsOld) % 1) === 0) {
    alert("A real square, huh?");
  }
else if(Age % 2 != 0){
    alert("you seemed odd");
}
else{
    alert("two drink min tonight");
}
