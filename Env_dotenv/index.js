const server = require('http').createServer();
require('dotenv').config();
const Port = process.env.PORT || 8080;

server.listen(Port, () => {
    console.log(`server started at ${Port}`) })