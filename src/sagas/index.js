import { all } from 'redux-saga/effects';

import UsersSagas from './usersSaga';


export default function* rootSaga() {
  yield all([
    ...UsersSagas,
  ]);
}
