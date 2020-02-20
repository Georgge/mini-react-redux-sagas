import { takeEvery, takeLatest, take, call, fork, put } from 'redux-saga/effects';

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


// otherwise


function* deleteUser({ payload: userId }) {
  yield call(userService.deleteUser, userId);
  yield put(actions.deleteUserSuccessAction({ id: userId }));
  // const result = yield call(userService.deleteUser, payload);
  // yield put(actions.deleteUserSuccessAction(result));
}

function* watchDeleteUserRequest() {
  yield takeLatest(actions.TYPES.DELETE_USER_REQUEST, deleteUser);
  // yield call(deleteUser, action.payload);
}

const usersSagas = [
  fork(watchGetUsersRequest),
  fork(watchCreateUserRequest),
  fork(watchDeleteUserRequest),
];

export default usersSagas;
