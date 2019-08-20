const path = require('path');
const Sequelize = require('sequelize');
const os = require('os');

const dbPath = process.env.NODE_ENV === 'development'
  ? 'hospital_helper_dev.sqlite3'
  : path.resolve(os.homedir(), 'hospital_helper_database.sqlite3');

export const dbManager = new Sequelize({
  database         : 'hospital_helper',
  dialect          : 'sqlite',
  storage          : dbPath,
  operatorsAliases : false,
  modelPaths       : [`${__dirname}/models`]
});
