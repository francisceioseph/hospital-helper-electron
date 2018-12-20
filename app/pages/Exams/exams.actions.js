export const GET_EXAMS = 'FETCH_EXAMS';
export const CREATE_EXAM = 'CREATE_EXAM';
export const UPDATE_EXAM = 'UPDATE_EXAM';
export const DELETE_EXAM = 'DELETE_EXAM';

export const getExams = () => ({ type: GET_EXAMS });
export const createExam = exam => ({
  type: CREATE_EXAM,
  payload: exam
});
export const updateExam = exam => ({
  type: UPDATE_EXAM,
  payload: exam
});
export const deleteExam = examId => ({
  type: DELETE_EXAM,
  payload: examId
});
