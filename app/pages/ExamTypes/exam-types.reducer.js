import _ from 'lodash';
import { handleActions } from 'redux-actions';

import { pickBy } from '../../utils';
import { filterByText } from '../../utils/filters';

import {
  getExamTypes,
  createExamType,
  updateExamType,
  removeExamType,
  filterByName,
  selectExamType,
  clearExamType,
  showExamTypeModal,
  hideExamTypeModal
} from './exam-types.actions';

const initialState = {
  examTypes         : {},
  examTypesBkp      : {},
  examType          : {},
  showExamTypeModal : false
};

const handleSelectExamType = (state, action) => {
  const id = action.payload;

  return {
    ...state,
    examType: { ...state.examTypes[id] }
  };
};

const handleClearExamType = state => ({
  ...state,
  examType: {}
});

const handleShowExamTypeModal = state => ({
  ...state,
  showExamTypeModal: true
});

const handleHideExamTypeModal = state => ({
  ...state,
  showExamTypeModal: false
});

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
    },
    examType: {}
  };
};

const handleRemoveExamType = (state, action) => {
  const { id } = action.payload.data;
  const { [id]: del, ...examTypes } = state.examTypes;
  const { [id]: del2, ...examTypesBkp } = state.examTypesBkp;

  return {
    ...state,
    examTypes,
    examTypesBkp
  };
};

export default handleActions(
  {
    [getExamTypes]      : handleGetExamTypes,
    [createExamType]    : handleCreateExamType,
    [updateExamType]    : handleUpdateExamType,
    [removeExamType]    : handleRemoveExamType,
    [filterByName]      : handleFilterByName,
    [selectExamType]    : handleSelectExamType,
    [clearExamType]     : handleClearExamType,
    [showExamTypeModal] : handleShowExamTypeModal,
    [hideExamTypeModal] : handleHideExamTypeModal
  },
  initialState
);
