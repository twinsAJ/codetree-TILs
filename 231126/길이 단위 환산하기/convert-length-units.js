const fs = require("fs");

let f = fs.readFileSync(0).toString();
f = Number(f);

let a = f*30.48;

console.log(a.toFixed(1));