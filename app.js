const express = require('express');

const app = express();
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

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
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// middleware to serve static files, we can access file without public path
app.use(express.static(`${__dirname}/public`));

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
