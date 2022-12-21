'use strict';

const { Sequelize, Datatypes } = require('sequelize');

const jobsModel = require('./jobs/model');
const usersModel = require('./users/model');
const DataCollection = require('./data-collection');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory';

const sequelize = new Sequelize(DATABASE_URL);

const jobs = jobsModel(sequelize, Datatypes);
const users = usersModel(sequelize, Datatypes);

users.belongsToMany(jobs, { through: savedJobsJunction });
jobs.belongsToMany(users, { through: savedJobsJunction });

module.exports = {
  db: sequelize,
  jobs: new DataCollection(jobs),
  users: new DataCollection(users),
};
