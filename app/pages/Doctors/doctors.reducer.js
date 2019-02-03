import { pickBy } from '../../utils';
import { handleActions } from 'redux-actions';
import {
  getDoctors,
  createDoctor,
  updateDoctor,
  removeDoctor
} from './doctors.actions';

const initialState = {
  showModal: false,
  doctors: {},
  currentDoctor: {}
};

const handleGetDoctors = (state, action) => {
  const { data } = action.payload;
  const doctors = pickBy(data, 'id');
  return {
    ...state,
    doctors
  };
};

const handleCreateDoctor = (state, action) => {
  const doctor = action.payload;

  return {
    ...state,
    doctors: {
      ...state.doctors,
      [doctor.id]: doctor
    }
  };
};

const handleUpdateDoctor = (state, action) => {
  const doctor = action.payload;
  return {
    ...state,
    doctors: {
      ...state.doctors,
      [doctor.id]: doctor
    }
  };
};

const handleRemoveDoctor = (state, action) => {
  const id = action.payload;
  const { [id.toString()]: del, ...doctors } = state.doctors;

  return {
    ...state,
    doctors
  };
};

export default handleActions(
  {
    [getDoctors]: handleGetDoctors,
    [createDoctor]: handleCreateDoctor,
    [updateDoctor]: handleUpdateDoctor,
    [removeDoctor]: handleRemoveDoctor
  },
  initialState
);
