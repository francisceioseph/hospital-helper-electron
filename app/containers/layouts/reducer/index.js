import { PAGE_START_LOADING, PAGE_STOP_LOADING } from '../actions';

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

    default:
      return state;
  }
}
