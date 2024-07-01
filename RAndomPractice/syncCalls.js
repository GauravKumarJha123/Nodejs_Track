const fs = require('fs');

console.log('Start reading file');
const data = fs.readFileSync('C:\\Users\\Gaurav_Jha\\Downloads\\Readme.txt', 'utf8');
console.log(data);
console.log('Finished reading file');
/*

console.log('Start heavy computation');
function doHeavyComputation(num) {
    let result = 0;
    for (let i = 0; i < num; i++) {
        result += Math.sqrt(i);
    }
    return result;
}
console.log(doHeavyComputation(1000000000));
console.log('Finished heavy computation');

const { execSync } = require('child_process');

console.log('Start execSync');
const output = execSync('node -v'); // Fetches the Node.js version by executing a command in shell
console.log(output.toString());
console.log('Finished execSync');

*/