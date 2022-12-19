// ****************** DEPENDENCIES ********************

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 3002;

// ****************** IMPORTS ********************

const errorHandler404 = require('./error-handlers/404');
const errorHandler500 = require('./error-handlers/500');
const jobsRouter = require('./routes/jobs');


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ****************** ROUTES ********************

app.get('/', (req, res) => {
  res.status(200).send('Hello JobFuu Server');
})

app.use(jobsRouter);

app.use('*', errorHandler404);
app.use(errorHandler500);


function start() {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}!`));
}

module.exports = {
  start,
  app,
}