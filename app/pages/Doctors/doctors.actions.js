import { createAction } from 'redux-actions';
import * as WebAPI from '../../utils/api.service';

export const SELECT_DOCTOR = 'SELECT_DOCTOR';
export const SHOW_EDIT_DOCTOR_MODAL = 'SHOW_EDIT_DOCTOR_MODAL';
export const HIDE_EDIT_DOCTOR_MODAL = 'HIDE_EDIT_DOCTOR_MODAL';
export const GET_DOCTORS = 'FETCH_DOCTORS';
export const CREATE_DOCTOR = 'CREATE_DOCTOR';
export const UPDATE_DOCTOR = 'UPDATE_DOCTOR';
export const DELETE_DOCTOR = 'DELETE_DOCTOR';

export const filterByName = createAction('FILTER_DOCTOR_BY_NAME');
export const selectDoctor = createAction(SELECT_DOCTOR);
export const showEditDoctorModal = createAction(SHOW_EDIT_DOCTOR_MODAL);
export const hideEditDoctorModal = createAction(HIDE_EDIT_DOCTOR_MODAL);
export const createDoctor = createAction(CREATE_DOCTOR);
export const getDoctors = createAction(GET_DOCTORS);
export const updateDoctor = createAction(UPDATE_DOCTOR, WebAPI.updateDoctor);
export const removeDoctor = createAction(DELETE_DOCTOR, WebAPI.removeDoctor);
