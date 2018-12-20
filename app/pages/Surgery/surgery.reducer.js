import {
  GET_SURGERIES,
  CREATE_SURGERY,
  UPDATE_SURGERY,
  DELETE_SURGERY
} from './surgery.actions';

const initialState = {
  showModal: false,
  surgeries: {},
  currentSurgery: {}
};

const surgeriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SURGERIES: {
      return {
        ...state
      };
    }
    case CREATE_SURGERY: {
      const surgery = action.payload;

      return {
        ...state,
        surgeries: {
          ...state.surgeries,
          [surgery.id]: surgery
        }
      };
    }
    case UPDATE_SURGERY: {
      const surgery = action.payload;
      return {
        ...state,
        surgeries: {
          ...state.surgeries,
          [surgery.id]: surgery
        }
      };
    }
    case DELETE_SURGERY: {
      const id = action.payload;
      const { [id.toString()]: del, ...surgeries } = state.surgeries;

      return {
        ...state,
        surgeries
      };
    }
    default: {
      return state;
    }
  }
};

export default surgeriesReducer;
