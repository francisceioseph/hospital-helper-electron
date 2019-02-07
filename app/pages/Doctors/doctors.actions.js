import { createAction } from 'redux-actions';
import * as WebAPI from '../../utils/api.service';

export const GET_DOCTORS = 'FETCH_DOCTORS';
export const CREATE_DOCTOR = 'CREATE_DOCTOR';
export const UPDATE_DOCTOR = 'UPDATE_DOCTOR';
export const DELETE_DOCTOR = 'DELETE_DOCTOR';

export const filterByName = createAction('FILTER_DOCTOR_BY_NAME');
export const createDoctor = createAction(CREATE_DOCTOR);
export const getDoctors = createAction(GET_DOCTORS);
export const updateDoctor = createAction(UPDATE_DOCTOR, WebAPI.updateDoctor);
export const removeDoctor = createAction(DELETE_DOCTOR, WebAPI.removeDoctor);
