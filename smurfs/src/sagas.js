import { call } from 'redux-saga/effects';

function* rootSaga() {
  yield call(console.log, 'saga connected');
}

export default rootSaga;
