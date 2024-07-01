const fs = require('fs');


const path = "C:\\Users\\Gaurav_Jha\\Downloads\\Readme.txt";

const content = 'Hello, World!';
fs.writeFile(path , content, 'utf8', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File written successfully');
});
