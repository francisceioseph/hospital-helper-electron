import { createAction } from 'redux-actions';
import * as WebAPI from '../../utils/api.service';

export const GET_SURGERY_TYPES = 'FETCH_SURGERY_TYPES';
export const CREATE_SURGERY_TYPE = 'CREATE_SURGERY_TYPES';
export const UPDATE_SURGERY_TYPE = 'UPDATE_SURGERY_TYPES';
export const REMOVE_SURGERY_TYPE = 'DELETE_SURGERY_TYPES';

export const getSurgeryTypes = createAction(GET_SURGERY_TYPES);
export const createSurgeryType = createAction(CREATE_SURGERY_TYPE);
export const updateSurgeryType = createAction(UPDATE_SURGERY_TYPE);
export const removeSurgeryType = createAction(REMOVE_SURGERY_TYPE, WebAPI.removeSurgeryType);
export const filterByName = createAction('FILTER_SURGERY_TYPES_BY_NAME');
