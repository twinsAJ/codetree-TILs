const fs = require("fs");
let a = fs.readFileSync(0).toString();
if (a==5) {
    console.log("A");
}
if (a%2 == 0) {
    console.log("B");
}