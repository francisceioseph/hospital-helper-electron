import _ from 'lodash';
import { handleActions } from 'redux-actions';
import { pickBy } from '../../utils';
import { filterByText } from '../../utils/filters';

import {
  getPacients,
  createPacient,
  updatePacient,
  removePacient,
  filterByName,
  selectPacient,
  showEditModal,
  hideEditModal,
  clearSelectedPacient
} from './pacient.actions';

import { Pacient } from '../../models/pacient.model';

const initialState = {
  showPacientEditModal : false,
  pacients             : {},
  pacientsBkp          : {},
  pacient              : new Pacient()
};

const handleShowEditModal = state => ({
  ...state,
  showPacientEditModal: true
});

const handleHideEditModal = state => ({
  ...state,
  showPacientEditModal: false
});

const handleSelectPacient = (state, action) => {
  const pacientId = action.payload;
  const pacient = { ...state.pacients[pacientId] };

  return {
    ...state,
    pacient
  };
};

const handleFilterByName = (state, action) => {
  const input = action.payload;
  const types = _.values(state.pacientsBkp);
  const values = filterByText(types, 'personal_datum.full_name', input);
  const pacients = pickBy(values, 'id');

  return {
    ...state,
    pacients
  };
};

function handleGetPacients(state, action) {
  const { data } = action.payload;
  const pacients = pickBy(data, 'id');
  return {
    ...state,
    pacients,
    pacientsBkp: { ...pacients }
  };
}

function handleCreatePacient(state, action) {
  const pacient = action.payload;
  const pacientId = pacient.id.toString();

  const pacients = {
    ...state.pacients,
    [pacientId]: pacient
  };

  const pacientsBkp = {
    ...state.pacientsBkp,
    [pacientId]: pacient
  };

  return {
    ...state,
    pacients,
    pacientsBkp
  };
}

function handleUpdatePacient(state, action) {
  const { payload: pacient } = action;
  const pacientId = pacient.id.toString();

  const pacients = {
    ...state.pacients,
    [pacientId]: pacient
  };

  const pacientsBkp = {
    ...state.pacientsBkp,
    [pacientId]: pacient
  };

  return {
    ...state,
    pacients,
    pacientsBkp
  };
}

function handleRemovePacient(state, action) {
  const userProfileId = action.payload;
  const pacientId = userProfileId.toString();
  const { [pacientId]: del, ...pacients } = state.pacients;
  const { [pacientId]: del2, ...pacientsBkp } = state.pacientsBkp;

  return {
    ...state,
    pacients,
    pacientsBkp
  };
}

function handleClearSelectedPacient(state) {
  return {
    ...state,
    pacient: new Pacient()
  };
}

export default handleActions(
  {
    [getPacients]          : handleGetPacients,
    [createPacient]        : handleCreatePacient,
    [updatePacient]        : handleUpdatePacient,
    [removePacient]        : handleRemovePacient,
    [filterByName]         : handleFilterByName,
    [selectPacient]        : handleSelectPacient,
    [showEditModal]        : handleShowEditModal,
    [hideEditModal]        : handleHideEditModal,
    [clearSelectedPacient] : handleClearSelectedPacient
  },
  initialState
);
