const fs = require("fs");
let n = fs.readFileSync(0).toString();
if (n>=80) {
    console.log("pass");
}
else {
    console.log( 80-n, " more score");
}