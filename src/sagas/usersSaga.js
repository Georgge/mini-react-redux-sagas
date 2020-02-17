import { takeEvery, call, fork } from 'redux-saga/effects';

import * as actions from '../actions/usersAction';
import * as userService from '../services/usersServices';


function* getUsers() {
  const result = yield call(userService.getUsers);
}

function* watchGetUsersRequest() {
  yield takeEvery(actions.TYPES.GET_USERS_REQUEST, getUsers)
}

const usersSagas = [
  fork(watchGetUsersRequest),
];

export default usersSagas;
