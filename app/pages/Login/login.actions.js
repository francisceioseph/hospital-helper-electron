import { createAction } from 'redux-actions';

export const setCredentials = createAction(
  'SET_USER_CREDENTIALS',
  data => data
);
export const clearCredentials = createAction('CLEAR_USER_CREDENTIALS');
export const setLoginError = createAction('SET_LOGIN_ERROR', error => error);
