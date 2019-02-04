// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import menuReducer from '../containers/SideMenu/reducer';
import pageReducer from '../containers/layouts/reducer';
import specialtiesReducer from '../pages/Specialty/specialty.reducer';
import doctorsReducer from '../pages/Doctors/doctors.reducer';
import pacientsReducer from '../pages/Pacient/pacient.reducer';
import examsReducer from '../pages/Exams/exams.reducer';
import appointmentsReducer from '../pages/Appointments/appointments.reducer';
import surgeryReducer from '../pages/Surgeries/surgeries.reducer';
import loginReducer from '../pages/Login/login.reducer';
import appointmentTypeReducer from '../pages/AppointmentTypes/appointment-types.reducer';
import examTypesReducer from '../pages/ExamTypes/exam-types.reducer';
import rolesReducer from '../pages/Roles/roles.reducer';
import surgeryTypesReducer from '../pages/SurgeryTypes/surgery-types.reducer';

export default function createRootReducer(history: History) {
  return combineReducers({
    router           : connectRouter(history),
    menu             : menuReducer,
    page             : pageReducer,
    specialties      : specialtiesReducer,
    doctors          : doctorsReducer,
    pacients         : pacientsReducer,
    exams            : examsReducer,
    appointments     : appointmentsReducer,
    surgeries        : surgeryReducer,
    login            : loginReducer,
    appointmentTypes : appointmentTypeReducer,
    examTypes        : examTypesReducer,
    roles            : rolesReducer,
    surgeryTypes     : surgeryTypesReducer,
  });
}
