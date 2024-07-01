const fs = require('fs');

const path = "C:\\Users\\Gaurav_Jha\\Downloads\\Readme.txt";

fs.readFile(path, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

