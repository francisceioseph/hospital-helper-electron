import { createAction } from 'redux-actions';
import * as WebAPI from '../../utils/api.service';

export const GET_APPOINTMENT_TYPES = 'FETCH_APPOINTMENT_TYPES';
export const CREATE_APPOINTMENT_TYPE = 'CREATE_APPOINTMENT_TYPES';
export const UPDATE_APPOINTMENT_TYPE = 'UPDATE_APPOINTMENT_TYPES';
export const REMOVE_APPOINTMENT_TYPE = 'DELETE_APPOINTMENT_TYPES';
export const APPLY_APPOINTMENT_TYPES_FILTER = 'APPLY_APPOINTMENT_TYPES_FILTER';

export const getAppointmentTypes = createAction(GET_APPOINTMENT_TYPES);
export const createAppointmentType = createAction(CREATE_APPOINTMENT_TYPE);
export const updateAppointmentType = createAction(UPDATE_APPOINTMENT_TYPE);
export const applyAppointmentTypesFilter = createAction(APPLY_APPOINTMENT_TYPES_FILTER);
export const removeAppointmentType = createAction(REMOVE_APPOINTMENT_TYPE, WebAPI.removeAppointmentType);
