const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(".");
let y = Number(input[0]);
let m = Number(input[1]);
let d = Number(input[2]);
[y,m,d] = [m,d,y]

console.log(`${y}-${m}-${d}`);