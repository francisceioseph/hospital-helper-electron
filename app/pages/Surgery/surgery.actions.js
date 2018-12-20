export const GET_SURGERIES = 'FETCH_SURGERIES';
export const CREATE_SURGERY = 'CREATE_SURGERY';
export const UPDATE_SURGERY = 'UPDATE_SURGERY';
export const DELETE_SURGERY = 'DELETE_SURGERY';

export const getSurgeries = () => ({ type: GET_SURGERIES });
export const createSurgery = surgery => ({
  type: CREATE_SURGERY,
  payload: surgery
});
export const updateSurgery = surgery => ({
  type: UPDATE_SURGERY,
  payload: surgery
});
export const deleteSurgery = surgeryId => ({
  type: DELETE_SURGERY,
  payload: surgeryId
});
