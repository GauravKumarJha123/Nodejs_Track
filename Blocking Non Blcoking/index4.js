const fs = require('fs');


const path = "C:\\Users\\Gaurav_Jha\\Downloads\\Readme.txt";

const content = 'Hello, World!';
try {
  fs.writeFileSync(path , content, 'utf8');
  console.log('File written successfully');
} catch (err) {
  console.error('Error writing file:', err);
}
