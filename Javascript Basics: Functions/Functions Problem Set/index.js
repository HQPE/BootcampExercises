function isEven(number){
    return number % 2 === 0;
}

console.log("is iven");
console.log("isEven(4) returns",isEven(4));
console.log("isEven(21) returns",isEven(21));
console.log("isEven(68) returns",isEven(68));
console.log("isEven(333) returns",isEven(333));



function factorial(x) 
{ 

  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
         
}

console.log("factorial");
console.log("factorial(5) returns",factorial(5));
console.log("factorial(2) returns",factorial(2));
console.log("factorial(10) returns",factorial(10));
console.log("factorial(0) returns",factorial(0));


function kebabToSnake(kebab) {
    return kebab.replace("-","_");
  }
  
console.log("KEBAB TO SNAKE");
console.log('kebabToSnake("hello-world") returns "' + kebabToSnake("hello-world") + '"');
console.log('kebabToSnake("dogs-are-awesome") returns "' + kebabToSnake("dogs_are_awesome") + '"');
console.log('kebabToSnake("blah") returns "' + kebabToSnake("blah") + '"');
