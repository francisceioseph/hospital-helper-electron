import _ from 'lodash';
import { handleActions } from 'redux-actions';
import { pickBy } from '../../utils';
import { filterByText } from '../../utils/filters';
import {
  getDoctors,
  createDoctor,
  updateDoctor,
  removeDoctor,
  filterByName,
  showEditDoctorModal,
  hideEditDoctorModal,
  selectDoctor
} from './doctors.actions';

import { Doctor } from '../../models';

const initialState = {
  showModal  : false,
  doctors    : {},
  doctorsBkp : {},
  doctor     : new Doctor()
};

const handleFilterByName = (state, action) => {
  const input = action.payload;
  const types = _.values(state.doctorsBkp);
  const values = filterByText(types, 'personal_datum.full_name', input);
  const doctors = pickBy(values, 'id');

  return {
    ...state,
    doctors
  };
};

const handleShowEditDoctorModal = state => ({
  ...state,
  showModal: true
});

const handleHideEditDoctorModal = state => ({
  ...state,
  showModal: false
});

const handleGetDoctors = (state, action) => {
  const { data } = action.payload;
  const doctors = pickBy(data, 'id');
  return {
    ...state,
    doctors,
    doctorsBkp: { ...doctors }
  };
};

const handleSelectDoctor = (state, action) => {
  const doctorId = action.payload;
  const doctor = { ...state.doctors[doctorId] };
  return {
    ...state,
    doctor
  };
};

const handleCreateDoctor = (state, action) => {
  const doctor = action.payload;

  return {
    ...state,
    doctors: {
      ...state.doctors,
      [doctor.id]: doctor
    },
    doctorsBkp: {
      ...state.doctorsBkp,
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
    },
    doctorsBkp: {
      ...state.doctorsBkp,
      [doctor.id]: doctor
    }
  };
};

const handleRemoveDoctor = (state, action) => {
  const id = action.payload;
  const { [id.toString()]: del, ...doctors } = state.doctors;
  const { [id.toString()]: del2, ...doctorsBkp } = state.doctorsBkp;

  return {
    ...state,
    doctors,
    doctorsBkp
  };
};

export default handleActions(
  {
    [getDoctors]          : handleGetDoctors,
    [createDoctor]        : handleCreateDoctor,
    [updateDoctor]        : handleUpdateDoctor,
    [removeDoctor]        : handleRemoveDoctor,
    [filterByName]        : handleFilterByName,
    [showEditDoctorModal] : handleShowEditDoctorModal,
    [hideEditDoctorModal] : handleHideEditDoctorModal,
    [selectDoctor]        : handleSelectDoctor
  },
  initialState
);
