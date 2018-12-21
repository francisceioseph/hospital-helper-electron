import { handleActions } from 'redux-actions';
import {
  getAppointmentTypes, createAppointmentType, updateAppointmentType, removeAppointmentType,
} from './appointment-types.actions';

const initialState = {
  appointmentTypes: {},
};

const handleGetAppointmentTypes = (state, action) => {
  const { data: appointmentTypes } = action.payload;
  return {
    ...state,
    appointmentTypes,
  };
};

const handleCreateAppointmentType = (state, action) => {
  const appointmentType = action.payload;
  const id = appointmentType.appointment_type_id.toString();

  return {
    ...state,
    appointmentTypes: {
      ...state.appointmentTypes,
      [id]: appointmentType,
    },
  };
};

const handleUpdateAppointmentType = (state, action) => {
  const { data: appointmentType } = action.payload;
  const id = appointmentType.appointment_type_id.toString();

  return {
    ...state,
    appointmentTypes: {
      ...state.appointmentTypes,
      [id]: appointmentType,
    },
  };
};

const handleRemoveAppointmentType = (state, action) => {
  const { id } = action.payload.data;
  const { [id]: del, ...appointmentTypes } = state.appointmentTypes;

  return {
    ...state,
    appointmentTypes,
  };
};

export default handleActions(
  {
    [getAppointmentTypes]: handleGetAppointmentTypes,
    [createAppointmentType]: handleCreateAppointmentType,
    [updateAppointmentType]: handleUpdateAppointmentType,
    [removeAppointmentType]: handleRemoveAppointmentType,
  },
  initialState
);
