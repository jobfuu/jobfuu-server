// bring in schema and create model for each table
'use strict';

const userSchema = require('./user.schema');
const jobSchema = require('./job.schema');

const ModelInterface = require('./modelInterface');

const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL = `postgres://elaine@localhost:5432/jobfuu?sslmode=disable`;

// instantiate database
const sequelizeDatabase = new Sequelize(DATABASE_URL);

// create models with schema
const UserModel = userSchema(sequelizeDatabase, DataTypes);
const JobModel = jobSchema(sequelizeDatabase, DataTypes);

// create associations
UserModel.hasMany(JobModel);
JobModel.belongsTo(UserModel);

module.exports = {
  sequelizeDatabase,
  user: new ModelInterface(UserModel),
  job: new ModelInterface(JobModel),
  JobModel,
}
