const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(input[0]);

if (n<0){
    console.log(n);
    console.log("minus");
}