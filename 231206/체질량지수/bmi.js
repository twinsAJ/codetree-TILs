const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let cm = Number(input[0]);
let kg = Number(input[1]);
m = 0.01*cm
bmi = kg / (m**2);
console.log(bmi);
if (bmi>25) {
    console.log("Obesity");
}