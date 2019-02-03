import { createAction } from 'redux-actions';
import * as WebAPI from '../../utils/webAPI';

export const GET_PACIENTS = 'FETCH_PACIENTS';
export const CREATE_PACIENT = 'CREATE_PACIENT';
export const UPDATE_PACIENT = 'UPDATE_PACIENT';
export const DELETE_PACIENT = 'DELETE_PACIENT';

export const getPacients = createAction(GET_PACIENTS, WebAPI.getPacients);
export const createPacient = createAction(CREATE_PACIENT);
export const updatePacient = createAction(UPDATE_PACIENT, WebAPI.updatePacient);
export const removePacient = createAction(DELETE_PACIENT, WebAPI.removePacient);