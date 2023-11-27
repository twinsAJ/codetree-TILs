const fs = require("fs");

let int = fs.readFileSync(0).toString().split(" ");

let a = Number(int[0]);
let b = Number(int[1]);

[a,b] = [b,a];

console.log(a,b);