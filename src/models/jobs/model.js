'use strict';

const jobModel = (sequelize, DataTypes) => sequelize.define('Jobs', {
  position: {
    type: DataTypes.STRING,
    required: true,
  },
  company: {
    type: DataTypes.STRING,
    required: true,
  },
  description: {
    type: DataTypes.STRING,
    required: false,
  },
  salary: {
    type: DataTypes.INTEGER,
    required: true,
  },
  location: {
    type: DataTypes.STRING,
    required: false,
  },
  // do not have to include this last enum just a thought
  workModel: {
    type: DataTypes.ENUM('remote', 'office', 'hybrid'),
    require: false,
  }
});

module.exports = jobModel;

