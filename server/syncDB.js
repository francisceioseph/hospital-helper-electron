import { ipcMain } from 'electron';

import {
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
  GET_APPOINTMENTS_CHANNEL,
  UPDATE_APPOINTMENT_CHANNEL,
  REMOVE_APPOINTMENT_CHANNEL,
  POST_EXAM_CHANNEL,
  GET_EXAMS_CHANNEL,
  UPDATE_EXAM_CHANNEL,
  REMOVE_EXAM_CHANNEL,
  POST_SURGERY_CHANNEL,
  GET_SURGERY_CHANNEL,
  UPDATE_SURGERY_CHANNEL,
  REMOVE_SURGERY_CHANNEL
} from './constants/ipc.constants';

import { PacientController } from './controllers/pacient.controller';
import { DoctorController } from './controllers/doctor.controller';
import { SpecialtyController } from './controllers/specialty.controller';
import { AppointmentTypeController } from './controllers/appointment-type.controller';
import { ExamTypeController } from './controllers/exam-type.controller';
import { SurgeryTypeController } from './controllers/surgery-type.controller';
import { AppointmentController } from './controllers/appointment.controller';
import { SurgeryController } from './controllers/surgery.controller';
import { ExamController } from './controllers/exam.controller';

import { dbManager } from './database';
import { GET_EXAMS_FOR_TYPE_CHANNEL, GET_DOCTOR_APPOINTMENTS_CHANNEL, GET_SURGERIES_BY_DOCTOR_CHANNEL } from '../app/utils/ipc.constants';

export const syncDB = () => {
  dbManager.sync().then(() => {
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
};
