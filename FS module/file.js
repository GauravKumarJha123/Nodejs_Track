const fs = require('fs');
const os = require('os');


console.log(os.cpus().length);

console.log(2);
fs.readFile("details.txt", "utf-8" , (err , res) => {
    if(err){
        console.log(err);
        throw err;
    }else{
        console.log(res);
    }
});
console.log(3);