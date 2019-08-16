import { app } from 'electron';
import path from 'path';

const prodPath = path.resolve(app.getPath('userData'), 'hospital_helper.db');

module.exports = {
  development: {
    database         : 'hospital_helper',
    dialect          : 'sqlite',
    storage          : 'hospital_helper_dev.sqlite3',
    operatorsAliases : false,
  },
  test: {
    database         : 'hospital_helper_test',
    dialect          : 'sqlite',
    storage          : 'hospital_helper_test.sqlite3',
    operatorsAliases : false,
  },
  production: {
    database         : 'hospital_helper',
    dialect          : 'sqlite',
    storage          : prodPath,
    operatorsAliases : false,
  },
};
