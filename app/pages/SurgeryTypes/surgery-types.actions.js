import { createAction } from 'redux-actions';
import * as WebAPI from '../../utils/api.service';

export const GET_SURGERY_TYPES = 'FETCH_SURGERY_TYPES';
export const CREATE_SURGERY_TYPE = 'CREATE_SURGERY_TYPES';
export const UPDATE_SURGERY_TYPE = 'UPDATE_SURGERY_TYPES';
export const REMOVE_SURGERY_TYPE = 'DELETE_SURGERY_TYPES';
export const SHOW_SURGERY_TYPE_MODAL = 'SHOW_SURGERY_TYPE_MODAL';
export const HIDE_SURGERY_TYPE_MODAL = 'HIDE_SURGERY_TYPE_MODAL';
export const SELECT_SURGERY_TYPE = 'SELECT_SURGERY_TYPE';
export const CLEAR_SURGERY_TYPE = 'CLEAR_SURGERY_TYPE';
export const FILTER_SURGERY_TYPES_BY_NAME = 'FILTER_SURGERY_TYPES_BY_NAME';

export const selectSurgeryType = createAction(SELECT_SURGERY_TYPE);
export const clearSurgeryType = createAction(CLEAR_SURGERY_TYPE);
export const showSurgeryTypeModal = createAction(SHOW_SURGERY_TYPE_MODAL);
export const hideSurgeryTypeModal = createAction(HIDE_SURGERY_TYPE_MODAL);
export const getSurgeryTypes = createAction(GET_SURGERY_TYPES);
export const createSurgeryType = createAction(CREATE_SURGERY_TYPE);
export const updateSurgeryType = createAction(UPDATE_SURGERY_TYPE);
export const removeSurgeryType = createAction(REMOVE_SURGERY_TYPE, WebAPI.removeSurgeryType);
export const filterByName = createAction(FILTER_SURGERY_TYPES_BY_NAME);
