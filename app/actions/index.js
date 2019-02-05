import { createAction } from 'redux-actions';
import WebAPI from '../utils/api.service';

export const getPacients = createAction(
  'GET_PACIENTS_LIST',
  WebAPI.getPacients
);
export const getDoctors = createAction('GET_DOCTORS_LIST', WebAPI.getDoctors);
export const getAppointmentTypes = createAction(
  'GET_APPOINTMENT_TYPES',
  WebAPI.getAppointmentTypes
);
