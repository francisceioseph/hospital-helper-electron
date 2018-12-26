
import { createAction } from 'redux-actions';
import * as WebAPI from '../../utils/webAPI';

export const getRoles = createAction('FETCH_ROLES', WebAPI.getRoles);
export const createRole = createAction('CREATE_ROLE');
export const retrieveRole = createAction('RETRIEVE_ROLE');
export const updateRole = createAction('UPDATE_ROLE');
export const removeRole = createAction('REMOVE_ROLE');
