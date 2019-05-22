import { createAction } from 'redux-actions';

export const getAppointmentTypes = createAction('GET_APPOINTMENT_TYPES');
export const getAppointments = createAction('FETCH_APPOINTMENTS');
export const getAppointment = createAction('GET_APPOINTMENT');

export const selectAppointment = createAction('SELECT_APPOINTMENT');
export const clearAppointment = createAction('CLEAR_APPOINTMENT');
export const createAppointment = createAction('CREATE_APPOINTMENT');
export const updateAppointment = createAction('UPDATE_APPOINTMENT');
export const deleteAppointment = createAction('DELETE_APPOINTMENT');
