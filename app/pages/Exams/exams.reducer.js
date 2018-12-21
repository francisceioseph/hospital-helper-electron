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
  const { data: exams } = action.payload;
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
    [exam.exam_id]: exam
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
    [exam.exam_id]: exam
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

const examsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXAMS: {
      return {
        ...state
      };
    }
    case CREATE_EXAM: {
      const exam = action.payload;

      return {
        ...state,
        exams: {
          ...state.exams,
          [exam.id]: exam
        }
      };
    }
    case UPDATE_EXAM: {
      const exam = action.payload;
      return {
        ...state,
        exams: {
          ...state.exams,
          [exam.id]: exam
        }
      };
    }
    case DELETE_EXAM: {
      const id = action.payload;
      const { [id.toString()]: del, ...exams } = state.exams;

      return {
        ...state,
        exams
      };
    }
    default: {
      return state;
    }
  }
};

export default handleActions(
  {
    [getExams]: handleGetExams,
    [getExamTypes]: handleGetExamTypes,
    [createExam]: handleCreateExam,
    [updateExam]: handleEditExam,
    [deleteExam]: handleRemoveExam
  },
  initialState
);
