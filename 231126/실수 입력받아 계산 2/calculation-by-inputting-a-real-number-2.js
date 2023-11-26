const fs = require("fs");

let a = fs.readFileSync(0).toString();
a = Number(a);

let b = a+1.5

console.log(b.toFixed(2));