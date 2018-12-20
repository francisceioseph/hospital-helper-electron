import { handleActions } from 'redux-actions';
import {
  getSpecialties,
  createSpecialty,
  updateSpecialty,
  removeSpecialty
} from './specialty.actions';

const initialState = {
  specialties: {},
  currentSpecialty: {}
};

const handleGetSpecialties = (state, action) => {
  const { data: specialties } = action.payload;
  return {
    ...state,
    specialties
  };
};

const handleCreateSpecialty = (state, action) => {
  const specialty = action.payload;
  const id = specialty.specialty_id.toString();

  return {
    ...state,
    specialties: {
      ...state.specialties,
      [id]: specialty
    }
  };
};

const handleUpdateSpecialty = (state, action) => {
  const { data: specialty } = action.payload;
  const id = specialty.specialty_id.toString();

  return {
    ...state,
    specialties: {
      ...state.specialties,
      [id]: specialty
    }
  };
};

const handleRemoveSpecialty = (state, action) => {
  const { data: specialty } = action.payload;
  const id = specialty.specialty_id.toString();
  const { [id]: del, ...specialties } = state.specialties;

  return {
    ...state,
    specialties
  };
};

export default handleActions(
  {
    [getSpecialties]: handleGetSpecialties,
    [createSpecialty]: handleCreateSpecialty,
    [updateSpecialty]: handleUpdateSpecialty,
    [removeSpecialty]: handleRemoveSpecialty
  },
  initialState
);
