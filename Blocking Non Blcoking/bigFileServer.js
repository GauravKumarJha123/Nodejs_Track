const fs = require('fs');
const server = require('http').createServer();
const { path } = require('./util');

//const path = "C:\\Users\\Gaurav_Jha\\Downloads\\Readme.txt";


server.on('request', (req, res) => {
  fs.readFile(path , (err, data) => {
    if (err) throw err;
  
    res.end(data);
  });
});

server.listen(5647);
