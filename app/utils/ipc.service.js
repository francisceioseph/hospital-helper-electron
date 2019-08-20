import { IPC as ipc } from './ipc';
import {
  GET_PACIENTS_CHANNEL,
  GET_PACIENTS_RESPONSE_CHANNEL,
  POST_PACIENT_CHANNEL,
  POST_PACIENT_RESPONSE_CHANNEL,
  UPDATE_PACIENT_CHANNEL,
  UPDATE_PACIENT_RESPONSE_CHANNEL,
  REMOVE_PACIENT_CHANNEL,
  REMOVE_PACIENT_RESPONSE_CHANNEL,
  GET_DOCTORS_CHANNEL,
  GET_DOCTORS_RESPONSE_CHANNEL,
  POST_DOCTOR_CHANNEL,
  POST_DOCTOR_RESPONSE_CHANNEL,
  GET_DOCTOR_CHANNEL,
  GET_DOCTOR_RESPONSE_CHANNEL,
  UPDATE_DOCTOR_CHANNEL,
  UPDATE_DOCTOR_RESPONSE_CHANNEL,
  REMOVE_DOCTOR_CHANNEL,
  REMOVE_DOCTOR_RESPONSE_CHANNEL,
  GET_APPOINTMENT_TYPES_CHANNEL,
  GET_APPOINTMENT_TYPES_RESPONSE_CHANNEL,
  POST_APPOINTMENT_TYPE_CHANNEL,
  POST_APPOINTMENT_TYPE_RESPONSE_CHANNEL,
  UPDATE_APPOINTMENT_TYPE_CHANNEL,
  UPDATE_APPOINTMENT_TYPE_RESPONSE_CHANNEL,
  REMOVE_APPOINTMENT_TYPE_CHANNEL,
  REMOVE_APPOINTMENT_TYPE_RESPONSE_CHANNEL,
  GET_APPOINTMENT_CHANNEL,
  GET_APPOINTMENT_RESPONSE_CHANNEL,
  GET_DOCTOR_APPOINTMENTS_CHANNEL,
  POST_APPOINTMENT_CHANNEL,
  UPDATE_APPOINTMENT_CHANNEL,
  UPDATE_APPOINTMENT_RESPONSE_CHANNEL,
  REMOVE_APPOINTMENT_CHANNEL,
  REMOVE_APPOINTMENT_RESPONSE_CHANNEL,
  GET_SPECIALTIES_CHANNEL,
  GET_SPECIALTIES_RESPONSE_CHANNEL,
  POST_SPECIALTY_CHANNEL,
  POST_SPECIALTY_RESPONSE_CHANNEL,
  UPDATE_SPECIALTY_CHANNEL,
  UPDATE_SPECIALTY_RESPONSE_CHANNEL,
  REMOVE_SPECIALTY_CHANNEL,
  REMOVE_SPECIALTY_RESPONSE_CHANNEL,
  GET_EXAM_TYPES_CHANNEL,
  GET_EXAM_TYPES_RESPONSE_CHANNEL,
  POST_EXAM_TYPE_CHANNEL,
  POST_EXAM_TYPE_RESPONSE_CHANNEL,
  UPDATE_EXAM_TYPE_CHANNEL,
  UPDATE_EXAM_TYPE_RESPONSE_CHANNEL,
  REMOVE_EXAM_TYPE_CHANNEL,
  REMOVE_EXAM_TYPE_RESPONSE_CHANNEL,
  GET_EXAM_CHANNEL,
  GET_EXAMS_FOR_TYPE_CHANNEL,
  GET_EXAMS_FOR_TYPE_RESPONSE_CHANNEL,
  POST_EXAM_CHANNEL,
  POST_EXAM_RESPONSE_CHANNEL,
  UPDATE_EXAM_CHANNEL,
  UPDATE_EXAM_RESPONSE_CHANNEL,
  REMOVE_EXAM_CHANNEL,
  REMOVE_EXAM_RESPONSE_CHANNEL,
  GET_SURGERY_TYPES_CHANNEL,
  GET_SURGERY_TYPES_RESPONSE_CHANNEL,
  POST_SURGERY_TYPE_CHANNEL,
  POST_SURGERY_TYPE_RESPONSE_CHANNEL,
  UPDATE_SURGERY_TYPE_CHANNEL,
  UPDATE_SURGERY_TYPE_RESPONSE_CHANNEL,
  REMOVE_SURGERY_TYPE_CHANNEL,
  REMOVE_SURGERY_TYPE_RESPONSE_CHANNEL,
  GET_SURGERY_CHANNEL,
  GET_SURGERY_RESPONSE_CHANNEL,
  GET_SURGERIES_BY_DOCTOR_CHANNEL,
  GET_SURGERIES_BY_DOCTOR_RESPONSE_CHANNEL,
  POST_SURGERY_CHANNEL,
  POST_SURGERY_RESPONSE_CHANNEL,
  UPDATE_SURGERY_CHANNEL,
  UPDATE_SURGERY_RESPONSE_CHANNEL
} from './ipc.constants';

