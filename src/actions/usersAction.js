const PREFIX = 'USERS/'

// CONSTANTS
export const TYPES = {
  GET_USERS_REQUEST: `${PREFIX}GET_USERS_REQUEST`,
  GET_USERS_SUCCESS: `${PREFIX}GET_USERS_SUCCESS`,
  CREATE_USER_REQUEST: `${PREFIX}CREATE_USER_REQUEST`,
  CREATE_USER_SUCCESS: `${PREFIX}CREATE_USER_SUCCESS`,
  DELETE_USER_REQUEST: `${PREFIX}DELETE_USER_REQUEST`,
  DELETE_USER_SUCCESS: `${PREFIX}DELETE_USER_SUCCESS`,
};


// ACTIONS CREATORS
export const getUsersRequestAction = () => ({
  type: TYPES.GET_USERS_REQUEST,
});

export const getUsersSuccessAction = payload => ({
  type: TYPES.GET_USERS_SUCCESS,
  payload,
})


export const createUserRequestAction = payload => ({
  type: TYPES.CREATE_USER_REQUEST,
  payload,
});

export const createUserSuccessAction = payload => ({
  type: TYPES.CREATE_USER_SUCCESS,
  payload,
});


export const deleteUserRequestAction = userId => ({
  type: TYPES.DELETE_USER_REQUEST,
  payload: userId,
});

export const deleteUserSuccessAction = payload => ({
  type: TYPES.DELETE_USER_SUCCESS,
  payload,
});
