import { handleActions } from 'redux-actions';
import {
  setUserCredentials,
  setLoginError,
  clearUserCredentials
} from './login.actions';

export const loginDefaultState = {
  userCredentials: {},
  loginError: null
};

const handleSetLoginError = (state, action) => ({
  ...state,
  userCredentials: {},
  loginError: action.payload
});

const handleSetUserCredentials = (state, action) => ({
  ...state,
  loginError: null,
  userCredentials: action.payload
});

const handleClearUserCredentials = state => ({
  ...state,
  loginError: null,
  userCredentials: {}
});

export default handleActions(
  {
    [setUserCredentials]: handleSetUserCredentials,
    [clearUserCredentials]: handleClearUserCredentials,
    [setLoginError]: handleSetLoginError
  },
  loginDefaultState
);
