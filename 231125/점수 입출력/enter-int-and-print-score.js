const fs = require("fs");

let input;
input = fs.readFileSync(0).toString();
input = Number(input);

console.log("Your score is " + input + " point.");