import { createAction } from 'redux-actions';
import * as WebAPI from '../../utils/api.service';

export const SHOW_EDIT_MODAL = 'SHOW_PACIENT_EDIT_MODAL';
export const HIDE_EDIT_MODAL = 'HIDE_PACIENT_EDIT_MODAL';
export const SELECT_PACIENT = 'SELECT_PACIENT';
export const GET_PACIENTS = 'FETCH_PACIENTS';
export const CREATE_PACIENT = 'CREATE_PACIENT';
export const UPDATE_PACIENT = 'UPDATE_PACIENT';
export const DELETE_PACIENT = 'DELETE_PACIENT';

export const showEditModal = createAction(SHOW_EDIT_MODAL);
export const hideEditModal = createAction(HIDE_EDIT_MODAL);
export const selectPacient = createAction(SELECT_PACIENT);
export const filterByName = createAction('FILTER_PACIENT_BY_NAME');
export const getPacients = createAction(GET_PACIENTS);
export const createPacient = createAction(CREATE_PACIENT);
export const updatePacient = createAction(UPDATE_PACIENT);
export const removePacient = createAction(DELETE_PACIENT, WebAPI.removePacient);
export const clearSelectedPacient = createAction('CLEAR_SELECTED_PACIENT');
