import { ipcMain } from 'electron';

import {
  POST_PACIENT_CHANNEL, GET_PACIENTS_CHANNEL, UPDATE_PACIENT_CHANNEL, REMOVE_PACIENT_CHANNEL
} from './constants/ipc.constants';
import { PacientController } from './controllers/pacient.controller';
import { dbManager } from './database';

export const syncDB = () => {
  dbManager.sync().then(() => {
    ipcMain.on(POST_PACIENT_CHANNEL, PacientController.create);
    ipcMain.on(GET_PACIENTS_CHANNEL, PacientController.list);
    ipcMain.on(UPDATE_PACIENT_CHANNEL, PacientController.update);
    ipcMain.on(REMOVE_PACIENT_CHANNEL, PacientController.remove);
  });
};
