import { handleActions } from 'redux-actions';
import { pickBy } from '../../utils';
import {
  getExams, getExamTypes, createExam, updateExam, deleteExam, selectExam, clearExam
} from './exams.actions';

const initialState = {
  examTypes : {},
  exams     : {},
  exam      : {}
};

const handleGetExams = (state, action) => {
  const { data } = action.payload;
  const exams = pickBy(data, 'id');
  return {
    ...state,
    exams
  };
};

const handleGetExamTypes = (state, action) => {
  const { data: examTypes } = action.payload;
  return {
    ...state,
    examTypes
  };
};

const handleCreateExam = (state, action) => {
  const { data: exam } = action.payload;
  const exams = {
    ...state.exams,
    [exam.id]: exam
  };

  return {
    ...state,
    exams
  };
};

const handleEditExam = (state, action) => {
  const { data: exam } = action.payload;
  const exams = {
    ...state.exams,
    [exam.id]: exam
  };

  return {
    ...state,
    exams
  };
};

const handleRemoveExam = (state, action) => {
  const { payload: examId } = action;
  const { [examId]: del, ...exams } = state.exams;
  return {
    ...state,
    exams
  };
};

const handleSelectExam = (state, action) => {
  const { payload: examId } = action;
  const exam = { ...state.exams[examId] };

  return {
    ...state,
    exam
  };
};

const handleClearExam = state => ({
  ...state,
  exam: {}
});

export default handleActions(
  {
    [getExams]     : handleGetExams,
    [getExamTypes] : handleGetExamTypes,
    [createExam]   : handleCreateExam,
    [updateExam]   : handleEditExam,
    [deleteExam]   : handleRemoveExam,
    [selectExam]   : handleSelectExam,
    [clearExam]    : handleClearExam
  },
  initialState
);
