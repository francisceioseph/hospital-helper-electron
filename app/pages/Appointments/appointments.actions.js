import { createAction } from 'redux-actions';
import * as WebAPI from '../../utils/webAPI';

export const getAppointmentTypes = createAction(
  'GET_APPOINTMENT_TYPES',
  WebAPI.getAppointmentTypes
);
export const getAppointments = createAction(
  'FETCH_APPOINTMENTS',
  WebAPI.getAppointments
);
export const getAppointment = createAction(
  'GET_APPOINTMENT',
  WebAPI.getAppointment
);
export const createAppointment = createAction('CREATE_APPOINTMENT');
export const updateAppointment = createAction('UPDATE_APPOINTMENT');
export const deleteAppointment = createAction('DELETE_APPOINTMENT');
