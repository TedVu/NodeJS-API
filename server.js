const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

mongoose.connect(process.env.DATABASE);
const app = require('./app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
