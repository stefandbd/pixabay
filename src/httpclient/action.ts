import {API_REQUEST, CLEAR_REQUEST} from './constants';

export const topHeadlineRequest = params => ({
  type: API_REQUEST,
  payload: {
    page: params.page,
    queryString: params.queryString,
  },
});

export const clearRequest = () => ({
  type: CLEAR_REQUEST,
});
