import { createAction } from 'redux-actions';
import * as WebAPI from '../../utils/api.service';

export const GET_EXAMS = 'FETCH_EXAMS';
export const GET_EXAM_TYPES = 'FETCH_EXAM_TYPES';
export const CREATE_EXAM = 'CREATE_EXAM';
export const UPDATE_EXAM = 'UPDATE_EXAM';
export const DELETE_EXAM = 'DELETE_EXAM';

export const getExams = createAction(GET_EXAMS);
export const getExamTypes = createAction(GET_EXAM_TYPES, WebAPI.getExamTypes);

export const createExam = createAction(CREATE_EXAM);
export const updateExam = createAction(UPDATE_EXAM);
export const deleteExam = createAction(DELETE_EXAM);

export const selectExam = createAction('SELECT_EXAM');
export const clearExam = createAction('CLEAR_EXAM');
