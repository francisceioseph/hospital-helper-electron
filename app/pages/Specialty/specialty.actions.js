import { createAction } from 'redux-actions';
import * as WebAPI from '../../utils/api.service';

export const GET_SPECIALTIES = 'FETCH_SPECIALTIES';
export const CREATE_SPECIALTY = 'CREATE_SPECIALTY';
export const UPDATE_SPECIALTY = 'UPDATE_SPECIALTY';
export const REMOVE_SPECIALTY = 'DELETE_SPECIALTY';
export const APPLY_SPECIALTY_FILTER = 'APPLY_SPECIALTY_FILTER';
export const SHOW_SPECIALTY_MODAL = 'SHOW_SPECIALTY_MODAL';
export const HIDE_SPECIALTY_MODAL = 'HIDE_SPECIALTY_MODAL';
export const SELECT_SPECIALTY = 'SELECT_SPECIALTY';
export const CLEAR_SPECIALTY = 'CLEAR_SPECIALTY';

export const selectSpecialty = createAction(SELECT_SPECIALTY);
export const clearSpecialty = createAction(CLEAR_SPECIALTY);
export const showSpecialtyModal = createAction(SHOW_SPECIALTY_MODAL);
export const hideSpecialtyModal = createAction(HIDE_SPECIALTY_MODAL);
export const getSpecialties = createAction(GET_SPECIALTIES);
export const createSpecialty = createAction(CREATE_SPECIALTY);
export const updateSpecialty = createAction(UPDATE_SPECIALTY);
export const removeSpecialty = createAction(REMOVE_SPECIALTY, WebAPI.removeSpecialty);
export const applySpecialtyFilter = createAction(APPLY_SPECIALTY_FILTER);
