const http = require('http');
const fs = require('fs');
const url = require("url");

const PORT = 3000;
const server = http.createServer((req, res) => {
    if(req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()} : ${req.url} A new is created at ${PORT} \n`;
    const myUrl = url.parse(req.url);
    console.log(myUrl);
    switch(myUrl.pathname){
        case "/" :
            res.end("HOMEPAGE");
            break;
            case "/about":
                res.end("I am Gaurav Jha");
                break;
                default :
                res.end("404 Not Found");
    }
    fs.appendFile("log.txt", log , (err, data) => {
        res.end('Req is done and i landed on server');
    });
    console.log(log);    
});

server.listen(PORT, () => console.log(`Server started at ${PORT}`));
