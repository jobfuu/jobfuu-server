'use strict';

const express = require('express');
const router = express.Router();

const request = require('request');

router.use('/getJobs', async (req, res) => {

  request({
    url: 'https://data.usajobs.gov/api/search?PositionTitle=Technology',
    method: 'GET',
    headers: {
      "Host": process.env.JOB_HOST,
      "User-Agent": process.env.JOB_USER_AGENT,
      "Authorization-Key": process.env.JOB_AUTH_KEY,
    }
  }, function (error, response, body) {
    if (error) {
      return console.error('failed to get jobs');
    } else {
      res.status(200).send(response.body);
    }
  });
})

module.exports = router;