import {
  PAGE_START_LOADING,
  PAGE_STOP_LOADING,
  SET_REQUEST_DURATION,
  SET_REQUEST_ERROR,
  SET_REQUEST_SUCCESS
} from '../actions';

const defaultState = {
  loading: false
};

export default function pageReducer(state = defaultState, action) {
  if (!action) return state;

  switch (action.type) {
  case PAGE_START_LOADING: {
    return {
      ...state,
      loading: true
    };
  }

  case PAGE_STOP_LOADING: {
    return {
      ...state,
      loading: false
    };
  }

  case SET_REQUEST_DURATION: {
    return {
      ...state,
      requestDuration: action.payload
    };
  }

  case SET_REQUEST_ERROR: {
    return {
      ...state,
      error: action.payload
    };
  }

  case SET_REQUEST_SUCCESS: {
    return {
      ...state,
      error: null
    };
  }

  default:
    return state;
  }
}
