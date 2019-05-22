import { handleActions } from 'redux-actions';
import {
  getAppointmentTypes,
  createAppointment,
  getAppointments,
  selectAppointment,
  updateAppointment,
  clearAppointment
} from './appointments.actions';

const initialState = {
  showModal        : false,
  appointments     : {},
  appointment      : {},
  appointmentTypes : []
};

const handleGetAppointments = (state, action) => {
  const { data: appointments } = action.payload;
  return {
    ...state,
    appointments
  };
};

const handleGetAppointmentTypes = (state, action) => {
  const { data: appointmentTypes } = action.payload;
  return {
    ...state,
    appointmentTypes
  };
};

const handleCreateAppointment = (state, action) => {
  const appointment = action.payload;
  const appointments = {
    ...state.appointments,
    [appointment.id]: appointment
  };

  return {
    ...state,
    appointments
  };
};

const handleSelectAppointment = (state, action) => {
  const appointment = state.appointments.find(it => it.id === action.payload);

  return {
    ...state,
    appointment
  };
};

const handleClearAppointment = state => ({
  ...state,
  appointment: {}
});

const handleUpdateAppointment = (state, action) => {
  const appointment = action.payload;
  const appointments = {
    ...state.appointments,
    [appointment.id]: appointment
  };

  return {
    ...state,
    appointments,
    appointment
  };
};
export default handleActions(
  {
    [getAppointments]     : handleGetAppointments,
    [getAppointmentTypes] : handleGetAppointmentTypes,
    [createAppointment]   : handleCreateAppointment,
    [selectAppointment]   : handleSelectAppointment,
    [clearAppointment]    : handleClearAppointment,
    [updateAppointment]   : handleUpdateAppointment
  },
  initialState
);
