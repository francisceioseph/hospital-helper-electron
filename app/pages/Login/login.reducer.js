import { handleActions } from 'redux-actions';
import {
  setCredentials,
  setLoginError,
  clearCredentials
} from './login.actions';

export const loginDefaultState = {
  credentials: {},
  loginError: null
};

const handleSetLoginError = (state, action) => ({
  ...state,
  credentials: {},
  loginError: action.payload
});

const handleSetCredentials = (state, action) => ({
  ...state,
  loginError: null,
  credentials: action.payload
});

const handleClearCredentials = state => ({
  ...state,
  loginError: null,
  credentials: {}
});

export default handleActions(
  {
    [setCredentials]: handleSetCredentials,
    [clearCredentials]: handleClearCredentials,
    [setLoginError]: handleSetLoginError
  },
  loginDefaultState
);
