import { ipcMain } from 'electron';

import {
  POST_PACIENT_CHANNEL, GET_PACIENTS_CHANNEL, UPDATE_PACIENT_CHANNEL, REMOVE_PACIENT_CHANNEL, POST_DOCTOR_CHANNEL, GET_DOCTORS_CHANNEL, UPDATE_DOCTOR_CHANNEL, REMOVE_DOCTOR_CHANNEL
} from './constants/ipc.constants';

import { PacientController } from './controllers/pacient.controller';
import { DoctorController } from './controllers/doctor.controller';

import { dbManager } from './database';

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
  });
};
