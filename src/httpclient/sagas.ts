import {getPhotosRequest} from './api';
import {put, takeLatest, all} from '@redux-saga/core/effects';
import {
  API_REQUEST,
  API_SUCCESS,
  API_FAILURE,
  API_LIST_END,
  CLEAR_REQUEST,
} from './constants';

function* getPhotos({payload}) {
  try {
    const res = yield getPhotosRequest(payload);
    if (res.data.hits.length > 0) {
      yield put({
        type: API_SUCCESS,
        data: res.data,
      });
    } else {
      yield put({type: API_LIST_END});
    }
  } catch (err) {
    yield put({
      type: API_FAILURE,
      error: err.message,
    });
  }
}

function* clearPhotos({payload}) {
  try {
    const res = yield getPhotosRequest(payload);
    yield put({
      type: CLEAR_REQUEST,
      data: [],
    });
  } catch (err) {
    yield put({
      type: API_FAILURE,
      error: err.message,
    });
  }
}

function* photosSaga() {
  yield takeLatest(API_REQUEST, getPhotos);
}

function* clearSaga() {
  yield takeLatest(CLEAR_REQUEST, clearPhotos);
}

export default function* rootSaga() {
  yield all([photosSaga(), clearSaga()]);
}
