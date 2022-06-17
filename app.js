const fs = require('fs');
const express = require('express');

const app = express();

// middleware to add data from body to requests object
app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);
app.get('/api/v1/tours/', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: 9,
    data: {
      tours: tours,
    },
  });
});

app.post('/api/v1/tours/', (req, res) => {
  console.log(req.body);
  res.send('Done');
});

app.post('/', (req, res) => {
  res.send('You can post to this url');
});

const port = 3000;

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