export const getPacients = () => ipc.sendOnce(GET_PACIENTS_CHANNEL, GET_PACIENTS_RESPONSE_CHANNEL);
export const postPacient = data => ipc.sendOnce(POST_PACIENT_CHANNEL, POST_PACIENT_RESPONSE_CHANNEL, { data });
export const updatePacient = (id, data) => ipc.sendOnce(UPDATE_PACIENT_CHANNEL, UPDATE_PACIENT_RESPONSE_CHANNEL, { id, data });
export const removePacient = id => ipc.sendOnce(REMOVE_PACIENT_CHANNEL, REMOVE_PACIENT_RESPONSE_CHANNEL, { id });

export const getDoctors = () => ipc.sendOnce(GET_DOCTORS_CHANNEL, GET_DOCTORS_RESPONSE_CHANNEL);
export const createDoctor = data => ipc.sendOnce(POST_DOCTOR_CHANNEL, POST_DOCTOR_RESPONSE_CHANNEL, { data });
export const getDoctor = id => ipc.sendOnce(GET_DOCTOR_CHANNEL, GET_DOCTOR_RESPONSE_CHANNEL, { id });
export const updateDoctor = (id, data) => ipc.sendOnce(UPDATE_DOCTOR_CHANNEL, UPDATE_DOCTOR_RESPONSE_CHANNEL, { id, data });
export const removeDoctor = id => ipc.sendOnce(REMOVE_DOCTOR_CHANNEL, REMOVE_DOCTOR_RESPONSE_CHANNEL, { id });

export const getAppointmentTypes = () => ipc.sendOnce(GET_APPOINTMENT_TYPES_CHANNEL, GET_APPOINTMENT_TYPES_RESPONSE_CHANNEL);
export const createAppointmentType = data => ipc.sendOnce(POST_APPOINTMENT_TYPE_CHANNEL, POST_APPOINTMENT_TYPE_RESPONSE_CHANNEL, { data });
export const updateAppointmentType = (id, data) => ipc.sendOnce(UPDATE_APPOINTMENT_TYPE_CHANNEL, UPDATE_APPOINTMENT_TYPE_RESPONSE_CHANNEL, { id, data });
export const removeAppointmentType = id => ipc.sendOnce(REMOVE_APPOINTMENT_TYPE_CHANNEL, REMOVE_APPOINTMENT_TYPE_RESPONSE_CHANNEL, { id });

export const getAppointment = id => ipc.sendOnce(GET_APPOINTMENT_CHANNEL, GET_APPOINTMENT_RESPONSE_CHANNEL, { id });
export const getAppointments = doctorId => ipc.sendOnce(GET_DOCTOR_APPOINTMENTS_CHANNEL, GET_DOCTOR_APPOINTMENTS_CHANNEL, { doctorId });
export const createAppointment = data => ipc.sendOnce(POST_APPOINTMENT_CHANNEL, { data });
export const updateAppointment = (id, data) => ipc.sendOnce(UPDATE_APPOINTMENT_CHANNEL, UPDATE_APPOINTMENT_RESPONSE_CHANNEL, { id, data });
export const removeAppointment = id => ipc.sendOnce(REMOVE_APPOINTMENT_CHANNEL, REMOVE_APPOINTMENT_RESPONSE_CHANNEL, { id });

