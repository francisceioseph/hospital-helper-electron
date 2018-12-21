import { createAction } from 'redux-actions';
import * as WebAPI from '../../utils/webAPI';

export const GET_EXAM_TYPES = 'FETCH_EXAM_TYPES';
export const CREATE_EXAM_TYPE = 'CREATE_EXAM_TYPES';
export const UPDATE_EXAM_TYPE = 'UPDATE_EXAM_TYPES';
export const REMOVE_EXAM_TYPE = 'DELETE_EXAM_TYPES';

export const getExamTypes = createAction(
  GET_EXAM_TYPES,
  WebAPI.getExamTypes
);
export const createExamType = createAction(CREATE_EXAM_TYPE);
export const updateExamType = createAction(UPDATE_EXAM_TYPE);
export const removeExamType = createAction(
  REMOVE_EXAM_TYPE,
  WebAPI.removeExamType
);
