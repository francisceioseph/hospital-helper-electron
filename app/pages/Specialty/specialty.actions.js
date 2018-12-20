import { createAction } from 'redux-actions';
import * as WebAPI from '../../utils/webAPI';

export const GET_SPECIALTIES = 'FETCH_SPECIALTIES';
export const CREATE_SPECIALTY = 'CREATE_SPECIALTY';
export const UPDATE_SPECIALTY = 'UPDATE_SPECIALTY';
export const REMOVE_SPECIALTY = 'DELETE_SPECIALTY';

export const getSpecialties = createAction(
  GET_SPECIALTIES,
  WebAPI.getSpecialties
);
export const createSpecialty = createAction(CREATE_SPECIALTY);
export const updateSpecialty = createAction(UPDATE_SPECIALTY);
export const removeSpecialty = createAction(
  REMOVE_SPECIALTY,
  WebAPI.removeSpecialty
);
