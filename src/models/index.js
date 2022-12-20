'use strict';

const { Sequelize, Datatypes } = require('sequelize');

const jobsModel = require('./jobs/model');
const usersModel = require('./users/model');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory';

const sequelize = new Sequelize(DATABASE_URL);
const jobs = jobsModel(sequelize, Datatypes);
const users = usersModel(sequelize, Datatypes);

module.exports = {
  db: sequelize,
  jobs,
  users,
};
