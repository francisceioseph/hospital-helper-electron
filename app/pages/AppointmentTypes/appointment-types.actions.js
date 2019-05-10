import { createAction } from 'redux-actions';
import * as WebAPI from '../../utils/api.service';

export const GET_APPOINTMENT_TYPES = 'FETCH_APPOINTMENT_TYPES';
export const CREATE_APPOINTMENT_TYPE = 'CREATE_APPOINTMENT_TYPES';
export const UPDATE_APPOINTMENT_TYPE = 'UPDATE_APPOINTMENT_TYPES';
export const REMOVE_APPOINTMENT_TYPE = 'DELETE_APPOINTMENT_TYPES';
export const APPLY_APPOINTMENT_TYPES_FILTER = 'APPLY_APPOINTMENT_TYPES_FILTER';
export const SHOW_APPOINTMENT_TYPE_MODAL = 'SHOW_APPOINTMENT_TYPE_MODAL';
export const HIDE_APPOINTMENT_TYPE_MODAL = 'HIDE_APPOINTMENT_TYPE_MODAL';
export const SELECT_APPOINTMENT_TYPE = 'SELECT_APPOINTMENT_TYPE';
export const CLEAR_APPOINTMENT_TYPE = 'CLEAR_APPOINTMENT_TYPE';

export const selectAppointmentType = createAction(SELECT_APPOINTMENT_TYPE);
export const clearAppointmentType = createAction(CLEAR_APPOINTMENT_TYPE);
export const showAppointmentTypeModal = createAction(SHOW_APPOINTMENT_TYPE_MODAL);
export const hideAppointmentTypeModal = createAction(HIDE_APPOINTMENT_TYPE_MODAL);
export const getAppointmentTypes = createAction(GET_APPOINTMENT_TYPES);
export const createAppointmentType = createAction(CREATE_APPOINTMENT_TYPE);
export const updateAppointmentType = createAction(UPDATE_APPOINTMENT_TYPE);
export const applyAppointmentTypesFilter = createAction(APPLY_APPOINTMENT_TYPES_FILTER);
export const removeAppointmentType = createAction(REMOVE_APPOINTMENT_TYPE, WebAPI.removeAppointmentType);
