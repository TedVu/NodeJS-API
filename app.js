const fs = require('fs');
const express = require('express');

const app = express();
const morgan = require('morgan');

// note that middleware imposes a specific order
app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// middleware to add data from body to requests object
app.use(express.json());

// logging middleware
app.use(morgan('dev'));

const port = 3000;

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
