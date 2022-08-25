import { put, call } from 'redux-saga/effects';
import httpStatus from 'http-status';

import * as homeAction from '../actions';

export function* testFunction(payload) {
  console.log('SAGAAA', payload);
  try {
    console.log('SAGAAA', payload);
    const { info } = payload;
    const { data, status } = yield call('searchDoctor', info);

    if (status !== httpStatus.OK) {
      throw new Error();
    }
    yield homeAction.testActionSuccess();
  } catch (error) {
    console.log('SAGAAA');
    yield put(homeAction.testActionFailed());
  }
}
