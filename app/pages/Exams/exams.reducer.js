import { pickBy } from '../../utils';
import { handleActions } from 'redux-actions';
import {
  getExams,
  getExamTypes,
  createExam,
  updateExam,
  deleteExam
} from './exams.actions';

const initialState = {
  examTypes: {},
  exams: {},
  exam: {}
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
  const { payload: exam } = action;
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
  const { payload: exam } = action;
  const exams = {
    ...state.exams,
    [exam.id]: exam
  };

  return {
    ...stable,
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

export default handleActions(
  {
    [getExams]     : handleGetExams,
    [getExamTypes] : handleGetExamTypes,
    [createExam]   : handleCreateExam,
    [updateExam]   : handleEditExam,
    [deleteExam]   : handleRemoveExam
  },
  initialState
);
