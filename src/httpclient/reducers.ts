import {combineReducers} from 'redux';
import {
  API_REQUEST,
  API_SUCCESS,
  API_FAILURE,
  API_LIST_END,
  CLEAR_REQUEST,
} from './constants';

const initialState = {
  loading: false,
  moreLoading: false,
  error: null,
  moreError: null,
  data: [],
  isListEnd: false,
};

const PhotoReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case API_REQUEST:
      if (action.payload.page === 1) {
        return {...state, loading: true};
      } else {
        return {...state, moreLoading: true};
      }

    case API_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.data.hits],
        error: '',
        loading: false,
        moreLoading: false,
      };

    case API_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
        moreLoading: false,
      };

    case API_LIST_END:
      return {
        ...state,
        isListEnd: true,
        loading: false,
        moreLoading: false,
      };

    case CLEAR_REQUEST:
      return {
        ...state,
        data: [],
      };

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  photos: PhotoReducers,
});
