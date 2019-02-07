import _ from 'lodash';
import { handleActions } from 'redux-actions';

import { pickBy } from '../../utils';
import { filterByText } from '../../utils/filters';

import {
  getExamTypes, createExamType, updateExamType, removeExamType, filterByName
} from './exam-types.actions';

const initialState = {
  examTypes    : {},
  examTypesBkp : {}
};

const handleFilterByName = (state, action) => {
  const input = action.payload;
  const types = _.values(state.examTypesBkp);
  const values = filterByText(types, 'exam_type_name', input);
  const examTypes = pickBy(values, 'id');

  return {
    ...state,
    examTypes
  };
};

const handleGetExamTypes = (state, action) => {
  const { data } = action.payload;
  const examTypes = pickBy(data, 'id');
  return {
    ...state,
    examTypes,
    examTypesBkp: { ...examTypes }
  };
};

const handleCreateExamType = (state, action) => {
  const examType = action.payload;
  const id = examType.id.toString();

  return {
    ...state,
    examTypes: {
      ...state.examTypes,
      [id]: examType
    },
    examTypesBkp: {
      ...state.examTypesBkp,
      [id]: examType
    }
  };
};

const handleUpdateExamType = (state, action) => {
  const { data: examType } = action.payload;
  const id = examType.id.toString();

  return {
    ...state,
    examTypes: {
      ...state.examTypes,
      [id]: examType
    },
    examTypesBkp: {
      ...state.examTypesBkp,
      [id]: examType
    }
  };
};

const handleRemoveExamType = (state, action) => {
  const { id } = action.payload.data;
  const { [id]: del, ...examTypes } = state.examTypes;

  return {
    ...state,
    examTypes
  };
};

export default handleActions(
  {
    [getExamTypes]   : handleGetExamTypes,
    [createExamType] : handleCreateExamType,
    [updateExamType] : handleUpdateExamType,
    [removeExamType] : handleRemoveExamType,
    [filterByName]   : handleFilterByName
  },
  initialState
);
