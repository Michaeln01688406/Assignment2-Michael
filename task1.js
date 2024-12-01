//task1

const prompt = require('prompt-sync')();

let width = prompt("Enter the width: ");

while (width <= 0){
    console.log("Invalid width, the width must be positive");
    width = prompt("Enter the width: ");
}

let height = prompt("Enter the height: ");

while (height <= 0){
    console.log("Invalid height, the height must be positive");
    width = prompt("Enter the height: ");
}

function calculateArea(width, height){
    console.log(width * height);
}

calculateArea(width, height);