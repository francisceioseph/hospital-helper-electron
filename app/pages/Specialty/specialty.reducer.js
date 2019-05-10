import _ from 'lodash';

import { handleActions } from 'redux-actions';
import { pickBy } from '../../utils';
import { filterByText } from '../../utils/filters';

import {
  getSpecialties,
  createSpecialty,
  updateSpecialty,
  removeSpecialty,
  applySpecialtyFilter,
  selectSpecialty,
  clearSpecialty,
  showSpecialtyModal,
  hideSpecialtyModal
} from './specialty.actions';

const initialState = {
  specialties        : {},
  specialtiesBkp     : {},
  currentSpecialty   : {},
  specialty          : {},
  showSpecialtyModal : false
};

const handleSelectSpecialty = (state, action) => {
  const id = action.payload;

  return {
    ...state,
    specialty: { ...state.specialties[id] }
  };
};

const handleClearSpecialty = state => ({
  ...state,
  specialty: {}
});

const handleShowSpecialtyModal = state => ({
  ...state,
  showSpecialtyModal: true
});

const handleHideSpecialtyModal = state => ({
  ...state,
  showSpecialtyModal: false
});

const handleApplySpecialtyField = (state, action) => {
  const specialtiesValues = _.values(state.specialtiesBkp);
  const inputText = action.payload;

  const specialties = pickBy(filterByText(specialtiesValues, 'specialty_name', inputText), 'id');

  return {
    ...state,
    specialties
  };
};

const handleGetSpecialties = (state, action) => {
  const { data } = action.payload;
  const specialties = pickBy(data, 'id');

  return {
    ...state,
    specialties,
    specialtiesBkp: { ...specialties }
  };
};

const handleCreateSpecialty = (state, action) => {
  const specialty = action.payload;
  const id = specialty.id.toString();

  return {
    ...state,
    specialties: {
      ...state.specialties,
      [id]: specialty
    },
    specialtiesBkp: {
      ...state.specialtiesBkp,
      [id]: specialty
    }
  };
};

const handleUpdateSpecialty = (state, action) => {
  const { payload: specialty } = action;
  const id = specialty.id.toString();

  return {
    ...state,
    specialties: {
      ...state.specialties,
      [id]: specialty
    },
    specialtiesBkp: {
      ...state.specialtiesBkp,
      [id]: specialty
    },
    specialty: {}
  };
};

const handleRemoveSpecialty = (state, action) => {
  const { data: specialty } = action.payload;
  const id = specialty.id.toString();
  const { [id]: del, ...specialties } = state.specialties;
  const { [id]: del2, ...specialtiesBkp } = state.specialtiesBkp;

  return {
    ...state,
    specialties,
    specialtiesBkp
  };
};

export default handleActions(
  {
    [getSpecialties]       : handleGetSpecialties,
    [createSpecialty]      : handleCreateSpecialty,
    [updateSpecialty]      : handleUpdateSpecialty,
    [removeSpecialty]      : handleRemoveSpecialty,
    [applySpecialtyFilter] : handleApplySpecialtyField,
    [selectSpecialty]      : handleSelectSpecialty,
    [clearSpecialty]       : handleClearSpecialty,
    [showSpecialtyModal]   : handleShowSpecialtyModal,
    [hideSpecialtyModal]   : handleHideSpecialtyModal
  },
  initialState
);
