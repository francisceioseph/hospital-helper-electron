import { handleActions } from 'redux-actions';
import { pickBy } from '../../utils';

import {
  getSurgeries,
  getSurgeryTypes,
  createSurgery,
  updateSurgery,
  deleteSurgery
} from './surgeries.actions';

const initialState = {
  surgeryTypes : {},
  surgeries    : {},
  surgery      : {}
};

const handleGetSurgeries = (state, action) => {
  const { data } = action.payload;
  const surgeries = pickBy(data, 'id');
  return {
    ...state,
    surgeries
  };
};

const handleGetSurgeryTypes = (state, action) => {
  const { data: surgeryTypes } = action.payload;
  return {
    ...state,
    surgeryTypes
  };
};

const handleCreateSurgery = (state, action) => {
  const { payload: surgery } = action;
  const surgeries = {
    ...state.surgeries,
    [surgery.id]: surgery
  };

  return {
    ...state,
    surgeries
  };
};

const handleEditSurgery = (state, action) => {
  const { payload: surgery } = action;
  const surgeries = {
    ...state.surgeries,
    [surgery.id]: surgery
  };

  return {
    ...state,
    surgeries,
  };
};

const handleRemoveSurgery = (state, action) => {
  const { payload: surgeryId } = action;
  const { [surgeryId]: del, ...surgeries } = state.surgeries;
  return {
    ...state,
    surgeries
  };
};

export default handleActions(
  {
    [getSurgeries]    : handleGetSurgeries,
    [getSurgeryTypes] : handleGetSurgeryTypes,
    [createSurgery]   : handleCreateSurgery,
    [updateSurgery]   : handleEditSurgery,
    [deleteSurgery]   : handleRemoveSurgery
  },
  initialState
);
