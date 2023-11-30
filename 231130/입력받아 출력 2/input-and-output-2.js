const fs = require("fs");
let input = fs.readFileSync(0).toString().split("-");
let a = input.toString();

console.log(a.replace(",",""));