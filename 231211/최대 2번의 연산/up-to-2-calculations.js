const fs = require("fs");
let a = Number(fs.readFileSync(0).toString().trim());

if ((a%2) == 0) {
    b = a/2
    if(b%2==1) {
        console.log(Math.round((b+1)/2));
    }
    else{
    console.log(b)
    }
}
else{
    console.log(Math.round((a+1)/2));
}