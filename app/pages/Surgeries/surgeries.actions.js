import { createAction } from 'redux-actions';

export const GET_SURGERIES = 'FETCH_SURGERIES';
export const GET_SURGERY_TYPES = 'FETCH_SURGERY_TYPES';
export const CREATE_SURGERY = 'CREATE_SURGERY';
export const UPDATE_SURGERY = 'UPDATE_SURGERY';
export const DELETE_SURGERY = 'DELETE_SURGERY';

export const getSurgeries = createAction(GET_SURGERIES);
export const getSurgeryTypes = createAction(GET_SURGERY_TYPES);

export const createSurgery = createAction(CREATE_SURGERY);
export const updateSurgery = createAction(UPDATE_SURGERY);
export const deleteSurgery = createAction(DELETE_SURGERY);
