const fs = require("fs");
let i = fs.readFileSync(0).toString();

let a = Number(i[0]);
let b = Number(i[2]);
let c = Number(i[4]);

console.log(a,b,c);