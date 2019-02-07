import { createAction } from 'redux-actions';

export const GET_EXAM_TYPES = 'FETCH_EXAM_TYPES';
export const CREATE_EXAM_TYPE = 'CREATE_EXAM_TYPES';
export const UPDATE_EXAM_TYPE = 'UPDATE_EXAM_TYPES';
export const REMOVE_EXAM_TYPE = 'DELETE_EXAM_TYPES';

export const getExamTypes = createAction(GET_EXAM_TYPES);
export const createExamType = createAction(CREATE_EXAM_TYPE);
export const updateExamType = createAction(UPDATE_EXAM_TYPE);
export const removeExamType = createAction(REMOVE_EXAM_TYPE);
export const filterByName = createAction('SEARCH_EXAM_TYPY_BY_NAME');
