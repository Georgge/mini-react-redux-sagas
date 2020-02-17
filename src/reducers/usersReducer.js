import { TYPES } from '../actions/usersAction';

const initialState = {
  items: [],
}


export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.GET_USERS_SUCCESS:
      return {
        items: action.payload,
      };

    case TYPES.CREATE_USER_SUCCESS:
      return {
        items: [action.payload, ...state.items]
      };

    default:
      return state;
  }
}
