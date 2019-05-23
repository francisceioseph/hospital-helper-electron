export const PAGE_START_LOADING = '[PAGE LAYOUT] START PAGE LOADING';
export const PAGE_STOP_LOADING = '[PAGE LAYOUT] STOP PAGE LOADING';

export const SET_REQUEST_DURATION = '[AXIOS] SET REQUEST DURATION';
export const SET_REQUEST_ERROR = '[AXIOS] SET REQUEST ERROR';
export const SET_REQUEST_SUCCESS = '[AXIOS] SET REQUEST SUCCESS';

export function showPageLoader() {
  return {
    type: PAGE_START_LOADING
  };
}

export function hidePageLoader() {
  return {
    type: PAGE_STOP_LOADING
  };
}

export function setRequestDuration(duration) {
  return {
    type    : SET_REQUEST_DURATION,
    payload : duration
  };
}

export function setRequestError(error) {
  return {
    type    : SET_REQUEST_ERROR,
    payload : error
  };
}

export function setRequestSuccess() {
  return {
    type: SET_REQUEST_SUCCESS
  };
}
