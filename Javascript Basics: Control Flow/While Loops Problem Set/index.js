console.log("Print all integers from -10 to 19");

var n = -10;
while(n < 19){
    n++
    console.log(n);
}

console.log("Print only integers from 10 to 40 which are even");

var n = 10;
while(n <= 40){
    if(n %2 ===0){
        console.log(n);
    }
    n++
}

console.log("Print only integers from 300 to 333 which are odd");

var n = 300;
while(n <= 333){
    if(n %2 !== 0){
        console.log(n)
    }
    n++
}

console.log("Print only integers from 5 to 50 which are divisible by both 3 and 5")

var n =5;
while(n < 50){
    if(n %3 ===0 && n %5 ===0){
    console.log(n)
    }
    n++
}