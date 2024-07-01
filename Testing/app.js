const express = require('express');
const app = express();

app.get('/user', (req, res) => {
  res.status(200).json({ name: 'John Doe' });
});

module.exports = app;