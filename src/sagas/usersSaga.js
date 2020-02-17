import { takeEvery, takeLatest, call, fork, put } from 'redux-saga/effects';

import * as actions from '../actions/usersAction';
import * as userService from '../services/usersServices';


function* getUsers() {
  const result = yield call(userService.getUsers);
  yield put(actions.getUsersSuccessAction(result.data))
}

function* watchGetUsersRequest() {
  yield takeEvery(actions.TYPES.GET_USERS_REQUEST, getUsers);
}


function* createUser(action) {
  const result = yield call(userService.createUser, action.payload);
  yield put(actions.createUserSuccessAction(result));
}

function* watchCreateUserRequest() {
  yield takeLatest(actions.TYPES.CREATE_USER_REQUEST, createUser);
}

const usersSagas = [
  fork(watchGetUsersRequest),
  fork(watchCreateUserRequest),
];

export default usersSagas;
