// ****************** DEPENDENCIES ********************

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 3002;
const request = require('request');

// ****************** IMPORTS ********************

const errorHandler404 = require('./error-handlers/404');
const errorHandler500 = require('./error-handlers/500');
const { response } = require('express');


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ****************** ROUTES ********************

app.get('/', (req, res) => {
  res.status(200).send('Hello JobFuu Server');
})

app.use('/getJobs', async (req, res) => {

      request({      
        url: 'https://data.usajobs.gov/api/search?PositionTitle=Technology',      
        method: 'GET',      
        headers: {          
            "Host": process.env.JOB_HOST,          
            "User-Agent": process.env.JOB_USER_AGENT,          
            "Authorization-Key":process.env.JOB_AUTH_KEY,    
        }  
    }, function(error, response, body) {      
        var data = JSON.parse(body); 
        if(error){
          return console.error('failed to get jobs');
        } else {
          // console.log(body);
          // console.log(response.body);
        }
        res.status(200).send(response.body);
    });
})
app.use('*', errorHandler404);
app.use(errorHandler500);


function start() {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}!`));
}

module.exports = {
  start,
  app,
}