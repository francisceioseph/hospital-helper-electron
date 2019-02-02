import _ from 'lodash';
import { handleActions } from 'redux-actions';
import {
  getExamTypes, createExamType, updateExamType, removeExamType,
} from './exam-types.actions';

const initialState = {
  examTypes: {},
};

const handleGetExamTypes = (state, action) => {
  const { data } = action.payload;
  const examTypes = _.pickBy(data, 'id');
  return {
    ...state,
    examTypes,
  };
};

const handleCreateExamType = (state, action) => {
  const examType = action.payload;
  const id = examType.id.toString();

  return {
    ...state,
    examTypes: {
      ...state.examTypes,
      [id]: examType,
    },
  };
};

const handleUpdateExamType = (state, action) => {
  const { data: examType } = action.payload;
  const id = examType.id.toString();

  return {
    ...state,
    examTypes: {
      ...state.examTypes,
      [id]: examType,
    },
  };
};

const handleRemoveExamType = (state, action) => {
  const { id } = action.payload.data;
  const { [id]: del, ...examTypes } = state.examTypes;

  return {
    ...state,
    examTypes,
  };
};

export default handleActions(
  {
    [getExamTypes]: handleGetExamTypes,
    [createExamType]: handleCreateExamType,
    [updateExamType]: handleUpdateExamType,
    [removeExamType]: handleRemoveExamType,
  },
  initialState
);
