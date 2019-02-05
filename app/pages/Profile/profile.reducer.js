import { handleActions } from 'redux-actions';
import { getProfile } from './profile.actions';

const initialState = {
  profile: {
    profile_type   : '',
    personal_datum : {
      full_name   : '',
      birth_datum : {},
    },

    emails: []
  }
};

const handleGetProfile = (state, action) => {
  const { data: profile } = action.payload;

  return {
    ...state,
    profile,
  };
};

export default handleActions({
  [getProfile]: handleGetProfile,
}, initialState);