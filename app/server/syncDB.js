
const { ipcMain } = require('electron');

const {
  createAppointmentReceiptPDF,
  createExamAppointmentReceiptPDF,
  createSurgeryAppointmentReceiptPDF
} = require('./pdf');

const { PacientController } = require('./controllers/pacient.controller');
const { DoctorController } = require('./controllers/doctor.controller');
const { SpecialtyController } = require('./controllers/specialty.controller');
const { AppointmentTypeController } = require('./controllers/appointment-type.controller');
const { ExamTypeController } = require('./controllers/exam-type.controller');
const { SurgeryTypeController } = require('./controllers/surgery-type.controller');
const { AppointmentController } = require('./controllers/appointment.controller');
const { SurgeryController } = require('./controllers/surgery.controller');
const { ExamController } = require('./controllers/exam.controller');

const { sequelize, seedersManager, migrationManager } = require('./models');

require('events').EventEmitter.defaultMaxListeners = 150;

const {
  POST_PACIENT_CHANNEL,
  GET_PACIENTS_CHANNEL,
  UPDATE_PACIENT_CHANNEL,
  REMOVE_PACIENT_CHANNEL,
  POST_DOCTOR_CHANNEL,
  GET_DOCTORS_CHANNEL,
  UPDATE_DOCTOR_CHANNEL,
  REMOVE_DOCTOR_CHANNEL,
  POST_SPECIALTY_CHANNEL,
  GET_SPECIALTIES_CHANNEL,
  UPDATE_SPECIALTY_CHANNEL,
  REMOVE_SPECIALTY_CHANNEL,
  GET_APPOINTMENT_TYPES_CHANNEL,
  UPDATE_APPOINTMENT_TYPE_CHANNEL,
  REMOVE_APPOINTMENT_TYPE_CHANNEL,
  GET_EXAM_TYPES_CHANNEL,
  UPDATE_EXAM_TYPE_CHANNEL,
  REMOVE_EXAM_TYPE_CHANNEL,
  POST_EXAM_TYPE_CHANNEL,
  GET_SURGERY_TYPES_CHANNEL,
  UPDATE_SURGERY_TYPE_CHANNEL,
  REMOVE_SURGERY_TYPE_CHANNEL,
  POST_APPOINTMENT_TYPE_CHANNEL,
  POST_SURGERY_TYPE_CHANNEL,
  POST_APPOINTMENT_CHANNEL,
  UPDATE_APPOINTMENT_CHANNEL,
  REMOVE_APPOINTMENT_CHANNEL,
  POST_EXAM_CHANNEL,
  UPDATE_EXAM_CHANNEL,
  REMOVE_EXAM_CHANNEL,
  POST_SURGERY_CHANNEL,
  UPDATE_SURGERY_CHANNEL,
  REMOVE_SURGERY_CHANNEL,
  GET_EXAMS_FOR_TYPE_CHANNEL,
  GET_DOCTOR_APPOINTMENTS_CHANNEL,
  GET_SURGERIES_BY_DOCTOR_CHANNEL,
  EXPORT_APPOINTMENT_PDF,
  EXPORT_SURGERY_APPOINTMENT_PDF,
  EXPORT_EXAM_APPOINTMENT_PDF
} = require('./constants/ipc.constants');

const syncDB = () => {
  sequelize.sync()
    .then(() => migrationManager.up())
    .then(() => seedersManager.up())
    .then(() => {
      console.log('register listeners');
      ipcMain.on(POST_PACIENT_CHANNEL, PacientController.create);
      ipcMain.on(GET_PACIENTS_CHANNEL, PacientController.list);
      ipcMain.on(UPDATE_PACIENT_CHANNEL, PacientController.update);
      ipcMain.on(REMOVE_PACIENT_CHANNEL, PacientController.remove);

      ipcMain.on(POST_DOCTOR_CHANNEL, DoctorController.create);
      ipcMain.on(GET_DOCTORS_CHANNEL, DoctorController.list);
      ipcMain.on(UPDATE_DOCTOR_CHANNEL, DoctorController.update);
      ipcMain.on(REMOVE_DOCTOR_CHANNEL, DoctorController.remove);

      ipcMain.on(POST_SPECIALTY_CHANNEL, SpecialtyController.create);
      ipcMain.on(GET_SPECIALTIES_CHANNEL, SpecialtyController.list);
      ipcMain.on(UPDATE_SPECIALTY_CHANNEL, SpecialtyController.update);
      ipcMain.on(REMOVE_SPECIALTY_CHANNEL, SpecialtyController.remove);

      ipcMain.on(POST_APPOINTMENT_TYPE_CHANNEL, AppointmentTypeController.create);
      ipcMain.on(GET_APPOINTMENT_TYPES_CHANNEL, AppointmentTypeController.list);
      ipcMain.on(UPDATE_APPOINTMENT_TYPE_CHANNEL, AppointmentTypeController.update);
      ipcMain.on(REMOVE_APPOINTMENT_TYPE_CHANNEL, AppointmentTypeController.remove);

      ipcMain.on(POST_EXAM_TYPE_CHANNEL, ExamTypeController.create);
      ipcMain.on(GET_EXAM_TYPES_CHANNEL, ExamTypeController.list);
      ipcMain.on(UPDATE_EXAM_TYPE_CHANNEL, ExamTypeController.update);
      ipcMain.on(REMOVE_EXAM_TYPE_CHANNEL, ExamTypeController.remove);

      ipcMain.on(POST_SURGERY_TYPE_CHANNEL, SurgeryTypeController.create);
      ipcMain.on(GET_SURGERY_TYPES_CHANNEL, SurgeryTypeController.list);
      ipcMain.on(UPDATE_SURGERY_TYPE_CHANNEL, SurgeryTypeController.update);
      ipcMain.on(REMOVE_SURGERY_TYPE_CHANNEL, SurgeryTypeController.remove);

      ipcMain.on(POST_APPOINTMENT_CHANNEL, AppointmentController.create);
      ipcMain.on(GET_DOCTOR_APPOINTMENTS_CHANNEL, AppointmentController.list);
      ipcMain.on(UPDATE_APPOINTMENT_CHANNEL, AppointmentController.update);
      ipcMain.on(REMOVE_APPOINTMENT_CHANNEL, AppointmentController.remove);

      ipcMain.on(POST_EXAM_CHANNEL, ExamController.create);
      ipcMain.on(GET_EXAMS_FOR_TYPE_CHANNEL, ExamController.list);
      ipcMain.on(UPDATE_EXAM_CHANNEL, ExamController.update);
      ipcMain.on(REMOVE_EXAM_CHANNEL, ExamController.remove);

      ipcMain.on(POST_SURGERY_CHANNEL, SurgeryController.create);
      ipcMain.on(GET_SURGERIES_BY_DOCTOR_CHANNEL, SurgeryController.list);
      ipcMain.on(UPDATE_SURGERY_CHANNEL, SurgeryController.update);
      ipcMain.on(REMOVE_SURGERY_CHANNEL, SurgeryController.remove);
    });


  ipcMain.on(EXPORT_APPOINTMENT_PDF, createAppointmentReceiptPDF);
  ipcMain.on(EXPORT_EXAM_APPOINTMENT_PDF, createExamAppointmentReceiptPDF);
  ipcMain.on(EXPORT_SURGERY_APPOINTMENT_PDF, createSurgeryAppointmentReceiptPDF);
};

module.exports = syncDB;
