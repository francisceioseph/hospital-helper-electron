import _ from 'lodash';

import { handleActions } from 'redux-actions';
import { pickBy } from '../../utils';
import {
  getAppointmentTypes,
  createAppointmentType,
  updateAppointmentType,
  removeAppointmentType,
  applyAppointmentTypesFilter,
  selectAppointmentType,
  clearAppointmentType,
  showAppointmentTypeModal,
  hideAppointmentTypeModal
} from './appointment-types.actions';

import { filterByText } from '../../utils/filters';

const initialState = {
  appointmentTypes         : {},
  appointmentTypesBkp      : {},
  appointmentType          : {},
  showAppointmentTypeModal : false
};

const handleSelectAppointmentType = (state, action) => {
  const id = action.payload;

  return {
    ...state,
    appointmentType: { ...state.appointmentTypes[id] }
  };
};

const handleClearAppointmentType = state => ({
  ...state,
  appointmentType: {}
});

const handleShowAppointmentTypeModal = state => ({
  ...state,
  showAppointmentTypeModal: true
});

const handleHideAppointmentTypeModal = state => ({
  ...state,
  showAppointmentTypeModal: false
});

const handleGetAppointmentTypes = (state, action) => {
  const { data } = action.payload;
  const appointmentTypes = pickBy(data, 'id');
  const appointmentTypesBkp = { ...appointmentTypes };

  return {
    ...state,
    appointmentTypes,
    appointmentTypesBkp
  };
};

const handleCreateAppointmentType = (state, action) => {
  const appointmentType = action.payload;
  const id = appointmentType.id.toString();

  return {
    ...state,
    appointmentTypes: {
      ...state.appointmentTypes,
      [id]: appointmentType
    },
    appointmentTypesBkp: {
      ...state.appointmentTypesBkp,
      [id]: appointmentType
    }
  };
};

const handleUpdateAppointmentType = (state, action) => {
  const { payload: appointmentType } = action;
  const id = appointmentType.id.toString();

  return {
    ...state,
    appointmentTypes: {
      ...state.appointmentTypes,
      [id]: appointmentType
    },
    appointmentTypesBkp: {
      ...state.appointmentTypesBkp,
      [id]: appointmentType
    },
    appointmentType: {}
  };
};

const handleRemoveAppointmentType = (state, action) => {
  const { id } = action.payload.data;
  const { [id]: del, ...appointmentTypes } = state.appointmentTypes;
  const { [id]: del2, ...appointmentTypesBkp } = state.appointmentTypesBkp;

  return {
    ...state,
    appointmentTypes,
    appointmentTypesBkp
  };
};

const handleFilterAppointmentTypes = (state, action) => {
  const input = action.payload;
  const types = _.values(state.appointmentTypesBkp);
  const values = filterByText(types, 'appointment_type_name', input);
  const appointmentTypes = pickBy(values, 'id');

  return {
    ...state,
    appointmentTypes
  };
};

export default handleActions(
  {
    [getAppointmentTypes]         : handleGetAppointmentTypes,
    [createAppointmentType]       : handleCreateAppointmentType,
    [updateAppointmentType]       : handleUpdateAppointmentType,
    [removeAppointmentType]       : handleRemoveAppointmentType,
    [applyAppointmentTypesFilter] : handleFilterAppointmentTypes,
    [selectAppointmentType]       : handleSelectAppointmentType,
    [clearAppointmentType]        : handleClearAppointmentType,
    [showAppointmentTypeModal]    : handleShowAppointmentTypeModal,
    [hideAppointmentTypeModal]    : handleHideAppointmentTypeModal
  },
  initialState
);
