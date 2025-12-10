let a = 0;
let b = -1;
let c = 4;

let sorted;

if(a >= b && a >= c){
    if(b >= c){
        sorted = [a, b, c];


    } else {

        sorted = [a, c, b];
    } 



} else if(b >= a && b >= c){    

    if(a >= c){
        sorted = [b, a, c];
    } else {
        sorted = [b, c, a];
    }



} else {

    if(a >= b){
        sorted = [c, a, b];
    } else {
        sorted = [c, b, a];
    }
}

console.log(sorted);




//largest of five numbers
let num = -5;
let num2 = -2;
let num3 = -6;
let num4 = 0;
let num5 = -1;
//output 0
let largest = num;

if(num4 > largest){
    largest = num4;
}
console.log(largest);




// largest of five numbers #2

let fizzBuzz = 0;
let uotput = "";

for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        uotput = "FizzBuzz";
    } else if(i % 3 === 0){
        uotput = "Fizz";
    } else if(i % 5 === 0){
        uotput = "Buzz";
    } else {
        uotput = i;
    }
    console.log(uotput);
}

