import AppConstants from '../constants';

export const getCredentials = () => {
  const data = localStorage.getItem(AppConstants.AUTH_TOKEN_STORAGE_ID);
  return JSON.parse(data);
};
