import { loginDefaultState } from '../pages/Login/login.reducer';
import AppConstants from '../constants';

export const localStorageMiddleware = () => next => action => {
  const result = next(action);
  if (action.type === 'SET_USER_CREDENTIALS') {
    localStorage.setItem(
      AppConstants.AUTH_TOKEN_STORAGE_ID,
      JSON.stringify(action.payload)
    );
  }

  if (action.type === 'CLEAR_USER_CREDENTIALS') {
    localStorage.removeItem(AppConstants.AUTH_TOKEN_STORAGE_ID);
  }

  return result;
};

export const reHydrateStore = () => {
  const data = localStorage.getItem(AppConstants.AUTH_TOKEN_STORAGE_ID);

  if (data) {
    const credentials = JSON.parse(data);
    return {
      login: {
        ...loginDefaultState,
        credentials
      }
    };
  }

  return { login: loginDefaultState };
};
