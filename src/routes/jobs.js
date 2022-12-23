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
      let parsedData = JSON.parse(response.body);
      let jobData = parsedData.SearchResult.SearchResultItems;
      let sanitizedData = sanitizeData(jobData);
      res.status(200).send(sanitizedData);
    }
  });
});

const sanitizeData = (data) => {
  return data.map(job => ({
    title: job.MatchedObjectDescriptor.PositionTitle,
    jobId: job.MatchedObjectDescriptor.PositionID,
    salary: 'refer to website',
    url: job.MatchedObjectDescriptor.ApplyURI,
    location: job.MatchedObjectDescriptor.PositionLocationDisplay,
    company: job.MatchedObjectDescriptor.OrganizationName,
    schedule: job.MatchedObjectDescriptor.PositionSchedule || ' ',
    mission: job.MatchedObjectDescriptor.UserArea.Details.AgencyMarketingStatement,
    summary: job.MatchedObjectDescriptor.UserArea.Details.JobSummary,
    qualifications: job.MatchedObjectDescriptor.QualificationSummary,
    duties: job.MatchedObjectDescriptor.UserArea.Details.MajorDuties,
    education: job.MatchedObjectDescriptor.UserArea.Details.Education,
  }));
}

module.exports = router;