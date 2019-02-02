import { handleActions } from 'redux-actions';
import {
  getAppointmentTypes,
  createAppointment,
  getAppointments
} from './appointments.actions';

const initialState = {
  showModal          : false,
  appointments       : {},
  currentAppointment : {},
  appointmentTypes   : []
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

export default handleActions(
  {
    [getAppointments]     : handleGetAppointments,
    [getAppointmentTypes] : handleGetAppointmentTypes,
    [createAppointment]   : handleCreateAppointment
  },
  initialState
);
