import { createAction } from 'redux-actions';

export const setUserCredentials = createAction(
  'SET_USER_CREDENTIALS',
  data => data
);
export const clearUserCredentials = createAction('CLEAR_USER_CREDENTIALS');
export const setLoginError = createAction('SET_LOGIN_ERROR', error => error);
