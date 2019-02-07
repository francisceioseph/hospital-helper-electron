import { createAction } from 'redux-actions';
import * as WebAPI from '../../utils/api.service';

export const GET_SPECIALTIES = 'FETCH_SPECIALTIES';
export const CREATE_SPECIALTY = 'CREATE_SPECIALTY';
export const UPDATE_SPECIALTY = 'UPDATE_SPECIALTY';
export const REMOVE_SPECIALTY = 'DELETE_SPECIALTY';
export const APPLY_SPECIALTY_FILTER = 'APPLY_SPECIALTY_FILTER';

export const getSpecialties = createAction(GET_SPECIALTIES);
export const createSpecialty = createAction(CREATE_SPECIALTY);
export const updateSpecialty = createAction(UPDATE_SPECIALTY);
export const removeSpecialty = createAction(REMOVE_SPECIALTY, WebAPI.removeSpecialty);
export const applySpecialtyFilter = createAction(APPLY_SPECIALTY_FILTER);
