const fs = require("fs");
let a = fs.readFileSync(0).toString();
let b = a < 100 ? "failure" : "pass";
console.log(b);