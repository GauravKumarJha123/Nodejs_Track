const fs = require('fs');

fs.readFile('/non/existent/path', (err, data) => {
  if (err) {
    console.error('There was an error reading the file!', err);
    return;
  }
  // otherwise handle the data
});

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!');
  });