import { handleActions } from 'redux-actions';
import { pickBy } from '../../utils';
import {
  getSurgeryTypes, createSurgeryType, updateSurgeryType, removeSurgeryType,
} from './surgery-types.actions';

const initialState = {
  surgeryTypes: {},
};

const handleGetSurgeryTypes = (state, action) => {
  const { data } = action.payload;
  const surgeryTypes = pickBy(data, 'id');

  return {
    ...state,
    surgeryTypes,
  };
};

const handleCreateSurgeryType = (state, action) => {
  const surgeryType = action.payload;
  const id = surgeryType.id.toString();

  return {
    ...state,
    surgeryTypes: {
      ...state.surgeryTypes,
      [id]: surgeryType,
    },
  };
};

const handleUpdateSurgeryType = (state, action) => {
  const { data: surgeryType } = action.payload;
  const id = surgeryType.id.toString();

  return {
    ...state,
    surgeryTypes: {
      ...state.surgeryTypes,
      [id]: surgeryType,
    },
  };
};

const handleRemoveSurgeryType = (state, action) => {
  const { id } = action.payload.data;
  const { [id]: del, ...surgeryTypes } = state.surgeryTypes;

  return {
    ...state,
    surgeryTypes,
  };
};

export default handleActions(
  {
    [getSurgeryTypes]: handleGetSurgeryTypes,
    [createSurgeryType]: handleCreateSurgeryType,
    [updateSurgeryType]: handleUpdateSurgeryType,
    [removeSurgeryType]: handleRemoveSurgeryType,
  },
  initialState
);
