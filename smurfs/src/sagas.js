import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchSmurfsRequest,
  fetchSmurfsSuccess,
  fetchSmurfsFailure,
  addSmurfSuccess,
  addSmurfFailure,
  addSmurfRequest,
  deleteSmurfRequest,
  deleteSmurfSuccess,
  deleteSmurfFailure,
} from './actions';

function* fetchSmurfs() {
  try {
    const response = yield call(axios.get, '/smurfs');
    yield put(fetchSmurfsSuccess(response.data));
  } catch (err) {
    yield put(fetchSmurfsFailure(err));
  }
}

function* addSmurf(action) {
  try {
    const response = yield call(axios.post, '/smurfs', action.payload);
    yield put(addSmurfSuccess(response.data));
  } catch (err) {
    yield put(addSmurfFailure(err));
  }
}

function* deleteSmurf(action) {
  try {
    const response = yield call(axios.delete, '/smurfs/' + action.payload);
    yield put(deleteSmurfSuccess(response.data));
  } catch (err) {
    yield put(deleteSmurfFailure(err));
  }
}

function* rootSaga() {
  yield takeLatest(fetchSmurfsRequest.toString(), fetchSmurfs);
  yield takeEvery(addSmurfRequest.toString(), addSmurf);
  yield takeEvery(deleteSmurfRequest.toString(), deleteSmurf);
}

export default rootSaga;
