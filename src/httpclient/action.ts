import {API_REQUEST, CLEAR_REQUEST} from './constants';

export const photosRequest = params => ({
  type: API_REQUEST,
  payload: {
    page: params.page,
    queryString: params.queryString,
  },
});

export const clearRequest = params => ({
  type: CLEAR_REQUEST,
  payload: {
    page: params.page,
    queryString: params.queryString,
  },
});
