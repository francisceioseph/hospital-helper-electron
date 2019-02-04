export const PAGE_START_LOADING = '[PAGE LAYOUT] START PAGE LOADING';
export const PAGE_STOP_LOADING = '[PAGE LAYOUT] STOP PAGE LOADING';

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
