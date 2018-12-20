import {
  GET_EXAMS,
  CREATE_EXAM,
  UPDATE_EXAM,
  DELETE_EXAM
} from './exams.actions';

const initialState = {
  showModal: false,
  exams: {},
  currentExam: {}
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

export default examsReducer;
