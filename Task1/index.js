const http = require('http');
const url = require('url');
const {main} = require('./practice');

const port = 4000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  const { query } = url.parse(req.url, true);
  const date = query.year + " " + query.month;

  res.end(date);

  main(8, callback);


  const callback = (err, result) => {
        if (err) {
          console.error(err)
          return
        }
      
        console.log(result);
      }

});

server.listen(port, () => {
  console.log(`Server running 🚀 at http://localhost:${port}/`);
});