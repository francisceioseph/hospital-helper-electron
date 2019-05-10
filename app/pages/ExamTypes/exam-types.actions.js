import { createAction } from 'redux-actions';

export const GET_EXAM_TYPES = 'FETCH_EXAM_TYPES';
export const CREATE_EXAM_TYPE = 'CREATE_EXAM_TYPES';
export const UPDATE_EXAM_TYPE = 'UPDATE_EXAM_TYPES';
export const REMOVE_EXAM_TYPE = 'DELETE_EXAM_TYPES';
export const SHOW_EXAM_TYPE_MODAL = 'SHOW_EXAM_TYPE_MODAL';
export const HIDE_EXAM_TYPE_MODAL = 'HIDE_EXAM_TYPE_MODAL';
export const SELECT_EXAM_TYPE = 'SELECT_EXAM_TYPE';
export const CLEAR_EXAM_TYPE = 'CLEAR_EXAM_TYPE';
export const SEARCH_EXAM_TYPY_BY_NAME = 'SEARCH_EXAM_TYPY_BY_NAME';

export const selectExamType = createAction(SELECT_EXAM_TYPE);
export const clearExamType = createAction(CLEAR_EXAM_TYPE);
export const showExamTypeModal = createAction(SHOW_EXAM_TYPE_MODAL);
export const hideExamTypeModal = createAction(HIDE_EXAM_TYPE_MODAL);
export const getExamTypes = createAction(GET_EXAM_TYPES);
export const createExamType = createAction(CREATE_EXAM_TYPE);
export const updateExamType = createAction(UPDATE_EXAM_TYPE);
export const removeExamType = createAction(REMOVE_EXAM_TYPE);
export const filterByName = createAction(SEARCH_EXAM_TYPY_BY_NAME);
