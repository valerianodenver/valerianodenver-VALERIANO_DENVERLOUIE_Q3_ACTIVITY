// console.log("Welcome to JavaScript World!");

// // Small helper to add an event listener only if the element exists
// function addListenerIfExists(id, event, handler) {
//     const el = document.getElementById(id);
//     if (!el) {
//         console.warn(`Element with id '${id}' not found — skipping listener for '${event}'.`);
//         return null;
//     }
//     el.addEventListener(event, handler);
//     return el;
// }

// // Change text content
// addListenerIfExists('btnText', 'click', function () {
//     const demo = document.getElementById('demo');
//     if (demo) demo.textContent = 'Hello, JavaScript!';
// });

// // Change text color — cycle through 5 colors on each click
// (function () {
//     const colors = ['#3AAFA9', '#2B7A78', '#FFD166', '#EF476F', '#118AB2'];
//     let idx = 0;
//     const btn = addListenerIfExists('btnColor', 'click', function () {
//         const elements = document.getElementsByClassName('myDiv');
//         const color = colors[idx % colors.length];
//         for (let i = 0; i < elements.length; i++) {
//             elements[i].style.color = color;
//         }
//         idx++;
//     });
//     // If button not present, nothing else to do.
//     if (!btn) return;
// })();

// // Change image source
// addListenerIfExists('btnImage', 'click', function () {
//     const img = document.getElementById('myImage');
//     if (img) img.src = './images/mikha.jpg';
// });

// // Back to original image
// addListenerIfExists('btnResetImage', 'click', function () {
//     const img = document.getElementById('myImage');
//     if (img) img.src = './images/aiah.jpg';
// });

// // Show Alert
// addListenerIfExists('btnAlert', 'click', function () {
//     alert('Press -ok- to remove!');
// });

// // Hide element
// addListenerIfExists('btnHide', 'click', function () {
//     const elements = document.getElementsByClassName('myDiv');
//     for (let i = 0; i < elements.length; i++) {
//         elements[i].style.display = 'none';
//     }
// });

// // Show element
// addListenerIfExists('btnShow', 'click', function () {
//     const elements = document.getElementsByClassName('myDiv');
//     for (let i = 0; i < elements.length; i++) {
//         elements[i].style.display = 'block';
//     }
// });

// javascript array
const cars = ["Toyota", "Honda", "Ford"];

cars.push("Chevrolet");
cars.pop("Toyota");

console.log(cars.length);


const fruits = ["Apple", "Banana", "Orange", "Mango"];

for(let i = 0; i < fruits.length -1; i++){

    console.log("Fruits #", i, " ", fruits[i]);

}


//Mixing elements type
const mixedArr = [12, "Hello", true, 95.54, "World"];
console.log(mixedArr.length);

//for loop vs forEach
let scores = [90, 85, 78, 92, 88];

for (let b = 0; b < scores.length; b++) {
    console.log("Index", b, ":", scores[b]);
}


for(let score of scores){

console.log("Score:", score);
}


const colors = ["Red", "Blue","Green", "Yellow"];

console.log(colors.indexOf("Green"));
console.log(colors.indexOf("Red"));

//using splice to remove and add elements
colors.splice(1,1, "Black");
console.log(colors);

//using map, fighter, and reduce
const ages = [18, 22, 16, 25, 30, 15];
console.log("Original Ages:", ages);


//mp tranform each element
let agesNextYear = ages.map(function(age){
return age + 1;
});

console.log(AgesNextYear);
let adultAges = ages.filter(function(age){
    return age >= 18;
});

