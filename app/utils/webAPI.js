import * as http from './http';

export const postLogin = data => http.postRequest(http.postLoginUrl(), { user: data });

export const getPacients = () => http.getRequest(http.GET_PACIENTS_URL);
export const postPacient = data => http.postRequest(http.POST_PACIENT_URL, data);
export const updatePacient = (id, data) => http.patchRequest(http.updatePacientUrl(id), data);
export const removePacient = id => http.deleteRequest(http.removePacientUrl(id));

export const getDoctors = () => http.getRequest(http.GET_DOCTORS_URL);
export const createDoctor = data => http.postRequest(http.POST_DOCTOR_URL, data);
export const getDoctor = id => http.getRequest(http.getDoctorUrl(id));
export const updateDoctor = (id, data) => http.patchRequest(http.updateDoctorUrl(id), data);
export const removeDoctor = id => http.deleteRequest(http.getDoctorUrl(id));

export const getAppointmentTypes = () => http.getRequest(http.GET_APPOINTMENT_TYPES_URL);
export const createAppointmentType = data => http.postRequest(http.POST_APPOINTMENT_TYPE_URL, data);
export const removeAppointmentType = id => http.deleteRequest(http.getRemoveAppointmentTypeUrl(id));
export const getAppointment = id => http.getRequest(http.getAppointmentUrl(id));
export const getAppointments = () => http.getRequest(http.GET_APPOINTMENTS_URL);
export const createAppointment = data => http.postRequest(http.POST_APPOINTMENT_URL, data);
export const updateAppointment = (id, data) => http.patchRequest(http.updateAppointmentUrl(id), data);
export const removeAppointment = id => http.deleteRequest(http.getAppointmentUrl(id));

export const getSpecialties = () => http.getRequest(http.GET_SPECIALTIES_URL);
export const createSpecialty = data => http.postRequest(http.POST_SPECIALTY_URL, data);
export const removeSpecialty = id => http.deleteRequest(http.removeSpecialtyUrl(id));

export const getExamTypes = () => http.getRequest(http.GET_EXAM_TYPES_URL);
export const createExamType = data => http.postRequest(http.POST_EXAM_TYPES_URL, data);
export const removeExamType = id => http.deleteRequest(http.removeExamTypeUrl(id));

export const getExam = id => http.getRequest(http.getExamUrl(id));
export const getExams = () => http.getRequest(http.GET_EXAMS_URL);
export const createExam = data => http.postRequest(http.POST_EXAM_URL, data);
export const updateExam = (id, data) => http.patchRequest(http.updateExamUrl(id), data);
export const removeExam = id => http.deleteRequest(http.getExamUrl(id));

export const getRoles = () => http.getRequest(http.GET_ROLES_URL);
export const createRole = data => http.postRequest(http.POST_ROLE_URL, data);
