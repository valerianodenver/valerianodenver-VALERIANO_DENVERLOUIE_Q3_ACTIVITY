// Variables and Console
console.log ('System Initialized...');

const agentScore = 95.5;
const agentName = 'Bond';
console.log('Profile: ' + agentName + ' Score: ' + agentScore);
console.log(typeof agentName);

// Change Text Content
document.getElementById("btn-mission").addEventListener("click", function() {
document.getElementById("status-text").textContent = "Status: Mission Active - Do not disturb."
});

// Change Color Style
document.getElementById("btn-color").addEventListener("click", function() {
const div = document.getElementById("agent-profile");
div.style.color = "red"
});


// Toggle Image Source
document.getElementById("btn-disguise").addEventListener("click", function() {
	const img = document.getElementById("agent-avatar");

	img.src = img.src.includes("Civilian")
	? "./images/agent-avatar.jpg"
	: "./images/agent-avatar.jpg"

});

// Hide Element (Display)
document.getElementById("btn-stealth").addEventListener("click", function() {
document.getElementById("agent-profile").style.display = "none";
});

// Input Event
document.getElementById("codename-input").addEventListener("input", function(event){
	const codename = event.target.value;
	document.getElementById("agent-name").textContent = "codename:" + codename;
});


// Keydown Event
// document.addEventListener('keydown', function(event) {
// 	console.log('Security Alert: Key pressed is ' + event.key);
// });



// Control Flow in JavaScript
// Conditional Statements ( if/else/else-if)
// Switch statements

// Age verification
// const userAge = 19;
// if (userAge >= 18){
// 	console.log ("Welcome to my site")

// } else {
// 	console.log ("Sorry, youre not old enough. You must be 18+")
// }

// // Grading system
// const score = 85;
// if (score >= 90) {
// 	console.log ("With honors")

// } else if (score >= 95) {
// 	console.log ("WIth High Honors")

// } else if (score >= 98) {
// 	console.log ("WIth Highest Honors")
// }

// // switch statement
// const day = 3;
// switch (day){
// 	case 1:
// 	console.log("monday");
// 	break;
// }
// switch (day){
// 	case 2:
// 	console.log("tuesday");
// 	break;
// }
// switch (day){
// 	case 3:
// 	console.log("wednesday");
// 	break;
// }
// switch (day){
// 	case 4:
// 	console.log("thursday");
// 	break;
// }
// switch (day){
// 	case 5:
// 	console.log("friday");
// 	break;
// }
// switch (day){
// 	case 6:
// 	console.log("saturday");
// 	break;
// }
// switch (day){
// 	case 7:
// 	console.log("sunday");
// 	break;
// }

//for loop
    console.log("for loop:");
    for(let i = 0; i < 5; i++){
        console.log("Welcome to for loop");
    }


    //while loop
    let j = 0;
    while(j != 5){
	console.log("while loop");
j++;
    }


    //do while
    let k = 0;
    console.log("do while loop:");
    do{
console.log("welcome to do while loop");
    }while(k < 5);


    //nested for loop
    for(let l = 0; l < 5; l++){
        for(let m = 0; m < 5; m++){
            console.log("nested loop");
        }
        console.log("");
    }





 

