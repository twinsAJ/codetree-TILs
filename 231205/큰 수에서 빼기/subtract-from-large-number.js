const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);

console.log(b-a);

if (a>b){
    console.log(a-b);
}