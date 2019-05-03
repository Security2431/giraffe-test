import * as types from '../constants/auth';

const user = localStorage.getItem('activeUser');

const initialState = {
  isAuthenticated: !!user,
  user: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.SIGNUP_SUCCESS:
    case types.LOGIN_SUCCESS:
    case types.RECIEVE_AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case types.LOGIN_FAILURE:
    case types.RECIEVE_AUTH_FAILURE:
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    default:
      return state;
  }
}
