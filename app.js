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

app.get('/api/v1/tours/:id', (req, res) => {
  const id = req.params.id;

  for (let i = 0; i < tours.length; ++i) {
    if (tours[i].id == id) {
      res.status(200).json({
        status: 'success',
        data: {
          tours: tours[i],
        },
      });
    }
  }
});

app.post('/api/v1/tours/', (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
});

app.post('/', (req, res) => {
  res.send('You can post to this url');
});

const port = 3000;

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
