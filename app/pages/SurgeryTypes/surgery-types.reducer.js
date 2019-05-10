import _ from 'lodash';
import { handleActions } from 'redux-actions';

import { pickBy } from '../../utils';
import { filterByText } from '../../utils/filters';

import {
  getSurgeryTypes,
  createSurgeryType,
  updateSurgeryType,
  removeSurgeryType,
  filterByName,
  selectSurgeryType,
  clearSurgeryType,
  showSurgeryTypeModal,
  hideSurgeryTypeModal
} from './surgery-types.actions';

const initialState = {
  surgeryTypes         : {},
  surgeryTypesBkp      : {},
  surgeryType          : {},
  showSurgeryTypeModal : false
};

const handleSelectSurgeryType = (state, action) => {
  const id = action.payload;

  return {
    ...state,
    surgeryType: { ...state.surgeryTypes[id] }
  };
};

const handleClearSurgeryType = state => ({
  ...state,
  surgeryType: {}
});

const handleShowSurgeryTypeModal = state => ({
  ...state,
  showSurgeryTypeModal: true
});

const handleHideSurgeryTypeModal = state => ({
  ...state,
  showSurgeryTypeModal: false
});

const handleFilterByName = (state, action) => {
  const input = action.payload;
  const types = _.values(state.surgeryTypesBkp);
  const values = filterByText(types, 'surgery_type_name', input);
  const surgeryTypes = pickBy(values, 'id');

  return {
    ...state,
    surgeryTypes
  };
};

const handleGetSurgeryTypes = (state, action) => {
  const { data } = action.payload;
  const surgeryTypes = pickBy(data, 'id');

  return {
    ...state,
    surgeryTypes,
    surgeryTypesBkp: { ...surgeryTypes }
  };
};

const handleCreateSurgeryType = (state, action) => {
  const surgeryType = action.payload;
  const id = surgeryType.id.toString();

  return {
    ...state,
    surgeryTypes: {
      ...state.surgeryTypes,
      [id]: surgeryType
    },
    surgeryTypesBkp: {
      ...state.surgeryTypesBkp,
      [id]: surgeryType
    }
  };
};

const handleUpdateSurgeryType = (state, action) => {
  const { payload: surgeryType } = action;
  const id = surgeryType.id.toString();

  return {
    ...state,
    surgeryTypes: {
      ...state.surgeryTypes,
      [id]: surgeryType
    },
    surgeryTypesBkp: {
      ...state.surgeryTypesBkp,
      [id]: surgeryType
    },
    surgeryType: {}
  };
};

const handleRemoveSurgeryType = (state, action) => {
  const { id } = action.payload.data;
  const { [id]: del, ...surgeryTypes } = state.surgeryTypes;
  const { [id]: del2, ...surgeryTypesBkp } = state.surgeryTypesBkp;

  return {
    ...state,
    surgeryTypes,
    surgeryTypesBkp
  };
};

export default handleActions(
  {
    [getSurgeryTypes]      : handleGetSurgeryTypes,
    [createSurgeryType]    : handleCreateSurgeryType,
    [updateSurgeryType]    : handleUpdateSurgeryType,
    [removeSurgeryType]    : handleRemoveSurgeryType,
    [filterByName]         : handleFilterByName,
    [selectSurgeryType]    : handleSelectSurgeryType,
    [clearSurgeryType]     : handleClearSurgeryType,
    [showSurgeryTypeModal] : handleShowSurgeryTypeModal,
    [hideSurgeryTypeModal] : handleHideSurgeryTypeModal
  },
  initialState
);
