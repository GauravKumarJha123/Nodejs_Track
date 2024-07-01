const express = require('express');
const winston = require('winston');
const { NotFoundError, BadRequestError } = require('./errors/customErrors');

const app = express();
const PORT = 3000;

const logger = winston.createLogger({
  level: 'error',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/error.log' })
  ]
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/error', (req, res) => {
  throw new BadRequestError('This is a bad request');
});

app.use((req, res, next) => {
  next(new NotFoundError('Resource not found'));
});

app.use((err, req, res, next) => {
  logger.error(err.message);
  res.status(err.statusCode || 500).json({
    error: err.message
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
