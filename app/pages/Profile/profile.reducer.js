import { handleActions } from 'redux-actions';
import { getProfile } from './profile.actions';

const initialState = {
    profile: {}
};

const handleGetProfile = (state, action) => {
  const { data: profile } = action.payload;

  return {
    ...state,
    profile,
  }
};

export default handleActions({
  [getProfile]: handleGetProfile,
});