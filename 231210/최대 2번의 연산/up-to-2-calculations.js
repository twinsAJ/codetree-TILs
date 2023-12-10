const fs = require("fs");
let a = Number(fs.readFileSync(0).toString().trim());

if ((a%2) == 0) {
    b = a/2
    console.log(b);
    if (b%2 == 1) {
        console.log((b+1)/2);
    }
}
if (a%2 == 1) {
    console.log((a+1)/2);
}