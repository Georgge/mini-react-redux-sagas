const PREFIX = 'USERS/'

// CONSTANTS
export const TYPES = {
  GET_USERS_REQUEST: `${PREFIX}GET_USERS_REQUEST`,
  GET_USERS_SUCCESS: `${PREFIX}GET_USERS_SUCCESS`,
};


// ACTIONS CREATORS
export const getUsersRequestAction = () => ({
  type: TYPES.GET_USERS_REQUEST,
});

export const getUsersSuccessAction = payload => ({
  type: TYPES.GET_USERS_SUCCESS,
  payload,
})
