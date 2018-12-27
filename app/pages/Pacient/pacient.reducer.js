import { handleActions } from 'redux-actions';

import {
  getPacients,
  createPacient,
  updatePacient,
  removePacient
} from './pacient.actions';

const initialState = {
  pacients : {},
  pacient  : {
    profile: {
      gender             : 'male',
      nationality        : 'Brasileira',
      country_birth      : 'Brasil',
      birth_state        : 'Ceará',
      birth_city         : 'Aquiraz',
      is_estudying       : false,
      course             : 'none',
      sexual_orientation : 'none',
      gender_identity    : 'none',
      has_special_needs  : false,
      special_needs      : 'none',
    }
  }
};

function handleGetPacients(state, action) {
  const { data: pacients } = action.payload;
  return {
    ...state,
    pacients
  };
}

function handleCreatePacient(state, action) {
  const pacient = action.payload;
  const pacientId = pacient.user_profile_id.toString();

  const pacients = {
    ...state.pacients,
    [pacientId]: pacient
  };

  return {
    ...state,
    pacients,
    pacient
  };
}

function handleUpdatePacient(state, action) {
  const { data: pacient } = action.payload;
  const pacientId = pacient.user_profile_id.toString();

  const pacients = {
    ...state.pacients,
    [pacientId]: pacient
  };

  return {
    ...state,
    pacients,
    pacient
  };
}

function handleRemovePacient(state, action) {
  const userProfileId = action.payload;
  const pacientId = userProfileId.toString();
  const { [pacientId]: del, ...pacients } = state.pacients;

  return {
    ...state,
    pacients
  };
}

export default handleActions(
  {
    [getPacients]   : handleGetPacients,
    [createPacient] : handleCreatePacient,
    [updatePacient] : handleUpdatePacient,
    [removePacient] : handleRemovePacient
  },
  initialState
);
