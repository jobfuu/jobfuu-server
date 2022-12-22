'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Jobs', {
    title: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
    },
    jobId: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
    },
    UserId: {
      type: DataTypes.INTEGER,
      required: true,
      allowNull: false,
    },
    salary: {
      type: DataTypes.STRING,
      required: false,
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
    },
    schedule: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
    },
    mission: {
      type: DataTypes.STRING,
      allowNull: true,
      required: false,
    },
    summary: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
    },
    qualitifications: {
      type: DataTypes.STRING,
      required: true,
    },
    duties: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      required: false,
      allowNull: false,
    },
    education: {
      type: DataTypes.STRING,
      required: false,
      allowNull: false,
    }
  })
}