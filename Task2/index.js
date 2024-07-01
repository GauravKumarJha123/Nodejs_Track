const http = require('http');


async function asyncIOOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let sum = 0;
      for (let i = 0; i < 1e10; i++) {
        sum += i;
      }
      resolve(sum);
    }, 0);
  });
}

const server = http.createServer(async (req, res) => {
  if (req.url === '/cpu-intensive') {
    // CPU-intensive route
    let sum = 0;
    for (let i = 0; i < 1e10; i++) {
      sum += i;
    };
    res.end(`CPU Intensive Task Complete: ${sum}`);
  } else if (req.url === '/io-operation') {
    // I/O-bound asynchronous route
    try {
      const sum = await asyncIOOperation();
      res.end(`IO async non blocking Task Complete: ${sum}`);
    } catch (error) {
      res.statusCode = 500;
      res.end('An error occurred');
    }

  } else {
    res.end('Server Running...');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});