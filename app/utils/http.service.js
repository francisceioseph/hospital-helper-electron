import axios from 'axios';

import { cacheAdapterEnhancer, throttleAdapterEnhancer } from 'axios-extensions';
import { history, store } from '../store';
import { clearCredentials } from '../pages/Login/login.actions';
import { setRequestDuration, setRequestError, setRequestSuccess } from '../containers/layouts/actions';

const BASE_BACKEND_URL = 'http://localhost:3000';

export const postLoginUrl = () => '/login';
export const POST_USER_URL = '/signup';

export const POST_DOCTOR_URL = '/doctors';
export const GET_DOCTORS_URL = '/doctors';
export const getDoctorUrl = doctorId => `/doctors/${doctorId}`;
export const updateDoctorUrl = doctorId => `/doctors/${doctorId}`;

export const GET_PACIENTS_URL = '/pacients';
export const POST_PACIENT_URL = '/pacients';
export const updatePacientUrl = pacientId => `/pacients/${pacientId}`;
export const removePacientUrl = pacientId => `/pacients/${pacientId}`;

export const GET_APPOINTMENT_TYPES_URL = '/appointment-types';
export const POST_APPOINTMENT_TYPE_URL = '/appointment-types';
export const getRemoveAppointmentTypeUrl = id => `/appointment-types/${id}`;
export const getUpdateAppointmentTypeUrl = id => `/appointment-types/${id}`;

export const GET_APPOINTMENTS_URL = '/appointments';
export const POST_APPOINTMENT_URL = '/appointments';
export const getAppointmentsUrl = doctorId => `/appointments/doctor/${doctorId}`;
export const getAppointmentUrl = appointmentId => `/appointments/${appointmentId}`;
export const updateAppointmentUrl = appointmentId => `/appointments/${appointmentId}`;

export const GET_SPECIALTIES_URL = '/specialties';
export const POST_SPECIALTY_URL = '/specialties';
export const updateSpecialtyUrl = id => `/specialties/${id}`;
export const removeSpecialtyUrl = id => `/specialties/${id}`;

export const GET_EXAM_TYPES_URL = '/exam-types';
export const POST_EXAM_TYPES_URL = '/exam-types';
export const removeExamTypeUrl = id => `/exam-types/${id}`;
export const updateExamTypeUrl = id => `/exam-types/${id}`;

export const GET_EXAMS_URL = '/exams';
export const POST_EXAM_URL = '/exams';
export const updateExamUrl = id => `/exams/${id}`;
export const getExamUrl = id => `/exams/${id}`;
export const getExamsUrl = examTypeId => `/exams/exam-type/${examTypeId}`;

export const GET_SURGERIES_URL = '/surgeries';
export const POST_SURGERY_URL = '/surgeries';
export const updateSurgeryUrl = id => `/surgeries/${id}`;
export const getSurgeryUrl = id => `/surgeries/${id}`;
export const getSurgeriesUrl = doctorId => `/surgeries/doctor/${doctorId}`;

export const GET_SURGERY_TYPES_URL = '/surgery-types';
export const removeSurgeryTypeUrl = id => `/surgery-types/${id}`;

export const GET_ROLES_URL = '/roles';
export const POST_ROLE_URL = '/roles';

export const getProfileUrl = id => `/profiles/${id}`;

export const configureAxiosInterceptors = () => {
  axios.interceptors.request.use((oldSettings) => {
    const settings = { ...oldSettings };
    const cacheStr = localStorage.getItem('DOCTOR_ASSISTANT_AUTH_TOKEN');
    const cache = cacheStr ? JSON.parse(cacheStr) : {};

    settings.headers.common.Authorization = cache.token;
    settings.headers.common.Accept = 'application/json';
    settings.headers.common['Content-Type'] = 'application/json';
    settings.headers.common['Cache-Control'] = 'no-cache';
    settings.adapter = throttleAdapterEnhancer(cacheAdapterEnhancer(axios.defaults.adapter), { threshold: 5 * 1000 });

    settings.metadata = { startTime: new Date() };
    return settings;
  });

  axios.interceptors.response.use(
    (response) => {
      response.config.metadata.endTime = new Date();
      response.duration = response.config.metadata.endTime - response.config.metadata.startTime;

      store.dispatch(setRequestDuration(response.duration));
      store.dispatch(setRequestSuccess());
      return response;
    },
    (error) => {
      if (error) {
        error.config.metadata.endTime = new Date();
        error.duration = error.config.metadata.endTime - error.config.metadata.startTime;

        store.dispatch(setRequestDuration(error.duration));
        store.dispatch(setRequestError(error));
      }

      if (error.response && error.response.status === 401) {
        store.dispatch(clearCredentials());
        history.push('/login');
      }

      return error;
    }
  );
};

export const getRequest = async (path, options) => {
  const URL = BASE_BACKEND_URL + path;
  return axios.get(URL, options);
};

export const postRequest = async (path, data) => {
  const URL = BASE_BACKEND_URL + path;
  return axios.post(URL, data);
};

export const putRequest = async (path, data) => {
  const URL = BASE_BACKEND_URL + path;
  return axios.put(URL, data);
};

export const patchRequest = async (path, data) => {
  const URL = BASE_BACKEND_URL + path;
  return axios.patch(URL, data);
};

export const deleteRequest = async (path) => {
  const URL = BASE_BACKEND_URL + path;
  return axios.delete(URL);
};
