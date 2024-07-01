const fs = require('fs');

const path = "C:\\Users\\Gaurav_Jha\\Downloads\\Readme.txt";
try {
  const data = fs.readFileSync(path, 'utf8');
  console.log('File content:', data);
} catch (err) {
  console.error('Error reading file:', err);
}
