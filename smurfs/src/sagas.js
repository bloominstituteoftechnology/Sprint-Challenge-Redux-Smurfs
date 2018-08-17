import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchSmurfsRequest,
  fetchSmurfsSuccess,
  fetchSmurfsFailure,
} from './actions';

function* fetchSmurfs() {
  try {
    const response = yield call(axios.get, '/smurfs');
    yield put(fetchSmurfsSuccess(response.data));
  } catch (err) {
    yield put(fetchSmurfsFailure(err));
  }
}

function* rootSaga() {
  yield takeLatest(fetchSmurfsRequest.toString(), fetchSmurfs);
}

export default rootSaga;
