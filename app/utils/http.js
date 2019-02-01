import axios from 'axios';

const BASE_BACKEND_URL = 'http://localhost:3000';

export const postLoginUrl = () => '/login';

export const GET_DOCTORS_URL = '/users/doctors';
export const POST_DOCTOR_URL = '/users/register';
export const getDoctorUrl = doctorId => `/users/doctors/${doctorId}`;
export const updateDoctorUrl = doctorId => `/users/doctors/edit/${doctorId}`;

export const GET_PACIENTS_URL = '/users/pacients';
export const POST_PACIENT_URL = '/users/pacients/new';
export const updatePacientUrl = pacientId => `/users/pacients/edit/${pacientId}`;
export const removePacientUrl = pacientId => `/users/pacients/remove/${pacientId}`;

export const GET_APPOINTMENT_TYPES_URL = '/appointment-types';
export const POST_APPOINTMENT_TYPE_URL = '/appointment-types/new';
export const getRemoveAppointmentTypeUrl = id => `/appointment-types/remove/${id}`;

export const GET_APPOINTMENTS_URL = '/appointments';
export const POST_APPOINTMENT_URL = '/appointments/new';
export const getAppointmentUrl = appointmentId => `/appointments/${appointmentId}`;
export const updateAppointmentUrl = appointmentId => `/appointments/edit/${appointmentId}`;

export const GET_SPECIALTIES_URL = '/specialties';
export const POST_SPECIALTY_URL = '/specialties/new';
export const removeSpecialtyUrl = id => `/specialties/${id}`;

export const GET_EXAM_TYPES_URL = '/exam-types';
export const POST_EXAM_TYPES_URL = '/exam-types/new';
export const removeExamTypeUrl = id => `/exam-types/remove/${id}`;

export const GET_EXAMS_URL = '/exams';
export const POST_EXAM_URL = '/exams/new';
export const updateExamUrl = id => `/exams/edit${id}`;
export const getExamUrl = id => `/exams/${id}`;

export const GET_ROLES_URL = '/roles';
export const POST_ROLE_URL = '/roles/new';

export const configureAxiosInterceptors = () => {
  axios.interceptors.request.use(oldSettings => {
    const settings = { ...oldSettings };
    const cacheStr = localStorage.getItem('DOCTOR_ASSISTANT_AUTH_TOKEN');
    const cache = cacheStr ? JSON.parse(cacheStr) : {};

    settings.headers.common.Authorization = cache.token;
    settings.headers.common.Accept = 'application/json';
    settings.headers.common['Content-Type'] = 'application/json';
    return settings;
  });
};

export const getRequest = async path => {
  const URL = BASE_BACKEND_URL + path;
  return axios.get(URL);
};

export const postRequest = async(path, data) => {
  const URL = BASE_BACKEND_URL + path;
  return axios.post(URL, data);
};

export const putRequest = async(path, data) => {
  const URL = BASE_BACKEND_URL + path;
  return axios.put(URL, data);
};

export const patchRequest = async(path, data) => {
  const URL = BASE_BACKEND_URL + path;
  return axios.pacth(URL, data);
};

export const deleteRequest = async path => {
  const URL = BASE_BACKEND_URL + path;
  return axios.delete(URL);
};
