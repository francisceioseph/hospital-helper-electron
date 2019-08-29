
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const os = require('os');
const Umzug = require('umzug');

const dbPath = process.env.NODE_ENV === 'development'
  ? 'hospital_helper_dev.sqlite3'
  : path.resolve(os.homedir(), 'hospital_helper_database.sqlite3');

const sequelize = new Sequelize({
  database         : 'hospital_helper',
  dialect          : 'sqlite',
  storage          : dbPath,
  operatorsAliases : false,
});

const address = require('./address');
const appointmentType = require('./appointmenttype');
const appointment = require('./appointment');
const birthData = require('./birthdata');
const demographics = require('./demographics');
const doctorSpecialty = require('./doctorspecialty');
const email = require('./email');
const examAppointment = require('./examappointment');
const examType = require('./examtype');
const familyData = require('./familydata');
const immigrationData = require('./immigrationdata');
const nextOfKin = require('./nextofkin');
const personalData = require('./personaldata');
const profile = require('./profile');
const prontuario = require('./prontuario');
const specialty = require('./specialty');
const surgeryAppointment = require('./surgeryappointment');
const surgeryType = require('./surgerytype');
const telephone = require('./telephone');
const bed = require('./bed');
const hospitalization = require('./hospitalization');
const transfer = require('./transfer');

const db = {
  Address            : address(sequelize, Sequelize),
  AppointmentType    : appointmentType(sequelize, Sequelize),
  Appointment        : appointment(sequelize, Sequelize),
  BirthData          : birthData(sequelize, Sequelize),
  Demographics       : demographics(sequelize, Sequelize),
  DoctorSpecialty    : doctorSpecialty(sequelize, Sequelize),
  Email              : email(sequelize, Sequelize),
  ExamAppointment    : examAppointment(sequelize, Sequelize),
  ExamType           : examType(sequelize, Sequelize),
  FamilyData         : familyData(sequelize, Sequelize),
  ImmigrationData    : immigrationData(sequelize, Sequelize),
  NextOfKin          : nextOfKin(sequelize, Sequelize),
  PersonalData       : personalData(sequelize, Sequelize),
  Profile            : profile(sequelize, Sequelize),
  Prontuario         : prontuario(sequelize, Sequelize),
  Specialty          : specialty(sequelize, Sequelize),
  SurgeryAppointment : surgeryAppointment(sequelize, Sequelize),
  SurgeryType        : surgeryType(sequelize, Sequelize),
  Telephone          : telephone(sequelize, Sequelize),
  Bed                : bed(sequelize, Sequelize),
  Hospitalization    : hospitalization(sequelize, Sequelize),
  Transfer           : transfer(sequelize, Sequelize),
};

// fs.readdirSync(__dirname)
//   .filter(file => file.indexOf('.') !== 0 && file !== path.basename(__filename) && file.slice(-3) === '.js')
//   .forEach((file) => {
//     const model = sequelize.import(path.join(__dirname, file));
//     db[model.name] = model;
//   });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

const migrationManager = new Umzug({
  storage        : 'sequelize',
  storageOptions : {
    sequelize,
    modelName: 'SequelizeMigrationMeta'
  },

  migrations: {
    params: [
      sequelize.getQueryInterface(),
      sequelize.constructor,
      function () {
        throw new Error(
          `Seeder tried to use old style "done" callback. 
          Please upgrade to "umzug" and return a promise instead.`
        );
      }
    ],
    path    : './app/server/migrations',
    pattern : /\.js$/
  },

  logging() {
    console.log.apply(null, arguments);
  },
});

const seedersManager = new Umzug({
  storage        : 'sequelize',
  storageOptions : {
    sequelize,
    modelName: 'SequelizeSeederMeta'
  },

  migrations: {
    params: [
      sequelize.getQueryInterface(),
      sequelize.constructor,
      function () {
        throw new Error(
          `Migration tried to use old style "done" callback. 
          Please upgrade to "umzug" and return a promise instead.`
        );
      }
    ],
    path    : './app/server/seeders',
    pattern : /\.js$/
  },

  logging() {
    console.log.apply(null, arguments);
  },
});

db.migrationManager = migrationManager;
db.seedersManager = seedersManager;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
