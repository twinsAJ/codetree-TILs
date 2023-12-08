const fs = require("fs");
let a = fs.readFileSync(0).toString();
let b = a < 2 ? "t" : "f";
console.log(b);