export const getSpecialties = () => ipc.sendOnce(GET_SPECIALTIES_CHANNEL, GET_SPECIALTIES_RESPONSE_CHANNEL);
export const createSpecialty = data => ipc.sendOnce(POST_SPECIALTY_CHANNEL, POST_SPECIALTY_RESPONSE_CHANNEL, { data });
export const updateSpecialty = (id, data) => ipc.sendOnce(UPDATE_SPECIALTY_CHANNEL, UPDATE_SPECIALTY_RESPONSE_CHANNEL, { id, data });
export const removeSpecialty = id => ipc.sendOnce(REMOVE_SPECIALTY_CHANNEL, REMOVE_SPECIALTY_RESPONSE_CHANNEL, { id });

export const getExamTypes = () => ipc.sendOnce(GET_EXAM_TYPES_CHANNEL, GET_EXAM_TYPES_RESPONSE_CHANNEL);
export const createExamType = data => ipc.sendOnce(POST_EXAM_TYPE_CHANNEL, POST_EXAM_TYPE_RESPONSE_CHANNEL, { data });
export const updateExamType = (id, data) => ipc.sendOnce(UPDATE_EXAM_TYPE_CHANNEL, UPDATE_EXAM_TYPE_RESPONSE_CHANNEL, { id, data });
export const removeExamType = id => ipc.sendOnce(REMOVE_EXAM_TYPE_CHANNEL, REMOVE_EXAM_TYPE_RESPONSE_CHANNEL, { id });

export const getExam = id => ipc.sendOnce(GET_EXAM_CHANNEL, { id });
export const getExams = examTypeId => ipc.sendOnce(GET_EXAMS_FOR_TYPE_CHANNEL, GET_EXAMS_FOR_TYPE_RESPONSE_CHANNEL, { examTypeId });
export const createExam = data => ipc.sendOnce(POST_EXAM_CHANNEL, POST_EXAM_RESPONSE_CHANNEL, { data });
export const updateExam = (id, data) => ipc.sendOnce(UPDATE_EXAM_CHANNEL, UPDATE_EXAM_RESPONSE_CHANNEL, { id, data });
export const removeExam = id => ipc.sendOnce(REMOVE_EXAM_CHANNEL, REMOVE_EXAM_RESPONSE_CHANNEL, { id });

export const getSurgeryTypes = id => ipc.sendOnce(GET_SURGERY_TYPES_CHANNEL, GET_SURGERY_TYPES_RESPONSE_CHANNEL, { id });
export const createSurgeryType = data => ipc.sendOnce(POST_SURGERY_TYPE_CHANNEL, POST_SURGERY_TYPE_RESPONSE_CHANNEL, { data });
export const updateSurgeryType = (id, data) => ipc.sendOnce(UPDATE_SURGERY_TYPE_CHANNEL, UPDATE_SURGERY_TYPE_RESPONSE_CHANNEL, { id, data });
export const removeSurgeryType = id => ipc.sendOnce(REMOVE_SURGERY_TYPE_CHANNEL, REMOVE_SURGERY_TYPE_RESPONSE_CHANNEL, { id });

export const getSurgery = id => ipc.sendOnce(GET_SURGERY_CHANNEL, GET_SURGERY_RESPONSE_CHANNEL, { id });
export const getSurgeries = doctorId => ipc.sendOnce(GET_SURGERIES_BY_DOCTOR_CHANNEL, GET_SURGERIES_BY_DOCTOR_RESPONSE_CHANNEL, { doctorId });
export const createSurgery = data => ipc.sendOnce(POST_SURGERY_CHANNEL, POST_SURGERY_RESPONSE_CHANNEL, { data });
export const updateSurgery = (id, data) => ipc.sendOnce(UPDATE_SURGERY_CHANNEL, UPDATE_SURGERY_RESPONSE_CHANNEL, { id, data });
export const removeSurgery = id => ipc.sendOnce(REMOVE_APPOINTMENT_CHANNEL, REMOVE_APPOINTMENT_RESPONSE_CHANNEL, { id });
